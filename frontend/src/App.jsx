import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage.jsx";
import useThemeStore from "./zustand/useThemeStore.js";
import UpdatePage from "./pages/UpdatePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";

const App = () => {
  const { theme } = useThemeStore();
  return (
    <div className="min-h-screen overflow-hidden" data-theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<UpdatePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
};

export default App;
