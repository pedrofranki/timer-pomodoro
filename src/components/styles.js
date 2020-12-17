import styled from 'styled-components'


export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1024px;
    border-bottom: 1px solid rgba(0,0,0,.15);
    max-width: 620px;
`

export const StyledIcon = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: #fff;
    font-size: 20px;
    svg{
        margin-right: 5px;
    }
    h1{
        font-weight: 600;
        font-size: 20px;

    }

`

export const StyledList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    li {
        display: inline-block;
        margin-right: 10px;
        color: #fff;

       

        a{
            font-family: inherit;
            font-weight: 300;
            font-size: 0.75rem;
            background-color: rgba(255,255,255, .2);
            padding: 0.4rem 0.5rem;
            border-radius: 5px;
            display: flex;
            align-items: center;

            svg {
                margin-right: 2px;
                font-size: 1.25rem;
                padding: 0
            }
        }
    }   

`