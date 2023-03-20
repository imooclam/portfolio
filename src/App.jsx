import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Error, Navbar, Project } from './index';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
