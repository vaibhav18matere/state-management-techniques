import {useState} from "react";

const UseStateListAppend = () => {
     const [list, setList] = useState(["Vaibhav", "Shubham", "Prasad", "Sid"]);

     const [name, setName] = useState('');

     const addToNAmeListHandler = () => { 
          setList([...list, name]);
          //added new item to the list here.
          setName('');
          // set name input field to blank so that we can add list items again 
     };

     return (
          <>
               <hr/>
               <h3 className="mt-4 mb-4">2. Appending list</h3>
               <label htmlFor="name">Add name to the list:</label>
               <input
                    className='border border-gray-400
                    rounded ml-4'
                    placeholder="&nbsp;&nbsp;add new name"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
               />
               <button className='border border-stone-500 p-2 m-2'
               onClick={addToNAmeListHandler}
               >
                    Append Name List
               </button>
               <ul className="mb-4">
               {
                    list.map((name) => (
                    <li key={name}>{name}</li>
                    ))
               }
               </ul>
               {/* {name} */}
          </>
  )
};

export default UseStateListAppend;
