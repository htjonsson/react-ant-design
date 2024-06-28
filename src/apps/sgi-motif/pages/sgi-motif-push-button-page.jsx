import { useState } from 'react';
import { Input, Form, Switch, Card, Select, Button, Flex, Space, Divider, Radio, } from 'antd';

const alignmentOptions = [
    {
        value: 'XmALIGNMENT_LEFT',
        label: 'XmALIGNMENT_LEFT',
    },    
    {
        value: 'XmALIGNMENT_CENTER',
        label: 'XmALIGNMENT_CENTER',
    },
    {
        value: 'XmALIGNMENT_RIGHT',
        label: 'XmALIGNMENT_RIGHT',
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

const widgetClass = {
    instanceName: "instanceName",
    className: "className",
    resources: [
        {
            label: "activateCallback",
            name: "activateCallback",
            type: "input",
            placeholder: "<activateCallback>",
        },
        {
            label: "alignment",
            name: "alignment",
            type: "select",
            options: [
                {
                    value: 'XmALIGNMENT_LEFT',
                    label: 'XmALIGNMENT_LEFT',
                },    
                {
                    value: 'XmALIGNMENT_CENTER',
                    label: 'XmALIGNMENT_CENTER',
                },
                {
                    value: 'XmALIGNMENT_RIGHT',
                    label: 'XmALIGNMENT_RIGHT',
                }    
            ],
            defaultValue: "XmALIGNMENT_CENTER"
        },
        {
            label: "labelPixmap",
            name: "labelPixmap",
            type: "input"
        }, 
        {
            label: "labelString",
            name: "labelString",
            type: "input"
        },
        {
            label: "labelType",
            name: "labelType",
            type: "select",
            options: [
                {
                    value: 'XmSTRING',
                    label: 'XmSTRING',
                },
                {
                    value: 'XmPIXMAP',
                    label: 'XmPIXMAP',
                },
            ],
            defaultValue: "XmPIXMAP"
        },
        {
            label: "reomputeSize",
            name: "reomputeSize",
            type: "switch",
            defaultValue: true
        },
        {
            label: "autoRouteCallbacks",
            name: "autoRouteCallbacks",
            type: "radio",
            options: [
                {
                  label: 'True',
                  value: 'true',
                },
                {
                  label: 'False',
                  value: 'false',
                },
            ],
            defaultValue: 'false'
        },                                             
    ]
};

const SgiMotifPushButtonPage = () => {
    const handleChange = (evt) => {
        console.log(evt.target.id);
        console.log(evt.target.value);
        debugger;
    }

    const renderResource = (resource) => {
        switch(resource.type) {
            case "input":
                return (
                    <Form.Item label={resource.label} name={resource.name}>
                        <Input placeholder={resource.placeholder} defaultValue={resource.defaultValue}/>
                    </Form.Item>                
                )
            case "select":
                return (
                    <Form.Item label={resource.label} name={resource.name}>
                        <Select options={resource.options} defaultValue={resource.defaultValue}/>
                    </Form.Item>                
                )
            case "switch":
                return (
                    <Form.Item label={resource.label} name={resource.name}>
                        <Switch style={{float: 'left', marginLeft: '16px'}} defaultValue={resource.defaultValue}/>
                    </Form.Item>                
                )
            case "radio":
                return (
                    <Form.Item label={resource.label} name={resource.name}>
                        <Radio.Group style={{float: 'left', paddingLeft: '16px'}} options={resource.options} defaultValue={resource.defaultValue}/>
                    </Form.Item>                
                )                                                  
            default:
                return (
                    <Form.Item label={resource.label} name={resource.name}>
                    </Form.Item>                
                ) 
        }
    }

    const handleFieldsChange = (changedFields, allFields) => {
        debugger;
    }

    const handleValuesChange = (changedValues, allValues) => {
        debugger;
    }

    const handleFinish = (values) => {
        debugger;
    }

    return (
        <Card style={{ maxWidth: 600, }}>
            <Form
                name="resources"
                labelCol={{ span: 6, }}
                wrapperCol={{ span: 18, }}
                layout="horizontal"
                autoComplete="off"
                // onFieldsChange={handleFieldsChange}
                // onValuesChange={handleValuesChange}
                onFinish={handleFinish}
            >
                <Form.Item style={{float: 'right'}}>
                    <Flex gap="small" wrap>
                        <Button type="primary" htmlType="submit">Save</Button>
                        <Button>Close</Button>
                    </Flex>
                </Form.Item>

                <Divider/>

                <Form.Item label="Instance Name" name="instanceName" >
                    <Input placeholder='widgetClass.instanceName' onChange={handleChange}/>
                </Form.Item>

                <Form.Item label="Class Name" name="className" >
                    <Input  placeholder='widgetClass.className' onChange={handleChange}/>
                </Form.Item>                

                <Divider/>

                {widgetClass.resources.map(resource => {
                    return renderResource(resource);
                })}

                {/*     

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
                    <Switch style={{float: 'left'}}/>
                </Form.Item>

                */}

            </Form>               
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