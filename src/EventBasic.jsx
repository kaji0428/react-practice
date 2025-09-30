export default function EventBasic() {
  const current = () => {
    const date = new Date();
    console.log(date.toLocaleString());
  };

  return (
    //現在日時を取得するための関数を定義する
    <div>
      <button onClick={current}>現在の日時を取得</button>
    </div>
  );
}
