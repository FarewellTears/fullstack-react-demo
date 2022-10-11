import React from "react";
import { TimerForm, Timer } from "@/components";

const EditableTimer = (props) => {
  const { title, project, elapsed, runningSince, editFormOpen } = props;
  return editFormOpen ? (
    <TimerForm title={title} project={project} />
  ) : (
    <Timer
      title={title}
      project={project}
      elapsed={elapsed}
      runningSince={runningSince}
    />
  );
};

export default EditableTimer;
