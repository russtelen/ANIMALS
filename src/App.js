import "./styles/App.css";
import Interface from './Interface'
import { AnimalsProvider } from './context/Animals'
import Header from './components/Header'

function App() {
  return (
    <AnimalsProvider>
      <Header />
      <Interface />
    </AnimalsProvider>
  );
}

export default App;
