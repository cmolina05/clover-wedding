/**
 * Wedding RSVP Backend — Google Apps Script
 *
 * Setup:
 *   1. Create a Google Sheet (e.g. "Wedding RSVPs")
 *   2. Extensions > Apps Script, paste this file
 *   3. Change ADMIN_KEY below to your own secret passphrase
 *   4. Change COUPLE_EMAIL below to receive new-RSVP notifications
 *   5. Deploy > New deployment > type: Web app
 *      - Execute as: Me
 *      - Who has access: Anyone
 *   6. Copy the Web app URL into GOOGLE_SCRIPT_URL in
 *      src/components/RSVPForm.tsx and AdminDashboardModal.tsx
 */

const ADMIN_KEY = 'CHANGE_ME';
const SHEET_NAME = 'RSVPs';
const HEADERS = ['Timestamp', 'Full Name', 'Email', 'Attending', 'Message'];

const COUPLE_EMAILS = ['', '']; // notification recipients, e.g. ['you@gmail.com','partner@gmail.com'] — leave empty to disable
const GROOM = 'Carlo';
const BRIDE = 'Roseth';
const WEDDING_DATE = 'December 15, 2026';
const CEREMONY_VENUE = 'Lokal ng Iglesia Ni Cristo [Bulacan East] - San Isidro';
const RECEPTION_VENUE = 'Villa Leonora Resort & Events Venue';

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
        message: r[4] ? String(r[4]) : ''
      };
    });

  const confirmed = rsvps.filter(function (r) { return r.attending === 'Yes'; }).length;
  const declined = rsvps.length - confirmed;

  return json({
    totalInvited: rsvps.length,
    confirmed: confirmed,
    declined: declined,
    rsvps: rsvps
  });
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var d = JSON.parse(e.postData.contents);
    var attending = String(d.attendance || 'yes').toLowerCase() === 'no' ? 'no' : 'yes';
    var fullName = String(d.fullName || '');
    var email = String(d.email || '').trim();
    var message = d.message ? String(d.message) : '';

    getSheet().appendRow([new Date(), fullName, email, attending, message]);

    if (attending === 'yes') {
      sendGuestConfirmation(fullName, email);
    } else {
      sendDeclineThankYou(fullName, email);
    }
    notifyCouple(fullName, email, attending, message);

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

function sendGuestConfirmation(name, email) {
  if (!isValidEmail(email)) return;
  try {
    var html =
      '<div style="font-family:Georgia,serif;color:#2B3338;max-width:520px;margin:0 auto;padding:24px;border:1px solid #D9E8EE;">' +
      '<p style="letter-spacing:3px;font-size:11px;color:#5F7D8C;margin:0 0 16px;">RSVP RECEIVED</p>' +
      '<h1 style="font-weight:400;font-size:22px;margin:0 0 12px;color:#3D5A6B;">Thank you, ' + esc(name) + '!</h1>' +
      '<p style="font-size:14px;line-height:1.6;font-family:Arial,sans-serif;color:#4A555B;">We are so excited to celebrate with you. Here are your details:</p>' +
      '<table style="font-size:14px;font-family:Arial,sans-serif;color:#4A555B;margin:16px 0;">' +
      '<tr><td style="padding:4px 14px 4px 0;color:#5F7D8C;"><b>Date</b></td><td>' + WEDDING_DATE + '</td></tr>' +
      '<tr><td style="padding:4px 14px 4px 0;color:#5F7D8C;"><b>Ceremony</b></td><td>' + CEREMONY_VENUE + '</td></tr>' +
      '<tr><td style="padding:4px 14px 4px 0;color:#5F7D8C;"><b>Reception</b></td><td>' + RECEPTION_VENUE + '</td></tr>' +
      '</table>' +
      '<p style="font-size:14px;line-height:1.6;font-family:Arial,sans-serif;color:#4A555B;">Please keep an eye out for further announcements. See you on the big day!</p>' +
      '<p style="font-family:Georgia,serif;font-style:italic;font-size:15px;color:#3D5A6B;margin-top:20px;">With love,<br>' + GROOM + ' &amp; ' + BRIDE + '</p>' +
      '</div>';
    var plain =
      'Thank you, ' + name + '! Your RSVP has been received.\n\n' +
      'Date: ' + WEDDING_DATE + '\n' +
      'Ceremony: ' + CEREMONY_VENUE + '\n' +
      'Reception: ' + RECEPTION_VENUE + '\n\n' +
      'With love,\n' + GROOM + ' & ' + BRIDE;
    MailApp.sendEmail(email, 'RSVP Received \u2014 ' + GROOM + ' & ' + BRIDE, plain, {
      htmlBody: html,
      name: GROOM + ' & ' + BRIDE
    });
  } catch (err) {
    console.log('Guest email failed: ' + err);
  }
}

