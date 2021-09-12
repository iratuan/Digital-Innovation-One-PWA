import React, { Fragment, memo } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";



const Title = styled.h1`
    font-size:2rem;
    line-height: 3rem;
    margin-top:2rem;

    &:hover{
        cursor:pointer;
        color: blue;
    }

    @media(max-width: 780px) {
        text-align:center
    
      }
`;

const MetaData = styled.h6`
    font-size:11px;
    text-transform:uppercase;
    color: gray;
    @media(max-width: 780px) {
        text-align:center
    
      }
`;

const Principal = styled.div`
     display:flex;
     flex-direction: row;
     margin-top:2rem;
     margin-bottom:4rem;

     @media(max-width: 780px) {
        flex-direction:column;
        align-items:center;
    
      }
`;

const ImagePrincipal = styled.img`
    margin-right: 2rem;
    max-width:480px;
    height: auto;

    @media(max-width: 780px) {
       margin: 0 auto;
      }
`;

const Description = styled.div`
      line-height: 1.75rem;
      font-family:sans-serif;
      font-weight: 300;
      padding-top: 2rem;
      padding-bottom: 2rem;
      @media(max-width: 780px) {
        padding:2rem;
    
      }
`;

const CardNews = ({ article }) => {

    const history = useHistory();

    const handleOpenUrl = (id) => {
        history.push(`/world/${id}`)
    }

    return (<Fragment key={article.id}>
        <Title onClick={()=> handleOpenUrl(article.id)}>{article.title}</Title>
        <MetaData>Publicado em: {article.datePublished} por {article.provider.name}</MetaData>
        <Principal>
            <ImagePrincipal src={article.image.url} />
            <Description>{article.body}</Description>
        </Principal>
    </Fragment>)
}

export default memo(CardNews)