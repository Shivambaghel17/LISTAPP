import React,{useState,useEffect} from "react";
import './App.css';

function App() {
  const [lists,setLists] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1' ).then((res) => {
      if (res.ok)  {
        return res.json()
      }
      throw res
    })
    .then(data => {
      console.log('====================================');
      console.log(data)
      console.log('====================================');
      setLists(data.data)
    })
    .catch((err) => {
        setError(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  const [links,setLinks] = useState([])
  const [process,setProcess] = useState(true)
  const [mistake,setMistake] = useState(null)




  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2' ).then((res) => {
      if (res.ok)  {
        return res.json()
      }
      throw res
    })
    .then(data => {
      console.log('====================================');
      console.log(data)
      console.log('====================================');
      setLinks(data.data)
    })
    .catch((err) => {
        setMistake(err)
    })
    .finally(() => {
      setProcess(false)
    })
  }, [])


  if (loading) return "Loading ...."
  if (error) return "Something went wrong ...."

  if (process) return "Loading ...."
  if (mistake) return "Something went wrong ...."

  return (
    <div>

      <h1>LIST OF FETCHAPI</h1>
      
       {lists.map((list, index) => {
        return(
          <h2 key={index}>
          <div className="div1">
          <img src={list.avatar} alt="" />
         <i> FIRST NAME-{list.first_name}<br/>
          LAST NAME-{list.last_name}<br/>
          EMAIL-{list.email}<br/></i>
          </div>
          </h2>
        )
      })} 

{links.map((link, input) => {
        return(
          <h2 key={input}>
          <div className="div1">
          <img src={link.avatar} alt="" />
         <i> FIRST NAME-{link.first_name}<br/>
          LAST NAME-{link.last_name}<br/>
          EMAIL-{link.email}<br/></i>
          </div>
          </h2>
        )
      })} 
    </div>
  )
}

export default App;

