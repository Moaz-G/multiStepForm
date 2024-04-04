import { useState } from "react"
import "./shadow.css"

type data = {
  fname: string
  lname: string
  age: number
  state: string
  city: string
  zip: number
  street: string
  uemail: string
  upass: string
}


function App() {
  const [count, setCount] = useState(1)
  const [data, setData] = useState<data[]>([])

  if (data.length == 0) {
    const newDataEntry = {
      fname: "",
      lname: "",
      age: NaN,
      state: "",
      city: "",
      zip: NaN,
      street: "",
      uemail: "",
      upass: ""
    };
    setData([newDataEntry])
  }


  function handleInput(e: any) {
    const { name, value } = e.target
    console.log(name, value)
    setData(prevData =>  prevData.map((indivData) => {return ({ ...indivData , [name]:value})}))
  }
  
  function handleSumbit(e:any){
   console.log(data)
    if (count < 3) {
    e.preventDefault();
    setCount(count + 1)
  }
  else {
    e.preventDefault();
    alert(`Succesfully sumbited`)
  }

  }
 

  return (
    <>

      <div className="flex flex-col items-center mt-4">
      <form  onSubmit={(e) => handleSumbit(e)} className="flex flex-col w-96 px-2.5 py-2.5 card bg-white border rounded border-stone-300 border-solid">
      <span className="text-end w-full	">{count}/3</span>
        {count == 1 &&
          data.map((indiData, index) => {
            return (
              <div key={count} className="flex-col flex">
                <label htmlFor="fname">First Name </label>
                <input type="text" name="fname" id="fname" onChange={(e) => handleInput(e)} value={indiData.fname} className=" border border-solid border-stone-400" required/>
                <label htmlFor="lname">Last Name </label>
                <input type="text" name="lname" id="lname" onChange={(e) => handleInput(e)} value={indiData.lname} required/>
                <label htmlFor="age">Age </label>
                <input type="number" name="age" id="age" onChange={(e) => handleInput(e)} value={indiData.age} required/>
              </div>
            )
          })
        }
        {count == 2 &&
          data.map((indiData, index) => {
            return (
              <div key={index} className="flex-col flex">
                <label htmlFor="street">Street </label>
                <input type="text" name="street" id="street" onChange={(e) => handleInput(e)} value={indiData.street} required/>
                <label htmlFor="city">City </label>
                <input type="text" name="city" id="city" onChange={(e) => handleInput(e)} value={indiData.city} required/>
                <label htmlFor="state">State </label>
                <input type="text" name="state" id="state" onChange={(e) => handleInput(e)} value={indiData.state} required/>
                <label htmlFor="zip">Zip </label>
                <input type="number" name="zip" id="zip" onChange={(e) => handleInput(e)} value={indiData.zip} required/>
              </div>
            );
          })
        }
        {count == 3 &&
          data.map((indiData, index) => {
            return (
              <div key={index} className="flex-col flex">
                <label htmlFor="uemail">Email </label>
                <input type="email" name="uemail" id="uemail" onChange={(e) => handleInput(e)} value={indiData.uemail} required/>
                <label htmlFor="upass">Password </label>
                <input type="password" name="upass" id="upass" onChange={(e) => handleInput(e)} value={indiData.upass} required/>
              </div>
            );
          })
        }

      <div className="text-end">    
        <button type="submit"   className="mt-2 py-1.5 px-1.5 text-white bg-sky-400 border rounded border-solid border-transparent hover:bg-white hover:text-sky-400 hover:border-black">{count < 3 ? "Next" : "Finish"}</button>
        {(count == 2 || count == 3) && <button type="button"  onClick={() => setCount(count - 1)}  className=" mt-2 ml-2 py-1.5 px-1.5 text-black bg-white border rounded border-black border-solid hover:bg-gray-700 hover:text-white">Back</button>}
      </div>
      </form>
    </div>
    </>
  )
}


export default App
