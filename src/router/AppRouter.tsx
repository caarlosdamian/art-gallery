import { Home } from "../pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Location } from "../pages/Location/Location";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
};
