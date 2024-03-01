const Contact=()=>{
    return(
        <div className=" m-10">
            <h1 className="bg-lime-900 text-white font-black text-2xl text-center p-4">CONTACT US</h1>
            <br />
            <div className=" h-[300px] w-[450px] border-2 border-solid bg-lime-300  m-auto p-10 rounded-md">
           <label htmlFor="name" className="bg-lime-200 font-bold text-lg p-2 rounded-sm m-auto ml-10">NAME:</label>
           <input type="text" className="border-[1px] border-solid border-lime-400 bg-lime-100 rounded-md p-2 m-2"  placeholder="YOUR NAME"/>
           <br />
         
           <label htmlFor="number" className="bg-lime-200 font-bold text-lg p-2 rounded-sm m-auto">MOBILE NO:</label>
           <input type="text" className="border-[1px] border-solid border-lime-400 bg-lime-100 rounded-md p-2 m-2"  placeholder="YOUR MOBILE NUMBER"/>
           <br />
         
           <label htmlFor="msg" className="bg-lime-200 font-bold text-lg p-2 rounded-sm m-auto ml-5">MESSAGE:</label>
           <input type="text"  className="border-[1px] border-solid border-lime-400 bg-lime-100 rounded-md p-2 m-2"  placeholder="MESSAGE"/>
           <br />
        
           <button className="bg-lime-900 text-white text-lg font-bold p-2  text-center ml-[150px] mt-3 rounded-lg cursor-pointer">SUBMIT</button>
            </div>            
        </div>
    )
}

export default Contact