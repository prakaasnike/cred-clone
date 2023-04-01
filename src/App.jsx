import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import CreditCheck from "./pages/CreditCheck";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/creditcheck" element={<CreditCheck />} />
      </Routes>
    </Layout>
  );
}

export default App;