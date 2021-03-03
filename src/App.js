import React, {useState} from 'react';
import styled from '@emotion/styled'

import Header from './components/Header'
import Form from './components/Form'
import Summary from './components/Summary'

const Container =styled.div`
    max-width: 600px;
    margin: 0 auto;
`

const FormContainer =styled.div`
    background-color: #FFFFFF;
    padding: 3rem;
`


function App() {

  const [summary, saveSummary] = useState({
    price: 0,
    data: {
      brand: "",
      year: "",
      plan: ""
    }
  })
  
  const { data } = summary

  return (
    <Container>
      <Header 
        title="Cotizador de seguros"
      />
      
      <FormContainer>
        <Form 
          saveSummary = {saveSummary}
        />
        <Summary 
          data={data}
        />
      </FormContainer>
    </Container>  
  );
}

export default App;
