import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 max-sm:flex max-sm:flex-col max-sm:justify-center items-center  ">
      <div className="flex flex-col justify-start gap-5">

      <h1 className="text-4xl font-palanquin font-bold max-sm:text-center">
      Our <span className="text-coral-red">Popular</span>  Products</h1>
      <p className="lg:max-w-lg font-montserrat 
      text-slate-gray max-sm:text-center">Experience top-notch quality style with our sought after
      selections. Discover a world of comfort, design and value</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 
      grid-cols-1 sm:gap-4 gap-14">
        {products.map((product)=> (
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>

    </section>
  );
};

export default PopularProduct;
