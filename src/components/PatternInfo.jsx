const ARMHOLE_ADJUST = 2; // inches: armhole depth = bust / 4 - 2

function PatternInfo({ bust, waist, napeToWaist, acrossShoulders, neck, shoulderToBust, ease = 1 }) {
  const quarterBust = bust / 4 + ease;
  const armholeDepth = bust / 4 - ARMHOLE_ADJUST;

  return (
    <div className="summary">
      <h2>Draft summary</h2>

      <h3>Measurements</h3>
      <p>Bust: {bust} in</p>
      <p>Waist: {waist} in</p>
      <p>Nape to waist: {napeToWaist} in</p>
      <p>Across shoulders: {acrossShoulders} in</p>
      <p>Neck: {neck} in</p>
      <p>Shoulder to bust: {shoulderToBust} in</p>

      <h3>Draft numbers</h3>
      <p>Quarter bust + ease: {quarterBust} in</p>
      <p>Armhole depth: {armholeDepth} in</p>
      <p>Frame: {quarterBust} in × {napeToWaist} in</p>
    </div>
  );
}

export default PatternInfo;
