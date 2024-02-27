import Image from "next/image";

import TitleDescriptionSections from "@/app/components/TitleDescriptionSections";
import TemplateDefault from "@/app/template/Default";

import ImageViola from "@/app/images/violins/violin2.jpg";
import Accordion from "@/app/components/AccordionViolin";

import "./style.scss";

const Violas = () => {
  return(
    <TemplateDefault>
      <main className="violasMain">
        <section className="violasSection">
          <TitleDescriptionSections 
            title="Viola"
            subtitle="Construção"
          />

          <div className="violasDescription">
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perspiciatis minima, veniam assumenda incidunt placeat quidem dolorum harum non? Fuga, sequi voluptatibus dolor quos vero obcaecati cupiditate dolorem at quidem.
            </p>

            <div className="violasImages">
              <Image 
                alt=""
                src={ImageViola}
                style={{ width: "46%", height: "22rem" }}
                className="imageIlustration"
                />

              <Image 
                alt=""
                src={ImageViola}
                style={{ width: "46%", height: "22rem" }}
                className="imageIlustration"
              />
            </div>
          </div>
        </section>

        <section className="violasForSale">
          <TitleDescriptionSections 
            title="Violas à venda"
            subtitle="Modelos"
          />

          <Accordion />
        </section>
      </main>  
    </TemplateDefault>
  );
}

export default Violas;