const WeatherImage = ({weatherIcon})=>{
    return<img src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}/>
}
export default WeatherImage;
