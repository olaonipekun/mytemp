import { useEffect, useState } from 'react';

function Card() {
    const [inputValue, setInputValue] = useState('');
    const [showText, setShowText] = useState(false);
    const [codeHistory, setCodeHistory] = useState([]); // New state for storing code history

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        setShowText(true);
        setCodeHistory([...codeHistory, inputValue]); // Add current input to history
        setInputValue('');
    };
    

    return (
        <div className="card">
            <img
                className="card-img"
                src="https://picsum.photos/200/250"
                alt="A profile picture"
            ></img>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I am Ololade and I code for a living </p>

            <input type="text" value={inputValue} onChange={handleChange} placeholder='Type something here'/>
            <button className="btnclick" onClick={handleClick}>
                Click Me
            </button>
            <ol>
                {codeHistory.map((code, index) => (
                    <li key={index}>{code}</li>
                ))}
            </ol>
        </div>
    );
}

export default Card;

