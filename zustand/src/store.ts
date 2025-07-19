import { create } from "zustand";

type CounterStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () => {
        set((state) => ({ count: state.count + 1 }));
    },
    decrement: () => {
        set((state) => ({ count: state.count - 1 }));
    },
}));

// 위의 코드에서 state엔 현재 store의 상태 전체 객체가 들어간다.
// state = {
//      count: 현재값,
//      increment: 함수,
//      decrement: 함수,
// }