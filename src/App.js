
import './App.css';
import Header from "./components/Header";
import CurrencyConverter from "./components/CurrencyConverter";
import TimeSeries from "./components/TimeSeries";
import Newsfeed from './components/Newsfeed';

function App() {
  return (
   <div className="main-container">
    <div className="app"> <Header />
    <CurrencyConverter></CurrencyConverter>
    <TimeSeries/>
    <Newsfeed/>
    </div>
    </div>
  );
}

export default App;
