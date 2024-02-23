"use client";

import TemplateDefault from "./template/Default";

import {
  TheAtelier,
  CategoryTitle,
  Title,
  Description
} from "@/app/styles/style";

export default function Home() {
  return (
    <TemplateDefault>
      <TheAtelier>
        <CategoryTitle>
          Lutheria

          <Title>
            Roger Silva Lutheria
          </Title>
        </CategoryTitle>

        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi temporibus harum ipsam hic doloribus assumenda enim impedit. Animi aliquam mollitia voluptatem, rem velit libero doloremque, corporis eveniet pariatur corrupti facilis?
        </Description>
      </TheAtelier>
    </TemplateDefault>
  );
}
