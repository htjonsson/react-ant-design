import React from 'react';
import { 
    Typography,
    Table, 
    Layout,
    Tag,
    Space,
    Button,
    Input,
    Select,
} from 'antd';

const { Header, Sider } = Layout;
const { Text, Title, } = Typography;
const { Search } = Input;

const searchData = [
    {
        value: "title",
        label: "Title"
    },
    {
        value: "type",
        label: "Type"
    },
    {
        value: "dec",
        label: "Description"
    }
]

const tableData = [
    {
        title: <Text strong>TENANTS</Text>,
        key: 'c85b6030-b3a0-4d12-9a61-2f9c13b79f39',
        type: 'form',
    },
    {
        title: <Text strong>Layout</Text>,
        key: '1cb6e4d0-cbb9-4978-a37e-5201512e6c19',
        type: 'layout',
    },
    {
        title: 'title',
        key: '4eb3f326-ad0b-4e7b-b4d6-77840f974dc2',
        type: 'textField',
    },
    {
        title: 'firstName',
        key: 'db4c62cf-17ec-4be0-920a-b52a1aea8704',
        type: 'textField',
    },
    {
        title: 'middleName',
        key: 'c08283f6-a725-4336-9639-35423e1c591b',
        type: 'textField',
    },
    {
        title: 'surName',
        key: ' c1e18f2b-b000-4588-8924-e12680685e7d',
        type: 'textField',
    },
    {
        title: 'email',
        key: 'ba53ae2d-2d42-42d4-abea-951e93acd2fa',
        type: 'textField',
    },
    {
        title: 'phoneNumber',
        key: '304c6242-2ef0-4438-81c8-b09888249f23',
        type: 'textField',
    },
    {
        title: 'dateOfBirth',
        key: '5360ef6e-470c-4ad4-a3aa-3d6c29443ea3',
        type: 'textField',
    },
    {
        title: '[spacer]',
        key: '61fc9d5c-c092-4089-b7b8-4e3ffc9e45d0',
        type: 'textField',
    },
    {
        title: 'houseNumber',
        key: 'a3dfb912-f15e-4538-a88d-787cd25853c1',
        type: 'textField',
    },
    {
        title: 'street1',
        key: '5bbeb0da-2706-4f95-9b2f-6386e7938b12',
        type: 'textField',
    },
    {
        title: 'street2',
        key: 'f1ee0459-b359-4d7c-8d12-7cd557ca1732',
        type: 'textField',
    },
    {
        title: 'street3',
        key: '3ffa3d32-d632-49f0-a6a4-45dd4426b868',
        type: 'textField',
    },
    {
        title: 'city',
        key: '1a366d3c-d8fd-4a74-9f87-34b081b07c01',
        type: 'textField',
    },
    {
        title: 'postCode',
        key: '900e886f-c5d5-403b-818e-c4db6a5eec71',
        type: 'textField',
    }, 
];

const tableColumns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text) => <a>{text}</a>,
        width: 240,
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        render: (text) => <Tag>{text.toUpperCase()}</Tag>,
        width: 80,
    },
    {
        title: 'Description',
        dataIndex: 'desc',
        key: 'desc',
    },    
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const contentStyle = {
    textAlign: 'left',
    borderRadius: '8px',
    padding: '12px',
    backgroundColor: 'white',
    fontSize: '13px',
};

const siderStyle = {
    backgroundColor: 'white'
};

const floatRight = {
    float: 'right'
}

const handleSave = () => {}
const handleAdd = () => {}
const handleSearch = (value) => {}

const FormBuilderTable = () => {
    return (
        <Layout>
            <Sider width='200px' style={siderStyle}>            
            </Sider>
            <Layout style={contentStyle}>
                <div>
                    <Space
                        style={{ marginBottom: 16, }}
                    >
                        <Button
                            onClick={handleAdd}
                            type="primary"         
                        >
                            Add Element
                        </Button>
                        <Select 
                            defaultValue="title"
                            onChange={handleSearch}
                            options={searchData}
                            style={{ width: 200, }}
                        />
                        <Search
                            placeholder="input search text"
                            onSearch={handleSearch}
                            style={{ width: 200, }}
                        />                    
                    </Space>

                    <span style={{ float: 'right'}} >
                        <Space>
                            <Button
                                onClick={handleSave}
                                type="primary"           
                            >
                                Save
                            </Button>   
                            <Button
                                onClick={handleSave}
                                type="primary"           
                            >
                                Close
                            </Button>  
                        </Space>
                    </span>

                    <Table 
                        columns={tableColumns} 
                        dataSource={tableData} 
                        pagination={false}
                    />  
                </div>
            </Layout>
            <Sider width='200px' style={siderStyle}>            
            </Sider>            
        </Layout>     
    )
}

export default FormBuilderTable