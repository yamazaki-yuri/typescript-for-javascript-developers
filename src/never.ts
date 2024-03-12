export {};

//以下の関数の戻り値に対して、型定義をするには？
//受け取ったメッセージを必ずエラーにする。
//return文は戻ってこない
function error(message: string) {
  throw new Error(message);
}

//呼び元に戻ってこない型は唯一neverのみ
function error1(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log(result);
} catch (error) {
  console.log({ error });
};

//void型は、returnされる値がない
//neverは、returnがない