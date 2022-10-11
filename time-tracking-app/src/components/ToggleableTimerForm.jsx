import React, { useState } from "react";
import { TimerForm } from "@/components";

const ToggleableTimerForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <TimerForm />
  ) : (
    <div className='p-2 mx-auto mb-8 bg-white shadow-lg w-10 h-10 text-center cursor-pointer'>
      <i class='fa-solid fa-plus'></i>
    </div>
  );
};

export default ToggleableTimerForm;
