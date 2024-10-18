import "./css/textosStyle.css";

function Textos(props) {
  return (
    <>
      <div className="texts">
        <div className="titles">
          <div className="title">
            <h1>{props.titulo}</h1>
          </div>
          <div className="subtitle">
            <h2>{props.subtitulo}</h2>
          </div>
        </div>
        <div className="paragrafo">
          <p>{props.paragrafo}</p>
        </div>
        <div className="list">
          <ol>
            {props.lista.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
export default Textos;
