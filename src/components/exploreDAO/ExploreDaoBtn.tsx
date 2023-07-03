import { ExploreItem } from '~/types/type'
import Gende from '../gendes/Gende'

interface PropsType {
    item: ExploreItem
}

const ExploreDaoBtn = ({ item }: PropsType) => {
    return (
        <button className='btn'>
            <div className="btn__head">
                <p className='btn__head--avatar'>{item.avatar}</p>
                <div>
                    <p className='btn__head--title'>{item.title}</p>
                    <p className='btn__head--author'>{item.author}</p>
                </div>
            </div>
            <div className="btn__foot">
                <p>{item.desc}</p>
                <div className="btn__foot--gendes">
                    {item.gendes.map(gende => (
                        <Gende itemName={gende.item} key={gende.id}></Gende>
                    ))}
                </div>

            </div>
        </button >
    )
}

export default ExploreDaoBtn