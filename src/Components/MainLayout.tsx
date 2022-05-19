import type { NextPage } from "next";
import styled from "@emotion/styled";

import { Layout, Menu, Breadcrumb, Tabs, Card, Row, Col } from "antd";

const { Header, Content, Footer } = Layout;

const LayoutStyled = styled(Layout)`
  height: 100vh;

  .site-layout-content {
    padding: 24px;
    background: #fff;
  }

  #components-layout-demo-top .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }

  .ant-row-rtl #components-layout-demo-top .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }
`;

interface LayoutProps {
  children: JSX.Element;
}

const MainLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <LayoutStyled className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>Dashboard</Menu.Item>
          <Menu.Item>Settings</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "24px" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ever AI Technologies ©2020 Created by Azad Suhail
      </Footer>
    </LayoutStyled>
  );
};

export default MainLayout;
