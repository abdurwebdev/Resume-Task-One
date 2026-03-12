import React, { useContext } from 'react';
import { RecipieContext } from '../context/RecipieProvider';
import RecipieCard from '../components/RecipieCard';

const Home = () => {
  const [recipie] = useContext(RecipieContext);

  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center bg-gray-50 min-h-screen">
      {recipie.map((elem, index) => (
        <RecipieCard elem={elem} index={index} key={index} />
      ))}
    </div>
  );
};

export default Home;