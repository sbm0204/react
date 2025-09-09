import { createSlice } from "@reduxjs/toolkit";
import { getList, getTest } from "../thunks/listThunk";

// `list` 상태 관리 slice 생성
const list = createSlice({
  name: 'list', // slice 이름
  initialState: { // 상태 관리할 state를 정의하는 영역
    cnt: 0,
    list: null, // {}으로 나두면 && 식으로 했을 때 걍 뒤가 실행되어버림
    loading: false,
  }, 

  reducers: { // state의 상태를 변화시키는 actions 를 정의하는 영역
    addCnt(state) {
      state.cnt += 1;
    }, 
    minusCnt(state) {
      state.cnt -= 1;
    }, 
    changeCnt(state, action) {
      // state 파라미터는 `initialState`의 정보를 담고 있는 파라미터
      // action 파라미터는 외부에서 전달된 값을 담는 파라미터
      //        > action.payload는 전달된 값에 접근할 수 있는 프로퍼티입니다. 
      state.cnt = action.payload; // 외부에서 전달받은 데이터를 state로 받아올 수 있다. 
    },
    clearList(state) {
      state.list = null;
    },
  }, // 파라미터가 1개이면 소괄호 생략 가능
  extraReducers: builder => {
    builder 
      // .addCase(getList.pending, (state) => {
      //   // `getList` Thunk의 처리가 대기중일때의 처리를 작성하면 된다. 
      //   state.loading = true;
      // })
      .addCase(getList.fulfilled, (state, action) => {
        // `getList` Thunk의 처리가 성공 일때의 처리를 작성하면 된다. 
        state.list = action.payload;
        state.loading = false;
      })
      // .addCase(getList.rejected, (state) => {
      //   // `getList` Thunk의 처리가 실패 일때의 처리를 작성하면 된다. 
      //   state.loading = false;
      // })
      .addCase(getTest.fulfilled, (state, data) => {
      // `getTest` Thunk의 처리가 성공 일때의 처리를 작성하면 된다. 
      state.test = data.payload;
      state.loading = false;
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.loading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        state => {
          state.loading = false;
        }
      )
      ;
  }
  });

  // 정의한 actions를 내보내기 (선언 먼저)
  // addCnt 나 changeCnt 등등 얘네는 컴포넌트와 연관이 있다. 
  // 제거하고 추가하는 곳에 쓰임 
  export const {addCnt, changeCnt, minusCnt, clearList} = list.actions;

  // Reducer 내보내기
  // store에서 호출된다. 
  export default list.reducer;


  // Store 안에 list와 detail이 있는데 actions는 이 list나 detail을 수정 혹은 추가등등을 하기 위해 존재. 