import React from "react";

import Header from "@/app/partials/Header";
import Footer from "@/app/partials/Footer";
import {
  Section,
  Main
} from "./style";

interface ChildrenProps {
  children: React.ReactNode;
}

const TemplateDefault = ({ children }: ChildrenProps) => {
  return(
    <>
      <Header />
        <Section>
          <Main>
            {children}
          </Main>
        </Section>
      <Footer />
    </>  
  )
} 


export default TemplateDefault