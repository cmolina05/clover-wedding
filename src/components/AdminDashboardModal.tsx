import { useState } from 'react';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec";

interface AdminData {
  totalInvited: number;
  confirmed: number;
  declined: number;
  totalAttending: number;
  rsvps: Array<{
    fullName: string;
    email: string;
    attending: string;
    guestCount: number;
    mealPreference: string;
    message: string;
  }>;
}

export default function AdminDashboardModal({ onClose }: { onClose: () => void }) {
  const [key, setKey] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async (apiKey: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${GOOGLE_SCRIPT_URL}?key=${encodeURIComponent(apiKey)}`);
      const json = await res.json();
      if (json.status === 'unauthorized') {
        alert('Invalid Admin Key');
      } else {
        setData(json);
        setAuthenticated(true);
      }
    } catch {
      alert('Error fetching admin data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-wedding-charcoal/60 backdrop-blur-sm p-4">
      <div className="bg-wedding-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 border border-dusty-blue-light">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-serif text-2xl text-dusty-blue-dark">RSVP Admin Dashboard</h2>
          <button onClick={onClose} className="text-wedding-charcoal hover:text-dusty-blue-dark text-xl font-bold">&times;</button>
        </div>

        {!authenticated ? (
          <div className="max-w-xs mx-auto py-8 text-center space-y-4">
            <p className="text-xs tracking-widest uppercase text-wedding-charcoal/70">Enter Admin Passphrase</p>
            <input
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full px-4 py-2 border border-dusty-blue-light rounded-sm text-sm"
            />
            <button
              onClick={() => fetchDashboardData(key)}
              disabled={loading}
              className="w-full py-2 bg-dusty-blue-dark text-wedding-white text-xs tracking-widest uppercase rounded-sm"
            >
              {loading ? 'Authenticating...' : 'Access Dashboard'}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-wedding-ivory rounded-sm text-center border border-dusty-blue-light">
                <span className="block text-[10px] tracking-widest uppercase text-wedding-charcoal/60">Total Responses</span>
                <span className="font-serif text-2xl text-dusty-blue-dark">{data?.totalInvited}</span>
              </div>
              <div className="p-4 bg-wedding-ivory rounded-sm text-center border border-dusty-blue-light">
                <span className="block text-[10px] tracking-widest uppercase text-wedding-charcoal/60">Confirmed</span>
                <span className="font-serif text-2xl text-green-700">{data?.confirmed}</span>
              </div>
              <div className="p-4 bg-wedding-ivory rounded-sm text-center border border-dusty-blue-light">
                <span className="block text-[10px] tracking-widest uppercase text-wedding-charcoal/60">Declined</span>
                <span className="font-serif text-2xl text-red-600">{data?.declined}</span>
              </div>
              <div className="p-4 bg-wedding-ivory rounded-sm text-center border border-dusty-blue-light">
                <span className="block text-[10px] tracking-widest uppercase text-wedding-charcoal/60">Guests Attending</span>
                <span className="font-serif text-2xl text-wedding-gold">{data?.totalAttending}</span>
              </div>
            </div>

            {/* Responses Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-dusty-blue-light text-dusty-blue-dark uppercase tracking-wider">
                    <th className="py-2 px-3">Name</th>
                    <th className="py-2 px-3">Status</th>
                    <th className="py-2 px-3">Guests</th>
                    <th className="py-2 px-3">Meal Pref</th>
                    <th className="py-2 px-3">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dusty-blue-light/40">
                  {data?.rsvps.map((rsvp, idx) => (
                    <tr key={idx} className="hover:bg-wedding-ivory/50">
                      <td className="py-2.5 px-3 font-medium">{rsvp.fullName}</td>
                      <td className="py-2.5 px-3">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] ${rsvp.attending === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {rsvp.attending}
                        </span>
                      </td>
                      <td className="py-2.5 px-3">{rsvp.guestCount}</td>
                      <td className="py-2.5 px-3">{rsvp.mealPreference}</td>
                      <td className="py-2.5 px-3 truncate max-w-xs">{rsvp.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}