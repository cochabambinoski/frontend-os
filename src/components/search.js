import React, {useState, useEffect} from "react";

export default function Search(){
    const [urlp, setUrl] = useState()
    const [tipo, setTipo] = useState("front_default")
    const [pokemon, setSearch] = useState()
    const fetchApi = async (pokemon,tipo) => {
        const response = await fetch(`http://localhost:3000/api/pokemon/{pokemon}&{tipo}`)
        const responseJSON = await response.json()
    }

    useEffect(()=>{
        urlp= responseJSON
    }, [])

    return (
        <div>
            <button onClick={() => setSearch(fetchApi(pokemon,tipo))}>
                buscar
            </button>
            <image url={urlp}></image>
            <p>Busca tu pokemon</p>
        </div>
    )
} 