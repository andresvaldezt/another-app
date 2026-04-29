// Ejemplo:
// Tenemos una lista de compras y ya calculaste el costo total de hacer toda la compra
// Si no agregamos nada ni tampoco cambio nada, cual es el costo total?

import { useMemo, useState } from "react";

interface Item {
    id: number;
    name: string;
    price: number;
}

export const ShoppingCart = () => {
    const buttonStyles = 'bg-blue-600 text-lg font-bold text-amber-50 rounded-md p-2 hover:bg-blue-900 active:bg-blue-500 mr-2'

    const [items, setItems] = useState<Item[]>([
        {id: 1, name:'Manzana', price: 1.5},
        {id: 2, name:'Pera', price: 2.5},
        {id: 3, name:'Leche', price: 15.0}
    ])

    const [discount, setDiscount] = useState(0)

    const totalCost = useMemo(() => 
        items.reduce((total, item) => total + item.price, 0), 
        [items]
    )

    const finalCost = useMemo(() => totalCost - discount,[totalCost, discount]);

    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            name: `Producto ${items.length + 1}`,
            price: Math.random() * 5
        }
        setItems([...items, newItem])
    }

    return(
        <div>
            <h2 className="text-2xl font-bold">Lista de compras</h2>

            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.name}: ${item.price.toFixed(2)}</li>
                    ))
                }
            </ul>

            <button className={buttonStyles} onClick={addItem}>Agregar Producto</button>

            <p>Costo total: ${totalCost.toFixed(2)}</p>
            <p>Descuento: $
                <input className="border-2 border-solid rounded-md mx-2 p-1" type="number" value={discount} onChange={(e => setDiscount(parseFloat(e.target.value) || 0))}/>
            </p>
            <p>Consto final: ${finalCost.toFixed(2)}</p>
        </div>
    )
}