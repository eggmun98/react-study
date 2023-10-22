import { Component } from "react";
import { Link } from "react-router-dom";

export default class ClassPage extends Component {
  // 클래스형 컴포넌트
  // 클래스형 컴포넌트는 React.Component를 상속받아야 한다.
  // 그래야 React의 컴포넌트 생명주기 메서드(lifecycle methods)를 사용할 수 있다.

  state = {
    count: 0,
  };

  onClickCountUp = () => {
    this.setState({
      count: 1,
    });
  };

  onClickCountUp2 = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
    // this.setState() 메소드는
    // (prev) => ({}) 이렇게 prev라는 매개변수를 받고 객체를 리턴한다.
    // 객체안에는 count라는 키가 있다.
    // 그리고 그 키의 키값을 변경시킨다.
    // prev.count + 1;
    // prev는 이전 상태값을 참조하여 새로운 상태를 계산할 때 사용
    // setState는 비동기적으로 작동
  };

  // 함수형 컴포넌트에서의 라우터
  //   const navigate = useNavigate();
  //   const handleClick = () => {
  //     navigate("/about");  // /about 경로로 이동
  //   };

  render() {
    return (
      <div>
        <h1>클래스</h1>
        <p>클래스 컴포넌트 페이지</p>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 1만들기</button>
        <button onClick={this.onClickCountUp2}>카운트 1올리기</button>
        <Link to="/">홈으로 가기</Link>
        <button onClick={this.onClickMoveAbout}>About 페이지로 이동</button>
      </div>
    );
  }
}
