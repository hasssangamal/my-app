
import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Detailsprod from "./pages/Detailsprod";

import './App.css';
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="Cart" element={<Cart/>} />
      <Route path="Detailsprod/:id" element={<Detailsprod />} />
  
    
    </Route>
  )
);


function App() {
  return (
    
    <>
        <RouterProvider router={router}   / >
    </>
  
  );
}

export default App;
