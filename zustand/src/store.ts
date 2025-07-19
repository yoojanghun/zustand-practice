import { create } from "zustand";

type CounterStore = {
    count: number;
    increment: () => void;
    incrementAsync: () => Promise<void>;
    decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () => {
        set((state) => ({ count: state.count + 1 }));
    },
    incrementAsync: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set((state) => ({ count: state.count + 1 }));
    },
    decrement: () => {
        set((state) => ({ count: state.count - 1 }));
    },
}));

// 백엔드에서 데이터를 fetch할 때는 비동기 작업이다.
// 데이터를 기다린 뒤에 상태값을 변경해야 하므로,
// "비동기 흐름 속에서 순서를 보장하려면 마치 동기처럼 다뤄야" 한다.

// await는 비동기 작업이 끝날 때까지 기다렸다가 다음 줄로 넘어가게 만들어 준다.
// 따라서 코드가 동기적인 순서처럼 실행된다.
// await를 쓸 때엔 함수 앞에 async를 붙인다.