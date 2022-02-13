import './card.css';
import {EmojiEmotions} from '@material-ui/icons';
import {Email} from '@material-ui/icons';



export default function Card(){
	return(
			<div className="card">

				<div className="cardItem">
					<EmojiEmotions className="cardIcon" />
					<h4 className="cardHeader">Docente</h4>
					<p className="cardDesc">Anímate a participar del Premio Regional a la Excelencia Magisterial 2022</p>
					<button type="button" className="cardButton">MAS INFORMACION</button>
				</div>

				<div className="cardItem" id="cardItemId">
					<Email className="cardIconBlack" />
					<h4 className="cardHeaderBlack" id="cardHeaderBlackId">Estudiante</h4>
					<p className="cardDesc">Consulta desde aqui tus resultados de las Pruebas Nacionales</p>
					<button type="button" className="cardButton">CONSULTAR</button>
				</div>
				

			</div>



		)


}
