import "./style.scss";

const Footer = () => {
  return(
    <footer className="footer">
      <div className="informationFooter">
        <div className="contact">
          <h2 className="title">Contato</h2>

          <span className="phoneNumber">
            (11) 97411-8228
          </span>

          <span className="email">
            lutheria120576@gmail.com
          </span>

          <article>
            <div className="box" />
          </article>
        </div>

        <div className="address">
          <h2 className="title">
              Endereço
          </h2>

          <p className="adressDescription">
            Alameda dos Pessegueiros, 30 - Vila Industrial Caieiras - SP 07700-000
          </p>
        </div>

        <div className="aboutLutherie">
          <h2 className="title">
            Roger Silva Lutheria
          </h2>

          <p className="lutherieDescription">
            Confira alguns de nossos instrumentos, para ter uma opção de escolha para a construção do seu instrumento – Violino / Viola / Violoncelo
          </p>
        </div>
      </div>

      <div className="developerName">
        <p>
          Developed by Pablo Silva
        </p>
      </div>
    </footer>
  );
}

export default Footer;