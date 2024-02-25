import React from "react";

import Header from "@/app/partials/Header";
import Footer from "@/app/partials/Footer";
import "./style.scss";

interface ChildrenProps {
  children: React.ReactNode;
}

const TemplateDefault = ({ children }: ChildrenProps) => {
  return(
    <>
      <Header />
        <section className="templateSection">
          <main className="main">
            {children}
          </main>
        </section >
      <Footer />
    </>  
  )
} 


export default TemplateDefault