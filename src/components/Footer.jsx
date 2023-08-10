import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-information-container">
        <div className="footer-infotmation">
          <p className="footer-infotmation-title">Unete y participa en nuestras rutas</p>
          <p className="footer-information-description">
            Disfruta de nuestras rutas tanto en la montaña como en la ciudad
            <br></br>y podrás disfrutar de los paisajes más emblematicos
          </p>
        </div>

        <div className="footer-container-img">
          <img
            src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1689612757/MochilaPersonita_r2kpic.png"
            alt="icon"
            className="footer-icon"
          ></img>
          <h3 className="titleWeb">Ru</h3>
          <h3 className="titleWeb-second">teros</h3>
        </div>
      </div>

      <div className="footer-container-form">
        <p className="footer-form-title">Contacta</p>

        <form
          className="footer-form"
          action="mailto:teammates.neoland23@gmail.com"
          method="post"
        >
          <label htmlFor="name">
            Nombre:
            <input
              className="footer-input-text"
              type="text"
              id="name"
              name="name"
              required
            />
          </label>

          <label htmlFor="mail">
            Correo electrónico:
            <input
              className="footer-input-text"
              type="email"
              id="mail"
              name="mail"
              required
            />
          </label>

          <label htmlFor="message">
            Mensaje:
            <input className="footer-input-text" id="message" name="message" required />
          </label>

          <input className="footer-input-submit" type="submit" value="Contactar" />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
