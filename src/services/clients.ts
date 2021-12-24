import { Router } from "express";
import { stripeService } from "./Stripe";
let stripe = new stripeService();
const router = Router();
router.post('/crear', async (req,res)=>{
    await stripe.postClient(req.body.client);
    res.send("POST CLIENTE")
    return router;
})
router.post('/actualizar', async (req,res)=>{
    await stripe.updateClient(req.body.id);
    res.send("PUT CLIENTE")
    return router;
})
router.post('/borrar', async (req,res)=>{
    await stripe.deleteClient(req.body.id);
    res.send("DELETE CLIENTE")
    return router;
})
router.post('/pedir', async (req,res)=>{
    await stripe.getClient(req.body.id);
    res.send("GET CLIENTE")
    return router;
})
module.exports = router;