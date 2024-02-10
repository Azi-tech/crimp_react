import React from 'react';
import { Carousel } from 'antd';
import img1 from '../../assets/images/fur.jpg';
import img2 from '../../assets/images/fur2.jpg';
import img3 from '../../assets/images/fur3.jpg';
import { Link } from 'react-router-dom';

const contentStyle = {
//   height: '500px',
//   color: '#fff',

//   textAlign: 'center',
//   background: '#364d79',
// opacity:0.1,
backgroundColor:'black',
margin: 0,
backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
width: '100vw',
height: '100vh'
//   backgroundImage:"http://www.jbarchitects.in/images/ab1.jpg"
};
const CarouselComponent = () => {
  const data = [
    {
      id:1,
      name:"Design 1",
      image:img1,
      heading:"Welcome to Crimp",
      buttonName:'About us',
      bath:'/about'
    },
    {
      id:2,
      name:"Design 2",
      image:img2,
      heading:"Explore our Work",
      buttonName:'Go to gallery',
      bath:'/gallery'
    },
    {
      id:3,
      name:"Design 3",
      image:img3,
      heading:"Keep Touch with us",
      buttonName:'Contact Us',
      bath:'/contact'

    }
  ]
  return (
  <Carousel autoplay>
    {data.map((data,idx) => {
      // let opacity = 0.5
      // setTimeout(()=>{
      //   opacity = 0
      // },2000)
      return(
        <div>
        <div style={{background: 'rgba(0, 0, 0, 0.5)',backgroundImage: `url(${data.image})`,...contentStyle}}>
          <div className='flex-column' style={{height:'100%',width:'100%',background: 'rgba(0, 0, 0, 0.5)',textAlign:'center',color:'white',justifyContent:'center',display:'flex',alignItems:'center'}}>
          <div>

              <h1 style={{fontSize:70}}>{data.heading}</h1>
          </div>
          
          <div>
     
          <Link className='btn btn-primary' to={data.bath}>{data.buttonName}</Link>

          </div>
          </div>
        </div>
      </div>
      )
    })}

  </Carousel>
);
}
export default CarouselComponent;