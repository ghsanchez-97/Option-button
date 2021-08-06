import React from "react";
import Saludar from 'Views/Saludar/Saludar';
import Message from "Views/Message/message";
import Focus from "Views/Focus/focus";

const Home = () => {

    const [saludar, setSaludar] = React.useState(false);
    const [message, setMessage] = React.useState(false);
    const [focus, setFocus] = React.useState(false);

    const showSaludar = () => {
        setSaludar(!saludar);
        setMessage(false);
        setFocus(false);
    };

    const showMessage = () => {
        setSaludar(false);
        setMessage(!message);
        setFocus(false);
    };

    const showFocus = () => {
        setSaludar(false);
        setMessage(false);
        setFocus(!focus);
    };

  return (
    <React.Fragment>
      <div className="home__container">
        <div className="home__title">
          <h1 className="home__title--h1">Las tres opciones</h1>
        </div>
      </div>
      <main>
        <div className="home__main-content">
            <button className="home__main-content--button" onClick={() => showSaludar()}> Mostrar saludo</button>
            <button className="home__main-content--button" onClick={() => showMessage()}> Mostrar mensaje</button>
            <button className="home__main-content--button" onClick={() => showFocus()}> Mostrar Focus</button>
        </div>
      </main>

      {saludar === true ? <Saludar /> : null }
      {message === true ? <Message /> : null }
      {focus === true ? <Focus /> : null }
    </React.Fragment>
  );
};
export default Home;
