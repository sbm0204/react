import { useState } from 'react';
import './App.css';

function App() {
  const title = '잠온다';

  const titleStyle = {
    color: 'red',
    fontSize: '3rem',
    backgroundColor: 'black',
    fontWeight: '900'
  };

  const [count, setCount] = useState(0);
  
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  }

   const decrementCount = () => {
    setCount((prev) => {
      if(prev > 0) {
        return prev - 1;
      } else {
        return 0;
      }
    });
  }

  const [account, setAccount] = useState('');

  // prev써서 오류나는 것을 막는다. 이전의 값을 가져와서 오류가 생길 수 있기에 prev 쓴다. 
  const [userInfo, setUserInfo] = useState ({
    name: '홍길동',
    age: 20,
    gender: 'M'
  });

  // previous state !== new state (리랜더링)

  const addAge = () => {
    const copy = {...userInfo}; // shallow copy 해줘야햄 (참조형인지 기본형인지 확인해야한다.)
    copy.age += 1;
    setUserInfo(copy);
  }

  return (
    <>
      <span>{`${userInfo.name} : ${userInfo.age} : ${userInfo.gender}`}</span>
      <span>{userInfo.name}</span>
      <button type='button' onClick={addAge}>나이증가</button>
      <br />
      <br />

      <input type="text" 
      value={account} 
      onChange={(e) => { setAccount(e.target.value) }}
      />
      <p>{account}</p>
      <p>{count}</p> 
      <button type="button" onClick={incrementCount}>+</button>
      <button type="button" onClick={decrementCount}>-</button>
      <h1 className="title" style={titleStyle}>{title}</h1>
    </>    
  )
}

export default App;


/*갭슐화/리랜더링/버그추적*/ 
