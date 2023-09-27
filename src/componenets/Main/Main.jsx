import Card from "../mainComponents/Card/Card";
import "./Main.css"
import { useState, useEffect } from "react"


const Main = () => {

    const [characters, setCharacters] = useState([]);
    const [pages, setPage] = useState(2);

    const getCharacters = async () => {
        const data = await fetch(`https://rickandmortyapi.com/api/character?page=${pages}`);
        const dataJSON = await data.json();
        setCharacters(dataJSON.results);
    }

    useEffect(() => {
        getCharacters()
    }, [pages])

    return (
        <main>
            <h1 className="title">Rick and Morty</h1>
            <section className="pageBtn">
                {
                    pages <= 1 ? <button disabled>◀</button> : <button className="left btn" onClick={() => setPage(pages - 1)}>◀</button>
                }
                
                <span className="npage">{pages}</span>
                <button className="right btn" onClick={() => setPage(pages + 1)}>▶</button>
            </section>
            <ul className="galeria">
                {characters.map((character) => (
                     character.status == "Alive" || character.status == "unknown"? <Card key={character.id} info={character} /> : "" 
                    ))}
            </ul>
        </main>
    )
}

export default Main;