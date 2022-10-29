import React, { useCallback, useState } from "react";

const TimerForm = (props) => {
  const {
    id,
    title: _title,
    project: _project,
    onFormSubmit,
    onFormClose,
  } = props;
  const [title, setTitle] = useState(_title || "");
  const [project, setProject] = useState(_project || "");

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleProjectChange = (e) => setProject(e.target.value);

  const handleSubmit = () => onFormSubmit({ id, title, project });

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mx-auto mb-8 max-w-xs'>
      <div className='grid gap-4 mb-6'>
        <div>
          <label
            htmlFor='title'
            className='block text-xs mb-2 text-gray-700 font-semibold'
          >
            Title
          </label>
          <input
            id='title'
            type='text'
            value={title}
            className='block py-2 px-4 outline-none w-full rounded-md ring-1 ring-gray-300 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-500 border-gray-300 text-gray-700'
            placeholder='Title'
            name='title'
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label
            htmlFor='project'
            className='block text-xs mb-2 text-gray-700  font-semibold'
          >
            Project
          </label>
          <input
            id='project'
            type='text'
            value={project}
            className='block py-2 px-4 outline-none w-full rounded-md ring-1 ring-gray-300 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-500 border-gray-300 text-gray-700'
            placeholder='Project'
            name='project'
            onChange={handleProjectChange}
          />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 text-white font-semibold'>
        <button
          className='p-2 rounded-l-lg justify-center border border-transparent bg-indigo-400 hover:bg-indigo-500'
          onClick={handleSubmit}
        >
          {id ? "Update" : "Create"}
        </button>
        <button
          className='p-2 rounded-r-lg justify-center border border-transparent bg-red-400 hover:bg-red-500'
          onClick={onFormClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TimerForm;
