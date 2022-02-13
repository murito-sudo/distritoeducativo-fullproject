import React, {Component} from "react";
import  {  Link } from 'react-router-dom';
import { withRouter } from "react-router";


import axios from "axios";

import "./news.css";





class News extends Component{


	constructor() {
		super();

		this.state = {
			news: [],
			index: 0,
			paginationResult: [],
			totalPages: 0
		};

		



	}



	componentDidMount() {


		var data = this.props.match.params.count;



		
		if(data === undefined || Number(data) === 1){
			this.setState({index: 1}, () => {
				axios.get("/news/:id", {params: {theIndex: this.state.index}}).then(response => {
		 			this.setState({news: [...this.state.news, response.data]});
		 			this.setState({news: this.state.news[0]});
		 			axios.get("/totalPages", {params: {theCount: this.state.index}}).then(responses => {
		 				this.setState({totalPages: responses.data.paginationFull});
		 				for(var i = responses.data.paginationCurrent; i <= responses.data.paginationTotal; i++){
		 					this.setState({paginationResult: [...this.state.paginationResult, i]});
		 				}

			 		});
		 			
		 		});
			});
		}else{
			this.setState({index: data}, () => {
					axios.get("/news/:id", {params: {theIndex: this.state.index}}).then(response => {
						if(response.data === "error"){
							var newsPagination = document.getElementsByClassName("NewsPagination");
							newsPagination[0].style.display = "none";
						}else{
							this.setState({news: [...this.state.news, response.data]});
			 				this.setState({news: this.state.news[0]});
			 				axios.get("/totalPages", {params: {theCount: this.state.index}}).then(responses => {
			 					this.setState({totalPages: responses.data.paginationFull});
			 					for(var i = responses.data.paginationCurrent; i <= responses.data.paginationTotal; i++){
				 					this.setState({paginationResult: [...this.state.paginationResult, i-1]});
				 			
				 				}
			 					
			 				});
						}
			 			

			 			
			 		});
			});


		}



		
		

  	}


  	goBackFirst = (e) => {
  		window.location.pathname = "/noticias";
  	}

  	goBack = (e) => {
  		if(this.state.index > 1){
  			let value = Number(this.state.index - 1);

  			window.location.pathname = "/noticias/" + value;
  		}
  	}



  	goNext = (e) => {
  		if(this.state.index < this.state.totalPages){
  			if(this.state.index === 2){
  				window.location.pathname = "/noticias";
  			}else{
  				let value = Number(this.state.index + 1);
  				window.location.pathname = "/noticias/" + Number(value);
  			}
  		

  		}
  	}

  	goLast = (e) => {
  		let value = Number(this.state.totalPages);

  		if(Number(this.state.index) !== value){
  			window.location.pathname = "/noticias/" + value;
  		}
  	}

	doNothing = (e) => {
		//This function does nothing
	};

	render() {


		return(
			<div className="NewsContainer">
				<div className="NewsTopbar">
					<span className="NewsPos">Estas aqui: <span><Link to="/">Inicio</Link> / <span className="NewsCurrent">Noticias</span></span></span>

					<h1>Noticias</h1>

				</div>

						<div className="NewsContent">
							{this.state.news.map((p, x) =>
								<form key={x}>
									
									<Link to={{pathname: "/article/" + p._id, data: p._id}}>
										<div className="NewsElement" onClick={this.seeNews}>
											<img className="NewsImage" src={"../images/" + p.image} alt=""  />
											<div className="NewsField">
												<h2 className="NewsHeader">{p.title}</h2>
												<p className="NewsDate">{p.date}</p>
												<p className="NewsDesc">{p.content}</p>
												<input type="text" readOnly={true}  name="newsId"  className="newsId" value={p._id || ""} />


										</div>
									

										</div>
									
									</Link>
								
									
								</form>
							)}

						</div>

					

				<div className="NewsPagination">
					<button className="NewsButton" type="button" onClick={this.goBackFirst}>Inicio</button>
					<button className="NewsButton" type="button" onClick={this.goBack}>Anterior</button>
					{this.state.paginationResult.map((p, x) =>
						
						<button key={x} className="NewsButton" type="button"  onClick={(e) => {
							if(Number(this.state.index) !== Number(e.target.innerHTML)){
								window.location.pathname = "/noticias/" + Number(e.target.innerHTML);
							}
						}
						}>{p}</button>
							
						
						
					

					)}
			
					

					
					<button className="NewsButton" type="button" onClick={this.goNext}>Siguiente</button>
					<button className="NewsButton" type="button" onClick={this.goLast}>Final</button>


				</div>


			</div>

		)

		}


}

export default withRouter(News);