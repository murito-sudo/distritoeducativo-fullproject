import './galleryimages.css';





export default function GalleryImages(props){



	return(
			<div>
	
				<a href={props.image.default} data-lightbox={props.image} data-title="My Projects"><img src={props.image.default} alt="" className="GalleryImage" /></a>
				

			</div>

		)


}