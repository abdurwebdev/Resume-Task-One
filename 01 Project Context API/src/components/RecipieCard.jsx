import React from 'react';
import { Link } from 'react-router-dom';

const RecipieCard = ({ elem, index }) => {
  return (
    <Link
      to={`/recipie/${index}`}
      className="w-64 h-72 bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl duration-300"
    >
      <img src={elem.image} className="w-full h-40 object-cover" alt="" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{elem.name}</h3>
        <p className="text-gray-600 text-sm mt-1">
          {elem.desc.length > 80 ? elem.desc.slice(0, 80) + '...more' : elem.desc}
        </p>
        <span
          className={`inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full ${
            elem.category === 'good'
              ? 'bg-green-100 text-green-700'
              : elem.category === 'bad'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {elem.category}
        </span>
      </div>
    </Link>
  );
};

export default RecipieCard;