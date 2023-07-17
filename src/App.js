import {BrowserRouter, Routes, Route} from "react-router-dom"
import Launches from "./pages/Launches.js"
import LaunchDetails from "./pages/LaunchDetails.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Launches />}></Route>
        <Route path="/launch/:flight_number" element={<LaunchDetails />} exact></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;