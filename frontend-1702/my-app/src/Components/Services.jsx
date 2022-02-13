import './services.css';
import Service from './Service.jsx';
import {Servicios} from '../dummyData.js'


export default function Services(props){

	
	return(
			<div className="Box">
				<div className="Section">
					<div className="Container">
						<h3>Servicios</h3>
						<hr className="line" />
						<div className="Services">
							{Servicios.map((p, x) =>
								<Service key={x} value={p.Value[props.bool]} heading={p.Heading[props.bool]} icon={p.Icon[props.bool]} />
							)}



						</div>
					</div>


				</div>


			</div>



		)


}