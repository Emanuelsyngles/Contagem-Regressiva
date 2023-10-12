import Title from './components/Title';
import Counter from './components/Counter';

import useCountdown from './Hooks/useCountdown';

import './App.css'

function App() {

  const x = useCountdown("jan 1, 2023 00:00:00");

  return (
    <div className="App">
      <div className="container">
        <Title title="Contagem regressiva para 2023"/>
        <div className="countdown-container">
          <Counter title="Dias" number={2}/>
          <Counter title="Horas" number={2}/>
          <Counter title="Minutos" number={2}/>
          <Counter title="Segundos" number={2}/>
        </div>
      </div>
    </div>
  );
}

export default App;
