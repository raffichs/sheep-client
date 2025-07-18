import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/user/IndexPage";
import LoginPage from "./pages/admin/LoginPage";
import RegisterPage from './pages/admin/RegisterPage'
import axios from "axios";
import AdminPage from "./pages/admin/AdminPage";
import AddPage from "./pages/admin/AddPage";
import CardPage from "./pages/user/CardPage";
import EditPage from "./pages/admin/EditPage";

// axios.defaults.baseURL = "https://peternakningsalatiga-api.vercel.app/"
axios.defaults.baseURL = "https://sheep-server-784510099957.asia-southeast2.run.app"
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />}/>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/:id" element={<CardPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
