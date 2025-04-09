import { useNavigate } from "react-router";
import "./Developers.css"
import NavigationBar from "../../components/NavigationBar";

const Developers = () => {
  const navigate = useNavigate();
  
  return (
    <div className="developers-root">
      <NavigationBar />
      <h1>Developers</h1>
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

export default Developers