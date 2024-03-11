import axios from 'axios';
export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url)
.then(function (response) {
  let data = response.data;
  console.log(data);
});
//この場合、dataはany型になっている。= 型推論できない宣言。
//型がわからないから、チェックしないでね。というふうになっている。
//any型は良くないとされるので、自分で型を定義しないとダメ！

axios.get(url)
.then(function (response) {
  let data: object[] = response.data;
  console.log(data);
});
//このままだと、objectに何も入っていなくても、エラーがでない

axios.get(url)
.then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[] = response.data;
  data = response.data;
  console.log(data);
});
//こうすることで、ただのよくわからないobject型ではなく、オブジェクトの中身が具体的にわかる


