import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>عرض  </span>
          خاص
        </h2>
        <p className='mt-4 info-text'>
        انطلق في رحلة تسوق تعيد تعريف تجربتك من خلال صفقات لا تقبل المنافسة. من الاختيارات المميزة إلى التوفير المذهل، نقدم قيمة لا مثيل لها تميزنا.
        </p>
        <p className='mt-6 info-text'>
        انطلق في عالم من الاحتمالات المصممة لتلبية رغباتك الفريدة، متجاوزًا أعلى التوقعات. رحلتك معنا لا تقل عن كونها استثنائية.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='تسوق الآن' iconURL={arrowRight} />
          <Button
            label='اعرف اكثر'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
