import { useEffect } from 'react';
import './App.css'
import { useCounterStore } from './store'

const setCount = () => {
  useCounterStore.setState({ count: 1 });
}

function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    setCount();
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

// useCounterStore.setState()
// 상태 업데이트 함수
// 함수형 컴포넌트 밖에서 값을 업데이트하고 싶을 때 사용.