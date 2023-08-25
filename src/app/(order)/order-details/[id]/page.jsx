const OrderDetails = ({ params , searchParams }) => {

    // id
    const { id } = params
    // query-string
    const { hello } = searchParams

    return(
        <div>
            {id}
            {hello}
        </div>
    )
}

export default OrderDetails