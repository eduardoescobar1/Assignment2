/*
Centennial College
Date:10/01/2021  
Eduardo Escobar #301081088
COMP:229 SEC:15
PROFESSOR: Aderson Oliveira*/
 

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');


/* GET home page and others. */

router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/projects', indexController.displayProductsPage);

router.get('/services', indexController.displayServicesPage);

router.get('/contact', indexController.displayContactPage);

/*LOGIN*/

/* GET Route for displaying the Login page. */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page. */
router.post('/login', indexController.processLoginPage);


/*Registration*/

/* GET Route for displaying the Register page. */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page. */
router.post('/register', indexController.processRegisterPage);



/*Logout*/

/* GET Route to perform user Logout */
router.get('/logout', indexController.performLogout);

module.exports = router;
