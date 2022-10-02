import React from "react";

const Product = (props) => {
  const { id, productImageUrl,submitterAvatarUrl, votes, onVote, url, title, description } = props;

  return (
    <div className='text-center items-center justify-center mb-2 w-full'>
      <div className='flex flex-row'>
        <img
          alt={productImageUrl}
          className='align-middle w-44 scale-75 md:scale-90 lg:transform-none self-center'
          src={productImageUrl}
        />
        <div className='container ml-4 text-left space-y-2 flex flex-col'>
          <div className='text-xl font-semibold'>
            <a onClick={() => onVote(id)}>
              <svg
                className='h-6 w-6 inline mr-1 fill-blue-500 hover:fill-blue-600 cursor-pointer'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 320 512'
              >
                <path d='M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z' />
              </svg>
            </a>
            {votes}
          </div>
          <div className='text-sm grow'>
            <a className='text-blue-500' href={url}>
              {title}
            </a>
            <p>{description}</p>
          </div>
          <div className='text-sm font-thin items-center'>
            <span className='text-gray-400 mr-1'>Submitted by:</span>
            <img
              className='inline mx-auto h-8 rounded-full'
              src={submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
