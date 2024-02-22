import Header from "@/app/partials/header";
import Footer from "@/app/partials/footer";
import React from "react";

interface ChildrenProps {
  children: React.ReactNode
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