function sendDeclineThankYou(name, email) {
  if (!isValidEmail(email)) return;
  try {
    var html =
      '<div style="font-family:Georgia,serif;color:#2B3338;max-width:520px;margin:0 auto;padding:24px;border:1px solid #D9E8EE;">' +
      '<p style="letter-spacing:3px;font-size:11px;color:#5F7D8C;margin:0 0 16px;">RSVP RECEIVED</p>' +
      '<h1 style="font-weight:400;font-size:22px;margin:0 0 12px;color:#3D5A6B;">Thank you, ' + esc(name) + '.</h1>' +
      '<p style="font-size:14px;line-height:1.6;font-family:Arial,sans-serif;color:#4A555B;">We received your response and we\'ll miss having you with us on our special day. Thank you for your love and support &mdash; it means the world to us.</p>' +
      '<p style="font-family:Georgia,serif;font-style:italic;font-size:15px;color:#3D5A6B;margin-top:20px;">With love,<br>' + GROOM + ' &amp; ' + BRIDE + '</p>' +
      '</div>';
    MailApp.sendEmail(email, 'RSVP Received \u2014 ' + GROOM + ' & ' + BRIDE, 'Thank you, ' + name + '. We received your RSVP.', {
      htmlBody: html,
      name: GROOM + ' & ' + BRIDE
    });
  } catch (err) {
    console.log('Guest email failed: ' + err);
  }
}

function notifyCouple(name, email, attending, message) {
  var recipients = (typeof COUPLE_EMAILS === 'string' ? [COUPLE_EMAILS] : COUPLE_EMAILS)
    .map(function (e) { return String(e).trim(); })
    .filter(function (e) { return isValidEmail(e); });
  if (!recipients.length) return;
  try {
    var status = attending === 'yes' ? 'ATTENDING' : 'DECLINED';
    var html =
      '<div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;padding:20px;border-left:4px solid #5F7D8C;">' +
      '<h2 style="color:#3D5A6B;margin:0 0 10px;font-weight:400;">New RSVP: ' + esc(name) + '</h2>' +
      '<p style="font-size:14px;color:#4A555B;margin:4px 0;"><b>Status:</b> ' + status + '</p>' +
      '<p style="font-size:14px;color:#4A555B;margin:4px 0;"><b>Email:</b> ' + esc(email) + '</p>' +
      (message ? '<p style="font-size:14px;color:#4A555B;margin:12px 0 4px;"><b>Message:</b></p><p style="font-size:14px;color:#4A555B;font-style:italic;">' + esc(message) + '</p>' : '') +
      '</div>';
    MailApp.sendEmail(
      recipients.join(','),
      '[Wedding RSVP] ' + name + ' \u2014 ' + status,
      'New RSVP from ' + name + ' (' + email + '): ' + status + '. Message: ' + message,
      { htmlBody: html }
    );
  } catch (err) {
    console.log('Couple notification failed: ' + err);
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Diagnostic: in the Apps Script editor, select "sendTestEmail" in the
 * function dropdown, click Run, then check Execution log and your inbox.
 */
function sendTestEmail() {
  var targets = (typeof COUPLE_EMAILS === 'string' ? [COUPLE_EMAILS] : COUPLE_EMAILS || [])
    .map(function (e) { return String(e).trim(); })
    .filter(function (e) { return isValidEmail(e); });
  console.log('Notification recipients configured: ' + JSON.stringify(targets));
  try {
    MailApp.sendEmail(
      Session.getActiveUser().getEmail(),
      'Wedding RSVP \u2014 test email',
      'If you received this, outgoing mail works. Quota remaining today: ' + MailApp.getRemainingDailyQuota()
    );
    console.log('Test email sent to script owner. Remaining daily quota: ' + MailApp.getRemainingDailyQuota());
  } catch (err) {
    console.log('TEST FAILED: ' + err);
  }
}
