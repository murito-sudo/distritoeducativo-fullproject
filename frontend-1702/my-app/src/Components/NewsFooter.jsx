import "./newsfooter.css";


export default function NewsFooter(){

	return(
			<div>
				<div className="newsFooter">
					<div className="newsFooterContent">
						<img src="../images/escudo.png"  className="newsFooterLogo" alt=""/>

						<span>Regional de Educación No. 99</span>
						<address>Rancid Avenue 20476, Olympia Washington</address>
						<div className="newsFooterContact">
							<span>Tel.: (809) 999-9999 | Fax - -</span>
							<br />
							<a href="https://www.facebook.com" className="newsFooterEmail">luise13236@gmail.com</a>
						</div>
						
						<div className="newsFooterPolitics">
							<a href="https://www.facebook.com" className="newsFooterPoliticElement">Terminos de uso</a>
							|
							<a href="https://www.facebook.com" className="newsFooterPoliticElement">Politicas de Privacidad</a>
							|
							<a href="https://www.facebook.com" className="newsFooterPoliticElement">Preguntas Frecuentes</a>
						</div>
						<span></span>
					</div>

				</div>

			</div>


		)


}