import React from "react";
import { EditableTimer } from "@/components";

const EditableTimerList = (props) => {
  const { timers, onFormSubmit, onTrashClick, onStartClick, onStopClick } =
    props;
  return (
    <div className='flex flex-col justify-center m-4 mb-0'>
      {timers.map((timer) => (
        <EditableTimer
          key={timer.id}
          id={timer.id}
          title={timer.title}
          project={timer.project}
          elapsed={timer.elapsed}
          runningSince={timer.runningSince}
          onFormSubmit={onFormSubmit}
          onTrashClick={onTrashClick}
          onStartClick={onStartClick}
          onStopClick={onStopClick}
        />
      ))}
    </div>
  );
};

export default EditableTimerList;
