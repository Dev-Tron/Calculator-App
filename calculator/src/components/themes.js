import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
      body {
       font-family: 'League Spartan', sans-serif;
       background-color: ${Props => Props.theme.mainBackground};
  }
`

const Container = styled.div`
  padding: 7%;
`

const ThemeChanger = styled.div`
  display: flex;
  
` 

const Logo = styled.h1`

`

const ThemeLabel = styled.p`

`

const ThemeBox = styled.div`
  position: relative;
`

const Input = styled.input.attrs({ type: "radio" })`
  
`

const Label = styled.label`
  
`

  function ThemeToggler() {
    
   
  return (
      <Container>
        <GlobalStyle />
          <header>
            <ThemeChanger>
              <Logo>
                calc
              </Logo>
              <ThemeLabel>
                THEME
              </ThemeLabel>
              <ThemeBox>
                <Label>
                  1
                  <Input name="options" value={"darkmode"} checked/>
                </Label>
                <Label>
                  2
                  <Input name="options" value={"lightmode"} />
                </Label>
                <Label>
                  3
                  <Input name="options" value={"custommode"} />
                </Label>
              </ThemeBox>
            </ThemeChanger>
          </header>
  
      </Container>
    );
  }
  
  export default ThemeToggler;