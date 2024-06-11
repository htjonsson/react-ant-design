import { Layout, version, Dropdown, Button, Space, } from 'antd';
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

const items = [
    {
        key: '1',
        label: <Link to="/dash">Dashboard</Link>,
    },
    {
        key: '2',
        label: (
            <Link to="/query">Query</Link>
        ),
    },
    {
        key: '3',
        label: <Link to="/devel">Development</Link>,
    },
];


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
    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                REACT-ANT-DESIGN - {version}
                <Dropdown 
                    menu={{ 
                        items,
                        onClick
                    }} 
                    placement="bottomRight"
                    arrow={{ pointAtCenter: true, }}
                >
                    <Space style={{ paddingLeft: 30, }}>
                        <Button onClick={(e) => {alert(json.stringify(e))}}>Apps</Button>
                    </Space>
                </Dropdown>
            </Header>
            <Content style={contentStyle}>
                <div>Dashboard</div>
            </Content>
        </Layout>
    )
}

export default DashboardApp
