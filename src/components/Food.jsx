function Food(){
    const food1 = 'Pizza';
    const food2 = 'Hamburger';
    const food3 = 'Salad';
    return(
        <div>
            <ul>
                <li> apple </li>
                <li>{food2}</li>
                <li>{food3.toUpperCase()}</li>
            </ul>
        </div>
    )
}

export default Food;