import Title from './components/Title';
import Counter from './components/Counter';

import useCountdown from './Hooks/useCountdown';

import './App.css'

function App() {

  const [day, hour, minute, second] = useCountdown("jan 1, 2024 00:00:00");

  return (
    <div className="App">
      <div className="container">
        <Title title="2024 em:"/>
        <div className="countdown-container">
          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/>
        </div>
      </div>
    </div>
  );
}

export default App;
