import "./content.scss"
import content from "./content.json"
import Card from "~/components/card/Card"
import ExploreDAO from "~/components/exploreDAO/ExploreDAO"

const Content = () => {
    return (
        <div className='container'>
            <div className="content__list">
                {content.map(card => (
                    <Card key={card.id} card={card}></Card>
                ))}
            </div>
            <ExploreDAO></ExploreDAO>
        </div>
    )
}

export default Content