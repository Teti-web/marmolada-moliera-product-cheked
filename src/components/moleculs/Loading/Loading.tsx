import React from 'react';

const Loading = () => {
  return (
    <div className="absolute left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-white-300 bg-opacity-70 backdrop-blur">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-boulder-950 border-t-white-200"></div>
    </div>
  );
};

export default Loading;
