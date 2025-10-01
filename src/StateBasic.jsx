import { useState } from "react";

export default function StateBasic({ init }) {
  //stateの定義の仕方
  //const[実際のstateの値を保存する変数,stateの更新を行う関数名] = useState(初期値);
  const [count, setCount] = useState(init);
  const handleClick = () => {
    //stateに対しては直接変更を加えない
    //  count = count + 1; //これはNG
    setCount(count + 1);
    //setCount()を２回以上実行してもstateが更新されるタイミングは
    //handleClick関数が終了した後になる
    //なので、複数回実行しても最後の１回分しか反映されない
    //なので、複数回実行したい場合は、関数を引数に渡す
    //setCount((prevCount) => prevCount + 1);
    //setCount((prevCount) => prevCount + 1);
    //
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>クリック</button>
      <p>{count}回クリックされた</p>
    </div>
  );
}
