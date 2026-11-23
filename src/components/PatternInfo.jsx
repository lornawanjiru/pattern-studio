function PatternInfo({ bust, waist, napeToWaist, shoulder, neck, ease = 1 }) {
  const ARMHOLE_ADJUST = 2; // inches, from your class formula

  const quarterBust = bust / 4 + ease;
  const bustLineDepth = bust / 4 - ARMHOLE_ADJUST;

  return (
    <div className="summary">
      <h2>Draft summary</h2>

      <h3>Measurements</h3>
      <p>Bust: {bust} in</p>
      <p>Waist: {waist} in</p>
      <p>Nape to waist: {napeToWaist} in</p>
      <p>Shoulder length: {shoulder} in</p>
      <p>Neck: {neck} in</p>

      <h3>Draft numbers</h3>
      <p>Quarter bust + ease: {quarterBust} in</p>
      <p>Bust line depth: {bustLineDepth} in</p>
      <p>Frame: {quarterBust} in × {napeToWaist} in</p>
    </div>
  );
}

export default PatternInfo;