import { useEffect,useState } from 'react'
export const Avatar = () => {
    //usar usestate
    const [mostrar,setMostrar] = useState([])
//  ejecutar funcion desde useEffET
    useEffect(() => {
      console.log('useEffet')
      ObtenerDatos()
    },[])
//obtener datos de la api
    const ObtenerDatos = async () =>{
        const Data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await Data.json()
        setMostrar(users)
    }

    return(
        <>
        <h1 className='text-center'>Mostrando Datos</h1>
        
    <ul>
        
        {
            mostrar.map((item) =>
            <p className='text-center lead ' key={item.id}>{item.name} - {item.email}</p>
            )
        }
    </ul>

        </>

    )
}