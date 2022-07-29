import React, { useState, useEffect } from 'react';

import { getProducts, currency } from './products';

export default function HomeContent() {
    const [products, setProducts] = useState([]);

    console.log('HomeContent');
    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);

    return (
        <div className="mt-10 grid grid-cols-4 gap-5">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg p-5">
                    <img src={product.image} alt={product.name} />
                    <div className="mt-3">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                        <p className="text-gray-600 text-sm">{currency.format(product.price)}</p>
                       
                    </div>
                </div>
            ))}
        </div>
    );
}


            
