export default function StateCounter({ step, onUpdate, setCount }) {
  //親のコンポーネントで定義されたステートを更新する関数に
  //propsで渡されたstepの値を引数として渡す
  const handleClick = () => {
    onUpdate(step);
    setCount((prevCount) => prevCount + step);
  };
  return <button onClick={handleClick}>{step > 0 ? `+${step}` : step}</button>;
}
