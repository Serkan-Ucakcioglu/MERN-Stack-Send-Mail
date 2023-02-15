import React from "react";
import { useForm } from "react-hook-form";
import InputList from "./InputList";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data;
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Send Mail
        </h1>

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <InputList register={register} errors={errors} />

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Send Mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
