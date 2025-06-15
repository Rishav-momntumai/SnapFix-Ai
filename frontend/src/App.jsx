import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReportIssue from './pages/ReportIssue';
import ViewIssues from './pages/ViewIssues';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/view" element={<ViewIssues />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
