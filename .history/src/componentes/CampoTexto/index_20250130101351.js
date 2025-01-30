import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    console.log(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificado}
      />
    </div>
  );
};

export default CampoTexto;
