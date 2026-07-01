import React, { useState } from 'react';

const checklist = [
  { title: 'Water System', detail: 'Fresh tank, grey tank, hot water system — operation and capacity explained.' },
  { title: 'Electrical & Off-Grid', detail: 'Solar, inverter, battery monitor, 240V hookup and 12V circuits demonstrated.' },
  { title: 'Gas System', detail: 'Gas safety check, regulator, and appliance operation briefing.' },
  { title: 'Hitch & Coupling', detail: 'Coupling, breakaway cable, safety chains and correct towing setup.' },
  { title: 'Awning', detail: 'Electric or manual awning operation and tie-down procedure.' },
  { title: 'Documentation', detail: 'All manuals, warranty cards, registration papers and compliance certificates.' },
  { title: 'Keys & Locks', detail: 'Spare key, wheel lock key and any security system codes.' },
  { title: 'Tyre Pressure Check', detail: 'All tyres including spare checked and set to correct pressures.' },
  { title: 'Plumber Certification', detail: 'Signed plumbing compliance documentation — all water and gas systems certified.' },
  { title: 'Dust Reduction System', detail: 'How the system works and maintenance tips for unsealed road travel.' },
];

export default function HandoverSection() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      background: '#000000',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '80px 48px',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '48px' }}>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '11px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#c3beb6',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1px', background: '#c3beb6', flexShrink: 0 }} />
            Day of handover
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(40px, 5vw, 64px)',
            lineHeight: '0.95',
            letterSpacing: '0.02em',
            color: '#f4f4f4',
            marginBottom: '20px',
          }}>
            What's Included at Handover
          </h2>
          <p style={{ fontSize: '16px', color: '#b8b4ae', lineHeight: '1.7', maxWidth: '640px' }}>
            Every Deluxe handover is a 2–3 hour session — not a rushed key swap. We walk you through every system, every switch, every feature. Here's what we cover.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '16px',
          marginBottom: '40px',
        }}>
          {checklist.map((item, i) => (
            <div key={i} style={{
              background: '#2d373d',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '4px',
              padding: '20px 22px',
              transition: 'border-color 0.2s',
            }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#f4f4f4', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '13px', color: '#b8b4ae', lineHeight: '1.55' }}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: '#2d373d',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '4px',
          overflow: 'hidden',
        }}>
          <button
            onClick={() => setOpen(!open)}
            style={{
              width: '100%',
              padding: '20px 24px',
              background: 'transparent',
              border: 'none',
              color: '#f4f4f4',
              fontSize: '15px',
              fontWeight: 500,
              fontFamily: "'DM Sans', sans-serif",
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'left',
            }}
          >
            Interstate buyers — what's different at handover?
            <span style={{ color: '#c3beb6', fontSize: '20px', fontWeight: 300, transition: 'transform 0.3s', transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
          </button>
          {open && (
            <div style={{ padding: '0 24px 20px', fontSize: '14px', color: '#b8b4ae', lineHeight: '1.75' }}>
              Interstate buyers receive a comprehensive video handover package — a full walkthrough of every system recorded for you to watch before you hit the road. If you're flying to Melbourne for collection, we'll also do the full in-person handover session. Australia-wide delivery includes a video package sent before your van arrives. You're never left to read the manual alone.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
