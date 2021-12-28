import  Stripe from 'stripe';
interface paymentService{
    postClient(client:Stripe.CustomerCreateParams):Promise<any>;
    getClient(id:string):Promise<any>;
    deleteClient(id:string):Promise<any>;
    updateClient(id:string):Promise<any>;
    postSubscription(customerId:string,user?:string):Promise<any>;
    getSubscription(id:string):Promise<any>;
    deleteSubscription(id:string):Promise<any>;
    updateSubscription(id:string,subscription:Stripe.SubscriptionUpdateParams):Promise<any>;
    getSubscriptionItem(id:string):Promise<any>;
    getAllSubscriptionItems(params:Stripe.SubscriptionItemListParams):Promise<any>;
    createSubscriptionItemUsageRecord(id:string,params:Stripe.UsageRecordCreateParams):Promise<any>;
    getSubscriptionItemUsageRecord(id:string):Promise<any>;
    updateSubscriptionItem(id:string,params:Stripe.SubscriptionItemUpdateParams):Promise<any>;
    createPaymentMethod(params:Stripe.PaymentMethodCreateParams):Promise<any>;
    attachPaymentMethodToClient(id:string,paymentMethod:Stripe.PaymentMethodAttachParams):Promise<any>;
}
//let conf : Stripe.StripeConfig = {apiVersion:'2020-08-27'};
//const this.stripe = new Stripe(`${process.env.STRIPE_SK}`,conf);
export class stripeService implements paymentService {
    private stripe : any ;
    constructor(sk:string,config:Stripe.StripeConfig){
        this.stripe = new Stripe(sk,config)
    };
    /**
     * 
     * 
     * CLIENT METHODS
     */
    async postClient(client:Stripe.CustomerCreateParams){
        let response;
        try{
            response =  await this.stripe.customers.create(client);
        }catch(e){
            response = e;
        }
        return response;
    }
    async getClient(id:string){
        let response;
        try{
            response =  await this.stripe.customers.retrieve(id);
        }catch(e){
            response = e;
        }
        return response;
    }
    async deleteClient(id:string){
        let response;
        try{
            response =  await this.stripe.customers.del(id);
        }catch(e){
            response = e;
        }
        return response;
    }
    async updateClient(id:string){
        let response;
        try{
            response =  await this.stripe.customers.update(id);
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
            response = await this.stripe.subscriptions.create({
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
            response =  await this.stripe.subscriptions.retrieve(id);
        }catch(e){
            response = e;
        }
        return response;
    }
    async deleteSubscription(id:string){
        let response;
        try{
            response =  await this.stripe.subscriptions.del(id);
        }catch(e){
            response = e;
        }
        return response;
    }
    async updateSubscription(id:string,subscription:Stripe.SubscriptionUpdateParams){
        let response;
        try{
            response =  await this.stripe.subscriptions.update(id,subscription);
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
            response =  await this.stripe.subscriptionItems.retrieve(id);
        }catch(e){
            response = e;
        }
        return response;
    }
    async getAllSubscriptionItems(params:Stripe.SubscriptionItemListParams){
        let response;
        try{
            response =  await this.stripe.subscriptionItems.list(params);
        }catch(e){
            response = e;
        }
        return response;
    }
    async createSubscriptionItemUsageRecord(id:string,params:Stripe.UsageRecordCreateParams){
        let response;
        try{
            response =  await this.stripe.subscriptionItems.createUsageRecord(id,params);
        }catch(e){
            response = e;
        }
        return response;
    }
    async getSubscriptionItemUsageRecord(id:string){
        let response;
        try{
            response =  await this.stripe.subscriptionItems.listUsageRecordSummaries(id);
        }catch(e){
            response = e;
        }
        return response;
    }
    async updateSubscriptionItem(id:string,params:Stripe.SubscriptionItemUpdateParams){
        let response;
        try{
            response =  await this.stripe.subscriptionItems.update(id,params);
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
            response =  await this.stripe.paymentMethods.create(params);
        }catch(e){
            response = e;
        }
        return response;
    }
    async attachPaymentMethodToClient(id:string,paymentMethod:Stripe.PaymentMethodAttachParams){
        let response;
        try{
            response = await this.stripe.paymentMethods.attach(id,paymentMethod);
        }catch(e){
            response = e;
        }
        return response
    }
}