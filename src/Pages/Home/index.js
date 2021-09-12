import React, { memo, useEffect, useState } from "react";
import CardNews from "../../components/CardNews";
import styled from "styled-components";
import Api from "../../api";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 auto;
    padding:0;
    background: #f0f0f0;
`;

const Wrapper = styled.div`
    width:960px;
    margin:0 auto;

    @media(max-width: 780px) {
       width:100%;
    
      }
`;

const Main = styled.div`
    
`;


const Menu = styled.nav`

`;

const Home = () => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)

    const handleNews = (articles) => {
        setLoading(false)
        setNews({
            world: articles[0]?.value.value,
            economy: articles[1]?.value.value,
            technology: articles[2]?.value.value,
        })

        console.log(news)
    }

    useEffect(async () => {



        setLoading(true)
        Promise.allSettled([
            Api.getNews('world'),
            Api.getNews('economy'),
            Api.getNews('technology')
        ])
            .then(handleNews)
    }, [])

    if (loading) return <div>Carregando</div>

    return (

        <Container>
            <Wrapper>
                <Main>
                    {news?.world?.map(article => (
                        <CardNews key={article.id} article={article} />
                    ))}
                </Main>
            </Wrapper>
        </ Container>)
}
    ;
export default memo(Home);