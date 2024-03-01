import React from  "react"


const User=({name, location,email})=>{
    const[count, setCount] = React.useState(0);
    const[count1, setCount1]=React.useState(1);
//  React.useEffect(()=>{
//     const swapna=setInterval(()=>{
//         console.log('hi swapna')
//     }, 1000)
//     return(()=>{
//         clearInterval(swapna)
//     })
//  })
    return(
        <div className="border-2 border-solid border-lime-400 m-3 p-3 w-[230px] h-50 bg-lime-100  font-semibold  ">
        <h1>Count:{count}</h1>
        <h1>Count:{count1}</h1>
        <div className="">{name}</div>
        <div className="">{location}</div>
        <div className="">{email}</div>
    </div>
    )
}

 

export default User