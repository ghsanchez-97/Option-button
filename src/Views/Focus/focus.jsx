import React from 'react';

const Focus = () => {

    const [text, setText] = React.useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return(
        <React.Fragment>
            <div className='focus__container'>
                <div className='focus__title'>
                    <h1>Focus</h1>
                </div>
                <main>
                    <input type='text' placeholder='Type something...' onChange={handleChange} className={text.length > 0 ? 'focus_active' : 'focus__disable'}/>
                </main>
            </div>
        </React.Fragment>
    )
}
export default Focus;