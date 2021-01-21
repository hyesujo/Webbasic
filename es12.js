//es12 문법
//https://chanyeong.com/blog/post/29

//String.prototype.replaceAll()
const baseString = '오늘도 힘차게 js공부! js의 새로운 버전인 ES2021도 공부!';
console.log(baseString.replace(/\!/g, '@'));
console.log(baseString.split('!').join('@'));
console.log(baseString.replaceAll('!','@'));
//새로운 방식 String.prototype.replaceAll 메서드는 간단하게 지정한 모든
//문자열을 특정한 문자열로 변경가능

const es12String = '피스타치오~아이스크림~';
console.log(es12String.replaceAll('~','!'));
//1. String.prototype.replaceAll(searchValue, replaceValue)는 
//searchValue와 동일한 모든값을 replaceValue로 교체/
//2. searchValue가 전역 플래그가 없는 정규표현식일 경우 에러가 발생
//정규표현식에 대한 지식이 없는 사용자를 위한 단순화된 api

//promise.any()
//https://medium.com/javascript-in-plain-english/javascript-es2021-es12-new-features-7aa5f411d81f
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('PI'), Math.floor(Math.random() *100));
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P2'), Math.floor(Math.random() * 100));
});

(async function() {
    const result = await Promise.any([promise1, promise2]);
    console.log(result);
})();
//promiseany는 배열의 promise를 받아서 해당 배열의 promise 중 가장 먼저 resolve가 처리되는 promise를 반환해주는 메소드 
//이때 모든 promise가 실패할 경우 모든 promise가 실패했다고 에러를 반환
//여러 요소 중 가장 빠른 값을 가져와 처리해야 하는 상황에 유용하게 사용가능

//성공응답 처리
Promise.any([
    new Promise((res, rej) => setTimeout(rej, 100, '성공응답 전 에러 발생')),
    new Promise((res, rej) => setTimeout(res, 1000, '가장 빠른 성공응답')),
    new Promise((res, rej) => setTimeout(rej, 1500, '첫번째 응답 후 에러발생')),
    new Promise((res, rej) => setTimeout(res, 2000, '두번째 빠른 성공응답')),
    new Promise((res, rej) => setTimeout(res, 3000, '가장 느린 성공응답'))
])
.then(value => console.log(value))
.catch(err => console.log(err));

//모든 promise 실패예시
Promise.any([
    new Promise((res, rej) => setTimeout(rej, 100, '에러1')),
    new Promise((res,rej) => setTimeout(rej, 1500, '에러2'))
])
.then(value => console.log(value))
.catch(err => console.log(err));

//숫자구분자(Numeric Separators)
//https://blog.woolta.com/categories/3/posts/207
const num = 123_456_789;
console.log(num);
//기존에는 number타입을 지정할 경우 숫자가 갈수록 한눈에 들어오지 않은 불편함이 있었는데 이제는 좀더 명확히 number의 값을 확인가능

//WeakRef(약한참조)
//https://sambat-tech.netlify.app/what-new-in-es12/
const callback = () => {
    const aBigObj = new WeakRef({
      name: "hyesu Jo"
    });
    console.log(aBigObj.deref().name);
  }
  (async function(){
    await new Promise((resolve) => {
      setTimeout(() => {
        callback(); // 혜수 출력
        resolve();
      }, 2000);
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        callback(); 
        resolve();
      }, 5000);
    });
  })();

  //객체를 메모리에 오래 보관하고 싶지않을때 사용함


  //Logical assignment operators(논리할당 연산자)
let num1 = 10;
let num2 = 5;
//https://ichi.pro/ko/post/32885188220171
//오른쪽변수의 값이 true인 경우 왼쪽변수의 값을 오른쪽에 할당한다.
num1 &&= num2;

console.log(num1);

let num3

num1 ||= num2;
console.log(num1);
  