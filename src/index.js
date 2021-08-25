import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// function Example() {
//   let [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>current count:{count}</p>
//       <button onClick={() => setCount(count + 1)}>click add</button>
//       <button onClick={() => setCount(count - 1)}>click subtract</button>
//       <button onClick={() => console.dir(setCount)}>click subtract</button>
//     </div>
//   )
// }
function Example() {
  let [count, setCount] = useState(0);
  console.log(this);
  useEffect(() => {
    document.title = `you click ${Math.random()} times`;
    return function() {
      
    }
  },[]);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>current count:{count}</p>
      <button onClick={handleClick.bind(this)}>click add</button>
    </div>
  )
}

class Title extends React.Component {
  static defaultProps = {
    wonder: 321
  }

  constructor() {
    super();
    this.state = {
      isLike: 'ttt'
    };
  }

  handleClick() {
    console.log(this.state.isLike);
    this.setState({
      isLike: 'this.state.isLike'
    });
    this.setState(
      (pre) => {
        return {isLike: pre.isLike + 'this.state.isLike'}
      }
    );
    this.setState(
      (pre) => {
        return {isLike: pre.isLike + 'this.state.isLike'}
      }
    )
    console.log(this.state.isLike);
  }

  render() {
    console.log(this);
    return (
      <h1 onClick={() => this.handleClick()}>{this.state.isLike}{this.props.wonder}</h1>
    )
  }
}

console.dir(Example)
  ReactDOM.render(
    <Title />,
    document.getElementById('root')
  );

  const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
  ]
  class Index extends React.Component {
    render () {
      const usersElements = [] // 保存每个用户渲染以后 JSX 的数组
      for (let user of users) {
        usersElements.push( // 循环每个用户，构建 JSX，push 到数组中
          <div>
            <div>姓名：{user.username}</div>
            <div>年龄：{user.age}</div>
            <div>性别：{user.gender}</div>
            <hr />
          </div>
        )
      }
      return (
        <div>{usersElements}</div>
      )
    }
  }
  ReactDOM.render(
    <Index />,
    document.getElementById('root')
  )
  
  