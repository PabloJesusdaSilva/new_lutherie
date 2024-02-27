import Image from "next/image";

import AccordionCello from "@/app/components/AccordionCello";
import TitleDescriptionSections from "@/app/components/TitleDescriptionSections";
import TemplateDefault from "@/app/template/Default";

import ImageCello from '@/app/images/cellos/cello-for-sale.jpg';

import "./style.scss"
;
import ProductCard from "@/app/components/ProductCard";
const Cellos = () => {
  return(
    <TemplateDefault>
      <main className="cellosMain">
        <section className="cellosSection">
          <TitleDescriptionSections 
            title="Violocenlo"
            subtitle="Construção"
          />

          <div className="cellosDescription">
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perspiciatis minima, veniam assumenda incidunt placeat quidem dolorum harum non? Fuga, sequi voluptatibus dolor quos vero obcaecati cupiditate dolorem at quidem.
            </p>

            <AccordionCello />
          </div>
        </section>

        <section className="cellosForSale">
          <TitleDescriptionSections 
            title="Violoncelos à venda"
            subtitle="Modelos"
          />

          <ProductCard 
            altImage="Is this ilustration image"
            image={ImageCello}
            price="R$ 12.879,00"
            title="Violoncelo Modelo Strad 1989"
          />
        </section>
      </main>  
    </TemplateDefault>
  );
}

export default Cellos;