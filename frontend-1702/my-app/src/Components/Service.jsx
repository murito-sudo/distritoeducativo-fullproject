import './Service.css';
import Icon from '@material-ui/core/Icon';





export default function Service(props){


	return(
			<div className="Service">
				<Icon className="ServiceIcon">{props.icon}</Icon>

				<h4 className="ServiceHeader">{props.heading}</h4>
				<p className="ServiceValue">{props.value}</p>

			</div>


		)

}