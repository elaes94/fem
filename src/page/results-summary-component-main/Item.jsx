function Item({img, color, backgroundColor}) {

    const divStyle = {
        backgroundColor
    }

    const itemColor = {
        color
    }

    return (
        <div className="item" style={divStyle}>
            <img src={"./src/page/results-summary-component-main/assets/images/"+img} alt="" className="src" />
            <span style={itemColor}>Reaction</span>
            <span><b>80</b> / 100</span>
        </div>
    )
}

export default Item