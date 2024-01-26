import './AccordionPiece.css'


const AccordionPiece = ( {info: {name, details}, index, setActiveIndex, hidden} ) => {
    return (
        <section className="accordion-piece">
            <div 
                className="accordion-tab"
                onClick={() => setActiveIndex(index)}
            >
                {name}
            </div>
            <div className={hidden ? 'hide accordion-info' : 'show accordion-info'}>
                {details}
            </div>
        </section>
    )
}

export default AccordionPiece