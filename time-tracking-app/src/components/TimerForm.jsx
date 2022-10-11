import React from 'react'

const TimerForm = (props) => {
  const { title } = props;
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
            //   value={""}
            className='block py-2 px-4 outline-none w-full rounded-md ring-1 ring-gray-300 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-500 border-gray-300 text-gray-700'
            placeholder='Title'
            name='title'
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
            //   value={""}
            className='block py-2 px-4 outline-none w-full rounded-md ring-1 ring-gray-300 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-500 border-gray-300 text-gray-700'
            placeholder='Project'
            name='project'
          />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 text-white font-semibold'>
        <button className='p-2 rounded-l-lg justify-center border border-transparent bg-indigo-400 hover:bg-indigo-500'>
          {title ? "Update" : "Create"}
        </button>
        <button className='p-2 rounded-r-lg justify-center border border-transparent bg-red-400 hover:bg-red-500'>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TimerForm