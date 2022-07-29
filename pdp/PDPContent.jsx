import React, { useState, useEffect } from "react";
import { getProductById, currency } from "home/products";

import { useParams } from "react-router-dom";

export default function PDPContent() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (id) {
      getProductById(id).then((product) => setProduct(product));
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product.id) return null;
  return (
    <div className="mt-10 grid grid-cols-2 gap-5 bg-white rounded-lg shadow-lg">
      <div key={product.id} className="p-5">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="bp-5">
        <div className="mt-3">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="text-gray-600 text-sm">{product.description}</p>

          <p className="text-gray-600 text-sm">
            {currency.format(product.price)}
          </p>
        </div>
        <div className="mt-3">
          <p className="text-gray-600 text-sm">{product.longDescription}</p>
        </div>
      </div>
    </div>
  );
}
