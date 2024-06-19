import { useState } from 'react';
import { Input, Form, Switch, Card, Select, Button, Flex, Space, } from 'antd';

const alignmentOptions = [
    {
        value: 'XmALIGNMENT_CENTER',
        label: 'XmALIGNMENT_CENTER',
    }
];

const labelTypeOptions = [
    {
        value: 'XmSTRING',
        label: 'XmSTRING',
    },
    {
        value: 'XmPIXMAP',
        label: 'XmPIXMAP',
    },
];

const SgiMotifPushButtonPage = () => {
    return (
        <Card>
            

            <Form
                name="instanceForm"
                labelCol={{ span: 8, }}
                wrapperCol={{ span: 16, }}
                style={{ maxWidth: 600, }}
                layout="horizontal"
                autoComplete="off"
            >
                <Form.Item label="Instance Name" name="instanceName" >
                    <Input />
                </Form.Item>

                <Form.Item label="Class Name" name="className" >
                    <Input />
                </Form.Item>                

            </Form>

            <Space />

            <Form
                name="resourceForm"
                labelCol={{ span: 8, }}
                wrapperCol={{ span: 16, }}
                style={{ maxWidth: 600, }}
                layout="vertical"
                autoComplete="off"
            >

                <Form.Item label="activateCallback" name="activateCallback" >
                    <Input />
                </Form.Item>

                <Form.Item label="alignment" name="alignment" >
                    <Select options={alignmentOptions} />
                </Form.Item>

                <Form.Item label="labelPixmap" name="labelPixmap" >
                    <Input />
                </Form.Item>

                <Form.Item label="labelString" name="labelString" >
                    <Input />
                </Form.Item>

                <Form.Item label="labelType" name="labelType" >
                    <Select options={labelTypeOptions} />
                </Form.Item>

                <Form.Item label="reomputeSize" name="reomputeSize" >
                    <Switch />
                </Form.Item>

            </Form>       
        
            <Space />

            <Flex gap="small" wrap>
                <Button type="primary">Save</Button>
            </Flex>
        
        </Card>
    )
}

export default SgiMotifPushButtonPage

{{/*
    InstanceName    bigRedButton
    ClassName       XmPushButton
    -
    activateCallback    bigRedButtonCallback()  ->  text
    alignment           XmALIGNMENT_CENTER      ->  select
    labelPixmap                                 ->  fileUpload
    labelString         Push Me                 ->  select
    labelType           XmSTRING                ->  select
    reomputeSize        true                    ->  radioGroup
*/}}