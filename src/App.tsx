import { useState} from 'react'
import './App.css'
import { Button } from './components'
import { useFetch } from './hooks'
import { GlobalProvider } from './context/global.context.tsx'
import { BookReader, FocusInput } from './components/UseRef'

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
    <GlobalProvider>
      <section className="flex flex-2 gap-2 py-4 mx-auto w-7xl">

        <Button parentMethod={countMore}>
          <Button.Label label='Click me' state={count}></Button.Label>
        </Button>

        <Button parentMethod={changeName}>
          <Button.Label label='Change my name' state={name}></Button.Label>
        </Button>

      </section>
      
      <section className="flex flex-col gap-2 mx-auto w-7xl">
        <h3 className='text-2xl font-bold'>Fetching de datos</h3>
        <ul>
          {data?.map((job: Jobs) => (
            <li key={job.id}>{job.titulo}</li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-2 mx-auto w-7xl py-4">
        <BookReader></BookReader>
      </section>

      <section>
          <FocusInput></FocusInput>
      </section>
    </GlobalProvider>
  )
}

export default App
