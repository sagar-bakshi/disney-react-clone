import React, {Component} from 'react';
import styled from "styled-components";

class Home extends Component {
    render() {
        return (
            <Container>
                <h1>Home</h1>
            </Container>
        );
    }
}

const Container = styled.main`
  
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.2vw + 5px);
  
  &:before{
    background: url("/images/home-background.png") center center;
  }
  
`

export default Home;
