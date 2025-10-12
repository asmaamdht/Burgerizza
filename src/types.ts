

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
