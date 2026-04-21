import { useState } from 'react'
import './App.css'
import { Button } from './components'
import { useFetch } from './hooks'

interface Jobs {
  id: string,
  titulo: string
}

const url = "https://04-express-nine.vercel.app/jobs"

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Chanchito')

  const { data, error, loading} = useFetch<Jobs[]>(url)


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
    return <div>UPS... hubo un error: {error.message}</div>
  }

  return (
    <>
      <section className="flex flex-2 gap-2 mx-auto w-7xl">
        <Button label={`Count is: ${count}`} parentMethod={countMore}/>
        <Button label={`Name is: ${name}`} parentMethod={changeName}/>
      </section>
      <section className="flex flex-2 gap-2 mx-auto w-7xl">
        <ul>
          {data?.map((job: Jobs) => (
            <li key={job.id}>{job.titulo}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default App
