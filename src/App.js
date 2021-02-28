import "./styles/App.css";
import Interface from './Interface'
import { AnimalsProvider } from './context/Animals'

function App() {
  return (
    <AnimalsProvider>
      <Interface />
    </AnimalsProvider>
  );
}

export default App;
