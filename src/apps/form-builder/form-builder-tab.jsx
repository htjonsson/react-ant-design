import React from 'react';
import { Tabs, } from 'antd';

import FormBuilderTable from './form-builder-table';
import FormBuilderSyntaxHighlighter from './form-builder-syntax-highlighter';

const tabs = [
    {
        key: '1',
        label: 'Design',
        children: <FormBuilderTable/> ,
    },
    {
        key: '2',
        label: 'Code Example',
        children: <FormBuilderSyntaxHighlighter/> ,
    },
    {
        key: '3',
        label: 'Filter',
        children: 'Content of Filter Tab Pane' ,
    },    
    {
        key: '4',
        label: 'Maps',
        children: 'Content of Filter Tab Pane' ,
    },
    {
        key: '5',
        label: 'Advanced',
        children: 'Content of Filter Tab Pane' ,
    },
    {
        key: '6',
        label: 'Schedule',
        children: 'Content of Filter Tab Pane' ,
    },  
    {
        key: '7',
        label: 'History',
        children: 'Content of Filter Tab Pane' ,
    },              
];

const contentStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    minHeight: 'calc(100VH - 64px)',
    color: '#fff',
    backgroundColor: 'white',
    padding: '12px',
    paddingLeft: '40px'
};

const FormBuilderTab = () => {

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div style={contentStyle}>
            <Tabs defaultActiveKey="1" items={tabs} onChange={onChange} /> 
        </div>    
    )
}

export default FormBuilderTab