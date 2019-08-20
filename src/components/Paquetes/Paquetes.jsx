import React from "react";
import "./Paquetes.css";
import ToolTipInfo from "../ToolTip/ToolTipInfo";

//    Rabais auto habitacion
//    5144955170

const Paquetes = ({ main, second }) => {
  return (
    <div>
      <div className="wrapper_main">
        {main.map(i => (
          <div class="card">
            <h5 class="card-header">{i.titulo}</h5>

            <div
              class="card-body"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* <h5 class="card-title"> {i.subtitulo} </h5>        */}

              <ol>
                {" "}
                {i.data.map(i => (
                  <li key={i.info}>
                    {i.info}
                    {!i.tip ? <p></p> : <ToolTipInfo props={i} />}
                  </li>
                ))}
              </ol>

              <a
                style={{ marginTop: "10px" }}
                href="mailto:contacto@interaudio.mx"
                class="btn btn-primary"
                url=""
              >
                Contacto{" "}
              </a>
            </div>
          </div>
        ))}

        <div class="card">
          <h5 class="card-header">
            Servicios Adicionales <p>(6hrs)</p>
          </h5>
          <div class="card-body">
            <ul>
              <li>Dj/Vdj versatil con booth y monitores + MXN $1,500</li>
              <li>Videoproyección HD Solid shine Laser + $1000</li>
              <li>Sistema lineal compacto (2 Tops, 1 Sub) + $1000</li>
              <li>Maquina de humo + $300</li>

              <li>Pista de leds (cotizar)</li>
              <li>Backline (cotizar)</li>
            </ul>
            <a href="mailto:contacto@interaudio.mx" class="btn btn-primary">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Paquetes;
