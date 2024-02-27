"use client"

import Image from "next/image";
import { useState } from "react";
import { CameraIcon } from 'lucide-react';

import violin1 from "@/app/images/violins/violin-for-sale.jpg";
import violin2 from "@/app/images/violins/violin2.jpg";
import violin3 from "@/app/images/violins/violins.jpg";
import violin4 from "@/app/images/violins/violins.jpg";
import violin5 from "@/app/images/violins/violins.jpg";

import "./style.scss";

const cards = [
  {
    instrumentName: "Violino Stradvarius",
    image: violin1,
    description: "Violino Modelo Stradvarius 1938",
  },
  {
    instrumentName: "Violino Stradvarius",
    image: violin2,
    description: "Violino 1922",
  },
  {
    instrumentName: "Violino Stradvarius",
    image: violin2,
    description: "Violino 1922",
  },
  {
    instrumentName: "Violino Stradvarius",
    image: violin3,
    description: "Violino 1922",
  },
  {
    instrumentName: "Violino Stradvarius",
    image: violin1,
    description: "Violino Modelo 1988",
  }
]

const AccordionViolin = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index: number) => setActive(index);

  return(
    <section className="accordionSection">
      {
        cards.map((card: any, index: any) => {
          console.log(index);
          const isActive = active === index ? "active" : "";

          return(
            <article
              key={card.image}
              className={isActive}
              onClick={() => handleToggle(index)}
            >
              <Image
                alt="Image product"
                src={card.image}
                style={{ width: "100%", height: "150%" }}
                className="imageIlustration"
              />

              <div className="content">
                <CameraIcon 
                  className="iconCamera"
                />

                <h2 className="title">
                  {card.instrumentName}
                </h2>

                <p className="description">
                  {card.description}
                </p>
              </div>
            </article>
          );
        })
      }
    </section>
  );
}

export default AccordionViolin;