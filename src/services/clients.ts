import { Router } from "express";
const router = Router();
router.post('/crear',(req,res)=>{
    res.send("POST CLIENTE")
    return router;
})
router.post('/actualizar',(req,res)=>{
    res.send("PUT CLIENTE")
    return router;
})
router.post('/borrar',(req,res)=>{
    res.send("DELETE CLIENTE")
    return router;
})
router.post('/pedir',(req,res)=>{
    res.send("GET CLIENTE")
    return router;
})
module.exports = router;