import Card from "../components/Card";
import {services} from "../constants"

const Services = (imgURL, label, subtext) => {
  return (
   <section className="max-container flex justify-center
    flex-wrap gap-9">
    {services.map((service)=> (
          <Card key={service.label} {...service}/>
        ))}
   </section>
  );
};

export default Services;
