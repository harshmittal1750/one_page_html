var cityName=document.getElementById('first_name')
var submit=document.getElementById('submit')
submit.addEventListener('click',()=>{
async function getWeather(){
    let  result= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=9f162c4a7576a32569f4374bd5fdff7b`)
    let data= await result.json()
    return data
}
async function filterData(){
    let data= await getWeather()
    let city= await data.name
    let temp= Math.round((await data.main.temp)-273)
    let dataD=[city,temp,await data.weather[0].description,Math.round((await data.main.temp_min)-273),Math.round((await data.main.temp_max)-273),await data.main.humidity,await data.main.pressure,await data.wind.speed,(await data.wind.deg) ]
     console.log(data)
    return dataD

}
async function UIDisplay(){
    let data = await filterData()
    let symbols=[' ','\xB0C',' ','\xB0C','\xB0C',' %',' Mb',' Km/Hr','\xB0']
    console.log(data)
    let arr=document.getElementsByClassName('arr')
    for(let i=0;i<arr.length;i++){
        arr[i].textContent=await data[i]+symbols[i]
    }
 }
UIDisplay()
})
function date(){
    var tareekh=new Date()
    var day=tareekh.getDay()
    var day1=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    document.getElementById('week').textContent=day1[day]
    let today=tareekh.getUTCDate()
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"]
    document.getElementById('date').textContent=today +' '+months[tareekh.getUTCMonth()]+' '+tareekh.getUTCFullYear()
    var hours=tareekh.getHours()
    var min=tareekh.getMinutes()
    var sec=tareekh.getSeconds()
    document.getElementById('time').textContent=hours+':'+min+':'+sec
    setTimeout(date,1000)
}    
date()