import React from 'react'
import { Link } from 'react-router-dom'

import { PokemonCardStyled } from "./style"
import { Paper, Typography } from '@material-ui/core'

/* Carrega o componente que carrega imagens conforme desce a tela */
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function PokemonCard({ details }){
    let id = details.url.split("/")[6]

    return <PokemonCardStyled>
        <Paper>
            <Link to={`/details/${id}`}>
                <div className="baseImg">
                    <LazyLoadImage
                        alt={details.name}
                        effect="blur"
                        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                    />
                </div>
                <Typography gutterBottom variant="h5" component="h2" className="title">
                    #{id} - {details.name}
                </Typography>
            </Link>
        </Paper>
    </PokemonCardStyled>
}