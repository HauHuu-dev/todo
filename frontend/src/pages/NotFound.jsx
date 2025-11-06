import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-50">
        <p className="text-8xl text-red font-bold"> 404</p>
        <p className="text-xl font-semibold"> Trở về đi bạn ơi!!</p>
        <a
          href="/"
          className="inline-block px-6 py-3 mt-6 font-medium text-white transition shadow-md bg-primary rounded-2xl hover:bg-primary-dark"
        >
          Quay về
        </a>
      </div>
    </>
  );
};

export default NotFound;
