import Image from "next/image";

import TemplateDefault from "@/app/template/Default";
import TitleDescriptionSections from "@/app/components/TitleDescriptionSections";
import AccordionViolin from "@/app/components/AccordionViolin";

import ImageViolin from '@/app/images/violins/violin-for-sale.jpg'

import "./style.scss";

const VioinsPage = () => {
  return(
    <TemplateDefault>
      <main className="violinsMain">
        <section className="violinsSection">
          <TitleDescriptionSections 
            title="Violinos"
            subtitle="Construção"
          />

          <div className="violinsDescription">
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perspiciatis minima, veniam assumenda incidunt placeat quidem dolorum harum non? Fuga, sequi voluptatibus dolor quos vero obcaecati cupiditate dolorem at quidem.
            </p>

            <div className="violinsImages">
              <Image 
                alt=""
                src={ImageViolin}
                style={{ width: "46%", height: "22rem" }}
                className="imageIlustration"
                />

              <Image 
                alt=""
                src={ImageViolin}
                style={{ width: "46%", height: "22rem" }}
                className="imageIlustration"
              />
            </div>
          </div>
        </section>

        <section className="violinsForSale">
          <TitleDescriptionSections 
            title="Violinos à venda"
            subtitle="Modelos"
          />

          <AccordionViolin />
        </section>
      </main>  
    </TemplateDefault>
  );
}

export default VioinsPage;
