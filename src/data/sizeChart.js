// Zanira Clothing size chart. All values are in inches, given as [min, max] ranges.
// Pattern drafting uses the midpoint of each range (see docs/bodice.md).
export const UNIT = 'in';

export const sizeChart = {
  S:   { uk: '6-8',   bust: [34, 36], waist: [27, 28], hips: [38, 39] },
  M:   { uk: '8-10',  bust: [37, 38], waist: [28, 30], hips: [40, 41] },
  L:   { uk: '12-14', bust: [39, 40], waist: [32, 34], hips: [43, 44] },
  XL:  { uk: '14-16', bust: [42, 43], waist: [35, 36], hips: [45, 46] },
};

// Bodice standards that the size chart doesn't include.
// Estimates graded from the Small reference. Check them in a fitting.
export const bodiceStandards = {
  S:   { shoulderToBustPoint: 10,    bustPointToBustPoint: 7.25, shoulderWidth: 14.5 },
  M:   { shoulderToBustPoint: 10.5,  bustPointToBustPoint: 7.5,  shoulderWidth: 15 },
  L:   { shoulderToBustPoint: 10.75, bustPointToBustPoint: 7.75, shoulderWidth: 15.5 },
  XL:  { shoulderToBustPoint: 11.25, bustPointToBustPoint: 8.25, shoulderWidth: 16 },
};

export const bodiceDefaults = {
  bodiceLength: 18,
  hem: 1,
  bustEasePerQuarter: 0.5,
  neckline: {
    // Scoop neckline. Width is measured from the fold.
    front: { width: 3.5, depth: 7 },
    back: { width: 3.5, depth: 1.5 }, // same width as the front so the shoulder seams line up
  },
};

// Armhole curve: how far the armhole curves IN from a straight line running
// from the shoulder tip down to the underarm.
// Gets ¼" smaller with each size.
export const armholeCurve = { S: 1, M: 0.75, L: 0.5, XL: 0.25 };
