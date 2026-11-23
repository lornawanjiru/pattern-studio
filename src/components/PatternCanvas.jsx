function PatternCanvas() {
  // Sample measurements (inches). Section 3 will bring these in from the form.
  const bust = 36;
  const napeToWaist = 16;
  const ease = 1;           // per quarter, use your class's value
  const bustLineDepth = 8.5; // placeholder, use your drafting method
  const margin = 2;

  // Calculations (not state!)
  const frameWidth = bust / 4 + ease;      // 10
  const frameHeight = napeToWaist;         // 16
  const paperWidth = frameWidth + margin * 2;   // 14
  const paperHeight = frameHeight + margin * 2; // 20

  // Key points
  const left = margin;                 // 2
  const right = margin + frameWidth;   // 12
  const top = margin;                  // 2
  const bustY = margin + bustLineDepth;   // 10.5
  const waistY = margin + frameHeight;    // 18

  return (
    <svg width="350" viewBox={`0 0 ${paperWidth} ${paperHeight}`}>
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

      {/* Bust line */}
      <line x1={left} y1={bustY} x2={right} y2={bustY} stroke="black" strokeWidth="0.05" />
      <text x={left + 0.2} y={bustY - 0.2} fontSize="0.4">Bust line</text>

      {/* Waist line label (the bottom edge of the frame) */}
      <text x={left + 0.2} y={waistY - 0.2} fontSize="0.4">Waist line</text>
    </svg>
  );
}

export default PatternCanvas;