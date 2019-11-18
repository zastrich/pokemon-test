import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import { PokemonDetailsStyle } from "./style"

import { FaAngleLeft } from "react-icons/fa"

import 'bootstrap/dist/css/bootstrap.min.css'
import { ProgressBar } from 'react-bootstrap'

export default function PokemonDetails({ match }){
    let { id } = match.params

    let [details, setDetails] = useState({
        name: "Loading ...",
        height: 0,
        weight: 0, 
        types: [],
        abilities: [],
        moves: [],
        game_indices: [],
        stats: []
    })

    /* Executa busca dos detalhes do pokemon ao iniciar a página */
    useEffect(() => {
        (async function LoadPokemonDetail(){
            let pokemonDetailReturn = await api.get(`pokemon/${id}`)
            
            if(pokemonDetailReturn.status === 200 && "abilities" in pokemonDetailReturn.data)
                setDetails(pokemonDetailReturn.data)

            return true
        })()
    }, [id])

    let variants = ["", "danger", "warning", "info", "primary", "success", "success", "success", "success", "success", "success"]

    return <PokemonDetailsStyle>
        <div className="row">
            <div className="base col-xs-12 col-sm-6 col-lg-3">
                <div className="cardbase">
                    <div className="img">
                        <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="imagem" />
                        <h3>{details.name}</h3>
                    </div>
                </div>
            </div>
            <div className="basicInfo col-xs-12 col-sm-6 col-lg-3">
                <div className="cardbase">
                    <h2>Basic informations:</h2>
                    <div className="row">
                        <div className="col-sm-6">
                            <p>Height:</p>
                            <h4>{(details.height/10).toFixed(2)} m</h4>
                        </div>
                        <div className="col-sm-6">
                            <p>Weight:</p>
                            <h4>{(details.weight/10).toFixed(2)} kg</h4>
                        </div>
                    </div>
                    {details.types.length > 0 &&
                        <div className="row">
                            <div className="col-sm-12">
                                <p>Type:</p>
                                <h4 className="cap">{details.types.map((v,i) => i !== (details.types.length-1) ? `${v.type.name}, ` : v.type.name)}</h4>
                            </div>
                        </div>           
                    }
                    {details.abilities.length > 0 &&
                        <div className="row">
                            <div className="col-sm-12">
                                <p>Abilities:</p>
                                <h4 className="cap">{details.abilities.map((v,i) => i !== (details.abilities.length-1) ? `${v.ability.name}, ` : v.ability.name)}</h4>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="stats col-xs-12 col-lg-6">
                <div className="cardbase">
                    <h2>Stats:</h2>
                    {details.stats.map(v => {
                        let i = Math.ceil(v.base_stat*6/100)-1

                        return <>
                            <p>{v.stat.name}</p>
                            <ProgressBar now={v.base_stat} className="barra" variant={variants[i]} animated label={`${v.base_stat}`} />
                        </>
                    })}
                </div>
            </div>
        </div>
        <div className="row">            
            <div className="moves col-xs-12 col-lg-6">
                <div className="cardbase">
                    <h2>Moves:</h2>
                    <p>{details.moves.map((v,i) => i !== (details.moves.length-1) ? `${v.move.name}, ` : v.move.name)}</p>
                </div>
            </div>
            <div className="moves col-xs-12 col-lg-6">
                <div className="cardbase">
                    <h2>Game indices:</h2>
                    <p>{details.game_indices.map((v,i) => i !== (details.game_indices.length-1) ? `${v.version.name}, ` : v.version.name)}</p>
                </div>
            </div>
        </div>
        <Link to="/" className="back"><FaAngleLeft /> Back to Home</Link>
    </PokemonDetailsStyle>
}