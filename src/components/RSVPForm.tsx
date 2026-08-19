import React, { useState } from 'react';
import { weddingConfig } from '../config/wedding';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec";

const inputClass =
  "w-full px-4 py-3 text-sm border border-dusty-blue-light bg-wedding-ivory/40 rounded-none focus:outline-none focus:border-dusty-blue-dark focus:bg-white transition-colors duration-300 font-sans text-wedding-charcoal placeholder:text-wedding-charcoal/30";

const labelClass =
  "block text-[10px] uppercase tracking-[0.2em] text-wedding-charcoal/70 mb-2 font-sans";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    attendance: 'yes',
    guestCount: '1',
    guestNames: '',
    mealPreference: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-28 px-6 bg-wedding-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <p className="text-[10px] tracking-ultra uppercase text-wedding-gold font-sans mb-3">Join Us</p>
          <h2 className="section-title">RSVP</h2>
          <div className="ornament mt-4">
            <div className="ornament-diamond" />
          </div>
          <p className="text-sm text-wedding-charcoal/60 font-sans mt-4">
            Kindly respond by <span className="text-dusty-blue-dark font-medium">{weddingConfig.rsvpDeadline}</span>
          </p>
        </div>

        {submitted ? (
          /* Success state */
          <div className="reveal max-w-lg mx-auto text-center py-16 px-8 bg-wedding-ivory border border-dusty-blue-light rounded-sm shadow-soft">
            <div className="w-14 h-14 rounded-full bg-dusty-blue-light/50 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-dusty-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-3xl text-dusty-blue-dark mb-3">Thank you, {formData.fullName}!</h3>
            <p className="text-sm text-wedding-charcoal/70 font-sans leading-relaxed">
              {formData.attendance === 'yes'
                ? "We're so excited to celebrate with you. See you on the big day!"
                : "We'll miss having you there, but we're grateful for your love and support."}
            </p>
            <p className="text-xs text-dusty-blue-dark/60 font-sans mt-4 italic">
              A confirmation has been sent to {formData.email}.
            </p>
          </div>
        ) : (
          <div className="reveal grid md:grid-cols-2 gap-10 items-start">

            {/* Left: Attendance + details */}
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                />
              </div>

              {/* Attendance toggle */}
              <div>
                <label className={labelClass}>Will you be attending? *</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['yes', 'no'] as const).map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: val })}
                      className={`py-3.5 text-[10px] tracking-[0.15em] uppercase font-sans transition-all duration-300 border ${
                        formData.attendance === val
                          ? 'bg-dusty-blue-dark text-wedding-white border-dusty-blue-dark'
                          : 'border-dusty-blue-light text-wedding-charcoal/70 hover:border-dusty-blue hover:bg-dusty-blue-mist'
                      }`}
                    >
                      {val === 'yes' ? "✓  Joyfully accepts" : "✗  Regretfully declines"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest count — only when attending */}
              {formData.attendance === 'yes' && (
                <>
                  <div>
                    <label className={labelClass}>Number of Guests</label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className={inputClass}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Guest Name(s)</label>
                    <input
                      type="text"
                      placeholder="Names of all attending guests"
                      value={formData.guestNames}
                      onChange={(e) => setFormData({ ...formData, guestNames: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Right: Meal + message + submit */}
            <div className="space-y-6">
              {formData.attendance === 'yes' && (
                <div>
                  <label className={labelClass}>Dietary Preferences</label>
                  <input
                    type="text"
                    placeholder="e.g. Vegetarian, Gluten-free, None"
                    value={formData.mealPreference}
                    onChange={(e) => setFormData({ ...formData, mealPreference: e.target.value })}
                    className={inputClass}
                  />
                </div>
              )}

              <div>
                <label className={labelClass}>Message for the Couple</label>
                <textarea
                  rows={5}
                  placeholder="Share your wishes, a fond memory, or words of love…"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={inputClass}
                  style={{ resize: 'none' }}
                />
              </div>

              {error && (
                <p className="text-xs text-red-500 font-sans text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                onClick={handleSubmit}
                className="btn-shimmer w-full py-4 text-[11px] tracking-[0.2em] uppercase font-sans text-wedding-ivory transition-all duration-500 disabled:opacity-60"
                style={{ background: loading ? '#8FA9B8' : '#5F7D8C' }}
              >
                {loading ? 'Submitting…' : 'Submit RSVP'}
              </button>

              <p className="text-[10px] text-center text-wedding-charcoal/40 font-sans tracking-wide">
                Your response is kept private and used only to confirm attendance.
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}