import { useState } from "react";
import './css/horarioStyle.css'


function HoraDoDia(props)
{
    const [hora, setHora] = useState("");

    const handleSelection = (event) => {
        const valor = event.target.value;
        setHora(valor === "dia" ? "Bom dia" : valor === "tarde" ? "Boa tarde" : "Boa noite")

    }
    return(
        <>
        <div className="options">
        <input type="radio" className="option" value="dia" name="horaRadio" onChange={handleSelection} /> <label>Está de dia</label>
        <input type="radio" className="option" value="tarde" name="horaRadio" onChange={handleSelection} /> <label>Está de Tarde</label>
        <input type="radio" className="option" value="noite" name="horaRadio" onChange={handleSelection} /> <label>Está de noite</label>
        
       
        </div> 
        <p className="text">{hora}</p>
        </>
    );
}

export default HoraDoDia;