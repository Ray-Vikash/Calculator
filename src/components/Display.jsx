import style from "./Display.module.css";
const Display = ({ input }) => {
  return (
    <>
      <input className={style.display} type="text" value={input} readOnly/>
    </>
  );
};

export default Display;
