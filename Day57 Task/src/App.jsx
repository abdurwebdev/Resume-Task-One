import React, { useEffect, useState } from "react";

const App = () => {
  const [image, setimage] = useState("")
  const [name, setname] = useState("")
  const [role, setrole] = useState("")
  const [cards, setcards] = useState(JSON.parse(localStorage.getItem("cards")) || []);

  const submitHandler = (e) =>{
    e.preventDefault();
    setimage('');
    setname('');
    setrole('');
    let newObj ={
      image,
      name,
      role
    }
    setcards([...cards,newObj]);
  }
  useEffect(() => {
    localStorage.setItem("cards",JSON.stringify(cards));
  
    
  }, [cards])
  
  

  const deleteCard = (e) =>{
        let oldCards = [...cards];
        oldCards.splice(e.target.id,1);
        setcards(oldCards);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10 gap-8">

      {/* Form */}
      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-md">

        <h1 className="text-2xl font-bold mb-4 text-center">
          Add Team Member
        </h1>

        <form onSubmit={(e)=>{submitHandler(e)}} className="flex flex-col gap-4">

          <input
          value={image}
          onChange={(e)=>{
            setimage(e.target.value)
          }}
            type="text"
            placeholder="Image URL"
            className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
          value={name}
          onChange={(e)=>{
            setname(e.target.value)
          }}
            type="text"
            placeholder="Name"
            className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
          value={role}
          onChange={(e)=>{
            setrole(e.target.value)
          }}
            type="text"
            placeholder="Role"
            className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add Member
          </button>

        </form>

      </div>


      {/* Cards Container */}
      {cards.map((elem,idx)=>(<div key={idx} className="w-full max-w-xl flex flex-col gap-4">

{/* Card */}
<div className="bg-white shadow-md rounded-xl p-4 flex items-center justify-between border">

  <div className="flex items-center gap-4">

    <img
      src={elem.image}
      alt="profile"
      className="w-14 h-14 rounded-full object-cover"
    />

    <div>
      <h2 className="font-semibold text-lg">{elem.name}</h2>
      <p className="text-gray-500 text-sm">{elem.role}</p>
    </div>

  </div>

  <button id={idx} onClick={(e)=>{deleteCard(e)}} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
    Remove
  </button>

</div>

</div>))}

    </div>
  );
};

export default App;