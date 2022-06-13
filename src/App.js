// ** 상대경로 사용. App.js 와 App.css 는 같은 폴더에 있으므로 ./(현재폴더 밑에 ) App.css
import "./App.css";
import MyComponents from "./components/MyComponents";

export default function App() {
  // const 는 정적 변수 선언시 사용. 값을 지정 후에는 변경이 불가능하다.  => 한 번 설정후 변경 필요 없을 때 사용.
  // let 은 동적 변수 선언시 사용한다. 이전에는 var 사용 => 유동적으로 변하는 for 문 사용시 볼 수 있다.
  const name1 = "리액트";
  const name2 = "홍소영";
  const name3 = undefined;
  const name4 = "style을 넣어보자.";
  const name5 = "react";
  // "undefined" => 문자열, undefined => undefined 상태를 의미
  return (
    <div>
      {/* 1. 리액트에서는 삼항 연산자를 사용한다. 조건부 연산자 -> 삼항 연산자라고도 함. === ? ( : ) 형태 */}
      <div>
        {name1 === "리액트" ? (
          <h1>{name1}가 맞습니다.</h1>
        ) : (
          <h1>{name1}가 아닐껄?</h1>
        )}
      </div>

      {/* 2. AND(&&) 사용한다. 조건이 TRUE 일 경우 렌더링, FALSE 일 경우 렌더링 아예 안할때 사용.  */}
      <div>{name2 === "홍지수" && <h1>{name2} 정답입니다. </h1>}</div>

      {/* 3. undefined 는 렌더링이 되면 안된다. 값이 undefined가 나올수도 있을 경우, 사용값을 지정해서 사용값이 출력되도록 코딩 . JSX 안에서(<div></div> 태그 안) undefined 렌더링은 괜찮다. */}
      <div>
        {name3}
        {name3 || "undefined 출력"}
      </div>

      {/* 4. const로 style 선언해도 상관 없고, div 태그에 바로 style 선언해도 상관 없다.  */}
      <div
        style={{
          backgroundColor: "skyblue",
          color: "aqua",
          width: "200px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {name4}
      </div>

      {/* 5. App.css 에서 선언한 .react 를 사용해서 스타일을 바꿀 수 있다. -> App.css 를 꼭 import 해서 사용해야함.  */}
      <div className="react">{name5}</div>

      {/* 6. 컴포넌트 불러와보자. 5번과 동일하게 컴포넌트 파일 import 해줘야 사용가능 
       <MyComponents /> */}

      {/* 7. props(properties) 사용. 컴포넌트 속성 설정 시 사용하는 요소. 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트(여기서 App.js) 에서 설정할 수 있음. */}
      <MyComponents name="지수" />
    </div>
  );
}
