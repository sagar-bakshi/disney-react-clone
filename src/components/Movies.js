import React, {Component} from 'react';
import styled from "styled-components";


class Movies extends Component {
    render() {
        return (
            <Container>
                <h4>Recommended for you</h4>
                <Content>
                    <Wrap>
                        <img src="https://picsum.photos/536/354" alt="img"/>
                    </Wrap>
                    <Wrap>
                        <img src="https://picsum.photos/536/404" alt="img"/>
                    </Wrap>
                    <Wrap>
                        <img src="https://picsum.photos/532/354" alt="img"/>
                    </Wrap>
                    <Wrap>
                        <img src="https://picsum.photos/531/354" alt="img"/>
                    </Wrap>
                    <Wrap>
                        <img src="https://picsum.photos/531/354" alt="img"/>
                    </Wrap>
                    <Wrap>
                        <img src="https://picsum.photos/531/354" alt="img"/>
                    </Wrap>
                    <Wrap>
                        <img src="https://picsum.photos/531/354" alt="img"/>
                    </Wrap>
                    <Wrap>
                        <img src="https://picsum.photos/531/354" alt="img"/>
                    </Wrap>
                </Content>
            </Container>
        );
    }
}

const Container = styled.div`
  overflow-x: auto;
  
  h4{
    margin: 10px 0 20px 0;
  }
    
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  grid-gap: 20px;
  padding-top: 10px;
  overflow: hidden;
  
`

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;  
  
    img{
      height: 150px;
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  
  &:hover{
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
    rgb(0 0 0 / 73%) 0 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`
export default Movies;


