"use client"

import Image from "next/image";
import { useState } from "react";
import { CameraIcon } from 'lucide-react';

import cello1 from "@/app/images/cellos/cello-for-sale.jpg";
import cello2 from "@/app/images/cellos/cello-for-sale.jpg";
import cello3 from "@/app/images/cellos/cello-for-sale.jpg";
import cello4 from "@/app/images/cellos/cello-for-sale.jpg";
import cello5 from "@/app/images/cellos/cello-for-sale.jpg";

import "./style.scss";

const cards = [
  {
    instrumentName: "Violino Stradvarius",
    image: cello1,
    description: "Violino Modelo Stradvarius 1938",
  },
  {
    instrumentName: "Violino Stradvarius",
    image: cello2,
    description: "Violino 1922",
  },
  {
    instrumentName: "Violino Stradvarius",
    image: cello3,
    description: "Violino 1922",
  },
  {
    instrumentName: "Violino Stradvarius",
    image: cello4,
    description: "Violino 1922",
  },
  {
    instrumentName: "Violino Stradvarius",
    image: cello5,
    description: "Violino Modelo 1988",
  }
]

const AccordionCello = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index: number) => setActive(index);

  return(
    <section className="accordionSection">
      {
        cards.map((card: any, index: any) => {
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

export default AccordionCello;