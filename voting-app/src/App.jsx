import { useState, useEffect } from "react";
import { Product } from "@/components";
import { products } from "@/seed";

const App = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products.sort((a, b) => b.votes - a.votes));
  }, []);

  const handleProductUpVote = (productId) => {
    const nextProducts = productList.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    setProductList(nextProducts);
  };

  return (
    <>
      <div className='container mx-auto px-10 divide-y-2 flex flex-col w-auto lg:w-3/5'>
        <h1 className='text-3xl font-bold text-center mt-8 mb-1'>
          Popular Products
        </h1>
        <div className='flex flex-col gap-y-2 pt-10'>
          {productList
            .sort((a, b) => b.votes - a.votes)
            .map((product) => (
              <Product
                key={"product-" + product.id}
                id={product.id}
                productImageUrl={product.productImageUrl}
                submitterAvatarUrl={product.submitterAvatarUrl}
                url={product.url}
                votes={product.votes}
                onVote={handleProductUpVote}
                title={product.title}
                description={product.description}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
