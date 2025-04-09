
import { useNavigate } from 'react-router';
import './Product.css';
import NavigationBar from '../../components/NavigationBar';
const Product = () => {
    const navigate = useNavigate();

    return (
      <div className="product-root">
        <NavigationBar />
        <h1>Product</h1>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Go back to home
        </button>
      </div>
    );
}
export default Product;