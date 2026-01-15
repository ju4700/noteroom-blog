/*
function() {
  const container = document.getElementById('circles');

  // --- Rings ---
  const RINGS = 7;
  const MAX = 96;
  const MIN = 36;
  for (let i = 0; i < RINGS; i++) {
    const ring = document.createElement('div');
    ring.className = 'circle';
    const t = i / (RINGS - 1);
    const base = MAX - t * (MAX - MIN);
    ring.style.setProperty('--size', `${base}vmin`);
    ring.style.setProperty('--ring-w', `${Math.random() < 0.4 ? 2 : 1}px`);
    ring.style.setProperty('--ring-a', (0.04 + Math.random() * 0.02).toFixed(3));
    container.appendChild(ring);
  }

  // --- Blobs: one per orbit, even spacing, same speed ---
  const BLOBS = 7;              // match ring count
  const PERIOD = 48;            // seconds, same for all
  const colors = [
    'rgba(195,209,238,.35)',
    'rgba(178,203,227,.28)',
    'rgba(202,211,199,.28)',
    'rgba(239,211,197,.30)',
  ];
  const pick = arr => arr[(Math.random() * arr.length) | 0];

  for (let i = 0; i < BLOBS; i++) {
    const b = document.createElement('div');
    b.className = 'blob';

    const size = 48 + i * 4;  // gradual size variation
    b.style.setProperty('--size', `${size}px`);

    // orbit radius between MIN and MAX
    const radiusVmin = MIN + i * ((MAX - MIN) / (BLOBS - 1)) * 0.9;
    b.style.setProperty('--radius', `${radiusVmin}vmin`);

    // evenly spaced start angles
    const angle = (i * (360 / BLOBS));
    b.style.setProperty('--angle', `${angle}deg`);

    b.style.setProperty('--period', `${PERIOD}s`);
    b.style.setProperty('--dir', 'normal');
    b.style.setProperty('--color', pick(colors));
    b.style.setProperty('--alpha', (0.12 + Math.random() * 0.08).toFixed(2));

    container.appendChild(b);
  }
})();
*/

