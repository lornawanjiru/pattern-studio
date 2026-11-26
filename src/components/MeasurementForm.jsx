import { checkMeasurement, RANGES } from '../utils/checkMeasurement';

// One reusable field: label + input + error message
function MeasurementField({ id, label, value, setValue, range }) {
  const [min, max] = range;
  const error = checkMeasurement(value, min, max);

  return (
    <div className="field">
      <label htmlFor={id}>{label} (in)</label>
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        step="0.25"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}

function MeasurementForm({
  bust, setBust,
  waist, setWaist,
  napeToWaist, setNapeToWaist,
  acrossShoulders, setAcrossShoulders,
  neck, setNeck,
  shoulderToBust, setShoulderToBust,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>Client measurements</h2>

      <MeasurementField id="bust" label="Bust"
        value={bust} setValue={setBust} range={RANGES.bust} />

      <MeasurementField id="waist" label="Waist"
        value={waist} setValue={setWaist} range={RANGES.waist} />

      <MeasurementField id="napeToWaist" label="Nape to waist"
        value={napeToWaist} setValue={setNapeToWaist} range={RANGES.napeToWaist} />

      <MeasurementField id="acrossShoulders" label="Across shoulders"
        value={acrossShoulders} setValue={setAcrossShoulders} range={RANGES.acrossShoulders} />

      <MeasurementField id="neck" label="Neck"
        value={neck} setValue={setNeck} range={RANGES.neck} />

      <MeasurementField id="shoulderToBust" label="Shoulder to bust"
        value={shoulderToBust} setValue={setShoulderToBust} range={RANGES.shoulderToBust} />
    </form>
  );
}

export default MeasurementForm;