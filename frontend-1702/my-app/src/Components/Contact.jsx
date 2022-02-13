import './contact.css';
import {LocationOn} from '@material-ui/icons';
import {Phone} from '@material-ui/icons';
import {Announcement} from '@material-ui/icons';
import GoogleMap from './GoogleMap.jsx';
import React from "react";




export default class  Contact extends React.Component{
	


	constructor(props){
		super(props);
		this.state = { valueN: "", valueA: "", valueE: "", valueAA: "", ValueAS: "" };

		this.updateForm = this.updateForm.bind(this);
		this.Tester = this.Tester.bind(this);
	}
	
	 updateForm(e){
	 	e.target = this.setState({valueN: e.target.value});


	}


	Tester(e){
		console.log("qwq");
	}

	render() {
			return(
			<div className="contactContainer">
				
				<div className="Contacto">
					<h2 className="ContactHeader">Contacto</h2>

					<div className="ContactMe">
						<div className="ContactTopBar">
							<div className="ContactTopBarContainer">
								<div className="Location">
									<LocationOn  className="LocationIcon"/>
									<h6 className="LocationInfo">Olympia, Washington</h6>
								</div>


								<div className="Location">
									<Phone  className="LocationIcon"/>
									<h6 className="LocationInfo">(809) 551-6631</h6>
								</div>

								<div className="Location">
									<Announcement className="LocationIcon" />
									<h6 className="LocationInfo"><a href="luisalexanderps@hotmail.com">luise13236@gmail.com</a></h6>
								</div>


							</div>

							<div className="LocationResponse">
									<Announcement className="LocationIcon" />
									<h6 className="LocationInfo"><a href="luisalexanderps@hotmail.com">info@distrito1702.gob.do</a></h6>
							</div>




						</div>

						<div className="ContactBottom">

							<div className="ContactMap">
								<GoogleMap className="Map"/>
								        
								      
							</div>


							<div className="ContactForm">
							
									<div className="ContactFormInfo">
									
										
											<input type="text" className="ContactFormField" placeholder="Nombre"  value={this.state.value} onChange={this.updateForm}/>
											<input type="text"  className="ContactFormField" placeholder="Apellido" value={this.state.value}  onChange={this.updateForm}  />
											<input type="text"  className="ContactFormField" placeholder="Email" value={this.state.value}  onChange={this.updateForm}  />
											<input type="text"  className="ContactFormField" placeholder="Asunto" value={this.state.value} onChange={this.updateForm} />

					

									</div>

									<div className="ContactFormDesc">
										<textarea placeholder="Introduce tu mensaje o sugerencia" value={this.state.value} className="ContactFormText"></textarea>

									</div>

									<button type="button" className="ContactFormButton" onClick={this.Tester}>ENVIAR</button>

								

							</div>

						</div>

					</div>

				</div>

			</div>

			)
		}
}


