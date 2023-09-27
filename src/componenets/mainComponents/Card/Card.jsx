import "./Card.css";

const Card = ({info}) => {
    return (
        <li>
            <img src={info.image} alt={info.name} className="imagen" />
            <h2 className="name">{info.name}</h2>
            <div className="boxdata">
                <h3 className="species">{info.species}</h3>
                <h3 className="planet">{info.location.name}</h3>
            </div>
        </li>
    )
}

export default Card;