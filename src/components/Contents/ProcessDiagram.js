import { ClockCircleOutlined } from "@ant-design/icons";
import User from './../../assets/images/user.png'
import Design from './../../assets/images/design.png'
import Cube from './../../assets/images/cube.png'
import '../../StyleSheets/Process.css'
import { Popover, Steps, Timeline } from "antd"


const description = 'You can hover on the dot.';


const ProcessDiagram = () => {
  const data = [
    {
      dot: User,
      heading: 'Client',
      content: 'Requirement and Purpose of the furniture and its location'
    },
    {
      dot: Design,
      heading: 'Crimp Team',
      content: 'Product designed based on clients requirement with selection of materials and estimation.'
    },
    {
      dot: Cube,
      heading: 'Delivery',
      content: 'Final Product similar to design with assured quality'
    },
  ]
  const handleDot = (item) => {
    console.log(item)
  }

  const customDot = (dot, { status, index }) => (
    <div style={{ width: '30px', marginLeft: "-15px" }} onClick={() => handleDot(data[index])}>
      <img src={data[index].dot} style={{ width: "100%" }} />
    </div>
  );
  return (
    <div >
      <div className="process">

        <Timeline
          mode="alternate"
          items={data.map((item) => {
            return {
              dot: <div className="rounded-circle" style={{ height: '30px', width: '30px', backgroundColor: 'red' }}>
                <img src={item.dot} style={{ width: "100%" }} />
              </div>,
              children: <div>
                <h4>{item.heading}</h4>
                <p>
                  {item.content}
                </p>
              </div>
            }
          })}
        />
      </div>
      <div className="step-process">
        <Steps
          current={2}
          progressDot={customDot}
          items={data.map((item) => {
            return {
              title: item.heading,
              description:item.content,
            }
          })}
        />
      </div>

    </div>
  )
}

export default ProcessDiagram;