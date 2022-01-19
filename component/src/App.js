import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Console from './components/Console';
import Flex from './components/Flex';
import Title from './components/Title';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`

const App = () => {
  return <AppWrapper>
    <Flex justify="center">
    <Title color={"red"}> Console cmd 2022.</Title>
    </Flex>
    <Flex direction="column">
    <Console/>
    <Button outlined color='green' align="flex-end">Send</Button>
    </Flex>
    
  </AppWrapper>;
};

export default App;
