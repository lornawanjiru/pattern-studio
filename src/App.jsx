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
  const [shoulder, setShoulder] = useState('');
  const [neck, setNeck] = useState('');

  const isValid =
    checkMeasurement(bust, ...RANGES.bust) === '' &&
    checkMeasurement(waist, ...RANGES.waist) === '' &&
    checkMeasurement(napeToWaist, ...RANGES.napeToWaist) === '' &&
    checkMeasurement(shoulder, ...RANGES.shoulder) === '' &&
    checkMeasurement(neck, ...RANGES.neck) === '';

  return (
    <>
      <Header />

      <MeasurementForm
        bust={bust} setBust={setBust}
        waist={waist} setWaist={setWaist}
        napeToWaist={napeToWaist} setNapeToWaist={setNapeToWaist}
        shoulder={shoulder} setShoulder={setShoulder}
        neck={neck} setNeck={setNeck}
      />

      {isValid && (
        <>
          <PatternCanvas
            bust={Number(bust)}
            napeToWaist={Number(napeToWaist)}
          />
          <PatternInfo
            bust={Number(bust)}
            waist={Number(waist)}
            napeToWaist={Number(napeToWaist)}
            shoulder={Number(shoulder)}
            neck={Number(neck)}
          />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;