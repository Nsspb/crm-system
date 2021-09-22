
import "./registr.css";

export default function Registr() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Лого</h3>
          <span className="loginDesc">
            Здесь мотивирующая фраза
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Логин" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Введите пароль" className="loginInput" />
            <input placeholder="Повторите пароль" className="loginInput" />
            <button className="loginButton">Регистрация</button>
            <button className="loginRegisterButton">
              Есть учетная запись
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}