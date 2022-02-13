import React from "react";
import Topbar3 from "../Components/Topbar3.jsx";
import News from "../Components/News.jsx";
import NewsFooter from "../Components/NewsFooter.jsx";



export default function Noticias(){
	return(
			<div className="noticiasPage">
				<div>
					<Topbar3 />
					<News />
					<NewsFooter />
					
				</div>


			</div>

		)

}

