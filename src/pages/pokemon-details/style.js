import styled from 'styled-components';

export const PokemonDetailsStyle = styled.section`
    padding: 0 15px 15px 15px;

    .back {
        display: inline-block;
        margin-top: 40px;
        font-size: 26px;
        color: #fff;
        font-weight: 500;
    }

    .cardbase {
        background: #fff;
        border-radius: 6px;
        padding: 15px;
        margin-top: 15px;

        h2 {
            font-size: 18px;
            font-weight: 700;
            margin-top: 0;
            margin-bottom: 10px;
        }
    }

    .base {
        .img {
            text-align: center;

            img {
                width: 250px;
                max-width: 100%;
                height: auto;
            }

            h3 {
                text-align: center;
                margin-top: 10px;
                margin-bottom: 0;
                color: #333;
                font-weight: 700;
                text-transform: capitalize;
            }
        }
    }

    .basicInfo {
        p {
            margin-bottom: 2px;
            text-transform: capitalize;
            color: #888;
            font-size: 0.8em;
        }

        h4 {
            color: #333;
        }

        .cap {
            text-transform: capitalize;
        }
    }

    .stats {
        p {
            margin-bottom: 2px;
            text-transform: capitalize;
            color: #888;
            font-size: 0.8em;
        }

        .barra {
            margin-bottom: 7px;

            :last-child {
                margin-bottom: 0;
            }
        }
    }

    .moves {
        p {
            margin-bottom: 2px;
            text-transform: capitalize;
            color: #888;
            font-size: 0.8em;
        }
    }
`