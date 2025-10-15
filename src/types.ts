

export type Menu ={
    id: number;              
    createdAt?: string;    
    name: string;
    image?: string;
    price: number;
    category?: string;
    description?: string;
    stock?: number;
    rating?: number;
}


export type CartItem = Menu & {
    quantity: number;
};



export type CheckOutData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    otherInformation: string;
    radioBox: boolean;


    subTotal: number;
    shipping: number;
    total: number;
}



