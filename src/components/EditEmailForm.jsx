import React from 'react';
import { useForm } from 'react-hook-form';

const EditEmail = ({ handleEmailUpdate }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
   
  });

  const onSubmit = (data) => {
    handleEmailUpdate(data.email);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 items-center mt-4 space-y-2 w-full max-w-xs"
    >
      <input
        type="email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@gmail\.com$/,
            message: 'Please enter a valid email address',
          },
        })}
        placeholder="Enter your email"
        className={`border text-black border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 ${
          errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'
        }`}
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}
      
      <button
        type="submit"
        className=" mt-6 bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-md hover:scale-110 text-lg font-medium transition-all duration-500"
      >
        Save Email
      </button>
    </form>
  );
};

export default EditEmail;
