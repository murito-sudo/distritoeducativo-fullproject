import './footer.css';
import React from 'react';
import {Facebook} from '@material-ui/icons';
import {Twitter} from '@material-ui/icons';
import {Pinterest} from '@material-ui/icons';
import {Instagram} from '@material-ui/icons';
import {YouTube} from '@material-ui/icons';


export default class  Contact extends React.Component{

	


	render() {
		return(

			<div className="page-footer">

				<div className="page-subscribe">
					<div className="page-subscribe-content">
						<h2 className="page-subscribe-header">Suscribete Ahora!</h2>
						<p className="page-subscribe-text">Introduce tu dirección de correo para recibir notificaciones sobre nuevas publicaciones y actualizaciones.</p>
						<form className="page-footer-form" action="#" method="post">
							<input type="email" placeholder="Introduce tu email.." className="page-footer-input" />
							<button className="subscribe-footer-button">subscribete</button>
						</form>
					</div>
					

				</div>

				<div className="page-contact">
					<div className="page-contact-container">

						<div className="footer-rights-div">
							<p className="footer-rights">© Distrito Educativo No. 99-99. Todos los Derechos Reservados</p>

						</div>

						<div className="footer-socialmedias">
							<a href="https://www.facebook.com" className="footer-socialmedia"><Facebook className="footer-icon" /></a>
							<a href="https://www.facebook.com" className="footer-socialmedia"><Twitter className="footer-icon"/></a>
							<a href="https://www.facebook.com" className="footer-socialmedia"><Pinterest className="footer-icon"/></a>
							<a href="https://www.facebook.com" className="footer-socialmedia"><Instagram className="footer-icon"/></a>
							<a href="https://www.facebook.com" className="footer-socialmedia"><YouTube className="footer-icon"/></a>
							

						</div>


					</div>

				</div>

			</div>

		)

	}

}