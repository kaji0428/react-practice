//export defaultを設定するとこのファイルに複数関数があった場合でも
//これを設定した関数が代表として出力される

//propsはコンポーネントに属性のようなもの形で渡された値を
//受け取るための仕組みである
//JSXの中では{props.属性名}のような形で内容を取り出せる
export default function MyComponent(props) {
  return <p>こんにちは{props.Myname}さん</p>;
}
