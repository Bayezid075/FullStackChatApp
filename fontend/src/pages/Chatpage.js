import React, { useEffect } from 'react'
import axios from 'axios'



function Chatpage() {
      // const [chatsData, setChatsData] = useState([])
      const fetchData = async () =>{
        const data = await axios.get("/api/data")
      console.log(data)
      
    }
    useEffect(()=>{
        fetchData()
    }, [])
     
  return(
    <>
    {/* {chatsData.map(chats => <div> {chats} </div>)} */}
    </>
  )
}

export default Chatpage