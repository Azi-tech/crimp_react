import { EnvironmentFilled, EnvironmentOutlined, MailFilled, MailOutlined, PhoneFilled, PhoneOutlined } from '@ant-design/icons';
import ContactImg from '../assets/images/handshake.jpg'
import PageHeader from '../components/Contents/PageHeader';
import '../StyleSheets/Contact.css'
import { Button, Checkbox, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const ContactUs = () => {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    const isMobileDevice = width <= 768;
    return (
        <div>
            <PageHeader page="Contact Us" image={ContactImg} />
            <div className="container mt-4 mb-4 shadow p-3 mb-5 bg-body rounded">
                <div className=" container row">
                    <div className={`col-md-4 text-center mt-4 pb-4 ${isMobileDevice ? 'border-bottom' : 'border-end'} border-3`}>
                        <div>
                            <EnvironmentFilled style={{ fontSize: '25px', color: '#08c' }}/>
                            
                            <h5 className="text-primary">Address</h5>
                            <div className="text-one">7,Ambai Road Melapalayam</div>
                            <div className="text-two">Tirunelveli - 627005</div>
                        </div>
                        <div className="mt-4">
                            <PhoneFilled style={{ fontSize: '25px', color: '#08c' }} />
                            {/* <PhoneOutlined /> */}
                            {/* <div className="topic">Phone</div> */}
                            <h5 className="text-primary">Phone</h5>
                            <div className="text-one">+(91) 744 8824 222</div>
                            <div className="text-two">+(91) 744 8824 222</div>
                        </div>
                        <div className="mt-4">
                            <MailFilled style={{ fontSize: '25px', color: '#08c' }}/>
                            {/* <div className="topic">Email</div> */}
                            <h5 className="text-primary">Email</h5>
                            <div className="text-one">jbhassim93@gmail.com</div>
                            <div className="text-two">jbhassim93@gmail.com</div>
                        </div>
                    </div>
                    <div className="col-md-8 mt-4 text-center">
                        <h3 className="topic-text">Send us a message</h3>
                        <p>If you have any work from me or any types of quries related to our work, you can send me message from here. It's my pleasure to help you.</p>
                        <Form
                            name="basic"
                            labelCol={{
                                span: isMobileDevice ? 24 : 8,
                            }}
                            wrapperCol={{
                                span: isMobileDevice ? 24 : 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Name"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your email!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            
                            <Form.Item
                                label="Message"
                                name="message"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your message!',
                                    },
                                ]}
                            >
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    offset: isMobileDevice ? 0 : 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;