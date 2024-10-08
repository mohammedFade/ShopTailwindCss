import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
        منتجاتنا <span className='text-coral-red'> المشهورة </span>
        </h2>
        <p className='lg:max-w-lg mt-4 text-md font-montserrat text-slate-gray'>
        استمتع بجودة عالية وأناقة فائقة مع تشكيلاتنا المفضلة. اكتشف عالمًا من الراحة والتصميم والقيمة
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
