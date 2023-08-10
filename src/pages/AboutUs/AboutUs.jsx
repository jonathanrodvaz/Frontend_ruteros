import './AboutUs.css';

import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const AboutUs = () => {
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">Odiseas Urbanas y de Montaña</h2>

            <p className="section-subtitle">
              {' '}
              Nuestra <span className="about-negrita"> pasión por la aventura</span> y la
              comunidad nos impulsó a crear una plataforma{' '}
              <span className="about-negrita">donde las rutas</span> se convierten en
              sueños realizados.
            </p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://res.cloudinary.com/djglk3cso/image/upload/v1686559547/UserFTProyect/rfimrylpbiixauupnmwq.png"
                alt="person-review"
                className="team-img"
              />
              <h3>CARLOS MARTIN</h3>
              <div className="team-info">
                <p>Las Palmas de Gran Canaria</p>
              </div>
              <p>
                Quedé{' '}
                <span className="about-negrita">
                  fascinado por las travesías urbanas, descubriendo callejuelas ocultas
                </span>{' '}
                y vistas sorprendentes. Soy amante de las montañas, conquistando cumbres
                majestuosas. La ciudad me inspira. La naturaleza me envuelve.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://github.com/Cmrdevelopment"
                    className="gitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={38} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@neoland-school"
                    className="youTube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillYoutube size={44} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/NeolandStudio"
                    className="twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle size={40} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/NeolandStudio/?locale=es_ES"
                    className="facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook size={33} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://res.cloudinary.com/dxpdntpqm/image/upload/v1690204093/UserFTProyect/AboutUs/igor_pic_w1anw8.jpg"
                alt="person-review"
                className="team-img"
              />

              <h3>IGOR LUZARRAGA</h3>

              <div className="team-info">
                <p>Barcelona</p>
              </div>

              <p>
                Me fliparon las rutas urbanas,{' '}
                <span className="about-negrita">
                  descubrir ciudades escondidas y paisajes alucinantes.
                </span>{' '}
                Me encantan las montañas, encontrar cimas épicas y senderos increíbles. La
                ciudad me llena de emoción. La naturaleza me libera.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://github.com/IgorLuzarraga"
                    className="gitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={38} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@neoland-school"
                    className="youTube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillYoutube size={44} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/NeolandStudio"
                    className="twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle size={40} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/NeolandStudio/?locale=es_ES"
                    className="facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook size={33} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://res.cloudinary.com/dhlr7fvd8/image/upload/v1687627660/1675093921794_r3evad.jpg"
                alt="person-review"
                className="team-img"
              />

              <h3>Jonathan Rodríguez</h3>

              <div className="team-info">
                <p>A Coruña</p>
              </div>

              <p>
                Me cautivaron los laberintos urbanos,{' '}
                <span className="about-negrita">
                  explorando callejones secretos y panoramas asombrosos.
                </span>{' '}
                Adoro las montañas, hallar cumbres imponentes y senderos desafiantes. La
                urbe me emociona. La naturaleza me libera.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://github.com/jonathanrodvaz"
                    className="gitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={38} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@neoland-school"
                    className="youTube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillYoutube size={44} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/NeolandStudio"
                    className="twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle size={40} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/NeolandStudio/?locale=es_ES"
                    className="facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook size={33} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
