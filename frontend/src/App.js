import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import 'react-toastify/dist/ReactToastify.css';
import CreateEntryPage from "./pages/CreateEntryPage";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addStudent" element={<CreateEntryPage />} />
        </Routes>
    </div>
  );
}

export default App;
