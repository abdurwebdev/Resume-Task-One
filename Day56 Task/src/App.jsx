import React, { useState } from "react";

const App = () => {
  const [username, setusername] = useState("");
  const [phone, setphone] = useState("");
  const [image, setimage] = useState("");
  const [contacts, setcontacts] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setusername('');
    setphone('');
    setimage('');
    let newObj = {
      username,
      phone,
      image
    }
    setcontacts([...contacts,newObj]);
    console.log(contacts)
  }
  const deleteContact = (id) =>{
    let oldContacts = [...contacts];
    oldContacts.splice(id,1);
    setcontacts(oldContacts)
  }
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Contact List
        </h1>

        {/* Form */}
        <form onSubmit={(e)=>{handleSubmit(e)}} className="grid grid-cols-3  gap-3 mb-6">

          <input
          value={username}
          onChange={(e)=>{
            setusername(e.target.value);
            
          }}
            type="text"
            placeholder="Enter Name"
            className="border placeholder:text-black border-gray-300 text-black rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
          value={phone}
          onChange={(e)=>{
            setphone(e.target.value)
          }}
            type="text"
            placeholder="Enter Phone"
            className="border placeholder:text-black border-gray-300 rounded-lg px-4 py-2 outline-none text-black focus:ring-2 focus:ring-blue-400"
          />

          <input
          value={image}
          onChange={(e)=>{
            setimage(e.target.value)
          }}
            type="text"
            placeholder="Image URL"
            className="border placeholder:text-black text-black border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="col-span-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add Contact
          </button>

        </form>
{/* Contact List */}
      {contacts.map((elem,idx)=>{
        return  <div key={idx} className="space-y-4">

          {/* Example Contact */}
          <div className="flex gap-y-3 items-center justify-between border p-3 rounded-lg">

            <div className="flex items-center gap-4 gap-y-3">

              <img
                src={`${elem.image}`}
                alt="contact"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <p className="font-semibold">{elem.username}</p>
                <p className="text-gray-500 text-sm">{elem.phone}</p>
              </div>

            </div>

            <button onClick={(e)=>{
              deleteContact(e.target.id)
            }} id={idx} className="text-red-500 hover:text-red-700">
              Delete
            </button>

          </div>

        </div>})}

      </div>

    </div>
  );
};

export default App;