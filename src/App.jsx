import "./App.css";
import FindJob from "./Components/Jobportal/FindJob/FindJob";
import JobDesc from "./Components/Jobportal/JobDetail/JobDesc";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/findjob" element={<FindJob />} />
        <Route path="/jobs/:jobId" element={<JobDesc />} />
      </Routes>
    </Router>
  );
}

export default App;
