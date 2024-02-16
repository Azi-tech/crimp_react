import AboutImg from '../../assets/images/pexels-pixabay-37347.jpg';
const PageHeader = (props) => {
    const {page,image} = props
    const bannerStyle = {

        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        color: '#fff',
      
    }
    console.log(page);
    return (
        <div className="image-aboutus-banner" style={{ backgroundImage: `url(${image})`, ...bannerStyle }}>
            <div className='flex-column' style={{ height: '350px', width: '100%', background: 'rgba(0, 0, 0, 0.5)', textAlign: 'center', color: 'white', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>

                <div className="container" >
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="lg-text">{page}</h1>
                            <p className="image-aboutus-para">Start with a warm welcome and a brief overview of our company's mission and passion for creating custom furniture.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeader;