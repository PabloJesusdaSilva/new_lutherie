"use client";

import TemplateDefault from "./template/Default";

import './styles/style.scss';

export default function Home() {
  return (
    <TemplateDefault>
      <div className="theAtelier">
        <h1 className="categoryTitle">
          Lutheria

          <span className="detail">
            Roger Silva Lutheria
          </span>
        </h1>

        <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi temporibus harum ipsam hic doloribus assumenda enim impedit. Animi aliquam mollitia voluptatem, rem velit libero doloremque, corporis eveniet pariatur corrupti facilis?
        </p>
      </div>
    </TemplateDefault>
  );
}
