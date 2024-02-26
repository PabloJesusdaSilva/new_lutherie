"use client";

import Image from "next/image";
import TemplateDefault from "./template/Default";
import MapLutherie from "./components/MapLutherie";
import TitleDescriptionSections from "./components/TitleDescriptionSections";

import ImageLutheria from "@/app/images/violins/violins.jpg";
import ImageLuthier from "@/app/images/violon.jpg";

import "./styles/style.scss";

export default function Home() {
  return (
    <TemplateDefault>
      <div className="theAtelier">
        <TitleDescriptionSections 
          title="Lutheria"
          subtitle="Roger Silva Lutheria"      
       />

        <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi temporibus harum ipsam hic doloribus assumenda enim impedit. Animi aliquam mollitia voluptatem, rem velit libero doloremque, corporis eveniet pariatur corrupti facilis?
        </p>

        <Image 
          alt="Description photo about to the lutheria"
          src={ImageLutheria}
          style={{ width: "100%", height: "32rem" }}
          className="imageIlustration"
        />
      </div>

      <div className="ourServices">
        <TitleDescriptionSections 
          title="Serviços"
          subtitle="O que fazemos?"
        />

        <div className="cards">
          <div className="card">
            <h2 className="title">
              Fabricação de instrumentos musicais
            </h2>

            <p className="description">
              Fabricamos instrumentos desde a planta. Nossos intrumentos são construidos com as melhores madeiras.
            </p>
          </div>

          <div className="card">
            <h2 className="title">
              Ajuste de instrumentos de cordas
            </h2>

            <p className="description">
              Venha até nós para fazer os ajustes e reparos em seu violino, viola ou violoncelo;
            </p>
          </div>

          <div className="card">
            <h2 className="title">
              Restauração de instrumentos de cordas
            </h2>

            <p className="description">
              Os instrumentos construídos com madeira mostram maior sensibilidade ao tempo, e as diversas temperaturas climáticas.
            </p>
          </div>

          <div className="card">
            <h2 className="title">
              Construção de instrumentos profissionais
            </h2>

            <p className="description">
              Você que precisa de um instrumento melhor para tocar em orquestra, aqui você encontrará!
            </p>
          </div>
        </div>
      </div>

      <MapLutherie />

      <div className="theLuthier">
        <TitleDescriptionSections 
          title="Sobre"
          subtitle="O Luthier"
        />

        <div className="luthierDescription">
          <p className="about">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, itaque natus id accusamus architecto temporibus aut, perspiciatis sunt mollitia ad tempore tenetur minus sed recusandae excepturi. Rem consequuntur inventore saepe.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, itaque natus id accusamus architecto temporibus aut, perspiciatis sunt mollitia ad tempore tenetur minus sed recusandae excepturi. Rem consequuntur inventore saepe.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, itaque natus id accusamus architecto temporibus aut, perspiciatis sunt mollitia ad tempore tenetur minus sed recusandae excepturi. Rem consequuntur inventore saepe.
          </p>

          <Image
            alt="Is this image product Lutherie"
            src={ImageLuthier}
            style={{ width: "46%", height: "32rem" }}
            className="imageIlustration"
          />
        </div>
      </div>
    </TemplateDefault>
  );
}
