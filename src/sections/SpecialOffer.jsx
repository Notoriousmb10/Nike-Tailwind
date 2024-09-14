import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap items-center 
    max-xl:flex-col-reverse max-container
    gap-10 max-sm:text-center"
    >
      <div className="flex flex-1 lg:max-w-lg flex-col">
        <img src={offer} alt="offer" width={773} height={687} />
      </div>
      <div className="flex flex-1 lg:max-w-lg flex-col pl-12">
        <h2 className="text-4xl  font-bold font-palanquin">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="font-montserrat text-slate-gray pl- mt-6">
          Unlock unbeatable savings with up to 50% off on select Nike footwear
          and apparel. Grab your favorite styles before they're gone, and enjoy
          free shipping on all orders. Elevate your game with premium gear at
          incredible prices. Don't miss out—shop now!
        </p>
        <div className="mt-10 flex gap-4">
          <Button label="View Details" imgURL={""} />
          <Button label="Learn More" imgURL={""} backgroundColor="bg-white" 
          textColor="text-slate-gray" borderColor="border-slate-gray"/>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
