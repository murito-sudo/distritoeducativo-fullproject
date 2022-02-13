import './about.css';
import Image1 from '../images/about3.jpg';
import Image2 from '../images/about2.jpg';
import Statas from './Stats';
import {Stats} from '../dummyData.js';


export default function About(){

	return(
			<div className="AboutContainer">
				<div className="About">
						<div>
							<h2 className="Header">Sobre Nosotros</h2>
							<h5 className="HeaderLorus">Roin vel enim nec ipsum finibus.Duis euismod massa utab.</h5>
							<div>
								<p className="AboutText">Somos una instancia del Ministerio de Educación de la República Dominicana responsable de garantizar la eficiencia y la eficacia del sistema, 
								de la aplicación de las políticas educativas y de ejercer el control y la fiscalización de las acciones en la provincia de Monte Plata.</p>


								<p className="AboutText">Somos una instancia del Ministerio de Educación de la República Dominicana responsable de garantizar la eficiencia y la eficacia del sistema.</p>
							</div>

						</div>


						<div className="Images">
							<img src={Image1} alt="" className="Image1" />
							<img src={Image2} alt="" className="Image2"/>

						</div>
				
				
				</div>


				<div className="Stats">
					{Stats.map((p) =>(
						<Statas key={p.id} value={p.Value} field={p.Field}/>
						))}

				</div>


			</div>


		)


}