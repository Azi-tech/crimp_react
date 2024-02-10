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
            <div class="py-3 py-md-5 bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h4 class="mb-4">Our Products</h4>
                        </div>
                        {productList?.map((data,index) => {
                            return(

                                <div class="col-md-3" key={index}>
                                    <div class="product-card">
                                        <div class="product-card-img">
                                            <label class="stock bg-success">In Stock</label>
                                            {/* <img src={AboutImg} alt="Laptop"/> */}
                                            <Image

                                                src={data.image}
                                            />
                                        </div>
                                        <div class="product-card-body">
                                            <p class="product-brand">{data.category}</p>
                                            <h5 class="product-name">
                                                <a href="">
                                                    {data.name}
                                                </a>
                                            </h5>
                                            {/* <div>
                                        <span class="selling-price">$500</span>
                                        <span class="original-price">$799</span>
                                    </div> */}
                                            <div class="mt-2">
                                                <buttom href="" class="btn btn-primary">Add To Cart</buttom>
                                                <buttom href="" class="btn btn-primary m-2"> <HeartOutlined /> </buttom>
                                                <buttom href="" class="btn btn-primary"> View </buttom>
                                            </div>
                                            {/* <div class="btn-group mt-2" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-primary">Left</button>
                                        <button type="button" class="btn btn-primary">Middle</button>
                                        <button type="button" class="btn btn-primary">Right</button>
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