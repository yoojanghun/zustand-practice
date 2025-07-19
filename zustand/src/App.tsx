import './App.css'
import { useCounterStore } from './store'

function App() {

  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

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

// const count = useCounterStore((state) => state.count);
// state => state.count는 전체 상태에서 count 값만 뽑아서 가져오는 선택자
// count 값이 바뀔 때만 컴포넌트가 리렌더링