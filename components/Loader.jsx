import React from 'react'
// import busy from '../public/busy.gif'

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-8 max-h-8">
        <img src="/busy.gif" alt="loader gif" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default Loader