import { useEffect } from 'react';
import './App.css'
import { useCounterStore } from './store'

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("count", count);
}

function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    logCount();
  }, []);

  return (
    <div>
      {count}
      <div>
        <div onClick={increment}>Increment</div>
        <div onClick={incrementAsync}>Increment Async</div>
        <div onClick={decrement}>Decrement</div>
      </div>
    </div>
  )
}

export default App

// useCounterStore((state) => state.count)
// 값이 바뀌면 컴포넌트가 자동으로 리렌더링됨.

// useCounterStore.getState()
// 현재 상태를 조회
// 함수형 컴포넌트 밖에서 값을 가져오고 싶을 때 사용.