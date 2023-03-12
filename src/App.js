import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BlockDetails from "./components/BlockDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/block/:blocknumber" element={<BlockDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
