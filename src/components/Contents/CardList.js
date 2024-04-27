import { Image } from "antd";

const CardList = (props) => {
    const { item, index, handleClick } = props
    console.log(item);
    return (
        <>
            <div onClick={() => handleClick(item, index)}>

            </div>
            <div className="product-card rounded">
                <div className="product-card-img">
                    <label className="stock bg-success">In Stock</label>
                    <Image
                        src={item.image}
                    />
                </div>
                <div className="product-card-body">
                    <h5>{item.heading}</h5>
                    <p className="product-brand">{item.content}</p>
                    <p className="text-center text-primary" onClick={() => handleClick(item, index)}>Read More</p>
                </div>
            </div>
        </>
    )
}

export default CardList;