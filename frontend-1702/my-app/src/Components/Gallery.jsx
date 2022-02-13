import './gallery.css';
import GalleryImages from './GalleryImages';
import {Imagenes} from '../dummyData.js';
import { SRLWrapper } from "simple-react-lightbox";
import {useState} from 'react';


export default function Gallery(){

	const [filterTerm, setFilter] = useState("MINUME");

	function filterElements(e){
		var x = document.getElementsByClassName("GalleryItemSelected")[0];
		x.classList.remove("GalleryItemSelected");
		setFilter(e.target.innerText);
		console.log(e.target);
		e.target.classList.add("GalleryItemSelected");


	}


	return(
			<div className="GalleryContainer">
				<div className="Portfolio">
					<h2 className="GalleryHeading">Galeria de Imagenes</h2> 

					<div className="GalleryCategories">
						<ul className="GalleryList">
							<li className="GalleryItem"><span className="GalleryItemSelected" onClick={filterElements}>MINUME</span></li>
							<li className="GalleryItem" ><span onClick={filterElements}>Republica Digital</span></li>
							<li className="GalleryItem" ><span onClick={filterElements}>Dia del Estudiante</span></li>
							<li className="GalleryItem" ><span onClick={filterElements}>INAFOCAM</span></li>
							<li className="GalleryItem" ><span onClick={filterElements}>Excelencia Magistreria</span></li>	


						</ul>

					</div>
					<SRLWrapper >
					<div className="GalleryImages">
						
					   {Imagenes.filter(val => {
					   		if(filterTerm === "MINUME"){
					   			return val
					   		}else if(val.Class.includes(filterTerm)){
					   			return val;
					   		}

					   		return null;

					   }).map((p) =>(
								<GalleryImages key={p.id} image={p.Source} className="FilterItem" />
						))}
					  

					</div>
					</SRLWrapper>
				</div>
				


			</div>




		)



}