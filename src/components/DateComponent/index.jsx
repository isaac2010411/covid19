import React from 'react';  
import moment from 'moment';
import { Container, Col, Form, Button } from 'react-bootstrap';



const DateComponent=({setDataInDay , code })=>{

    let lastYear = moment(2019 , 'YYYY')._i;
    let yearCurrent = moment(2020 , 'YYYY')._i;
 
    const viewData =async ()=>{
        const date = checkDate();
        if(date){
            if(date.year < lastYear || date.year > yearCurrent){
                return document.getElementById('info_user').innerHTML='Check year';
            }
            else{
                if(date.day <= 31  &&  date.month <= 12 ){
                    let isValidDate = moment( `${date.year}-${date.month}-${date.day}`,'YYYY-MM-DD').isValid();
                    console.log(isValidDate)
                    if(!isValidDate){
                        document.getElementById('info_user').innerHTML='invalid Date'
                        console.log('no')
                    }
                    else{
                        console.log(date)
                        document.getElementById('info_user').innerHTML=''
                        await fetch(`https://covid-19-data.p.rapidapi.com/report/totals?date-format=YYYY-MM-DD&format?json&date=${date.year}-${date.month}-${date.day}`,{
                                headers:{
                                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                                "x-rapidapi-key": "d9740b60ebmshc60a112f10d9441p14501bjsn3e0facebbf9a",
                                "useQueryString": true
                                }
                            })
                        .then((data)=>data.json())
                        .catch(error=>error)
                        .then(data=>setDataInDay(data))
                    }
                    
                }
                else{
                    return document.getElementById('info_user').innerHTML='Check data provider';  
                }
            }
        }
    }
  
    return(
        <Container fluid style={{padding:'10px'}}>
             <h4>Historial cases</h4>
            <Form style={{display:'flex'}}>
                <Form.Row style={{width:'100%'}}>
                    <Form.Group as={Col} controlId="day">
                    <Form.Label>Day</Form.Label>
                    <Form.Control placeholder="DD"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="month">
                    <Form.Label>Month</Form.Label>
                    <Form.Control placeholder="MM"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control placeholder="YYYY"/>
                    </Form.Group>
                </Form.Row>
            </Form>
            <p id='info_user'></p>
            <Button variant="outline-secondary" type='submit' onClick={()=>{viewData()}} block> Search </Button>
        </Container>
    )
};


function checkDate() {

    let parrap =document.getElementById('info_user');
    let noDate = [];

    let date = {
        year: document.getElementById('year').value,
        month:document.getElementById('month').value,
        day: document.getElementById('day').value  
    };

    for(let item in date){
      
        if(date[item] === ''){
            noDate.push(item)
        }
    }

    if(noDate.length>0){
        parrap.innerHTML =`Check ${noDate}` 
    }
    else{
        parrap.innerHTML =`` 
        return date
    }
    
}

export default DateComponent;