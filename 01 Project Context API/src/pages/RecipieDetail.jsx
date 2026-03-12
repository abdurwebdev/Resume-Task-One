import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RecipieContext } from '../context/RecipieProvider'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const RecipieDetail = () => {
  const { id } = useParams()
  const recipieIndex = parseInt(id)
  const navigate = useNavigate()
  const [recipie, setRecipie] = useContext(RecipieContext)
  const recipieToShow = recipie[recipieIndex]

  const { register, handleSubmit } = useForm({
    defaultValues: recipieToShow || {}
  })

  const handleDelete = () => {
    const deletedRecipie = recipie.filter((_, index) => index !== recipieIndex)
    setRecipie(deletedRecipie)
    localStorage.setItem("recipie", JSON.stringify(deletedRecipie))
    toast.success("Recipie Deleted Successfully")
    navigate("/home")
  }

  const submitHandler = (data) => {
    const updatedRecipies = recipie.map((item, index) => (index === recipieIndex ? data : item))
    setRecipie(updatedRecipies)
    localStorage.setItem("recipie", JSON.stringify(updatedRecipies))
    toast.success("Recipie Updated successfully")
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-6 bg-gray-50 min-h-screen">
      {/* Recipe Card */}
      <div className="flex-1 max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <img className="w-full h-64 object-cover" src={recipieToShow.image} alt={recipieToShow.name} />
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-800">{recipieToShow.name}</h2>
          <p className="text-gray-600 mt-2">{recipieToShow.desc}</p>
          <span
            className={`inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full ${
              recipieToShow.category === 'good'
                ? 'bg-green-100 text-green-700'
                : recipieToShow.category === 'bad'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {recipieToShow.category}
          </span>
          <button
            onClick={handleDelete}
            className="mt-5 w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Update Form */}
      <div className="flex-1 max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">Update Recipe</h2>
        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
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
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default RecipieDetail