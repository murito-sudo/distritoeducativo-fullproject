import React from 'react';
import './slider.css';
import rightArrow from '../images/next.png';
import leftArrow from '../images/prev.png';



export default function Slider({direction, moveSlide}){

	return(
			<button onClick={moveSlide}
			className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
				<img src={direction === "next" ? rightArrow : leftArrow} alt="" />

			</button>

		)


}
