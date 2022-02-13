import './slideshow.css';
import Logo from '../images/6.jpg';
import  { Link } from 'react-router-dom';

import Card from './Cards';



export default function Slideshow(){

	return(
			<div className="Slideshow">

				<div className="Slides">

					<img className="imgTest" src={Logo} alt=""/>
				</div>

				<div className="SlideOptions">
					<a href="/" className="Logo">
						<span className="LogoT">T</span>
						DI
						<span className="LogoE">E</span>
						DU
					</a>

					<ul className="List">

						<li className="Element"><a href="https://www.facebook.com">Inicio</a></li>
						<li className="Element"><Link to="/nosotros">Nosotros</Link></li>
						<li className="Element"><a href="https://www.facebook.com" >Transparencia</a></li>
						<li className="Element"><a href="https://www.facebook.com" >Servicios</a></li>
						<li className="Element"><Link to="/noticias">Noticias</Link></li>
						<li className="Element"><a href="https://www.facebook.com" >Contacto</a></li>
						<li className="Element">
						<div className="menuButtonBurguer"></div>
						<div className="menuButtonBurguer"></div>
						<div className="menuButtonBurguer"></div>

						</li>

					</ul>

				</div>

				
				<Card />
			</div>


		)


}