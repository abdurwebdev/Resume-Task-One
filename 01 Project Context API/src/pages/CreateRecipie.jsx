import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { RecipieContext } from '../context/RecipieProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
const CreateRecipie = () => {
  const navigate = useNavigate();
  const [recipie, setRecipie] = useContext(RecipieContext);
  const { register, reset, handleSubmit } = useForm();

  const submitHandler = (data) => {
    setRecipie([...recipie, data]);
    reset();
    toast.success("Recipie created Successfully!");
    navigate('/home');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Add New Recipe</h2>

        <input
          type="text"
          placeholder="Enter image URL"
          {...register('image')}
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          type="text"
          placeholder="Enter Title"
          {...register('name')}
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <textarea
          placeholder="Enter description"
          {...register('desc')}
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
        />
        <select
          {...register('category')}
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <option value="">Select Category</option>
          <option value="good">Good</option>
          <option value="bad">Bad</option>
          <option value="worst">Worst</option>
        </select>
        <button className="w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateRecipie;