export default function MyCalc(props) {
  let num1 = props.num1;
  let num2 = props.num2;
  let sum = num1 + num2;

  return (
    <p>
      {num1}+{num2}={sum}
    </p>
  );
}
