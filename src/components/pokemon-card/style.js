import styled from 'styled-components';

export const PokemonCardStyled = styled.div`
    margin:15px;
    position: relative;

    .MuiPaper-root:hover {
        background: #434a6f;

        .title {
            color: #fff;
        }
    }

    a {
        text-decoration: none;
    }

    .baseImg {
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-content: center;

        img {
            max-width: 100%;
            max-height: 100%;
            width: 220px;
            height: 220px;
        }
    }

    .title {
        text-align: center;
        padding-bottom: 5px;
        margin-bottom: 0;
        text-transform: capitalize;
        color: #333;
    }
`