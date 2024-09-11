import { Space, Image, Table, Tag, Button, Breadcrumb, Input, Select, Typography, } from 'antd';
import { SearchOutlined, StopOutlined, FilterOutlined, PlusOutlined, HomeOutlined } from '@ant-design/icons';
import { stringify } from 'uuid';

const { Title } = Typography;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                })}
            </>
        ),
    },
];
  
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const breadCrumb = [
    {
        title: <a href="http://localhost:5173/"><HomeOutlined /></a>,
    },
    {
        title: <a href="https://techpubs.jurassic.nl/manuals/0630/developer/BuilderUG/sgi_html/index.html">Application Center</a>,
    },
    {
        title: <a href="https://techpubs.jurassic.nl/manuals/0630/developer/BuilderUG/sgi_html/index.html">Application List</a>,
    },
    {
        title: 'An Application',
    },    
]

const options = [
    {
        value: 'name',
        label: 'Name',
    },
    {
        value: 'age',
        label: 'Age',
    },
    {
        value: 'address',
        label: 'Address',
    },
    {
        value: 'tags',
        label: 'Tags',
    },    
];

const DevelopmentAppGridPage = () => {
    return (
        <Space direction="vertical" size={16} style={{ textAlign: 'left', marginTop: '20px', minWidth: '1000px' }}>
            <Breadcrumb items={breadCrumb} />
            <Title>Ant Design - Title</Title>         
            <Space size={"small"} >
                <Button icon={<PlusOutlined />} />
                <Button icon={<FilterOutlined />} disabled />
                <Select defaultValue="name" options={options} style={{ width: 120, }}/>            
                <Input placeholder='filter expression'/>
                <Button icon={<SearchOutlined />} />
                <Button icon={<StopOutlined />} />
            </Space>
            <Table columns={columns} dataSource={data} size="small" bordered 
                onRow={(record, rowIndex) => { 
                    return {
                        onClick: (event) => {alert("onClick" + " " + rowIndex)}, // click row 
                        onDoubleClick: (event) => {alert("onDoubleClick" + " " + rowIndex)}, // double click row 
                    };
                }}
            />           
        </Space> 
    )
}

export default DevelopmentAppGridPage

