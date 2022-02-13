const express = require("express");
const app = express();
const bodyParser = require('body-parser');
var request = require("request");
var mongoose = require("mongoose");
const port = 5000;



mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

app.use(express.static('uploads'));
app.use(express.static("public"));


var Schema = mongoose.Schema;

var userDataSchema = new Schema({
	title: {type: String, required: true},
	content: String,
	date: {type:String, required: true},
	image: {type: String, required: true},
	otherImages: Array

});

var UserData = mongoose.model('UserData', userDataSchema);


var item = {
	title: "Autoridades educativas reciben las llaves de plantel escolar",
	content: "Monte Plata.- El director regional de Educación, Enrique de la Cruz; el coordinador general de la unidada de fiscalización del Programa Nacional de Edificaciones Escolares, Arturo García; y la directora del distrito 17-02, Natividad Custodio, recibieron hoy las llaves del Centro Educativo Miguel Ángel Monclús, ubicado en la localidad La Ceja de este municipio. Durante el acto celebrado en las instalaciones del centro, Arturo García, señaló que el plantel fue inaugurado por mención en el año 2018, sin embargo no fue entregado ni habilitado, por lo que hasta la fecha permanecía cerrado. El plantel, que impactará a más de quinientos estudiantes, cuenta con 18 aulas de clases, biblioteca, cocina-comedor, espacios de recreación y deportes, oficinas, así como laboratorios y área de orientación, detalló García en la actividad que contó con la presencia del ingeniero a cargo de la obra, Fausto Ramírez. De su lado, Enrique de la Cruz, anunció que desde la Dirección Regional se realizan los aprestos para dotar al centro educativo de equipos y mobiliarios, con la finalidad de que, para el próximo año escolar 2021-2022, reúna las condiciones necesarias para el desarrollo de los procesos educativos. Edificaciones Al finalizar esta actividad, las autoridades educativas realizaron un recorrido por la escuela básica Carlixto Alcántara y las estancias infantiles que están en proceso de construcción en el municipio. Durante el recorrido, Arturo García, acompañado de un equipo de la unidad fiscalizadora del MINERD, declaró que “se están dando los pasos para reanudar los trabajos de las dos estancias infantiles que se están contribuyendo aquí en Monte Plata, así como para dar el mantenimiento que requiere la escuela básica de la Ciudad del Conocimiento”. El funcionario de la cartera educativa ratificó el compromiso asumido por el Ministro de Educación, Roberto Fulcar, de acondicionar los planteles escolares y convertirlos en espacios seguros para el proceso de enseñanza y aprendizaje.",
	date: "Miércoles, 14 Julio 2021",
	image: "image1.jpg",
	otherImages: ["image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg"]

}









app.get("/news/:id", (req, res) => {
	
	req.params.id = req.query.theIndex;


	UserData.count({}, function( err, count){

		
		var skip = parseInt((req.query.theIndex - 1) * 14);

	
	

		if((req.query.theIndex - 1) * 14 <= count){

				UserData.find({},   function (err, docs){
					if(!err){
						res.send(docs);
						

					}else{
						console.log(err);
					}

				

				}).limit(14).skip(skip);
		

		}else{
			res.send("error");
		}



	});

});


app.get("/totalPages", (req, res) => {

	UserData.count({}, function( err, count){

		if((req.query.theCount - 1) * 14 <= count){
			
			let number = Math.ceil((req.query.theCount * 14) / 14);
			let totalPages = Math.ceil(count / 14);
			let total = Math.ceil(count / 14);
			if(number + 8 <= totalPages){
				totalPages = number + 8;

			}else if(number + 8 > totalPages && number > 1){
				totalPages = Math.ceil(count / 14) + 1 ;
			}


			let paginationResult = {
				paginationCurrent: number,
				paginationTotal: totalPages,
				paginationFull: total
			}

			res.send(paginationResult);
			
		}
		
	});


});



app.get("/getArticle/:id", (req, res) => {

	if(req.query.theId !== "undefined"){
		UserData.find({_id: req.query.theId}, function (err, docs){
			if(!err){
				if(docs !== "undefined"){
					req.params.id = req.query.theId;
					
					res.send(docs);
				}
				


			}else{
				console.log(err);
			}

		

		});
	}

});




app.listen(port, () => {
	console.log("Server running on port: " + port);

});