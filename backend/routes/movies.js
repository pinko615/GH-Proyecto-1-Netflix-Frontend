//#region Requires
const mongoose = require('mongoose')
const express = require('express')
const auth = require('../middleware/auth')
const Role = require('../helpers/role')
const authorize = require('../middleware/role')
const Movie = require('../models/movie')
const router = express.Router()
const MovieController = require('../controllers/MovieController')
const upload = require('../middleware/file')
const { check, validationResult } = require('express-validator')
//#endregion


//#region Listar todas las peliculas
router.get('/', MovieController.getAll);
//#endregion


//#region  Listar pelicula por id
router.get('/:_id', [auth, authorize([Role.Admin])], MovieController.getId);
//#endregion


//#region Filtrar pelicula por titulo
router.get('/title/:title', MovieController.getTitle); 
//#endregion


//#region Filtrar peliculas de estreno
router.get('/premiere/:premiere', MovieController.getPremiere);
//#endregion


//#region Filtrar peliculas más populares
router.get('/popular/:popular', MovieController.getPopular); 
//#endregion


//#region Muestra backgrounds populares
router.get('/mainPopular/:mainPopular', MovieController.getMainPopular); 
//#endregion


//#region Muestra background en el home
router.get('/mainHome/:mainHome', MovieController.getMainHome); 
//#endregion


//#region Muestra background premiere
router.get('/mainPremiere/:mainPremiere', MovieController.getMainPremiere); 
//#endregion


//#region Filtrar pelicula por género
router.get('/genre/:genre', [auth, authorize([Role.Admin, Role.User, Role.Guest])], MovieController.getGenre);
//#endregion


//#region Filtrar pelicula por nombre de actor
router.get('/actor/:firstname', [auth, authorize([Role.Admin, Role.User, Role.Guest])], MovieController.getActorFirstName); 
//#endregion


//#region Filtrar pelicula por nombre y apellido del actor
router.get('/actor/:firstname/:lastname', [auth, authorize([Role.Admin, Role.User, Role.Guest])], MovieController.getActorFirstNameLastName); 
//#endregion


//#region  Listar peliculas de acción
router.get('/genremovieaction/action', MovieController.getGenreMovieAction);
//#endregion


//#region  Listar peliculas de comedia
router.get('/genremoviecomedy/comedy', MovieController.getGenreMovieComedy);
//#endregion


//#region  Listar peliculas de acción
router.get('/genremoviedocumentary/documentary', MovieController.getGenreMovieDocumentary);
//#endregion


//#region  Listar peliculas de drama
router.get('/genremoviedrama/drama', MovieController.getGenreMovieDrama);
//#endregion


//#region  Listar peliculas familiares
router.get('/genremoviefamily/family', MovieController.getGenreMovieFamily);
//#endregion


//#region  Listar peliculas de romance
router.get('/genremovieromance/romance', MovieController.getGenreMovieRomance);
//#endregion


//#region  Listar peliculas de terror
router.get('/genremovieterror/terror', MovieController.getGenreMovieTerror);
//#endregion


//#region  Listar peliculas westerns
router.get('/genremoviewestern/western', MovieController.getGenreMovieWestern);
//#endregion


//#region Introducir pelicula, datos Embebido
// router.post('/', upload.single('image'), [auth, authorize([Role.Admin])], MovieController.insert);
router.post('/', [auth, authorize([Role.Admin])], MovieController.insert);
//#endregion


//#region Editar la pelicula seleccionada por id  
router.put('/:_id', [auth, authorize([Role.Admin])], MovieController.updateId);
//#endregion 


//#region Eliminar pelicula por id  
router.delete('/:_id', [auth, authorize([Role.Admin])], MovieController.deleteId);
//#endregion

module.exports = router;