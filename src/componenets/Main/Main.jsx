import "./Main.css"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';


const Main = () => {

    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        const data = await fetch(`https://rickandmortyapi.com/api/character?page=1`);
        const dataJSON = await data.json();
        setCharacters(dataJSON.results);
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <main>
            <h1 className="title">Rick and Morty</h1>
            <section className="galeria">
                {characters.map((character) => (
                    <ul key={character.id} className="card">
                        <li className="imagen"><img src={character.image} alt={character.name} /></li>
                        <li className="name">{character.name}</li>
                        <li className="status">{character.status}</li>
                        <li className="species">{character.species}</li>
                        
                    </ul>
                    ))}
            </section>
            
        </main>
    )
}

export default Main;