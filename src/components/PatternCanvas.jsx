import Label from './Label';

const ARMHOLE_ADJUST = 2; // inches: armhole depth = bust / 4 - 2

function PatternCanvas({ bust, napeToWaist, shoulderToBust, ease = 1, margin = 2 }) {
  // Calculations (not state!)
  const frameWidth = bust / 4 + ease;
  const frameHeight = napeToWaist;
  const armholeDepth = bust / 4 - ARMHOLE_ADJUST;

  const paperWidth = frameWidth + margin * 2;
  const paperHeight = frameHeight + margin * 2;

  // Key points
  const left = margin;
  const right = margin + frameWidth;
  const top = margin;
  const armholeY = margin + armholeDepth;
  const bustY = margin + shoulderToBust; // TODO: confirm where shoulder to bust is measured from
  const waistY = margin + frameHeight;

  return (
    <svg className="pattern-canvas" width="350" viewBox={`0 0 ${paperWidth} ${paperHeight}`}>
      {/* The paper */}
      <rect x="0" y="0" width={paperWidth} height={paperHeight} fill="white" />

      {/* The frame */}
      <rect
        x={left}
        y={top}
        width={frameWidth}
        height={frameHeight}
        stroke="black"
        strokeWidth="0.08"
        fill="none"
      />

      {/* Armhole line */}
      <line x1={left} y1={armholeY} x2={right} y2={armholeY} stroke="black" strokeWidth="0.05" />
      <Label text="Armhole line" x={left + 0.2} y={armholeY - 0.2} />

      {/* Bust line */}
      <line x1={left} y1={bustY} x2={right} y2={bustY} stroke="black" strokeWidth="0.05" />
      <Label text="Bust line" x={left + 0.2} y={bustY - 0.2} />

      {/* Waist line (the bottom edge of the frame) */}
      <Label text="Waist line" x={left + 0.2} y={waistY - 0.2} />

      {/* Centre back (the left edge of the frame) */}
      <Label text="Centre back" x={left + 0.2} y={top + 1} />
    </svg>
  );
}

export default PatternCanvas;
