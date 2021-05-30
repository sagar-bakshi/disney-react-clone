import React, {Component} from 'react';
import styled from "styled-components";

class Details extends Component {
    render() {
        return (
            <Container>
                <BackgroundImage>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt=""/>
                </BackgroundImage>
                <ImageTitle>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="title"/>
                </ImageTitle>
                <Controls>
                    <PlayButton>
                        <img src="/images/play-icon-black.png" alt=""/>
                        <span>Play</span>
                    </PlayButton>
                    <TrailerButton>
                        <img src="/images/play-icon-white.png" alt=""/>
                        <span>Trailer</span>
                    </TrailerButton>

                    <AddButton>
                        <span>+</span>
                    </AddButton>

                    <GroupButton>
                        <img src="/images/group-icon.png" alt="Group"/>
                    </GroupButton>
                </Controls>
                <Subtitle>
                    2018, 7m, Family, Fantasy, Kids, Animation
                </Subtitle>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis cum dolor dolorum, ducimus excepturi harum illo laudantium magni numquam odio quaerat quam quisquam, rerum suscipit temporibus totam unde voluptatibus! Ad aliquid aperiam architecto atque doloribus ea itaque laborum minima molestiae quam quibusdam quos, repudiandae sunt temporibus tenetur totam ullam!
                </Description>
            </Container>
        );
    }
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const BackgroundImage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.5;

    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
`
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 30vw;
  min-width: 200px;
  margin-top: 10vh;
  
  img{
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`

const PlayButton = styled.button`
  display: flex;
  margin-right: 10px;
  height: 40px;
  align-items: center;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  background: rgb(249, 249, 249);
  letter-spacing: 1.8px;
  cursor: pointer;

  span{
    font-size: 15px;
  }
  
  &:hover{
    background: rgb(198, 198, 198);
  }
  
`
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, .3);
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);
  text-transform: uppercase;

`
const AddButton = styled.button`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0, .3);
  border: 1px solid rgb(249, 249, 249);
  cursor: pointer;
  margin-right: 10px;
  
  span{
    font-size: 18px;
    color: rgb(249, 249, 249);
  }
  
  &:hover{
    background: rgba(0, 0, 0, .8);

  }
`
const GroupButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`

const Subtitle = styled.div`
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1.2px;
`
const Description = styled.div`
  margin-top: 20px;
  width: 50vw;
  letter-spacing: 1.2px;
  color: rgb(249,249,249);
  line-height: 23px;
`

export default Details;
