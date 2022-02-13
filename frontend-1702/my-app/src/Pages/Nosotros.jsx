import './nosotros.css';
import Topbar from '../Components/Topbar';
import Slideshow2 from '../Components/Slideshow2';
import Aboutus from '../Components/Aboutus';
import Services from '../Components/Services';
import Employers from '../Components/Employers';
import Footer from '../Components/Footer';



export default function Nosotros(){


	return(
			<div>
					<Topbar />
					<Slideshow2 />
					<Aboutus />
					<Services bool="1"/>
					<Employers  />
					<Footer />


			</div>

		)


}