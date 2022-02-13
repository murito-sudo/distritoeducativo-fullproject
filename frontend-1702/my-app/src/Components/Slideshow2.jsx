import './Slideshow2.css';
import Slider from './Slider';
import  { Link } from 'react-router-dom';



export default function Slideshow(){


	return(


		<div className="Slideshow2">




				<div className="SlideOptions2">
					<a href="/" className="Logo">
						<span className="LogoT">T</span>
						DI
						<span className="LogoE">E</span>
						DU
					</a>

					<ul className="List">

						<li className="Element2"><Link to="/">Inicio</Link></li>
						<li className="Element2"><a href="https://www.facebook.com" >Nosotros</a></li>
						<li className="Element2"><a href="https://www.facebook.com" >Transparencia</a></li>
						<li className="Element2"><a href="https://www.facebook.com" >Servicios</a></li>
						<li className="Element2"><Link to="/noticias">Noticias</Link></li>
						<li className="Element2"><a href="https://www.facebook.com" >Contacto</a></li>
						<li className="Element2">
						<div className="menuButtonBurguer"></div>
						<div className="menuButtonBurguer"></div>
						<div className="menuButtonBurguer"></div>

						</li>

					</ul>

				</div>


				<div className="Slides2">
			
					<Slider />
				
				</div>


				




		</div>



	)


}
