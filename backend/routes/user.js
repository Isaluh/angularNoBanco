const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/criarUser', (req, res) =>{
    let user = req.body;
    for(var item in user){
        if(user[item] == ""){
            return res.redirect("http://localhost:4200");
        }
    }
    query = "select email from user where email=?"
    connection.query(query,[user.email], (err, results) =>{
        if(!err){
            if(results.length <= 0){
                query = "insert into user(name,email,cor,num,animal,esporte) values(?,?,?,?,?,?)"
                connection.query(query,[user.name,user.email,user.cor,user.num,user.animal,user.esporte], (err, results) =>{
                    if(!err){
                        // return res.status(200).json({message: "Adicionado ao banco!"})
                    }
                    else{
                        // return res.status(500).json(err);
                    };
                });
            }
            else{
                // return res.status(400).json({message:"Email já existente no banco!"});
            };
        }
        else{
            // return res.status(500).json(err);
        };
    });
    res.redirect('http://localhost:4200');
});

module.exports = router;