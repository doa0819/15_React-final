import { useState, useEffect } from "react";


function Search() {

    const [inputText, setInputText] = useState('');
    const [names, setNames] = useState('');
    const [poket,setPoket] = useState({sprites:{
        front_default: ''
    }})

    const onChangeHandler = (e) => {setInputText (e.target.value)}
    const onClickHandler = () => {
        setNames(inputText)
        setInputText('')
        
    }  

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon-form/${names}/`)
        .then(res=>res.json())
        .then(data=>{
            console.log('ㅇㅇㅇ',data)
            setPoket(data)})
    },[names])
    
    console.log(poket)
    
    return(
        <div>
            <h1>여기는 조회 하는곳</h1>
            <input 
                type="text"
                value={inputText}
                onChange={onChangeHandler}
            />
            <button onClick={onClickHandler}>검색</button>
            <img src={poket && poket.sprites.front_default} alt="사진 없음"/>
            
        </div>
    );
}

export default Search;