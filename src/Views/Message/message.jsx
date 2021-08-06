import React from 'react';

const Message = () => {

    const [showMessage, setShowMessage] = React.useState(false);

    const handleClick = () => {
        setShowMessage(!showMessage)
    }

    return(
        <React.Fragment>
            <div className="message__container" >
                <div className="message__title">
                    <h1>Mostración de mensaje</h1>
                </div>
                <main className="message__content">
                    <div className="message__content__text">
                        <a href="#" className="message__content__text__link" onClick={handleClick}>
                            <h2>¿Quieres Comprar un Auto Nuevo?</h2>
                        </a>
                        {showMessage === true ? <p>LLama al +505 8888-8888 ahora!</p> : null}
                    </div>
                </main>
            </div>
        </React.Fragment>
    )
}
export default Message;