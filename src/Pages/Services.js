import PageHeader from "../components/Contents/PageHeader";
import ServiceImg from '../assets/images/services.jpg'
import { Tabs, Image } from "antd";
import { tabsData } from "../assets/json/tabs";


import '../StyleSheets/Services.css'
import CardList from "../components/Contents/CardList";

const Services = () => {

   const handleClick = (item,index) => {
        console.log(index);
   }
    return (
        <>
            <PageHeader page="Our Services" image={ServiceImg} />
            <div className="py-3 py-md-5 bg-light">
                <div className="container">
                    <h4 className="mb-4">Our Services</h4>
                    <Tabs
                        defaultActiveKey="1"
                        type="card"
                        // size={size}
                        items={tabsData.tabsList.map((tab, i) => {
                            const id = String(i + 1);
                            return {
                                label: tab,
                                key: id,
                                children: <>
                                    <h4>{tab.name}</h4>
                                    <div className="row">
                                        
                                        {tabsData.content?.filter(item => item.category.toLowerCase() === tab.toLowerCase()).map((data, index) => {
                                            return (

                                                <div className="col-md-3" key={index}>
                                                    <CardList item={data} index={index} handleClick={handleClick}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </>,
                            };
                        })}
                    />
                </div>
            </div>
        </>
    )
}

export default Services;