import { EnvironmentFilled, EnvironmentOutlined, MailFilled, MailOutlined, PhoneFilled, PhoneOutlined } from '@ant-design/icons';
import ContactImg from '../assets/images/handshake.jpg'
import PageHeader from '../components/Contents/PageHeader';
import '../StyleSheets/Contact.css'
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const ContactUs = () => {
    return (
        <div>
            <PageHeader page="Contact Us" image={ContactImg} />
            <div class="container mt-4 mb-4 shadow p-3 mb-5 bg-body rounded">
                <div class=" container row">
                    <div className="col-md-4 text-center mt-4 border-end border-3">
                        <div>
                            <EnvironmentFilled style={{ fontSize: '25px', color: '#08c' }}/>
                            
                            <h5 class="text-primary">Address</h5>
                            <div class="text-one">Melapalayam</div>
                            <div class="text-two">Tirunelveli</div>
                        </div>
                        <div class="mt-4">
                            <PhoneFilled style={{ fontSize: '25px', color: '#08c' }} />
                            {/* <PhoneOutlined /> */}
                            {/* <div class="topic">Phone</div> */}
                            <h5 class="text-primary">Phone</h5>
                            <div class="text-one">+(91) 805 6707 579</div>
                            <div class="text-two">+(91) 805 6707 579</div>
                        </div>
                        <div class="mt-4">
                            <MailFilled style={{ fontSize: '25px', color: '#08c' }}/>
                            {/* <div class="topic">Email</div> */}
                            <h5 class="text-primary">Email</h5>
                            <div class="text-one">jbhassim93@gmail.com</div>
                            <div class="text-two">jbhassim93@gmail.com</div>
                        </div>
                    </div>
                    <div class="col-md-8 mt-4 text-center">
                        <h3 class="topic-text">Send us a message</h3>
                        <p>If you have any work from me or any types of quries related to our work, you can send me message from here. It's my pleasure to help you.</p>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
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
                                    offset: 8,
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