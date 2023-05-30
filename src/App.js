
import { Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import Step1 from "./pages/Step1";
import Step2 from './pages/Step2';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
    </Routes>
  );
}

export default App;
