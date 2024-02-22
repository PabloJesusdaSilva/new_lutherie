import Header from "@/app/partials/Header";
import Footer from "@/app/partials/Footer";
import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

const TemplateDefault = ({ children }: ChildrenProps) => {
  return(
    <>
      <Header />
        {children}
      <Footer />
    </>  
  )
} 


export default TemplateDefault