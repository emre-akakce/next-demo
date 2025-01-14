import React from 'react'

async function getData() {
    const res = await fetch('http://localhost:5555/cep-tel', { cache: 'no-store' }); // Avoid caching for dynamic content
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    return res.json();
  }

async function PList() {
    const data = await getData();
    return (
        <div className="product-list">
          <h2>İkinci El Cep Telefonu Fırsatları</h2>
          <div className="product-container">
            {data.result.category.horizontalProductListContainer.top[0].pgList.map((item: any, index: any) => (
              <div className="product" key={index}>
                <img src={item.imageUrl} alt={item.product} />
                <div className="product-details">
                  <h3>{item.product}</h3>
                  <p><strong>Fiyat:</strong> {item.price}</p>
                  <p><strong>Satıcı:</strong> {item.merchant}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">Ürüne Git</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default PList