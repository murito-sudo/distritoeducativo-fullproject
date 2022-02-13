import './employer.css';


export default function Employer(props){
	return(
			<div className="EmployerCard">
				<div className="EmployerCardContent">
					<img src={props.image.default} alt="" className="CardEmployerImage" />
					<h5 className="EmployerName">{props.name}</h5>
					<p className="EmployerOpinion">{props.opinion}</p>

				</div>
				


			</div>


		)


}