// 6-1. function 키워드를 사용해서 컴포넌트 생성하는 방법.
// export default function MyComponents() {
//   return <div>새로운 컴포넌트 생성</div>;
// }

//  6-2 Arrow Function(화살표 펑션) 사용해서 컴포넌트를 지정해보자. arrow function 은 함수를 파라미터로 전달할 때 유용함. 값을 연산해 바로 반환할 시 사용하면 가독성 올라감.
// const MyComponents = () => {
//   return <div>Arrow Funciont 사용한 컴포넌트입니다.</div>;
// };

// 7-1 props 사용. 컴포넌트 함수의 파라미터로 받아와서 사용 가능하다.
const MyComponents = (props) => {
  return (
    <div>
      <div>안녕! {props.name}!</div>
      <div>children 값은 {props.children}!</div>
    </div>
  );
};

// 7-2 props 에 넘기는 값이 없을 경우 (App.js 에서 <MyComponents /> 이런식으로 props 안받을때) 기본 값 설정 가능하다.
MyComponents.defaultProps = {
  name: "홍지수",
};

// 6-3 export 는 모듈 내보낼때 사용하는 것이다. export 해서 모듈을 내보내고 해당 모듈을 사용하는 소스에서 import 해주면 모듈 사용 가능
export default MyComponents;
