function Item({children}){
    return (
        <div className="item">
            <img src="/newsletter-sign-up-with-success-message-main/images/icon-list.svg" alt="" />
            <p>{children}</p>
        </div>
    )
}

export default Item