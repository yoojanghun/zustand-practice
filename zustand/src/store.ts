import { create } from "zustand";

type CounterStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () => {
        set({count: 1});
    },
    decrement: () => {
        set({count: -1});
    },
}));

// create : Zustand에서 전역으로 사용 가능한 상태 저장소 생성
// 함수는 내부에 상태값, 상태를 바꾸는 함수를 객체로 받고 
// useCounterStore라는 커스텀 훅을 반환
// useCounterStore()를 React 컴포넌트에서 호출하면 그 전역 상태를 사용 가능

// set은 create함수가 자동으로 제공해주는 상태 업데이트 함수