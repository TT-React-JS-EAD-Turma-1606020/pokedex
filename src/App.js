import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/global";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/pokemon/:id" element={<Details />} />
      </Routes>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
