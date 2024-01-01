import React, { useEffect, useState } from 'react'

function GitHub() {

    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/meetayush2016')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
        

    },[])

  return (
    <div >
        Github followers {data.followers}
        <img src={data.avatar_url} alt="" />
      
    </div>
  )
}

export default GitHub  
