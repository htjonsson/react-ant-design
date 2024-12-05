import React from 'react';
import { 
    Typography,
    Table, 
    Layout,
    Tag,
    Space,
} from 'antd';

import {
    LayoutOutlined,
    CodeSandboxOutlined,
    ThunderboltOutlined,
    FolderOutlined,
    FieldStringOutlined,
} from '@ant-design/icons';

const { Header, Sider } = Layout;
const { Text, Title, } = Typography;

import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const treeData = [
    {
        title: <Text strong>TENANTS (form)</Text>,
        key: 'c85b6030-b3a0-4d12-9a61-2f9c13b79f39',
        icon: <FolderOutlined/>,
        disableCheckbox: true,
        children: [
            {
                title: 'Actions',
                key: '8acbb29c-3045-4dcf-ad94-8f7dd6ca4adf',
                icon: <CodeSandboxOutlined />,
                children: [
                    {
                        title: 'Save',
                        key: '8e802df7-ea10-4714-802c-fe2db644098a',
                        icon: <ThunderboltOutlined />,
                    },
                    {
                        title: 'Cancel',
                        key: '39aaead7-2e63-4ce2-a8ce-929564a7e469',
                        icon: <ThunderboltOutlined />,
                    }                    
                ]
            },
            {
                title: 'Layout',
                key: '1cb6e4d0-cbb9-4978-a37e-5201512e6c19',
                icon: <LayoutOutlined />,
                children: [
                    {
                        title: 'Actions',
                        key: '1abf0ec6-5c55-43a8-869f-a56641d751d7',
                        icon: <CodeSandboxOutlined />,
                        children: [
                            {
                                title: 'Clear',
                                key: '7e9bd5bd-64e6-4f27-b075-fe7adabe001a',
                                icon: <ThunderboltOutlined />,
                            },
                            {
                                title: 'Search Users',
                                key: 'b47662c7-5c3b-4002-aab6-4f7b368f6690',
                                icon: <ThunderboltOutlined />,
                            }
                        ]
                    },                    
                    {
                        title: 'title',
                        key: '4eb3f326-ad0b-4e7b-b4d6-77840f974dc2',
                        icon: <FieldStringOutlined />,
                    },
                    {
                        title: 'firstName',
                        key: 'db4c62cf-17ec-4be0-920a-b52a1aea8704',
                        icon: <FieldStringOutlined />,
                    },
                    {
                        title: 'middleName',
                        key: 'c08283f6-a725-4336-9639-35423e1c591b',
                        icon: <FieldStringOutlined />,
                    },
                    {
                        title: 'surName',
                        key: ' c1e18f2b-b000-4588-8924-e12680685e7d',
                        icon: <FieldStringOutlined />,
                    },
                    {
                        title: 'email',
                        key: 'ba53ae2d-2d42-42d4-abea-951e93acd2fa',
                        icon: <FieldStringOutlined />,
                    },
                    {
                        title: 'phoneNumber',
                        key: '304c6242-2ef0-4438-81c8-b09888249f23',
                        icon: <FieldStringOutlined />,
                    },
                    {
                        title: 'dateOfBirth',
                        key: '5360ef6e-470c-4ad4-a3aa-3d6c29443ea3',
                        icon: <FieldStringOutlined />,
                    },
                    {
                        title: '[spacer]',
                        key: '61fc9d5c-c092-4089-b7b8-4e3ffc9e45d0',
                        icon: <FieldStringOutlined />,
                    },
                    {
                        title: 'houseNumber',
                        key: 'a3dfb912-f15e-4538-a88d-787cd25853c1',
                        icon: <FieldStringOutlined />,
                    },
                    {
                        title: 'street1',
                        key: '5bbeb0da-2706-4f95-9b2f-6386e7938b12',
                        icon: <FieldStringOutlined />,
                    },
                    {
                        title: 'street2',
                        key: 'f1ee0459-b359-4d7c-8d12-7cd557ca1732',
                        icon: <FieldStringOutlined />,
                    },
                    {
                        title: 'street3',
                        key: '3ffa3d32-d632-49f0-a6a4-45dd4426b868',
                        icon: <FieldStringOutlined />,
                    },
                    {
                        title: 'city',
                        key: '1a366d3c-d8fd-4a74-9f87-34b081b07c01',
                        icon: <FieldStringOutlined />,
                    },
                    {
                        title: 'postCode',
                        key: '900e886f-c5d5-403b-818e-c4db6a5eec71',
                        icon: <FieldStringOutlined />,
                    },                    
                ]
            }
        ]         
    },
];

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

const QueryStudioSchedule = () => {
    const codeString = '/*\n * Copyright 1989, 1992 O\'Reilly and Associates, Inc.\n * See ../Copyright for complete rights and liability information.\n */\n\n/*\n * xgoodbye.c - simple program to put up a banner on the display\n *      and callback an application function.\n */\n\n#include <stdio.h>\n/*\n * Include files required for all Toolkit programs\n */\n#include <X11/Intrinsic.h>  /* Intrinsics Definitions */\n#include <Xm/Xm.h>  /* Standard Motif definitions */\n\n/*\n * Public include file for widgets we actually use in this file.\n */\n#include <Xm/PushB.h>    /* Motif PushButton Widget */\n\n/*\n * Quit button callback function\n */\n/* ARGSUSED */\nvoid Quit(w, client_data, call_data)\nWidget w;\nXtPointer client_data, call_data;\n{ \n    fprintf(stderr, "It was nice knowing you.\n");\n    exit(0); \n}\n\nmain(argc, argv)\nint argc;\nchar **argv;\n{\n    XtAppContext app_context;\n    Widget topLevel, goodbye;\n\n    /*\n     * Register the default language procedure\n     */\n    XtSetLanguageProc(NULL, (XtLanguageProc)NULL, NULL);\n\n    topLevel = XtVaAppInitialize(\n            &app_context,           /* Application context */\n            "XGoodbye",             /* Application class */\n            NULL, 0,                /* command line option list */\n            &argc, argv,            /* command line args */\n            NULL,                   /* for missing app-defaults file */\n            NULL);                  /* terminate varargs list */\n\n    goodbye = XtVaCreateManagedWidget(\n            "goodbye",              /* arbitrary widget name */\n            xmPushButtonWidgetClass,     /* widget class from PushB.h */\n            topLevel,               /* parent widget*/\n            NULL);                  /* terminate varargs list */\n        \n    XtAddCallback(goodbye, XmNactivateCallback, Quit, 0 /* client_data */);\n\n    /*\n     *  Create windows for widgets and map them.\n     */\n    XtRealizeWidget(topLevel);\n\n    /*\n     *  Loop for events.\n     */\n    XtAppMainLoop(app_context);\n}';

    return (
        <>
           <Table 
                columns={tableColumns} 
                dataSource={tableData} 
                pagination={false}
            /> 
            <Layout>
                <Sider width='450px' style={siderStyle}>
                    
                </Sider>
                <Layout style={contentStyle}>
                    <SyntaxHighlighter language="cpp" style={docco}>
                        {codeString}
                    </SyntaxHighlighter>   
                </Layout>
            </Layout>     
        </>
    )
}

export default QueryStudioSchedule