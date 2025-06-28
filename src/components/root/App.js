import { Container } from "reactstrap";
import Navi from '../navi/Navi'
import Dashboard from "./Dashboard";
import { Routes,Route} from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container fluid className="g-0">
      <Navi/>
      <Routes>
        <Route path="/"  element={<Dashboard/>}/>
        <Route path="product"  element={<Dashboard/>}/>
        <Route path="cart"  element={<CartDetail/>}/>
        <Route path="saveproduct/:productId" element={<AddOrUpdateProduct/>}/>
        <Route path="saveproduct" element={<AddOrUpdateProduct/>}/>
        <Route element={<NotFound/>}/>
      </Routes>      
    </Container>
  );
}

export default App;
