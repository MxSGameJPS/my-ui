import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefautLayout";
import Home from "./pages/Home";
import ToastsPage from "./pages/ToastsPage";
import CardsPage from "./pages/CardsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="toasts" element={<ToastsPage />} />

          <Route path="cards" element={<CardsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
