import { Component } from "react";

export default class ClassPage extends Component {
  // 클래스형 컴포넌트
  // 클래스형 컴포넌트는 React.Component를 상속받아야 한다.
  // 그래야 React의 컴포넌트 생명주기 메서드(lifecycle methods)를 사용할 수 있다.
  render() {
    return (
      <div>
        <h1>클래스</h1>
        <p>클래스 컴포넌트 페이지</p>
      </div>
    );
  }
}
