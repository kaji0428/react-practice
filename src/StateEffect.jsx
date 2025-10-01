//countという名前のstateを定義
import { useState } from "react";

export default function StateEffect({ init }) {
  const [count, setCount] = useState(init);
  //ここで定義しているcountはあくまでも現在のstateの値を参照するもの
  //現在というのは更新される前の値である
  const handleClick = () => {
    setCount(function (c) {
      //setCountの中で関数に引数として渡される値(c)は最新のstateの値
      //最新というのは現在進行で更新され続けている値である。
      return c + 1;
    });
    setCount((c) => c + 1);
  };
  return (
    <div>
      <p>現在のcountの値は{count}です</p>
      <button onClick={handleClick}>クリック</button>
    </div>
  );
}
