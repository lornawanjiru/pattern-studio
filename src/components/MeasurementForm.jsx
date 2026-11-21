import { useState } from 'react';

function checkMeasurement(text, min, max) {
  if (text === '') return 'Please enter a value';
  const num = Number(text);
  if (Number.isNaN(num)) return 'Please enter a number';
  if (num < min || num > max) return `Please enter a value between ${min} and ${max} cm`;
  return '';
}

function MeasurementForm() {
  const [bust, setBust] = useState('');
  const ease = 1.5; // cm, use your class's ease value

  const bustError = checkMeasurement(bust, 50, 200);
  const quarterBust = Number(bust) / 4 + ease;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bustError) return;
    console.log('Drafting with bust', Number(bust));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bust">Bust (cm)</label>
        <input
          id="bust"
          type="number"
          min="50"
          max="200"
          step="0.5"
          value={bust}
          onChange={(e) => setBust(e.target.value)}
        />
        {bustError && <p className="error">{bustError}</p>}

        <button type="submit">Draft my bodice</button>
      </form>

      {!bustError && <p>Quarter bust + ease: {quarterBust} cm</p>}
    </>
  );
}

export default MeasurementForm;