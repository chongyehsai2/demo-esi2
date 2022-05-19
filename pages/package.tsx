import { Card, Col, Row, Tabs } from "antd";
import MainLayout from "src/Components/MainLayout";

const Package = () => {
  return (
    <MainLayout>
      <Tabs centered>
        <Tabs.TabPane tab="Individuals" key="1">
          <Row gutter={16}>
            <Col span={6}>
              <Card title="Default size card" extra={<a href="#">More</a>}>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Default size card" extra={<a href="#">More</a>}>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Default size card" extra={<a href="#">More</a>}>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Business" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
      </Tabs>
    </MainLayout>
  );
};

export default Package;
