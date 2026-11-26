import { useState } from 'react';
import Header from './components/Header';
import MeasurementForm from './components/MeasurementForm';
import PatternCanvas from './components/PatternCanvas';
import PatternInfo from './components/PatternInfo';
import Footer from './components/Footer';
import { checkMeasurement, RANGES } from './utils/checkMeasurement';

function App() {
  const [bust, setBust] = useState('');
  const [waist, setWaist] = useState('');
  const [napeToWaist, setNapeToWaist] = useState('');
  const [acrossShoulders, setAcrossShoulders] = useState('');
  const [neck, setNeck] = useState('');
  const [shoulderToBust, setShoulderToBust] = useState('');

  const isValid =
    checkMeasurement(bust, ...RANGES.bust) === '' &&
    checkMeasurement(waist, ...RANGES.waist) === '' &&
    checkMeasurement(napeToWaist, ...RANGES.napeToWaist) === '' &&
    checkMeasurement(acrossShoulders, ...RANGES.acrossShoulders) === '' &&
    checkMeasurement(neck, ...RANGES.neck) === '' &&
    checkMeasurement(shoulderToBust, ...RANGES.shoulderToBust) === '';

  return (
    <>
      <Header />

      <MeasurementForm
        bust={bust} setBust={setBust}
        waist={waist} setWaist={setWaist}
        napeToWaist={napeToWaist} setNapeToWaist={setNapeToWaist}
        acrossShoulders={acrossShoulders} setAcrossShoulders={setAcrossShoulders}
        neck={neck} setNeck={setNeck}
        shoulderToBust={shoulderToBust} setShoulderToBust={setShoulderToBust}
      />

      {isValid && (
        <>
          <PatternCanvas
            bust={Number(bust)}
            napeToWaist={Number(napeToWaist)}
            shoulderToBust={Number(shoulderToBust)}
          />
          <PatternInfo
            bust={Number(bust)}
            waist={Number(waist)}
            napeToWaist={Number(napeToWaist)}
            acrossShoulders={Number(acrossShoulders)}
            neck={Number(neck)}
            shoulderToBust={Number(shoulderToBust)}
          />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;