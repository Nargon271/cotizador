import React from 'react';
import styled from '@emotion/styled'
import {capitalize} from '../helper'

const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: white;
    margin-top: 1rem;
`


const Summary = ({data}) => {
    
    const {brand, year, plan} = data

    if (brand ==="" || year === "" || plan === "") return null
    
    return (
    <SummaryContainer> 
        <h2>Resumen de cotización</h2>
        <ul>
                <li>Marca: {capitalize(brand)}</li>
                <li>Plan: {capitalize(plan)}</li>
                <li>Año del vehículo: {year}</li>
        </ul>
    </SummaryContainer>
    );
}
 
export default Summary;