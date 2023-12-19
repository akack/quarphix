export interface Product {
    name: string;
    price: number;
    quantity: number;
    category: 'FOOD' | 'BOOK' | 'MUSIC' | 'MEDICAL';
}