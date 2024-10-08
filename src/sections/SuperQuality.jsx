import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          نحن نقدم لك  
          <span className='text-coral-red'> أحذية </span>
          ذات جودة
          <span className='text-coral-red'> فائقة </span>.
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          نضمن لك الراحة والأناقة المتميزة، حيث تم تصميم أحذيتنا بعناية فائقة لرفع مستوى تجربتك، وتزويدك بجودة لا مثيل لها، وابتكار، ولمسة من الأناقة.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          التزامنا <span className="text-coral-red">بالتفاصيل</span> والتميز يضمن رضاكم        
        </p>
        <div className='mt-11'>
          <Button label='عرض التفاصيل' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
