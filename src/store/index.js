import { createStore } from 'vuex'
import Book from './modules/book.js'

export default createStore({
  state: {
    //vue 컴포넌트의 데이터 역할
    message : 'HelloWorld',
    common : '시작',

  },
  getters: {
    //vue 컴포넌트에서 computed 속성과 유사
    //외부접근 가능
    getMsg(state){
      return `${state.message} => Length : ${state.message.length}`;
    },
    getCommon(state){
      return `자 이제 ${state.common}이야, 내 꿈을~`;
    }
  
  },
  mutations: {
    //state를 변경하는 속성, setter
    //Helper를 사용하지 않는 일반적인 경우는 외부접근 불가
    setMsg(state, newMsg){
      state.message = newMsg;
    },
    setCommon(state, newCommon){
      state.common = newCommon;
    }
  },
  actions: {
    //액션으로 mutation함수를 콜해서 state 정보를 변경한다.
    //비동기도 가능
    //외부 접근 가능
    callMutation({state,commit},{newMsg, newCommon}){
      if(newMsg) commit('setMsg', newMsg);
      if(newCommon) commit('setCommon', newCommon);
    },
  },
  modules: {
    //어플리케이션 규모가 클 수록 하나의 store에 state로 관리가 힘들어진다.
    //그래서 module 별로 분리해서 관리해주게 된다.
    //1. store용 js 파일 생성
    //2. index.js에 임포트
    //3. modules에다가 등록
    book : Book
  }
})
