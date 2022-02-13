import './main.css';
import Topbar from '../Components/Topbar';
import Slideshow from '../Components/Slideshow';
import About from '../Components/About';
import Services from '../Components/Services';
import Gallery from '../Components/Gallery';
import Employers from '../Components/Employers';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';


export default function Main(){
	return(
			<div>
					<Topbar />
					<Slideshow />
					<About />
					<Services bool="0"/>
					<Gallery />
					<Employers />
					<Contact />
					<Footer />


			</div>

		)


}