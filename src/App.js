import Mensaje from './Mensaje';
import './App.css';

const Description = () => {             /*los componentes SIEMPRE EMPIEZAN EN MAYUSCULA*/
 return <p>Esta es la app del fullstack bootcamp</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje  color = 'red'  message= 'Estamos trabajando'/>
      <Mensaje color = 'yellow'message= 'En un curso'/>
      <Mensaje color = 'green' message= 'de React'/>
      <Description />
    </div>
  );
}

export default App;
