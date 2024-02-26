import "./style.scss";

interface ITitleProps {
  title: string;
  subtitle: string;
}

const TitleDescriptionSections = ({ title, subtitle}: ITitleProps ) => {
  return(
    <h1 className="categoryTitle">
      {title}

      <span className="detail">
        {subtitle}
      </span>
    </h1>
  );
}

export default TitleDescriptionSections;