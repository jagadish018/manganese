import { useNavigate } from "react-router";
import "./Pricing.css"
import NavigationBar from "../../components/NavigationBar";

const Pricing = () => {
    const navigate = useNavigate();
  return (
    <div className="pricing-root">
      <NavigationBar />
      <h1>Pricing</h1>
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

export default Pricing