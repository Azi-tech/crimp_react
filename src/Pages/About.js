import AboutImg from '../assets/images/pexels-pixabay-37347.jpg' 
const About = () => {
    const bannerStyle = {
       
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        color: '#fff',
        paddingTop: '110px',
        paddingBottom:'110px'
    }

    return (
        <div>
            <div class="image-aboutus-banner" style={{ marginTop: "70px",backgroundImage: `url(${AboutImg})`,...bannerStyle }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="lg-text">About Us</h1>
                            <p class="image-aboutus-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;