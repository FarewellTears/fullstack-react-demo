import React from "react";
import { renderElapsedString } from "@/utils/helper";

const TimerActionButton = (props) => {
  const { timerIsRunning, onStartClick, onStopClick } = props;
  return timerIsRunning ? (
    <div
      className='text-white text-center font-semibold p-2 rounded-b-lg justify-center border border-transparent bg-emerald-400 hover:bg-emerald-500 cursor-pointer'
      onClick={onStartClick}
    >
      Start
    </div>
  ) : (
    <div
      className='text-white text-center font-semibold p-2 rounded-b-lg justify-center border border-transparent bg-red-400 hover:bg-red-500 cursor-pointer'
      onClick={onStopClick}
    >
      Stop
    </div>
  );
};

const Timer = (props) => {
  const {
    id,
    title,
    project,
    elapsed,
    runningSince,
    onEditClick,
    onTrashClick,
    onStartClick,
    onStopClick,
  } = props;

  const handleTrashClick = () => {
    onTrashClick(id);
  };

  const handleStartClick = () => {
    onStartClick(id);
  };

  const handleStopClick = () => {
    onStopClick(id);
  };

  return (
    <div className='bg-white shadow-lg rounded-lg mx-auto w-full mb-8 max-w-xs'>
      <div className='p-8 pb-4'>
        <div className='grid grid-cols-6 gap-4'>
          <div className='col-span-6'>
            <div className='font-semibold text-xl'>{title}</div>
            <div className='text-gray-400 font-thin text-sm'>{project}</div>
          </div>
          <h2 className='col-span-6 text-center font-bold text-2xl'>
            {renderElapsedString(elapsed, runningSince)}
          </h2>
          <div className='text-gray-400 text-sm font-semibold col-end-7 col-span-1 flex gap-x-3'>
            <span onClick={onEditClick}>
              <i className='fa-solid fa-pen-to-square cursor-pointer'></i>
            </span>
            <span onClick={handleTrashClick}>
              <i className='fa-solid fa-trash-can cursor-pointer'></i>
            </span>
          </div>
        </div>
      </div>
      <TimerActionButton
        timerIsRunning={!!runningSince}
        onStartClick={handleStartClick}
        onStopClick={handleStopClick}
      />
    </div>
  );
};

export default Timer;
