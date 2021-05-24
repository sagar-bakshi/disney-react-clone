import React, {Component} from 'react';
import styled from "styled-components";
import ImgSlider from './ImgSlider'
import Viewers from "./Viewers";

class Home extends Component {
    render() {
        return (
            <Container>
                <ImgSlider/>
                <Viewers/>
            </Container>
        );
    }
}

const Container = styled.main`
  
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.2vw + 5px);
  position: relative;
  overflow-x: hidden;
  
  &:before{
    background: url("/images/home-background.png") center center / cover 
    no-repeat fixed;
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    
  }
  
`

export default Home;
