import "./styles/App.css";
import Interface from './Interface'
import { AnimalsProvider } from './context/Animals'
import { AuthProvider } from './context/Auth'
import HeaderCtrl from './controllers/HeaderCtrl'

function App() {
  return (
    <AuthProvider>
      <AnimalsProvider>
        <HeaderCtrl />
        <Interface />
      </AnimalsProvider>
    </AuthProvider>
  );
}

export default App;
