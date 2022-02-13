import React, {Component  } from "react";
import axios from "axios";
import "./articleid.css";
import {Link} from "react-router-dom";
import { withRouter } from "react-router";
import { SRLWrapper } from "simple-react-lightbox";



class ArticleId extends Component{


	constructor() {
		super();

		this.state = {
			article: []
		
		};

	}

	componentDidMount() {

		var datos = this.props.match.params.id;
		axios.get("/getArticle/:id", {params: {
				    	theId: datos
				    }}).then(response => {
				    	
						this.setState({article: response.data});

						
		});

	

	}

		

		render() {
			return(
					<div>
						{this.state.article.map((p) =>
							<div className="articleContainer">
								
								
								<img src={"../images/" + p.image} alt="" className="articleMainImage" />
								<div className="articleInfo">
									<span className="NewsPos">Estas aqui: <span><Link to="/">Inicio</Link> / <Link to="/noticias"><span>Noticias</span></Link> / </span><span className="NewsCurrent">{p.title}</span></span>
									<h1 className="articleTitle">{p.title}</h1>
									<b>{p.date}</b>
									<p className="articlePar">{p.title}</p>
									<p className="articlePar">{p.content}</p>
									<h3 className="articlePhotos">Fotos Relacionadas</h3>
									<SRLWrapper >
										<div className="articleImages">
											{p.otherImages.map((x) =>
												<a className="articleImageAnchor" href={"../images/" + x} ><img className="articleImage" alt=""  src={"../images/" + x}  /></a>

											)} 

										</div>

									</SRLWrapper >
								</div>

							</div>
						)}

					</div>

				)
		}
	  



}


export default withRouter(ArticleId);