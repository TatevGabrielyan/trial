import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import routes from './constants/routes';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        {routes.map(route => (
          <Route key={route.id} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
