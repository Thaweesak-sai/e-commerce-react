import Icon from '@ant-design/icons/lib/components/Icon';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { Avatar, Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import CSS from 'csstype';
import React from 'react';
import '../App.css';

const App: React.FC = () => {
  const gridStyle: CSS.Properties = {
    width: '25%',
    textAlign: 'center'
  };

  const cardStyle: CSS.Properties = {
    textAlign: 'center'
  };

  return (
    <Card>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <Icon type="setting" />,
              <Icon type="edit" />,
              <Icon type="ellipsis" />
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>

        <Col className="gutter-row" span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              // <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col className="gutter-row" span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <Icon type="setting" />,
              <Icon type="edit" />,
              <Icon type="ellipsis" />
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default App;
