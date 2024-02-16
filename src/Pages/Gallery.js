import { Image } from 'antd'
import GalleryImg from '../assets/images/hassim_table1.jpg'
import '../StyleSheets/Gallery.css'
import { HeartOutlined } from '@ant-design/icons'
import PageHeader from '../components/Contents/PageHeader'
const Gallery = () => {
    const bannerStyle = {

        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        color: '#fff',

    }
    const productList = [
        {
            image:GalleryImg,
            name :'Table design',
            category:'Table',
        },
        {
            image:GalleryImg,
            name :'Table design',
            category:'Table',
        },
        {
            image:GalleryImg,
            name :'Table design',
            category:'Table',
        },
        {
            image:GalleryImg,
            name :'Table design',
            category:'Table',
        },
    ]
    return (
        <div>
            <PageHeader page="Gallery" image={GalleryImg}/>
            <div className="py-3 py-md-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="mb-4">Our Products</h4>
                        </div>
                        {productList?.map((data,index) => {
                            return(

                                <div className="col-md-3" key={index}>
                                    <div className="product-card">
                                        <div className="product-card-img">
                                            <label className="stock bg-success">In Stock</label>
                                            {/* <img src={AboutImg} alt="Laptop"/> */}
                                            <Image

                                                src={data.image}
                                            />
                                        </div>
                                        <div className="product-card-body">
                                            <p className="product-brand">{data.category}</p>
                                            <h5 className="product-name">
                                                <a href="">
                                                    {data.name}
                                                </a>
                                            </h5>
                                            {/* <div>
                                        <span className="selling-price">$500</span>
                                        <span className="original-price">$799</span>
                                    </div> */}
                                            <div className="mt-2">
                                                <buttom href="" className="btn btn-primary">Add To Cart</buttom>
                                                <buttom href="" className="btn btn-primary m-2"> <HeartOutlined /> </buttom>
                                                <buttom href="" className="btn btn-primary"> View </buttom>
                                            </div>
                                            {/* <div className="btn-group mt-2" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-primary">Left</button>
                                        <button type="button" className="btn btn-primary">Middle</button>
                                        <button type="button" className="btn btn-primary">Right</button>
                                    </div> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Gallery;