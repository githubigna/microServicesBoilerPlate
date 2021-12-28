import { Router } from "express";
import { stripeService } from "./Stripe";
import {Stripe} from "stripe";
let conf : Stripe.StripeConfig = {apiVersion:'2020-08-27'};
let stripe = new stripeService(`${process.env.STRIPE_SK}`,conf);
const router = Router();
router.post('/create', async (req,res)=>{
    let paymentMethod:any = await stripe.createPaymentMethod(req.body.params);
    let pm_id = paymentMethod.id;
    let stripeResponse = await stripe.attachPaymentMethodToClient(pm_id,req.body.customerId);
    let response = {
        "Endpoint":"POST PM",
        "Response":stripeResponse
    }
    res.send(response)
    return router;
})
router.post('/update', async (req,res)=>{
    let stripeResponse = await stripe.postClient(req.body.client);
    let response = {
        "Endpoint":"PUT PM",
        "Response":stripeResponse
    }
    res.send(response)
    return router;
})
router.post('/delete', async (req,res)=>{
    let stripeResponse = await stripe.postClient(req.body.client);
    let response = {
        "Endpoint":"DELETE PM",
        "Response":stripeResponse
    }
    res.send(response)
    return router;
})
router.post('/get', async (req,res)=>{
    let stripeResponse = await stripe.postClient(req.body.client);
    let response = {
        "Endpoint":"GET PM",
        "Response":stripeResponse
    }
    res.send(response)
    return router;
})
module.exports = router;