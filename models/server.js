const express = require('express');
const cors = require('cors'); // whitelist... para acceso desde páginas

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        // Rutas de mi app
        this.middlewares();

        this.routes();
    }

    middlewares(){
        // Cors
        this.app.use(cors());

        // Lectura y parseo de body
        this.app.use(express.json());


        // Directorio público
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios')); 
    //    this.app.get('/api', (req, res) => {
    //        //res.send('Hello Worldz');
    //        //res.status(403).json({
    //        res.json({                
    //            //ok: true,
    //            msg: 'get API'
    //        });
    //      });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port);
        });
    }



}


module.exports = Server;
