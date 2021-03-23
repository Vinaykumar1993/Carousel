import React,{useState} from 'react';
import {Carousel} from 'react-bootstrap';
import {CarouselBg} from '../styled-components/CarouselBg';
// import bg1 from '../images/bg2.jpg';
const carouselarray=[{"title":"BOOTSTRAP CAROUSEL & SLIDER","description":"Create responsive image sliders for your website in a few clicks, without coding! Bootstrap Slider is totally free for personal and commercial use.","image":"bg2.jpg"},{"title":"BOOTSTRAP CAROUSEL & SLIDER","description":"Create responsive image sliders for your website in a few clicks, without coding! Bootstrap Slider is totally free for personal and commercial use.","image":"bg6.jpg"},{"title":"BOOTSTRAP CAROUSEL & SLIDER","description":"Create responsive image sliders for your website in a few clicks, without coding! Bootstrap Slider is totally free for personal and commercial use.","image":"bg3.jpg"},{"title":"BOOTSTRAP CAROUSEL & SLIDER","description":"Create responsive image sliders for your website in a few clicks, without coding! Bootstrap Slider is totally free for personal and commercial use.","image":"bg4.jpg"},{"title":"BOOTSTRAP CAROUSEL & SLIDER","description":"Create responsive image sliders for your website in a few clicks, without coding! Bootstrap Slider is totally free for personal and commercial use.","image":"bg5.jpg"}]
const CarouselDiv =()=>{
	const [carouselData,setcarouselData]=useState([...carouselarray]);
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
    	setIndex(selectedIndex);
  	};
return(
	<Carousel  activeIndex={index} onSelect={handleSelect}>
	{carouselData.map((obj,key)=>{
		return(
			  <Carousel.Item key={`carousel_index_${key}`}>
   <CarouselBg url={`./public/images/${obj.image}`}/>
    <Carousel.Caption>
      <h3>{obj.title}</h3>
      <p>{obj.description}</p>
    </Carousel.Caption>
  </Carousel.Item>
			)
	})}
</Carousel>
	)
}
export default CarouselDiv;
