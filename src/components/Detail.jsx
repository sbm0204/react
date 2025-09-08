import './Detail.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNbr, minusNbr, changeNbr } from '../store/slices/detail.js';
import { useState } from 'react';

function Detail() {
  const nbr = useSelector(state => state.detail.nbr);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(0); // (null)넣을 수 있다. 하지만 맞는 데이터 타입에 따라 바뀐다.  예를 들어 () 혹은 ([]) 혹은 ('')

  const covertAndSetNumber = (event) => {
    if(!isNaN(event.target.value)) {
        setInputValue(parseInt(event.target.value));
    } else {
      console.error('숫자가 아니다');
    }
  }

  // const handleButtonClick = () => {
  //   setDisplayedValue(inputValue);  // 입력된 값을 표시
  //   setInputValue('');              // input 값 초기화
  //   dispatch();                     // 여기에 원하는 액션 함수 명시해야 함 (예: dispatch(addSomething()))
  // };

  return (
    <>
      <h1>상세 페이지</h1>
      <p>{nbr}</p>
      <input
        type="number"
        onChange={covertAndSetNumber}
      />
      <button type="button" onClick={() => {dispatch(changeNbr(inputValue))} }>입력</button>
      <button type="button" onClick={() => dispatch(addNbr())}>+</button>
      <button type="button" onClick={() => dispatch(minusNbr())}>-</button>
    </>
  );
}

export default Detail;
