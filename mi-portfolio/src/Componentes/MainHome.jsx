import React from "react";
import Card from "react-bootstrap/Card";
import "../Css/MainHome.css";

const MainHome = ({nombre,apodo,edad,imagen,pais, provincia,email,lenguajes,}) => {
  return (
    <div>
      <div className="divCard">
      <Card className="Card">
        <Card.Img variant="top" src={imagen} className="CardImg" />
        <Card.Body className="CardBody">
          <Card.Title className="TituloCard">{nombre}</Card.Title>
          <Card.Text className="CardText">
            <i>
              apodo: {apodo} <br />
              edad: {edad} <br />
              pais: {pais} <br />
              provincia: {provincia} <br />
              email: {email}
              <hr />
              Lenguajes aprendidos:{" "}
              {lenguajes.map((lenguaje, index) => (
                <li key={index}>{lenguaje}</li>
              ))}
              <hr />
              <div className="divRedes">
              Redes: <br />
              </div>
              <div className="redes">
            <a href="https://www.facebook.com/maaic12/" target="_blank" className="facebook">
              <i class="bi bi-facebook"></i>
            </a> {""}
            <a href="https://www.instagram.com/maaic12/" className="instagram" target="_blank">
              <i class="bi bi-instagram"></i>
            </a> {""}
            <a href="https://discord.gg/aRSNZfZ4" target="_blank" className="discord"><i class="bi bi-discord"></i></a> {""}
            <a href="https://github.com/Maaic12" target="_blank" className="github"><i class="bi bi-github"></i></a> {""}
            <a href="https://mail.google.com/mail/u/0/#all?compose=CllgCHrjDfpNpPJBgGlgbwcvfrNqgjVTtkqlpbbXRtdJrZkZpbPfGZJqZKjpsZRtSCQMdBNwXGV" target="_blank" className="gmail"><i class="bi bi-google"></i></a> {""}
            <a href="https://paypal.me/Maaic12?country.x=AR&locale.x=es_XC" target="_blank" className="paypal"><i class="bi bi-paypal"></i></a> {""}
            <a href="" target="_blank" className="youtube"><i class="bi bi-youtube"></i></a> 
            </div>
            </i>

          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
};

export default MainHome;
