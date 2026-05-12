import { useState} from 'react'
import './App.css'
import { Button, BookReader, FocusInput, ShoppingCart, PhoneBook, Modal } from './components'
import { useFetch } from './hooks'
import { GlobalProvider } from './context/global.context.tsx'
import { useModalContext } from './components/Modal/context/ModalContext.tsx'

interface Jobs {
  id: string,
  titulo: string
}

const url = "https://04-express-nine.vercel.app/jobs"

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Chanchito')

  const {setState} = useModalContext()

  const { data, error, loading} = useFetch<Jobs[]>(url)

  const gato = {
    nombre: 'Miumiu',
    color: 'gris',
    test: {

    }
  }

  const openModal = () => {
    setState(true)
  }

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

      <section className="flex flex-col gap-2 mx-auto w-7xl py-4">
          <FocusInput></FocusInput>
      </section>

      <section className="flex flex-col gap-2 mx-auto w-7xl py-4">
          <ShoppingCart></ShoppingCart>
      </section>

      <section className="flex flex-col gap-2 mx-auto w-7xl py-4">
          <PhoneBook></PhoneBook>
      </section>

      <Modal>
          <h2 className='text-3xl font-bold'>Hola Andres</h2>
          <h3 className='text-2xl'>Saludos!!</h3>
        </Modal>

      <section className="flex flex-col gap-2 mx-auto w-7xl py-4">
        <div>
          <button onClick={openModal} className='bg-blue-600 text-lg font-bold text-amber-50 rounded-md p-2 hover:bg-blue-900 active:bg-blue-500 mr-2'>
            Abrir Modal 
            {/* {gato.test.hijo.nombre} */}
          </button>
        </div>
      </section>
    </GlobalProvider>
  )
}

export default App
