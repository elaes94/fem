function Item({ item, color }) {

    const divStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor:
        color.slice(0, 3) + 'a' +
        color.slice(3, -1) +
        ', 0.05)',
        borderRadius: '1rem',
        padding: '1.1rem',
        marginBottom: '0.95rem'
    }

    const catStyle = {
        color,
        marginLeft: '1rem',
        marginRight: 'auto'

    }

    const img = item.icon.split('/').at(-1)


    return (
        <div className="item" style={divStyle}>
            <img src={"/results-summary-component-main/assets/images/" + img} alt="" className="src" />
            <span style={catStyle}>{item.category}</span>
            <span><b>{item.score}</b><span style={{ opacity: '0.5' }}> / 100</span></span>
        </div>
    )
}

export default Item