
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header';
import { MainLayout } from './components/layouts';
import { Router } from './components/router'

function App() {

  return (
    <div
      >

      <Header />

      <MainLayout>
        <Router />
      </MainLayout>
    </div>

  );
}

export default App;
