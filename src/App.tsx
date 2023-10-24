import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Layout from './components/Layout';
import Personagens from './pages/personagens';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/personagens" element={<Personagens />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
