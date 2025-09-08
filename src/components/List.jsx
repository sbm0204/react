import './List.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCnt, minusCnt } from '../store/slices/list.js';

function List() {
  // State에 접근하는 방법
  const cnt = useSelector(state => state.list.cnt);

  // action 호출 방법
  const dispatch = useDispatch();

  return (
    <>
      <h1>리스트 페이지</h1>
      <p>{cnt}</p>
      <button type="button" onClick={() => { dispatch(addCnt()) }}>+</button>
      <button type="button" onClick={() => { dispatch(minusCnt()) }}>-</button>
    </>
  )
}

export default List;