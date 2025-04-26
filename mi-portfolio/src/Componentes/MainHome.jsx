import React from "react";
import Card from "react-bootstrap/Card";
import "../Css/MainHome.css";
import { FaFacebook, FaInstagram, FaDiscord, FaGithub, FaGoogle, FaPaypal, FaYoutube } from "react-icons/fa";

const MainHome = ({
  nombre,
  apodo,
  edad,
  imagen,
  pais,
  provincia,
  email,
  lenguajes,
}) => {
  return (
    <div>
      <div className="divCard">
        <Card className="Card">
          <Card.Img variant="top" src={imagen} className="CardImg" />
          <Card.Body className="CardBody">
            <Card.Title className="TituloCard">{nombre}</Card.Title>
            <Card.Text className="CardText">
              Apodo: {apodo} <br />
              Edad: {edad} <br />
              Pais: {pais} <br />
              Provincia: {provincia} <br />
              Email: {email}
              <hr />
              Lenguajes aprendidos:{" "}
              {lenguajes.map((lenguaje, index) => (
                <li key={index}>{lenguaje}</li>
              ))}
              <hr />
              <div className="CardRedes">
                <div className="divRedes">
                  Redes: <br />
                </div>
                <div className="redes">
                  <a
                    href="https://www.facebook.com/maaic12/"
                    target="_blank"
                    className="facebook"
                  >
                  <FaFacebook />
                  </a>{" "}
                  <a
                    href="https://www.instagram.com/maaic12/"
                    className="instagram"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>{" "}
                  <a
                    href="https://discord.gg/aRSNZfZ4"
                    target="_blank"
                  >
                    <FaDiscord className="discord" />
                  </a>{" "}
                  <a
                    href="https://github.com/Maaic12"
                    target="_blank"
                    className="github"
                  >
                    <FaGithub />
                  </a>{" "}
                  <a
                    href="https://mail.google.com/mail/u/0/#all?compose=CllgCHrjDfpNpPJBgGlgbwcvfrNqgjVTtkqlpbbXRtdJrZkZpbPfGZJqZKjpsZRtSCQMdBNwXGV"
                    target="_blank"
                    className="gmail"
                  >
                    <FaGoogle />
                  </a>{" "}
                  <a
                    href="https://paypal.me/Maaic12?country.x=AR&locale.x=es_XC"
                    target="_blank"
                    className="paypal"
                  >
                    <FaPaypal />
                  </a>{" "}
                  <a
                    href="https://www.youtube.com/@Maic1209"
                    target="_blank"
                    className="youtube"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MainHome;
