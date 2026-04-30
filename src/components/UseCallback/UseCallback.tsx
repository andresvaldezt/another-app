// Ejemplo:
// Supongamos que tienes un numero de telefono al que llamas con frecuencia.
// En vez de marcarlo continuamente lo vamos a almacenar en los contactos del telefono
// a menos que el numero cambie siempre utilizo el mismo contacto

import { memo, useCallback, useState } from "react"

interface Contact {
    id: number,
    name: string,
    phone: string
}

interface ContactProps {
    contact: Contact,
    onCall: (phone: string) => void
}

const buttonStyles = 'bg-blue-600 text-lg font-bold text-amber-50 rounded-md p-2 hover:bg-blue-900 active:bg-blue-500 mr-2'

const ContactCard = memo(({ contact, onCall }: ContactProps) => {
    console.log(`Renderizando contacto ${contact.name}`)


    return(
        <div>
            <h3 className="text-2xl">Name: {contact.name}</h3>
            <p>Phone: {contact.phone}</p>
            <button className={buttonStyles} onClick={() => onCall(contact.phone)}>Llamar</button>
        </div>
    )
})

export const PhoneBook = () => {

    const [contacts, setContacts] = useState<Contact[]>([
            {id: 1, name: 'Andres', phone: '3314468755'},
            {id: 2, name: 'Marin', phone: '3314468755'},
            {id: 3, name: 'Joel', phone: '3314468755'}
        ])

    const [log, setLog] = useState<string>('')

    const makeCall = useCallback((phone: string) => setLog(`Llamando al ${phone}`), [])

    const addContact = () => {
        const newContact = {
            id: contacts.length + 1,
            name: `Contacto ${contacts.length + 1}`,
            phone: `${Math.floor(1000000000 + Math.random() * 90000)}`
        }
        setContacts([...contacts, newContact])
    }

    return(
        <div>
            <h2 className="text-2xl font-bold">Agenda de Contactos</h2>
            <button className={buttonStyles} onClick={addContact}>Add Contact</button>
            <ul>
                {contacts.map(contact => (
                    <ContactCard key={contact.id} contact={contact} onCall={makeCall}></ContactCard>
                ))}
            </ul>
            <p>{log}</p>
        </div>
    )
}