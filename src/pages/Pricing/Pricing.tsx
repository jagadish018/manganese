import { useNavigate } from "react-router";
import "./Pricing.css";
import NavigationBar from "../../components/Navigation-bar/NavigationBar";
import Container from "../../components/container/Container";

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar />
    <Container>
      <div className="pricing-root">
        
        <h1>Pricing</h1>
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

export default Pricing;
