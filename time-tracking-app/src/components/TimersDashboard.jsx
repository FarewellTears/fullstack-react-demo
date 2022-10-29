import { useCallback, useState } from "react";
import { EditableTimerList, ToggleableTimerForm } from "@/components";
import { v4 as uuidv4 } from "uuid";
import { newTimer } from "@/utils/helper";

const TimersDashboard = () => {
  const [timers, setTimers] = useState([
    {
      title: "Practice squat",
      project: "Gym Chores",
      id: uuidv4(),
      elapsed: 5456099,
      runningSince: Date.now(),
    },
    {
      title: "Bake squash",
      project: "Kitchen Chores",
      id: uuidv4(),
      elapsed: 1273998,
      runningSince: null,
    },
  ]);

  const createTimer = (timer) => {
    const _t = newTimer(timer);
    setTimers([...timers, _t]);
  };

  const updateTimer = (attrs) => {
    setTimers(
      [...timers].map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        }
        return timer;
      })
    );
  };

  const deleteTimer = (timerId) => {
    setTimers([...timers].filter((t) => t.id !== timerId));
  };

  const startTimer = (timerId) => {
    const now = Date.now();

    setTimers(
      [...timers].map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now,
          });
        }
        return timer;
      })
    );
  };

  const stopTimer = (timerId) => {
    const now = Date.now();

    setTimers(
      [...timers].map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        }
        return timer;
      })
    );
  };

  const handleCreateFormSubmit = (timer) => {
    createTimer(timer);
  };

  const handleEditFormSubmit = (attrs) => {
    updateTimer(attrs);
  };

  const handleTrashClick = (timerId) => {
    deleteTimer(timerId);
  };

  const handleStartClick = (timerId) => {
    startTimer(timerId);
  };

  const handleStopClick = (timerId) => {
    stopTimer(timerId);
  };

  return (
    <div className='grid grid-cols-1 gap-2'>
      <EditableTimerList
        timers={timers}
        onFormSubmit={handleEditFormSubmit}
        onTrashClick={handleTrashClick}
        onStartClick={handleStartClick}
        onStopClick={handleStopClick}
      />
      <ToggleableTimerForm
        isOpen={true}
        onFormSubmit={handleCreateFormSubmit}
      />
    </div>
  );
};

export default TimersDashboard;
