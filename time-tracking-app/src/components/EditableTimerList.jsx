import React from "react";
import { EditableTimer } from "@/components";

const EditableTimerList = () => {
  return (
    <div className='flex flex-col justify-center m-4'>
      <EditableTimer
        title='Learn React'
        project='Web Domination'
        elapsed='8986300'
        runningSince={null}
        editFormOpen={false}
      />
      <EditableTimer
        title='Learn extreme ironing'
        project='World Domination'
        elapsed='3890985'
        runningSince={null}
        editFormOpen={true}
      />
    </div>
  );
};

export default EditableTimerList;
