import { useState } from "react";
import {TimersDashboard} from "@/components"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container mx-auto mt-10 px-10 divide-y-2'>
      <h1 className='text-3xl font-semibold text-center mb-2'>Timers</h1>
      <TimersDashboard />
    </div>
  );
}

export default App;
