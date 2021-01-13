import './styles.css';
import StepHeader from './StepsHeader';
import ProductList from './ProductsList';
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../api';


function Orders() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
    fetchProducsts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error));
    }, []);

    return (
        <div className="orders-container">
            <StepHeader />
            <ProductList />
        </div>
    
    )
}

export default Orders;