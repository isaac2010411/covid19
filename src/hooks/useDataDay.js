

export const UseDataDay =(date)=>{
  fetch("https://covid-19-data.p.rapidapi.com/report/totals?date-format=YYYY-MM-DD&format?json&date=2020-04-01",{
        headers:{
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "d9740b60ebmshc60a112f10d9441p14501bjsn3e0facebbf9a",
        "useQueryString": true
        }
    })
  .then((data)=>data.json())
  .catch(error=>error)
  .then((data=>data))
}