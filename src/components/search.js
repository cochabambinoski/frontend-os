import React, {useState, useEffect} from "react";

export default function Search(){
    const [urlp, setUrl] = useState()
    const [tipo, setTipo] = useState("front_default")
    const [pokemon, setSearch] = useState()
    const fetchApi = async (poke,ti) => {
        const response = await fetch(`http://localhost:3000/api/pokemon?name=`+poke+`&imageType=`+ti)
        const responseJSON = await response.json()
        console.log(responseJSON)
        setUrl(responseJSON.sprites.front_default)
    }

/*     const addApi = async (pokemon,tipo) => {
        const response = await fetch(`http://localhost:3000/api/post/{pokemon}&{tipo}`)
        const responseJSON = await response.json()
    } */

    // useEffect(()=>{
    // }, [])

    return (
        <div>
            <input
                value={pokemon}
            />
            <button onClick={() => fetchApi(pokemon,tipo)}>
                buscar
            </button>
{/*             <button onClick={() => addApi(pokemon,tipo)}>
                agregar
            </button> */}
            <image url={urlp}></image>
            <p>Busca tu pokemon</p>
        </div>
    )
} 