import React from 'react';
import { Tabs, Tree, Typography, Empty, } from 'antd';

import SgiVkSimpleWindowPage from './pages/sgi-vk-simple-window-page';
import SgiVkWindowPage from './pages/sgi-vk-window-page';
import SgiVkDialogPage from './pages/sgi-vk-dialog-page';
import SgiMotifPushButtonPage from './pages/sgi-motif-push-button-page'
import SgiClassInformationPage from './pages/sgi-class-information-page'
import SgiRapidAppPage from './pages/sgi-rapid-app-page'
import OutlinePage from './pages/outline-page';

const tabs = [
    {
        key: 'vk_simple_window',
        label: 'VkSimpleWindow',
        children: <SgiVkSimpleWindowPage />
    },
    {
        key: 'vk_window',
        label: 'VkWindow',
        children: <SgiVkWindowPage />
    },
    {
        key: 'vk_dialog',
        label: 'VkDialog',
        children: <SgiVkDialogPage />
    },    
    {
        key: 'xm_push_button',
        label: 'XmPushButton',
        children: <SgiMotifPushButtonPage />,
    },
    {
        key: 'class_information',
        label: 'Class Information',
        children: <SgiClassInformationPage />,
    },
    {
        key: 'rapid_app',
        label: 'RapidApp',
        children: <SgiRapidAppPage />,
    },
    {
        key: 'outline',
        label: 'Outline',
        children: <OutlinePage />,
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