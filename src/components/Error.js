import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className=" h-screen w-screen text-red-900 bg-lime-300 text-lg font-black  text-center ">
      <div className=" p-72">
        <h1>OOps!!</h1>
        <h2> SOMETHING WENT WRONG </h2>
        <h3>CHECK YOUR INTERNET CONNECTION</h3>
        <h4>
          {error.status}-{error.statusText}
        </h4>
      </div>
    </div>
  );
};

export default Error;
