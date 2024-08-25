import { styled } from "styled-components";

const WeatherImage = styled.img.attrs(props => ({
    src: `http://openweathermap.org/img/wn/${props.weatherIcon}.png`
}))`
  /* Your additional styling here */
`;
export default WeatherImage;
