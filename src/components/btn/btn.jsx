import { useEffect, useMemo } from "react";
import styles from "./btn.module.css";

const GeneralBtn = ({ title, firstName, lastName }) => {
  const color = useMemo(() => {
    if (title === "Editar") return "#FFE797";
    if (title === "Crear") return "#B4994F";
    return "#A72793";
  }, [title]);

  // LOGICA DE CONSOLA SEGÚN EL TEXTO DEL BOTÓN
  useEffect(() => {
    if (title === "Crear") {
      console.log(firstName);
    } else if (title === "Editar") {
      console.log(lastName);
    }
  }, [title, firstName, lastName]);

  return (
    <button className={styles.btn} style={{ "--btn-color": color }}>
      {title}
    </button>
  );
};

export default GeneralBtn;
