function InputList({ register, errors }) {
  return (
    <>
      <div className="mb-2">
        <label
          for="email"
          className="block text-sm text-left font-semibold text-gray-800"
        >
          Email
        </label>
        <input
          type="name"
          {...register("email", {
            required: "email required!",
          })}
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
        <span className="text-red-500  flex justify-start text-left text-m">
          {errors?.email?.message}
        </span>
      </div>
      <div className="mb-4">
        <label
          for="subject"
          className="block text-left text-sm font-semibold text-gray-800"
        >
          Subject
        </label>
        <input
          type="text"
          {...register("subject", {
            required: "required!",
            minLength: {
              value: 5,
              message: "minimum length 5",
            },
            maxLength: {
              value: 15,
              message: "maximum length 15",
            },
          })}
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
        <span className="text-red-500  flex justify-start text-left text-m">
          {errors?.subject?.message}
        </span>
      </div>
      <div className="mb-4">
        <label
          for="body"
          className="block text-left text-sm font-semibold text-gray-800"
        >
          Body
        </label>
        <textarea
          type="text"
          {...register("body", {
            required: "required!",
            minLength: {
              value: 8,
              message: "minimum length 8",
            },
            maxLength: {
              value: 50,
              message: "maximum length 40",
            },
          })}
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
        <span className="text-red-500 text-left flex justify-start text-m">
          {errors?.body?.message}
        </span>
      </div>
    </>
  );
}

export default InputList;
