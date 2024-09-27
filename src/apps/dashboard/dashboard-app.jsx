import { Layout, version, Dropdown, Button, Space, Card, Image, } from 'antd';
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

const items = [
    {
        label: "Query",
        url: "/query"
    },
    {
        label: "Development",
        url: "/development"
    },
    {
        label: "SGI Motif",
        url: "/sgi-motif"
    }
]

const layoutStyle = {
};

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#8a09d9', 
};

const contentStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    minHeight: 'calc(100VH - 64px)',
    color: '#fff',
    backgroundColor: 'white',
};

const DashboardApp = () => {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                REACT-ANT-DESIGN - {version}
            </Header>
            <Content style={contentStyle}>
                <Space direction="horizontal" size={16}>
                    {items.map(item => {
                        return (
                            <Card size="small" style={{ width: 300, }} >
                                <Link to={item.url}>{item.label}</Link>
                            </Card>
                        );
                    })}
                </Space>
            </Content>
        </Layout>
    )
}

export default DashboardApp
