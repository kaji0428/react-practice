import { useState } from "react";
import StateCounter from "./StateCounter.jsx";
export default function StateParent() {
  const [count, setCount] = useState(0);

  const updateCount = (step) => {
    setCount(count + step);
  };
  return (
    <div>
      <p>現在のcountの値は{count}です</p>
      <StateCounter step={1} onUpdate={updateCount} />
      <StateCounter step={10} onUpdate={updateCount} />
      <StateCounter step={-1} onUpdate={updateCount} />
    </div>
  );
}
