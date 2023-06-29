
interface CardType {
    image: string,
    title: string,
    description: string,
    btn: string
}

interface CardProps {
    card: CardType
}

const Card = ({ card }: CardProps) => {
    return (
        <div className="card">
            <div className="card-top">
                <img src={card.image} alt="" className="card__top--img" />
                <p className="card__top--title">{card.title}</p>
                <p className="card__top--description">{card.description}</p>
            </div>
            <button className="card--btn">
                {card.btn}
            </button>
        </div>
    )
}

export default Card