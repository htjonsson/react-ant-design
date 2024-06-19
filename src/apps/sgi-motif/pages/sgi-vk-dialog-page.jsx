import { useState } from 'react';
import { Input, Radio, Form, Switch, Checkbox, } from 'antd';

const SgiVkDialogPage = () => {
    return (
        <Form
            name="basic"
            labelCol={{ span: 8, }}
            wrapperCol={{ span: 16, }}
            style={{ maxWidth: 600, }}
            layout="horizontal"
            autoComplete="off"
        >

            <Form.Item label="allowMultipleDialogs" name="allowMultipleDialogs" >
                <Switch />
            </Form.Item>

            <Form.Item label="autoRouteCallbacks" name="autoRouteCallbacks" >
                <Switch />
            </Form.Item>

            <Form.Item label="forceChildClass" name="forceChildClass" >
                <Switch />
            </Form.Item>

            <Form.Item label="minimizeDialogs" name="minimizeDialogs" >
                <Switch />
            </Form.Item>

        </Form>
    )
}

export default SgiVkDialogPage

{{/*
    InstanceName    
    ClassName       VkDialogManager
    -
    allowMultipleDialogs    ->   radioGroup
    autoRouteCallbacks      ->   radioGroup
    forceChildClass         ->   radioGroup
    minimizeDialogs         ->   radioGroup
*/}}