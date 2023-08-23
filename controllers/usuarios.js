const { response } = require('express');

const usuariosGet = (req, res = response) => {
    //res.send('Hello Worldz');
    //res.status(403).json({

    //const query = req.query;
    const {q, nombre = 'No name', apikey, page = 1, limit =10} = req.query;

//put en postman:
//http://localhost:8080/api/usuarios?q=hola&nombre=fernando&apikey=555

    res.json({                
        //ok: true,
        msg: 'get API from controller',
        //query
        q,
        nombre,
        apikey,
        page,
        limit
    });
  }

const usuariosPost = (req, res = response) => {  
     const {nombre, edad} = req.body;
     res.json({                
        msg: 'post API from controller',
        nombre,
        edad
    });
  }
const usuariosPut = (req, res = response) => {   
    const {id} = req.params;
    res.json({                
        msg: 'put API from controller',
        id
    });
  }
const usuariosPatch = (req, res = response) => {   
    res.json({                
        msg: 'patch API from controller'
    });
  }
const usuariosDelete = (req, res = response) => {   
    res.json({                
        msg: 'delete API from controller'
    });
  }

  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
  }