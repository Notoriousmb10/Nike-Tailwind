import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section id="about-us"
    className="flex justify-between items-center 
    max-lg:flex-col gap-10 w-full max-container max-sm:text-center">
      <div className="flex flex-1 lg:max-w-lg flex-col">
      <h2 className="text-4xl  font-bold font-palanquin">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h2>
      <p className="mt-6 font-montserrat text-slate-gray ">Our branded shoes are crafted from top-quality materials, 
        ensuring durability and long-lasting comfort. As a leading 
        name in footwear, our brand is synonymous with excellence, reliability, and fashion.</p>
        <div className="mt-10 max-sm:flex max-sm:justify-center">
          <Button label="View Details" imgURL={""} />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="" width={570} height={522} className="object-contain"/>
      </div>

      
    </section>
  );
};

export default SuperQuality;


