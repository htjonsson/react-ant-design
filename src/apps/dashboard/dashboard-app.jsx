import { Layout, version, Dropdown, Button, Space, } from 'antd';
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

const items = [
    {
        key: 'dash',
        label: <Link to="/dash">Dashboard</Link>,
    },
    {
        key: 'query',
        label: (
            <Link to="/query">Query</Link>
        ),
    },
    {
        key: 'devel',
        label: <Link to="/devel">Development</Link>,
    },
    {
        key: 'sgi-motif',
        label: <Link to="/sgi-motif">SGI Motif</Link>,
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
            </Header>
            <Content style={contentStyle}>
                <div>Dashboard</div>
                <Dropdown 
                    menu={{ 
                        items,
                        onClick
                    }} 
                    placement="bottomRight"
                    arrow={{ pointAtCenter: true, }}
                >
                    <Space style={{ paddingLeft: 30, }}>
                        <Button onClick={(e) => {alert('clicked')}}>Apps</Button>
                    </Space>
                </Dropdown>
            </Content>
        </Layout>
    )
}

export default DashboardApp
