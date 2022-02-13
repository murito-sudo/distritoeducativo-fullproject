import './slider.css';
import React, {useEffect} from 'react';
import {dataSlider} from '../dummyData.js';
import BtnSlider from './BtnSlider';


export default function Slider(){
	
	var x = 0;
	


       

	const nextSlide = (e) => {


		let slider = document.getElementsByClassName("slide");
		let dot = document.getElementsByClassName("dot");


		if(x !== slider.length - 1){

		
			slider[x].style.display = 'none';
			dot[x].classList.remove("active");
			x++;

	
			slider[x].style.display = 'block';
			dot[x].classList.add("active");

		
				

		}else{
			slider[slider.length - 1].style.display = 'none';
			dot[slider.length - 1].classList.remove("active");
			slider[0].style.display = 'block';
			dot[0].classList.add("active");
			x = 0;
				
			
		}



	}

	const prevSlide = (e) => {
		let slider = document.getElementsByClassName("slide");
		let dot = document.getElementsByClassName("dot");
		if(x !== 0){
			slider[x].style.display = 'none';
			dot[x].classList.remove("active");
			x--;
			slider[x].style.display = 'block';
			dot[x].classList.add("active");
		}else{
			slider[x].style.display = 'none';
			dot[x].classList.remove("active");
			x = slider.length - 1;
			slider[x].style.display = 'block';
			dot[x].classList.add("active");

		}

	
		
	}

	const slideDot = (e) => {

		let slider = document.getElementsByClassName("slide");

		let dot = document.getElementsByClassName("dot");

		dot[x].classList.remove("active");
		slider[x].style.display = 'none';
		dot[e].classList.add("active");
		slider[e].style.display = 'block';

		x = e;
		


	}

	  	useEffect(() => {

	  		  

   			const interval = setInterval(() => {
					let slider = document.getElementsByClassName("slide");
					let dot = document.getElementsByClassName("dot");

					try{
							if(x !== slider.length - 1){

						
							slider[x].style.display = 'none';
							dot[x].classList.remove("active");
							x++;

					
							slider[x].style.display = 'block';
							dot[x].classList.add("active");

						


						}else{
							slider[slider.length - 1].style.display = 'none';
							dot[slider.length - 1].classList.remove("active");
							slider[0].style.display = 'block';
							dot[0].classList.add("active");
							x = 0;
								
							
						}

					}catch(error){
						clearInterval(interval);

					}
					
			  }, 5000);


   			
   	
  		}, [x]);

	

	return(
			<div>
					{dataSlider.map((p) =>(
						<div key={p.id} className="slide active-anim fade">
								<img 
								src={p.Source.default} alt=""
								/>


						</div>


								
					))}
				
					

			
				

				<BtnSlider moveSlide={nextSlide} direction={"next"}/ >
				<BtnSlider moveSlide={prevSlide} direction={"prev"} / >

				<div className="container-dots">
					{Array.from({length: 3}).map((item, index) => (
							<div key={index} onClick={() => slideDot(index)} className={x === index ? "dot active" : "dot"}></div>
						))}
				</div>

			</div>
				


		)



}