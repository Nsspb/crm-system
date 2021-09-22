import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Здесь логотип</h3>
          <span className="loginDesc">
            Здесь лозунг!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Войти</button>
            <span className="loginForgot">Забыли пароль?</span>
            <button className="loginRegisterButton">
              Создайте аккаунт
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
