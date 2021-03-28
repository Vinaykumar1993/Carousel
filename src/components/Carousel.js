import React,{useState,useEffect} from 'react';
import {Carousel} from 'react-bootstrap';
import {CarouselBg} from '../styled-components/CarouselBg';
const CarouselDiv =()=>{
	const [carouselData,setcarouselData]=useState([]);
	const [index, setIndex] = useState(0);
        useEffect(()=>{
        fetch(`./public/data/carousel_data.json`)
        .then((resp)=>{
         if(resp.status==200){
          return resp.json(); 
         }
         return [];
         }).then((resp_json)=>{
          setcarouselData(resp_json);
         })
        },[]) 
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
