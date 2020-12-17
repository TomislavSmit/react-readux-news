import './app.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../header/header';
import AppRouter from '../../routes';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <AppRouter />
        </main>
      </div>
    </Router>
  );
}

export default App;
