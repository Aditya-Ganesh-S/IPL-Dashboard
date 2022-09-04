import './App.scss';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';
import  {HashRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
            <Route path="/teams/:teamName/matches/:year" element={<MatchPage />} />
            <Route path="/teams/:teamName" element={<TeamPage />} />
            <Route path="/teams" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
