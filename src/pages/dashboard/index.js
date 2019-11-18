import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import { PokemonsList } from "./style"

/* Carrega o componente que renderiza cada pokemon da lista */
import PokemonCard from '../../components/pokemon-card'

export default function Dashboard(){
    let [pokemons, setPokemons] = useState([])

    /* Executa busca dos pokemons ao iniciar a página */
    useEffect(() => {
        (async function LoadPokemons(){
            if(localStorage.pokemons){
                setPokemons(JSON.parse(localStorage.pokemons))
            } else {
                let pokemonReturn = await api.get('pokemon?limit=-1')
                
                if(pokemonReturn.status === 200 && Array.isArray(pokemonReturn.data.results)){
                    await localStorage.setItem("pokemons", JSON.stringify(pokemonReturn.data.results))
                    setPokemons(pokemonReturn.data.results)
                }
            }

            return true
        })()
    }, [])
    
    return <PokemonsList>
        {pokemons.map((val, i) => <PokemonCard key={i} details={val} />)}
    </PokemonsList>
}