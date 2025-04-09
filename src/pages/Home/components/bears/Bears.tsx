
import "./BearCounter.css";

import { useAnimateStore } from "../../../../hooks/animals-store/animals-store";


const Bears = (): React.ReactNode => {
  const { animals, addAnimals } = useAnimateStore();

  return (
    <div className="bears-root">
      <p>{animals} bears in the zoo!</p>
      <button
        onClick={() => {
          addAnimals();
        }}
      >
        Add bears
      </button>
    </div>
  );
};

export default Bears;
