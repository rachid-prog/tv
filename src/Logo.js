import s from "./style.module.css";
import logo from "./assets/images/logo.png"

export default function Logo() {
  return (
    <>
      <div className={s.container}>
        <img src={logo} alt=""/>
        <span className={s.title}></span>
      </div>
      <span className={s.subtitle}></span>
    </>
  );
}
