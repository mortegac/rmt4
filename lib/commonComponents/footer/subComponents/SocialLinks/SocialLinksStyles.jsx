import styled from 'styled-components'

export const SocialLinksContainer = styled.div`
width: 25%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
font-family: 'Nunito Sans', sans-serif;
h3 {
    font-size: 16px;
    line-height: 24px;
    color:var(--Text-primary);
    font-weight: 700;
    letter-spacing: .4px;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 24px;    
}
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        li {
            list-style: none;
            width: 50px;
            display: flex;
            flex-direction: row;
            align-items; center;
            justify-content: flex-start;
            transition: all .3s ease;
            transform: scale(1);
    
            &:hover {
                transform: scale(1.1);
                }
            &:not(:last-child){
                margin-right: 20px;
            }
            a {
                text-decoration: none;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
            }
        }
}
`