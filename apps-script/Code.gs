/**
 * Wedding RSVP Backend — Google Apps Script
 *
 * Setup:
 *   1. Create a Google Sheet (e.g. "Wedding RSVPs")
 *   2. Extensions > Apps Script, paste this file
 *   3. Change ADMIN_KEY below to your own secret passphrase
 *   4. Deploy > New deployment > type: Web app
 *      - Execute as: Me
 *      - Who has access: Anyone
 *   5. Copy the Web app URL into GOOGLE_SCRIPT_URL in
 *      src/components/RSVPForm.tsx and AdminDashboardModal.tsx
 */

const ADMIN_KEY = 'CHANGE_ME';
const SHEET_NAME = 'RSVPs';
const HEADERS = ['Timestamp', 'Full Name', 'Email', 'Attending', 'Message'];

function doGet(e) {
  const key = ((e && e.parameter && e.parameter.key) || '').trim();
  if (!ADMIN_KEY || ADMIN_KEY === 'CHANGE_ME' || key !== ADMIN_KEY) {
    return json({ status: 'unauthorized' });
  }

  const rows = getSheet().getDataRange().getValues();
  const rsvps = rows.slice(1)
    .filter(function (r) { return r[1]; })
    .map(function (r) {
      return {
        fullName: String(r[1]),
        email: String(r[2]),
        attending: String(r[3]).toLowerCase() === 'yes' ? 'Yes' : 'No',
        guestCount: 1,
        mealPreference: '\u2014',
        message: r[4] ? String(r[4]) : ''
      };
    });

  const confirmed = rsvps.filter(function (r) { return r.attending === 'Yes'; }).length;
  const declined = rsvps.length - confirmed;
  const totalAttending = confirmed;

  return json({
    totalInvited: rsvps.length,
    confirmed: confirmed,
    declined: declined,
    totalAttending: totalAttending,
    rsvps: rsvps
  });
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var d = JSON.parse(e.postData.contents);
    var attending = String(d.attendance || 'yes').toLowerCase() === 'no' ? 'no' : 'yes';
    getSheet().appendRow([
      new Date(),
      String(d.fullName || ''),
      String(d.email || ''),
      attending,
      d.message ? String(d.message) : ''
    ]);
    return json({ status: 'ok' });
  } catch (err) {
    return json({ status: 'error', message: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
