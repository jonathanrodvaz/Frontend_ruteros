import './Home.css';

import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-description">
        <div className="home-presentation">
          <img
            src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690969392/foto_principal_ruteros_reduced_azx4qd.png"
            alt="imagen inicial de rutas y viajes"
          />
          <div className="home-title-home-br-button-container">
            <p className="home-title">
              Excursiones por todo el mundo con ganas
              <br className="home-br"></br> de disfrutar de nuevas rutas
            </p>
            <div className="home-button-container">
              <p className="home-p">
                Descubre la libertad de visitar a tu manera o junto a los <br></br>{' '}
                mejores guías en nuestra plataforma.
              </p>

              <div className="home-subButton">
                <NavLink to="/citys">
                  <button className="home-contactUs-header">Ciudades</button>
                </NavLink>
                <NavLink to="/mountainRoutes">
                  <button className="home-learnMore">
                    <p style={{ margin: 0 }}>Montañas</p>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-planificador-de-viajes">
        <div className="home-planificador-de-viajes-planificación-conjunta">
          <img
            src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690470283/Infograf%C3%ADa_Planificaci%C3%B3n_de_Viajes_Ilustrado_Verde_llh0fx.png"
            alt="infografia de planificador de viajes"
          />
        </div>
        <div className="home-planificador-de-viajes-container">
          <div className="home-planificador-de-viajes-texto-h2-y-h3">
            <h2>
              Trazando{' '}
              <span className="home-negrita" style={{ color: '#25d366' }}>
                Sueños
              </span>
            </h2>
            <h3>
              El{' '}
              <span className="home-negrita" style={{ color: '#25d366' }}>
                Viaje Perfecto
              </span>{' '}
              con Nuestro Planificador Personalizado
            </h3>
          </div>
          <div className="home-planificador-de-viajes-texto-p">
            <p>
              Sigue nuestro planificador de viajes{' '}
              <span className="home-negrita">
                diseñado para satisfacer tus deseos de aventura y descubrir nuevos
                horizontes.
              </span>{' '}
              Con una amplia variedad de destinos emocionantes y experiencias
              personalizadas, cada paso del viaje está cuidadosamente diseñado para que
              disfrutes al máximo. Desde la comodidad de tu hogar,{' '}
              <span className="home-negrita">
                explora exóticas culturas,{' '}
                <span style={{ color: '#25d366' }}>
                  paisajes asombrosos y actividades fascinantes{' '}
                </span>
                que se adaptan a tu estilo y presupuesto.
              </span>
            </p>{' '}
            <p>
              Deja que nuestra plataforma te inspire con sugerencias únicas y consejos de
              expertos, garantizando que cada experiencia sea auténtica y significativa.
              Ya sea que busques una{' '}
              <span className="home-negrita">
                escapada romántica, una aventura llena de adrenalina o un retiro
                relajante,{' '}
                <span style={{ color: '#25d366' }}>
                  nuestro planificador te guiará hacia el viaje de tu vida.
                </span>{' '}
              </span>
              ¡Emprende tu próxima aventura hoy mismo y crea recuerdos que atesorarás para
              siempre!
            </p>
            <div className="home-planificador-de-viajes-separado">
              <div className="home-planificador-de-viajes-separado-primer-grupo">
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690475499/Planificdor_de_viajes1_co9osb.png"
                  alt="primer punto de la infografia de planificador de viajes"
                />
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690476402/Planificdor_de_viajes2.1_gmes5s.png"
                  alt="segundo punto de la infografia de planificador de viajes"
                />
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690477140/Planificdor_de_viajes3_gnk6xu.png"
                  alt="tercer punto de la infografia de planificador de viajes"
                />
              </div>
              <div className="home-planificador-de-viajes-separado-segundo-grupo">
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690542288/Planificdor_de_viajes4_w7kphm.png"
                  alt="cuarto punto de la infografia de planificador de viajes"
                />
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690542804/Planificador_el_secreto_de_una_planificaci%C3%B3n_perfecta2_w2qrqk.png"
                  alt="el secreto de una planificación pefecta"
                />
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690542572/Planificdor_de_viajes5_a7dytx.png"
                  alt="quinto punto de la infografia de planificador de viajes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-company-container">
        <p className="home-p-company">
          Algunas de nuestras{' '}
          <span className="home-negrita" style={{ color: '#25d366' }}>
            {' '}
            rutas de ciudad{' '}
          </span>{' '}
          recomendadas
        </p>
        <div className="home-company-container-imagenes-ciudades">
          <div className="home-company-container-imagenes-ciudades-primera-fila">
            <NavLink to="/citys">
              <div className="hover-element">
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690546203/Ciudades/Ciudades_dubai-2650364_1280_phwab4.jpg"
                  alt="rutas de ciudades"
                />
                <h2 className="hover-text">Ciudades Enigmáticas</h2>
              </div>
            </NavLink>
            <NavLink to="/citys">
              <div className="hover-element">
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690546203/Ciudades/Ciudades_columbus-1618317_1280_pzk5vb.jpg"
                  alt="rutas de ciudades"
                />
                <h2 className="hover-text">Destinos Fascinantes</h2>
              </div>
            </NavLink>
            <NavLink to="/citys">
              <div className="hover-element">
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690546203/Ciudades/Ciudades_new-york-city-78181_1280_tnbjs6.jpg"
                  alt="rutas de ciudades"
                />
                <h2 className="hover-text">Lugares Únicos</h2>
              </div>
            </NavLink>
          </div>
          <div className="home-company-container-imagenes-ciudades-segunda-fila">
            <NavLink to="/citys">
              <div className="hover-element">
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690546204/Ciudades/Ciudades_copenhagen-142711_1280_bjmra6.jpg"
                  alt="rutas de ciudades"
                />
                <h2 className="hover-text">Lugares Misteriosos</h2>
              </div>
            </NavLink>
            <NavLink to="/citys">
              <div className="hover-element">
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690546203/Ciudades/Ciudades_paris-195327_1280_g3jnqz.jpg"
                  alt="rutas de ciudades"
                />
                <h2 className="hover-text">Rutas Urbanas</h2>
              </div>
            </NavLink>
            <NavLink to="/citys">
              <div className="hover-element">
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690546203/Ciudades/Ciudades_hotel-de-cluny-187866_1280_ceydbm.jpg"
                  alt="rutas de ciudades"
                />
                <h2 className="hover-text">Ciudades Intrigantes</h2>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="home-subButton">
          <NavLink to="/citys">
            <button className="home-contactUs">Rutas de Ciudades</button>
          </NavLink>
        </div>
      </div>

      <div className="home-company-container">
        <p className="home-p-company">
          Algunas de nuestras{' '}
          <span className="home-negrita" style={{ color: '#6e2f5a' }}>
            rutas de montaña
          </span>{' '}
          recomendadas
        </p>
        <div className="home-company-container-imagenes-ciudades">
          <div className="home-company-container-imagenes-montañas-primera-fila">
            <NavLink to="/mountainRoutes">
              <div className="hover-element">
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690756979/Monta%C3%B1as/Monta%C3%B1as_mountains-5982602_1280_xcpfj3.jpg"
                  alt="rutas de ciudades"
                />
                <h2 className="hover-text">Castillos Misteriosas</h2>
              </div>
            </NavLink>
            <NavLink to="/mountainRoutes">
              <div className="hover-element">
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690756931/Monta%C3%B1as/Monta%C3%B1as_people-2591874_1280_xgk9fh.jpg"
                  alt="rutas de ciudades"
                />
                <h2 className="hover-text">Vistas Alpinas</h2>
              </div>
            </NavLink>
            <NavLink to="/mountainRoutes">
              <div className="hover-element">
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690757000/Monta%C3%B1as/Monta%C3%B1as_bastei-3014467_1280_nphhth.jpg "
                  alt="rutas de ciudades"
                />
                <h2 className="hover-text">Destinos Montañosos</h2>
              </div>
            </NavLink>
          </div>
          <div className="home-company-container-imagenes-montañas-segunda-fila">
            <NavLink to="/mountainRoutes">
              <div className="hover-element">
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690756955/Monta%C3%B1as/Monta%C3%B1as_lake-5899481_1280_jecetw.jpg"
                  alt="rutas de ciudades"
                />
                <h2 className="hover-text">Lagos Misteriosos</h2>
              </div>
            </NavLink>
            <NavLink to="/mountainRoutes">
              <div className="hover-element">
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690756906/Monta%C3%B1as/Monta%C3%B1as_mountains-440520_1280_nylywg.jpg"
                  alt="rutas de ciudades"
                />
                <h2 className="hover-text">Rutas Montañosas</h2>
              </div>
            </NavLink>
            <NavLink to="/mountainRoutes">
              <div className="hover-element">
                <img
                  src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690756877/Monta%C3%B1as/Monta%C3%B1as_alberta-2297204_1280_zcagtg.jpg"
                  alt="rutas de ciudades"
                />
                <h2 className="hover-text">Montañas Intrigantes</h2>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="home-subButton">
          <NavLink to="/citys">
            <button className="home-contactUs">Rutas de Montañas</button>
          </NavLink>
        </div>
      </div>
      <div className="home-review-container">
        <p className="home-review-title">
          Algunos de nuestros
          <div className="titleFatherContainerHome">
            <NavLink to="/ruteros" className="header-link-one">
              <img
                className="header-logo"
                alt="icon"
                src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1689612757/MochilaPersonita_r2kpic.png"
              ></img>
              <h3 className="titleWeb">Ru</h3>
              <h3 className="titleWeb-second">Teros</h3>
            </NavLink>
          </div>
          satisfechos
        </p>

        <section className="home-review-section">
          <figure className="home-review-figure">
            <p className="home-review-figure-p">
              En mi viaje por rutas urbanas, me sentí viva como nunca. Con cada ciudad, mi
              corazón se llenaba de maravillas y aprendizajes. Descubrí mi pasión por
              explorar y apreciar la diversidad del mundo.
            </p>
            <div className="home-review-developer">
              <img
                className="home-person-review"
                src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690793339/Ruteros/ChicaTestimonioFeliz_dkvgow.jpg"
                alt="person-review"
              ></img>

              <div className="home-nameJob-person">
                <p className="home-person">Maria Hernandez</p>
                <p className="home-job">Urbanita soñadora</p>
              </div>
            </div>
          </figure>

          <figure className="home-review-figure">
            <p className="home-review-figure-p">
              En mi viaje por rutas de montañas, me sentí vivo como nunca. Con cada
              sendero, mi corazón se llenaba de maravillas y aprendizajes. Descubrí mi
              pasión por explorar y apreciar la grandeza natural del mundo.
            </p>
            <div className="home-review-developer">
              <img
                className="home-person-review"
                src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690793399/Ruteros/ChicoTestimonioGafas_rcwehm.jpg"
                alt="person-review"
              ></img>

              <div className="home-nameJob-person">
                <p className="home-person">Erik Montaña</p>
                <p className="home-job">Alpinista Aventurero</p>
              </div>
            </div>
          </figure>

          <figure className="home-review-figure">
            <p className="home-review-figure-p">
              Durante mi travesía por rutas diversas, me sentí plena y enérgica. Cada
              sendero desveló maravillas y enseñanzas. ¡Me contagié de la fiebre
              aventurera y ahora disfruto explorando y bailando con cada nueva
              experiencia!
            </p>
            <div className="home-review-developer">
              <img
                className="home-person-review"
                src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690793593/Ruteros/MujerTestimonioAlegre_hsdsbn.jpg"
                alt="person-review"
              ></img>

              <div className="home-nameJob-person">
                <p className="home-person">Elena Vermejo</p>
                <p className="home-job">Viajera de Horizontes</p>
              </div>
            </div>
          </figure>
        </section>
      </div>
    </div>
  );
};
