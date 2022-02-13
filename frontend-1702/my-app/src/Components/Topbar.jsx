import './topbar.css';
import {CardTravel} from '@material-ui/icons';
import {Phone} from '@material-ui/icons';


export default function Main(){
	return(
			<div className="topBar">
					<div className="Info">
						<div className="InfoItem">
							<Phone className="InfoIcon"/>
							<span className="InfoText">+1 (809) 551 6631</span>

						</div>

						<div className="InfoItem">
							<CardTravel className="InfoIcon" />
							<span className="InfoText">Cristiancasablanca@hotmail.com</span>

							
						</div>

					</div>


			</div>

		)


}