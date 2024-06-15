import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./responsive.css";
import Header from "./components/header/header";
import data from "./data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/public/Home/Home";
import Footer from "./components/footer/footer";
import DetailsPage from "./pages/public/Details";

function App() {
  return (
    <BrowserRouter>
      <div style={{ height: "2000px" }}>
        <Header data={data.productData} />
        <Routes>
          <Route
            exact={true}
            path="/"
            element={<Home data={data.productData} />}
          />
          <Route
            exact={true}
            path="/product/:id"
            element={<DetailsPage data={data.productData} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
