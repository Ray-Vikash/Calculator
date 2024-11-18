import style from "./Button.module.css";
const Button = ({ btn, handleButton }) => {
  // function handleButton(event, btns) {
  //   console.log(btns)
  // }
  
  return (
    <>
      <div className={style.buttonContainer}>
        {btn.map((btns) => (
          <button key={btns} className={style.btn} onClick={()=>handleButton(btns)}>
            {btns}{" "}
          
          </button>
        ))}{" "}
      </div>
    </>
  );
};

export default Button;
