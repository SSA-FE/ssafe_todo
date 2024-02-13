import create from 'zustand';

//1스토어 생성
const useStore = create(set => ({
    bears: 0,
    increasePopulation: () =>
        set(state => ({
            bears: state.bears + 1
        })),

    removeAllBears: () =>
        set({
            bears: 0
        }),

}));

export default useStore;


// zustand = 상태 관리 라이브러리
// 1. 스토어 생성
// 2. App.js에서 selector 전달해서 훅 사용