import { useState } from "react";

export default function MyForm() {
  const [result, setResult] = useState(null);
  const [form, setForm] = useState({ name: "", age: "" });

  // フォームの内容が変化したときのイベントハンドラ
  const handleChange = (e) => {
    // スプレッド構文を使って既存のformデータをコピーし、
    // 変更された項目だけを上書き
    setForm({
      ...form, // 既存のformデータを展開
      [e.target.name]: e.target.value, // 変更された項目を更新
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(`あなたの名前は${form.name}、年齢は${form.age}歳ですね`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>
        現在の入力内容: 名前={form.name}, 年齢={form.age}
      </p>
      {result}
    </>
  );
}
