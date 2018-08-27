export class ProductOfferPrice{
    public name: string;
    public type: string;
}

export class Catalog{
    public code: string;
    public name: string;
    public description: string; 
    public family: string;    
    public category: string;    
    public specificationType: string;    
    public ProductOfferPrice: ProductOfferPrice;   
}