import React from 'react';
import { Tabs, Tree, Typography, Empty, } from 'antd';

import SgiVkSimpleWindowPage from './pages/sgi-vk-simple-window-page';
import SgiVkWindowPage from './pages/sgi-vk-window-page';
import SgiVkDialogPage from './pages/sgi-vk-dialog-page';
import SgiMotifPushButtonPage from './pages/sgi-motif-push-button-page'
import SgiClassInformationPage from './pages/sgi-class-information-page'

const tabs = [
    {
        key: 'VkSimpleWindow',
        label: 'VkSimpleWindow',
        children: <SgiVkSimpleWindowPage />
    },
    {
        key: 'VkWindow',
        label: 'VkWindow',
        children: <SgiVkWindowPage />
    },
    {
        key: 'VkDialog',
        label: 'VkDialog',
        children: <SgiVkDialogPage />
    },    
    {
        key: 'XmPushButton',
        label: 'XmPushButton',
        children: <SgiMotifPushButtonPage />,
    },
    {
        key: 'ClassInformation',
        label: 'Class Information',
        children: <SgiClassInformationPage />,
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

const SgiMotifTab = () => {

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div style={contentStyle}>
            <Tabs defaultActiveKey="1" items={tabs} onChange={onChange} /> 
        </div>    
    )
}

export default SgiMotifTab