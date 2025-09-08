import { createSlice } from "@reduxjs/toolkit";

// `list` 상태 관리 slice 생성
const detail = createSlice({
  name: 'detail', // slice 이름
  initialState: { //상태 관리할 state를 정의하는 영역
    nbr: 0,
  }, 

  reducers: { // state의 상태를 변화시키는 actions 를 정의하는 영역
    addNbr(state) {
      state.nbr += 1;
    }, 
    minusNbr(state) {
      state.nbr -= 1;
    }, 
    changeNbr(state, action) {
      const regex = /^[0-9]+$/;
      if(regex.test(action.payload)) {
        state.value = parseInt(action.payload);
      // if(typeof(action.payload) === 'number') { 
      //   state.nbr = action.payload; 
      } else {
        console.log('넘버 아님', action.payload);
        // console.log('넘버 아님');
      }
    }
  }
  });

  export const {addNbr, minusNbr, changeNbr} = detail.actions;

  export default detail.reducer;


