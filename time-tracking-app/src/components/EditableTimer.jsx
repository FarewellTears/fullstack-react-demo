import { useState } from "react";
import { TimerForm, Timer } from "@/components";

const EditableTimer = (props) => {
  const {
    id,
    title,
    project,
    elapsed,
    runningSince,
    onFormSubmit,
    onTrashClick,
    onStartClick,
    onStopClick,
  } = props;

  const [editFormOpen, setEditFormOpen] = useState(false);

  const handleEditClick = () => {
    openForm();
  };

  const handleFormClose = () => {
    closeForm();
  };

  const handleSubmit = (timer) => {
    onFormSubmit(timer);
    closeForm();
  };

  const closeForm = () => {
    setEditFormOpen(false);
  };

  const openForm = () => {
    setEditFormOpen(true);
  };

  return editFormOpen ? (
    <TimerForm
      id={id}
      title={title}
      project={project}
      onFormSubmit={handleSubmit}
      onFormClose={handleFormClose}
    />
  ) : (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      runningSince={runningSince}
      onEditClick={handleEditClick}
      onTrashClick={onTrashClick}
      onStartClick={onStartClick}
      onStopClick={onStopClick}
    />
  );
};

export default EditableTimer;
