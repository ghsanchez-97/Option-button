import React from 'react';

const Saludar = () => {

    const [names, setNames] = React.useState(null);

    const handleChange = (e) => {
        setNames(e.target.value);
    };

    return (
        <React.Fragment>
            <div className='saludar__container'>
                <h1 className='saludar__title'>A quien vas a saludar!</h1>
                <main>
                    <div className='saludar__main'>
                        <label className='saludar__label'>Hola a</label>
                        <input text='text' placeholder='Nombre' onChange={handleChange} />
                    </div>

                    <div className='saludar__finish'>
                        <h1 className='saludar__finish--h1'>Saludar! <strong>{names}</strong></h1>
                    </div>
                </main>
            </div>
        </React.Fragment>
    )
}
export default Saludar;