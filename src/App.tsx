import { useState, useEffect, } from 'react'
import './App.css'
import { Button } from './components'

interface Jobs {
  id: string,
  titulo: string
}

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Chanchito')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

    const consoleLoader = (loadingValue: boolean) => {
    setLoading(loadingValue)
    console.info(loading)
  }

  const fetchData = async () => {
    consoleLoader(true)
    try{
      const response = await fetch('https://04-express-nine.vercel.app/jobs')
      
      if(!response.ok){
        throw new Error("Error al obtener datos")
      }

      const jsonData = await response.json();
      setData(jsonData.data)
    }catch(err){
      setError(err as string)
    }finally{
      consoleLoader(false)
    }
  }


  useEffect(() => {
    fetchData()
  }, [])

  function countMore(){
    return setCount((count) => count + 1)
  }

  function changeName(){
    return setName('Andres')
  }

  if(loading){
    return <div>CARGANDO...</div>
  }

  if(error){
    return <div>UPS... hubo un error: {error}</div>
  }

  return (
    <>
      <section className="flex flex-2 gap-2 mx-auto w-7xl">
        <Button label={`Count is: ${count}`} parentMethod={countMore}/>
        <Button label={`Name is: ${name}`} parentMethod={changeName}/>
      </section>
      <section className="flex flex-2 gap-2 mx-auto w-7xl">
        <ul>
          {data.map((job: Jobs) => (
            <li key={job.id}>{job.titulo}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default App
