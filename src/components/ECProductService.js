const products = [
    { id: 1, name: 'Laptop', price: 1500, description: 'A high-performance laptop for professionals.' },
    { id: 2, name: 'Smartphone', price: 800, description: 'A sleek smartphone with amazing features.' },
    { id: 3, name: 'Headphones', price: 200, description: 'Noise-cancelling over-ear headphones.' },
  ];
  
  // 模擬從數據源中取得產品資料
  export const ECProductService = {
    getProducts: async () => {
      console.log('getProducts is called');
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 300);
      });
    },
    getProductById: async (id) => {
      // 模擬延遲
      console.log('getProductById is called');
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products.find(product => product.id === id));
        }, 300);
      });
    },
  };
  