import React,{useState} from 'react';
import styled from '@emotion/styled'

import {getDifference, getBrand, getPlan} from './../helper'

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`

const Label = styled.label`
    flex: 0 0 100px
`

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`

const InputRadio = styled.input`
    margin:0 1rem;
`

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        cursor: pointer;
        background-color: #26C6DA;
    }
`

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`


const Form = ({saveSummary}) => {

    const [data, saveData] = useState({
        brand: '',
        year: '',
        plan: ''
    })
    const [error, errorHandling] = useState(false)

    //Extract values
    const { brand, year, plan } = data
    
    //Read form data and update State
    const getInfo = e => {
        saveData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    //Submit form
    const handleSubmit = e => {
        e.preventDefault()

        if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            errorHandling(true)
            return
        }

        errorHandling(false)

        //base 2000
        let result = 2000

        // obtain year difference
        const difference = getDifference(year)

        //3% each year
        result -= ((difference * 3) * result) / 100

        //Americano 15% Asiatico 5% Europeo 30%
        result = getBrand(brand) * result
        
        //Basico +20% Completo +50%
        const incrementPlan = getPlan(plan)
        result = parseFloat( incrementPlan * result).toFixed(2)

        //Total
        saveSummary({
            price: result,
            data
        })




    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            
            {error
            ? 
            <Error>Todos los campos son obligatorios</Error>
            :
            null}
            

            <Field>
                <Label>Marca</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getInfo}
                >
                    <option value="">--Selecione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Field>

            <Field>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getInfo}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>

            <Field>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={getInfo}
                /> Basico

                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={getInfo}
                /> Completo
                
            </Field>

            <Button type="submit">Cotizar</Button>
        </form>
     );
}
 
export default Form;