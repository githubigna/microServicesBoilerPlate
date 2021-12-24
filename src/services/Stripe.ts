import  Stripe from 'stripe';
let conf : Stripe.StripeConfig = {apiVersion:'2020-08-27'};
const stripe = new Stripe('sk_test_51K8lUWAJHHybirKFYUBNTNN6necAoE4EHMRbQpQ8bDWSgL05KxHyt72kWOx2j8bQHy2HqouEwwyf93rid70fbZA900X2QjHRXo',conf);
export class stripeService{
    constructor(){};
    /**
     * 
     * 
     * CLIENT METHODS
     */
    async postClient(client:Stripe.CustomerCreateParams){
        let response =  await stripe.customers.create(client);
        return response;
    }
    async getClient(id:string){
        let response =  await stripe.customers.retrieve(id);
        return response;
    }
    async deleteClient(id:string){
        let response =  await stripe.customers.del(id);
        return response;
    }
    async updateClient(id:string){
        let response =  await stripe.customers.update(id);
        return response;
    }
    /**
     * 
     * 
     * 
     */
}