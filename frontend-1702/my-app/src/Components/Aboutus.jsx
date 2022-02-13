import './aboutus.css';


export default function Aboutus(){

	return(

		<div>
			<div className="about-us-container">
				<div className="about-us-objectives">
					<div className="noso">Sobre Nosotros</div>
					<p className="nosoText">Somos una instancia del Ministerio de Educación de la República Dominicana responsable de garantizar la eficiencia y la eficacia del sistema, de la aplicación de las políticas educativas y de ejercer el control y la fiscalización de las acciones en la provincia de Monte Plata</p>
					<br/>
					<p className="nosoText">Somos una instancia del Ministerio de Educación de la República Dominicana responsable de garantizar la eficiencia y la eficacia del sistema.</p>
				</div>


				<div className="about-us-objectives">
					<iframe title="Objective" className="about-us-video"
					src="https://www.youtube.com/embed/tgbNymZ7vqY">
					</iframe>
				</div>


				<div className="about-us-objectives">
					<div className="noso">Misión</div>
					<p className="nosoText">Garantizar procesos de calidad orientados desde el distrito hacia los centros educativos, estudiantes y todos los actores que intervienen de manera directa, asumiendo compromisos de los procesos pedagógicos e institucionales que se desarrollen en dichos centros educativos de acuerdo a la ley 66-97, fortaleciendo de manera continua la calidad de la enseñanza/aprendizaje.</p>
					
				</div>


				<div className="about-us-objectives">
					<div className="noso">Visión</div>
					<p className="nosoText">Constituir un distrito líder y a la vanguardia en la innovación de estrategia de calidad, preparación personal y responsabilidad social. Promoviendo una cultura de paz y humanización de los procesos administrativos y pedagógicos, cuyos resultados se observen y lleguen a las escuelas, principales actores de los procesos de aprendizajes en general.</p>
					
					
				</div>
			</div>	

		</div>


		)

}