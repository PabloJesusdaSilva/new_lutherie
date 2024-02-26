import "./style.scss";

import TemplateDefault from "@/app/template/Default";
import TitleDescriptionSections from "@/app/components/TitleDescriptionSections";

const VioinsPage = () => {
  return(
    <TemplateDefault>
      <main className="violinsMain">
        <section>
          <TitleDescriptionSections 
            title="Violinos"
            subtitle="Construção"
          />
        </section>
      </main>  
    </TemplateDefault>
  );
}

export default VioinsPage;