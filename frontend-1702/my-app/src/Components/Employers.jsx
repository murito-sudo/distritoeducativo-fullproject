import './employers.css';
import Employer from './Employer';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Empleados} from '../dummyData.js';


export default function Employers(){


	return(

		<div className="EmployerContainer">
			<div className="Employers">
				<h2 className="EmployerHeading">Docentes de Excelencia</h2>

				<div>
					<OwlCarousel className='owl-theme' loop margin={10} items={3} autoWidth={true} margin={0} nav>
						{Empleados.map((p) =>(
								<Employer key={p.id} name={p.name} opinion={p.opinion} image={p.Source}/>
								
							))}
				
					</OwlCarousel>

				</div>
				

			</div>

		</div>


		)


}