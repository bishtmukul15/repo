import React, { useEffect, useState } from 'react'

const Github = () => {
  const[data,setdata]=useState([])
  useEffect(()=>{
fetch('http://api.github.com/users/hiteshchoudhary')
.then(response=>response.json())
.then(data=>{
  console.log(data);
  setdata(data)
})

  },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white'>Github followers:{data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
