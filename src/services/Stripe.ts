import  Stripe from 'stripe';
let conf : Stripe.StripeConfig = {apiVersion:'2020-08-27'};
const stripe = new Stripe(`${process.env.STRIPE_SK}`,conf);
export class stripeService{
    constructor(){};
    /**
     * 
     * 
     * CLIENT METHODS
     */
    async postClient(client:Stripe.CustomerCreateParams){
        let response;
        try{
            response =  await stripe.customers.create(client);
        }catch(e){
            response = e;
        }
        return response;
    }
    async getClient(id:string){
        let response;
        try{
            response =  await stripe.customers.retrieve(id);
        }catch(e){
            response = e;
        }
        return response;
    }
    async deleteClient(id:string){
        let response;
        try{
            response =  await stripe.customers.del(id);
        }catch(e){
            response = e;
        }
        return response;
    }
    async updateClient(id:string){
        let response;
        try{
            response =  await stripe.customers.update(id);
        }catch(e){
            response = e;
        }
        return response;
    }
    /**
     * 
     * SUBSCRIPTION METHODS
     * 
     */
    async postSubscription(customerId:string,user?:string){
        let pricing;
        let response
        if (user && user == 'flowy_1') {
            pricing = process.env.FLOWY_PRICING;
        }else if (user && user == 'woki_1'){
            pricing = process.env.WOKI_PRICING
        }else if(user){
            response = {
                "Cause":'Send a valid pricing identifier',
                "Status":400
            }
            return response
        }else {
            response = {
                "Cause":'No user specified, send your application pricing string identificator as ex:{"user":"xxx_x"}',
                "Status":400   
            }
            return response
        }        
        try{
            response = await stripe.subscriptions.create({
                customer: customerId,
                items: [
                    {price:pricing},
                ],
                });
        }catch(e){
            response = e;
        }
        return response;
    }
    async getSubscription(id:string){
        let response;
        try{
            response =  await stripe.subscriptions.retrieve(id);
        }catch(e){
            response = e;
        }
        return response;
    }
    async deleteSubscription(id:string){
        let response;
        try{
            response =  await stripe.subscriptions.del(id);
        }catch(e){
            response = e;
        }
        return response;
    }
    async updateSubscription(id:string,subscription:Stripe.SubscriptionUpdateParams){
        let response;
        try{
            response =  await stripe.subscriptions.update(id,subscription);
        }catch(e){
            response = e;
        }
        return response;
    }
    /**
     * 
     * SUBSCRIPTION ITEM METHODS
     * 
     */
    async getSubscriptionItem(id:string){
        let response;
        try{
            response =  await stripe.subscriptionItems.retrieve(id);
        }catch(e){
            response = e;
        }
        return response;
    }
    async getAllSubscriptionItems(params:Stripe.SubscriptionItemListParams){
        let response;
        try{
            response =  await stripe.subscriptionItems.list(params);
        }catch(e){
            response = e;
        }
        return response;
    }
    async createSubscriptionItemUsageRecord(id:string,params:Stripe.UsageRecordCreateParams){
        let response;
        try{
            response =  await stripe.subscriptionItems.createUsageRecord(id,params);
        }catch(e){
            response = e;
        }
        return response;
    }
    async getSubscriptionItemUsageRecord(id:string){
        let response;
        try{
            response =  await stripe.subscriptionItems.listUsageRecordSummaries(id);
        }catch(e){
            response = e;
        }
        return response;
    }
    async updateSubscriptionItem(id:string,params:Stripe.SubscriptionItemUpdateParams){
        let response;
        try{
            response =  await stripe.subscriptionItems.update(id,params);
        }catch(e){
            response = e;
        }
        return response;
    }
    /**
     * PAYMENT METHOD METHODS
     */
    async createPaymentMethod(params:Stripe.PaymentMethodCreateParams){
        let response;
        try{
            response =  await stripe.paymentMethods.create(params);
        }catch(e){
            response = e;
        }
        return response;
    }
    async attachPaymentMethodToClient(id:string,paymentMethod:Stripe.PaymentMethodAttachParams){
        let response;
        try{
            response = await stripe.paymentMethods.attach(id,paymentMethod);
        }catch(e){
            response = e;
        }
        return response
    }
}