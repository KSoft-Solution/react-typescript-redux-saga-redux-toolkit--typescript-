import { FC, ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Movie } from "./pages";

const App: FC<any> = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
