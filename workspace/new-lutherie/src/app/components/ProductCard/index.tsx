import React from "react";
import Image, { StaticImageData } from "next/image";

import { 
  HeartIcon, 
  CheckIcon 
} from 'lucide-react';

import "./style.scss";

interface ICardProps {
  altImage: string;
  image: HTMLImageElement | StaticImageData;
  title: string;
  price: string ; 
}

const ProductCard = ({
  altImage,
  image,
  title,
  price
}: ICardProps) => {
  return(
    <article className="card">
      <Image 
        alt={altImage}
        src={image}
        style={{ width: "30%", height: "25rem" }}
        className="imageIlustration"
      />

      <div className="cardDescription">
        <h2 className="title">
          {title}
        </h2>

        <HeartIcon 
          color="#ef4444"
          className="heartIcon"
        />

        <span className="price">
          {price}
        </span>

        <div className="benefits">
          <span>
            <CheckIcon className="checkIcon"/>
             
            Ajustado
          </span>
          <span>
            <CheckIcon className="checkIcon"/>
             
            Harmonizado
          </span>
          <span>
            <CheckIcon className="checkIcon"/>
             
            Novo
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;