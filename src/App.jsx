import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefautLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
