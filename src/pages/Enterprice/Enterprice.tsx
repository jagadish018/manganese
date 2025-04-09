import { useNavigate } from "react-router";
import "./Enterprice.css";
import NavigationBar from "../../components/NavigationBar";



const Enterprice = () => {
    const navigate = useNavigate(); 
  return (
    <div className="enterprice-root">
      <NavigationBar />
      <h1>Enterprice</h1>
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

export default Enterprice