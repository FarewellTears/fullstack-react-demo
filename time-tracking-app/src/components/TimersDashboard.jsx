import React from "react";
import { EditableTimerList, ToggleableTimerForm } from "@/components";

const TimersDashboard = () => {
  return (
    <div className='grid grid-cols-1 gap-2'>
      <EditableTimerList />
      <ToggleableTimerForm isOpen={true} />
    </div>
  );
};

export default TimersDashboard;
