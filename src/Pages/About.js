import PageHeader from "../components/Contents/PageHeader";
import AboutImg from '../assets/images/pexels-pixabay-37347.jpg';
const About = () => {
    return (
        <div>
            <PageHeader page="About Us" image={AboutImg}/>
            <div className='container'>
                <div className='mt-5'>
                    <h3>About Crimp</h3>
                    <hr></hr>
                    <p>Welcome to Crimp, where craftsmanship meets creativity to redefine your living spaces. At Crimp, we take pride in turning your dreams into handcrafted masterpieces that elevate the aesthetics and functionality of your home.</p>
                </div>
                
                <div className='mt-5'>
                    <h3>Our Story</h3>
                    <hr></hr>
                    <p>Founded in 2023, Crimp has been a passion-driven venture from the very beginning. What started as a small workshop has now blossomed into a hub of skilled artisans, designers, and furniture enthusiasts dedicated to delivering bespoke solutions.</p>
                </div>
            
                <div className='mt-5'>
                    <h3>Our Philosophy</h3>
                    <hr></hr>
                    <p>At the core of Crimp's philosophy is a commitment to quality, uniqueness, and customer satisfaction. We believe that furniture should not only serve a functional purpose but also tell a story, reflecting the individuality and style of its owner.</p>
                </div>
                <div className='mt-5'>
                    <h3>The Craftsmanship</h3>
                    <hr></hr>
                    <p>Our team of experienced craftsmen brings together traditional techniques and modern design, ensuring that each piece is a timeless work of art. From the selection of premium materials to the meticulous attention to detail, we strive for perfection in every creation.</p>
                </div>
                <div className='mt-5'>
                    <h3>Customization</h3>
                    <hr></hr>
                    <p>What sets us apart is our unwavering dedication to customization. We understand that every space is unique, and so are our clients. Whether it's a custom dining table, a bespoke sofa, or a personalized bedroom set, we work closely with our clients to bring their visions to life.</p>
                </div>
                <div className='mt-5'>
                    <h3>Sustainability</h3>
                    <hr></hr>
                    <p>We are committed to sustainable practices. Crimp sources materials responsibly, minimizing environmental impact while creating furniture that stands the test of time.</p>
                </div>
                <div className='mt-5'>
                    <h3>Get in Touch</h3>
                    <hr></hr>
                    <p>Thank you for considering Crimp for your custom furniture needs. We invite you to explore our portfolio, discover the possibilities, and embark on a journey to transform your living spaces.</p>
                </div>

            </div>
        </div>
    )
}

export default About;