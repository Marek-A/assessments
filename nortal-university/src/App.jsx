import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Employees from "./pages/Employees";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="" exact element={ <Navigate to="/products" /> } />
        <Route path="products" exact element={ <Products /> } />
        <Route path="employees" exact element={ <Employees /> } />
      </Routes>
    </div>
  );
}

export default App;
