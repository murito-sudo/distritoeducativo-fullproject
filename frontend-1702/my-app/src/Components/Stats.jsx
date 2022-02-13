import './stats.css';

import CountUp from 'react-countup';


export default function Stats(props){




	return(
			
				<div className="Item">
			
					<CountUp className="Scroller" duration={3} end={props.value} />
					<p className="statText">{props.field}</p>
				</div>


			






		)

}