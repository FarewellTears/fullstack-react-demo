import React, { useState, useCallback } from "react";
import { TimerForm } from "@/components";

const ToggleableTimerForm = (props) => {
  const { onFormSubmit } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleFormOpen = () => {
    setIsOpen(true);
  }

  const handleFormClose = () => {
    setIsOpen(false);
  }

  const handleFormSubmit = (timer) => {
    onFormSubmit(timer);
    setIsOpen(false);
  }
  

  return isOpen ? (
    <TimerForm onFormSubmit={handleFormSubmit} onFormClose={handleFormClose} />
  ) : (
    <div
      className='p-2 mx-auto mb-8 bg-white shadow-lg w-10 h-10 text-center cursor-pointer'
      onClick={handleFormOpen}
    >
      <i className='fa-solid fa-plus'></i>
    </div>
  );
};

export default ToggleableTimerForm;
