import { Component } from "react";
import { Link } from "react-router-dom";

export default class Lifecycle extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log(
      "컴포넌트가 마운트 되고나서 실행 => 리액트 돔에 삽입된 직후에 실행"
    );
  }

  componentDidUpdate() {
    console.log(
      "컴포넌트가 리렌더링 되면 실행 => setState나 forceUpdate를 호출하여 리렌더링할 때 마다 실행"
    );
  }

  componentWillUnmount() {
    console.log(
      "컴포넌트가 사라지면 실행 =>  컴포넌트가 리액트 돔에 제거되기 전에 실행"
    );
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevState.count !== this.state.count) {
  //       // count 값이 변경되었을 때만 실행
  //     }
  //        prevProps: 이전의 props 값
  //        prevState: 이전의 state 값
  //   }

  onClickCountUp = () => {
    this.setState({
      count: 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Lifecycle</h1>
        <button onClick={this.onClickCountUp}>카운트 올리기</button>
        <Link to="/">componentDidUnmount</Link>
      </div>
    );
  }
}
