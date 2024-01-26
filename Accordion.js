import { useState } from "react"
import AccordionPiece from "./AccordionPiece"

const Accordion = () => {
    const data = [
        {
            name: 'food',
            details: "Food is delicious"
        },
        {
            name: 'games',
            details: "Games are fun"
        }
    ]
    const [activeIndex,setActiveIndex] = useState(null)
    console.log(activeIndex)
    return (
        <div classname="accordion">
            {data.map((obj,index) => {
                return (<AccordionPiece key={index} index={index} info={obj} hidden={activeIndex !== index} setActiveIndex={setActiveIndex}/>)
            })}
        </div>
    )
}

export default Accordion