import React from "react";
import  { Link } from 'react-router-dom';
import "./Topbar3.css";



export default function Topbar3(){
	return(
		<div>
			<div className="Topbar3Container">
				<div>
					<img src="https://i.stack.imgur.com/5nE4S.jpg" className="Noticias-Logo" alt="" />

				</div>

				<div>
					<div>
						<div className="Topbar3Search">
						<input type="text" placeholder="Ingresa tu busqueda aqui" className="TopbarInput3" />
						<button type="button" className="TopBarButton3">🔎</button>
						</div>
							<div className="TopbarList3">
							<a href="https://www.facebook.com" className="TopLink3">Inicio</a>
							<a href="https://www.facebook.com" className="TopLink3">Nosotros</a>
							<a href="https://www.facebook.com" className="TopLink3">Noticias</a>


						</div>


					</div>


					<div className="responsiveTopbar3Button">
							<button type="button">See Menu</button>

					</div>

				</div>
				
				


			</div>

			<div className="TopbarMenu3">
				<div>
					<ul className="TopbarMenu3List">

						<li className="TopbarMenu3Element"><Link to="/" className="TopbarMenu3Anchor">Inicio</Link></li>
						<li className="TopbarMenu3Element"><Link to="/nosotros" className="TopbarMenu3Anchor">Sobre Nosotros</Link></li>
						<li className="TopbarMenu3Element"><a href="https://www.facebook.com" className="TopbarMenu3Anchor">Transparencia</a></li>
						<li className="TopbarMenu3Element"><a href="https://www.facebook.com" className="TopbarMenu3Anchor">Servicios</a></li>
						<li className="TopbarMenu3Element"><a href="https://www.facebook.com" className="TopbarMenu3Anchor">Noticias</a></li>
						<li className="TopbarMenu3Element"><a href="https://www.facebook.com" className="TopbarMenu3Anchor">Contacto</a></li>
					

					</ul>


				</div>

				
			</div>


		</div>

		)

}