import { Router } from "express";
const router = Router();
router.post('/',(req,res)=>{
    try{
        res.status(200).send("Conección con la API autorizada");
    }catch(e){
        res.status(400).send("Conección con la API rechazada");
    }
})

module.exports=router;