import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Product from "./routes/Home/Product";
import Computer from "./routes/Home/Product/Computer";
import Electronic from "./routes/Home/Product/Electronic";
import Book from "./routes/Home/Product/Book";
import About from "./routes/Home/About";
import Welcome from "./routes/Home/Welcome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to={`/home`} />} />
          <Route path="/home" element={<Welcome />} />
          <Route path="/products" element={<Product />}>
            <Route index element={<Navigate to={`computers`} />} />
            <Route path="computers" element={<Computer />} />
            <Route path="electronics" element={<Electronic />} />
            <Route path="books" element={<Book />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
