import "./style.css";
const RestrictedPage = ({ isLoggedIn, user, Login, Logout }) => {
  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1>Bem vindo(a), {user}</h1>
          <button className="button" onClick={Logout}>
            Sair
          </button>
        </div>
      ) : (
        <div>
          <h1>Você não pode acessar essa página.</h1>
          <button className="button2" onClick={Login}>
            Entrar
          </button>
        </div>
      )}
    </>
  );
};

export default RestrictedPage;
