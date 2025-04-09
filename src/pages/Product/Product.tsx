import { useNavigate } from "react-router";
import "./Product.css";
import NavigationBar from "../../components/Navigation-bar/NavigationBar";
import Container from "../../components/container/Container";
const Product = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavigationBar />
      <Container>
        <div className="product-root">
          <h1>Product</h1>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Go back to home
          </button>
        </div>
      </Container>
    </>
  );
};
export default Product;
