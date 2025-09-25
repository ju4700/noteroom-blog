(function() {
  const container = document.getElementById('circles');

  // --- Rings: more sizes + subtle variation in stroke/alpha ---
  const RINGS = 7;                         // number of concentric circles
  const MAX = 96;                          // vmin max for outer ring
  const MIN = 36;                          // vmin min for inner ring
  for (let i = 0; i < RINGS; i++) {
    const ring = document.createElement('div');
    ring.className = 'circle';
    // Evenly spaced between MAX and MIN with a little jitter
    const t = i / (RINGS - 1);
    const base = MAX - t * (MAX - MIN);
    const jitter = (Math.random() - 0.5) * 4;      // ±2 vmin jitter
    ring.style.setProperty('--size', `${base + jitter}vmin`);
    ring.style.setProperty('--ring-w', `${Math.random() < 0.4 ? 2 : 1}px`);
    ring.style.setProperty('--ring-a', (0.035 + Math.random() * 0.03).toFixed(3));
    container.appendChild(ring);
  }

  // --- Blobs: more color/size/radius/angle variety ---
  const BLOBS = 10;  // Increase blobs to 10
  const colors = [
    'rgba(195, 209, 238, .35)',   // Soft lavender
    'rgba(178, 203, 227, .28)',   // Light blue
    'rgba(202, 211, 199, .28)',   // Muted green
    'rgba(239, 211, 197, .30)',   // Soft peach
  ];
  
  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = arr => arr[(Math.random() * arr.length) | 0];

  // Gap between blobs will be calculated based on size and radius
  const GAP_FACTOR = 0.2;  // Adjust this value for more/less gap

  for (let i = 0; i < BLOBS; i++) {
    const b = document.createElement('div');
    b.className = 'blob';

    // Medium-ish sizes only (no extremes)
    const size = rand(46, 96).toFixed(0);  // size in pixels
    b.style.setProperty('--size', `${size}px`);

    // Spread radii from inner to near-outer, keep inside biggest ring
    // Adjust radius to ensure there is enough space between blobs
    const radiusVmin = rand(18, 44) * (1 + GAP_FACTOR * (size / 100)); // Increase radius to account for gap
    b.style.setProperty('--radius', `calc(${radiusVmin}vmin)`);

    // Random start angle to ensure blobs start at different positions
    const angle = rand(0, 360);
    b.style.setProperty('--angle', `${angle.toFixed(1)}deg`);

    // **Slower Speed** for calmer movement
    const period = rand(36, 72);  // Increased period for slower, calm movement
    b.style.setProperty('--period', `${period.toFixed(2)}s`);
    b.style.animationDelay = `-${rand(0, period).toFixed(2)}s`;

    // Direction + subtle color variation + per-blob alpha
    b.style.setProperty('--dir', Math.random() > 0.5 ? 'normal' : 'reverse');
    b.style.setProperty('--color', pick(colors));  // Using the muted color range
    b.style.setProperty('--alpha', (0.10 + Math.random() * 0.10).toFixed(2));

    container.appendChild(b);
  }
})();