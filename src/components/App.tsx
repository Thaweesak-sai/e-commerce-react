import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import CSS from 'csstype';
import React from 'react';
import '../App.css';

const itemList = [
  {
    id: 1,
    itemName: 'bag',
    description: 'description1',
    imgURL:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
  },
  {
    id: 2,
    itemName: 'Hat',
    description: 'description2',
    imgURL:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
  },
  {
    id: 3,
    itemName: 'Bed',
    description: 'description3',
    imgURL:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
  }
];

const App: React.FC = () => {
  const gridStyle: CSS.Properties = {
    width: '25%',
    textAlign: 'center'
  };

  const cardStyle: CSS.Properties = {
    textAlign: 'center'
  };

  return (
    <div>
      <Row gutter={16}>
        {itemList.map((item) => {
          console.log(item.imgURL);
          return (
            <Col className="gutter-row" span={8}>
              <Card
                hoverable={true}
                cover={<img src={item.imgURL} />}
                actions={[
                  <EditOutlined
                    key="edit"
                    onClick={() => {
                      console.log('click on ', item.itemName);
                    }}
                  />,
                  <EllipsisOutlined key="ellipsis" />
                ]}
              >
                <Meta
                  title={item.itemName}
                  description={item.description}
                ></Meta>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
// return (
//   <Card>
//     <Row gutter={16}>
//       <Col className="gutter-row" span={8}>
//         <Card
//           cover={
//             <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
//           }
//           actions={[
//             <Icon type="setting" />,
//             <Icon type="edit" />,
//             <Icon type="ellipsis" />
//           ]}
//         >
//           <Meta
//             avatar={
//               <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
//             }
//             title="Card title"
//             description="This is the description"
//           />
//         </Card>
//       </Col>

//       <Col className="gutter-row" span={8}>
//         <Card
//           cover={
//             <img
//               alt="example"
//               src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//             />
//           }
//           actions={[
//             // <SettingOutlined key="setting" />,
//             <EditOutlined key="edit" />,
//             <EllipsisOutlined key="ellipsis" />
//           ]}
//         >
//           <Meta
//             avatar={
//               <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
//             }
//             title="Card title"
//             description="This is the description"
//           />
//         </Card>
//       </Col>
//       <Col className="gutter-row" span={8}>
//         <Card
//           cover={
//             <img
//               alt="example"
//               src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//             />
//           }
//           actions={[
//             <Icon type="setting" />,
//             <Icon type="edit" />,
//             <Icon type="ellipsis" />
//           ]}
//         >
//           <Meta
//             avatar={
//               <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
//             }
//             title="Card title"
//             description="This is the description"
//           />
//         </Card>
//       </Col>
//     </Row>
//     <Row gutter={16}>
//       <Col className="gutter-row" span={8}>
//         <Card
//           cover={
//             <img
//               alt="example"
//               src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//             />
//           }
//           actions={[
//             // <SettingOutlined key="setting" />,
//             <EditOutlined key="edit" />,
//             <EllipsisOutlined key="ellipsis" />
//           ]}
//         >
//           <Meta
//             avatar={
//               <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
//             }
//             title="Card title"
//             description="This is the description"
//           />
//         </Card>
//       </Col>
//       <Col className="gutter-row" span={8}>
//         <Card
//           cover={
//             <img
//               alt="example"
//               src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//             />
//           }
//           actions={[
//             // <SettingOutlined key="setting" />,
//             <EditOutlined key="edit" />,
//             <EllipsisOutlined key="ellipsis" />
//           ]}
//         >
//           <Meta
//             avatar={
//               <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
//             }
//             title="Card title"
//             description="This is the description"
//           />
//         </Card>
//       </Col>
//       <Col className="gutter-row" span={8}>
//         <Card
//           cover={
//             <img
//               alt="example"
//               src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//             />
//           }
//           actions={[
//             // <SettingOutlined key="setting" />,
//             <EditOutlined key="edit" />,
//             <EllipsisOutlined key="ellipsis" />
//           ]}
//         >
//           <Meta
//             avatar={
//               <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
//             }
//             title="Card title"
//             description="This is the description"
//           />
//         </Card>
//       </Col>
//     </Row>
//   </Card>

export default App;
