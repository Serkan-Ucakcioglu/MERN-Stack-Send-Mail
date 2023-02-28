import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputList from "./InputList";
import { sendMail } from "../api/api";
import Success from "../assets/Success";

export interface IDATA {
  email: String;
  subject: String;
  body: String;
}

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IDATA>();

  const [show, setShow] = useState<boolean | null>(null);

  const onSubmit = async (dataList: IDATA) => {
    const data = await sendMail(dataList);
    if (data) {
      setShow(true);
      setTimeout(() => {
        reset();
        setShow(null);
      }, 1000);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Send Mail
        </h1>
        {show === false && (
          <h2 className="text-3xl mt-2 text-red-500 font-semibold text-center">
            Mail could not be sent
          </h2>
        )}

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          {show === true ? (
            <div className="flex justify-center">
              <Success />
            </div>
          ) : (
            <>
              <InputList register={register} errors={errors} />
              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                  Send Mail
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Form;
