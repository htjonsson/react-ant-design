import { useState } from 'react';
import { Tree, Input, Radio, Form, Card, Switch, Checkbox, Flex, Button, Divider, Select, Space, } from 'antd';

const treeData = [
    {
        title: 'scrolled_w [xmScrolledWindowWidgetClass]',
        key: 'scrolled_w',
        children: [
            {
                title: 'main_rc [xmRowColumnWidgetClass]',
                key: 'main_rc',
                children: [
                    {
                        title: 'form [xmFormWidgetClass]',
                        key: 'form',
                        children: [
                            {
                                title: 'users->login [xmToggleButtonWidgetClass]',
                                key: 'users->login',
                            },
                            {
                                title: 'uid [xmLabelGadgetClass]',
                                key: 'uid',
                            },                            
                            {
                                title: 'users->homedir [xmTextWidgetClass]',
                                key: 'users->homedir',
                            },
                        ]
                    },
                ],
            },
        ],
    },
];

/* 
    ORIGINAL RESOURCES

const resourceData = [
    {
        instanceName: 'scrolled_w',
        className: 'xmScrolledWindowWidgetClass',
        resources: [
            {
                name: 'XmNwidth',
                type: 'int',
                value: '500',
            },
            {
                name: 'XmNheight',
                type: 'int',
                value: '300',
            },
            {
                name: 'XmNscrollingPolicy',
                type: 'XmCScrollingPolicy',
                value: 'XmAUTOMATIC',
            }
        ]
    },
    {
        parentName: 'scrolled_w',
        instanceName: 'main_rc',
        className: 'xmRowColumnWidgetClass',
        resources: [
        ]
    },
    {
        parentName: 'main_rc',
        instanceName: 'form',
        className: 'xmFormWidgetClass',
        resources: [
        ]
    },
    {
        parentName: 'form',
        instanceName: 'users->login',
        className: 'xmToggleButtonWidgetClass',
        resources: [
        ],
        layoutResources: [
            {
                name: 'XmNalignment',
                type: 'XmCAlignment',
                value: 'XmALIGNMENT_BEGINNING',
            },
            {
                name: 'XmNtopAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_FORM',
            },
            {
                name: 'XmNbottomAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_FORM',
            },
            {
                name: 'XmNleftAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_FORM',
            },
            {
                name: 'XmNrightAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_POSITION',
            },
            {
                name: 'XmNrightPosition',
                type: 'int',
                value: '15',			
            }		
        ]
    },
    {
        parentName: 'form',
        instanceName: 'uid',
        className: 'xmLabelGadgetClass',
        resources: [
        ],
        layoutResources: [
            {
                name: 'XmNalignment',
                type: 'XmCAlignment',
                value: 'XmALIGNMENT_END',
            },
            {
                name: 'XmNtopAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_FORM',
            },
            {
                name: 'XmNbottomAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_FORM',
            },
            {
                name: 'XmNleftAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_POSITION',
            },
            {
                name: 'XmNleftPosition',
                type: 'int',
                value: '15',
            },		
            {
                name: 'XmNrightAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_POSITION',
            },
            {
                name: 'XmNrightPosition',
                type: 'int',
                value: '20',			
            }		
        ]
    },
    {
        parentName: 'form',
        instanceName: 'users->name',
        className: 'xmLabelGadgetClass',
        resources: [
        ],
        layoutResources: [
            {
                name: 'XmNalignment',
                type: 'XmCAlignment',
                value: 'XmALIGNMENT_BEGINNING',
            },
            {
                name: 'XmNtopAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_FORM',
            },
            {
                name: 'XmNbottomAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_FORM',
            },
            {
                name: 'XmNleftAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_POSITION',
            },
            {
                name: 'XmNleftPosition',
                type: 'XmCAttachment',
                value: '20',
            },		
            {
                name: 'XmNrightAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_POSITION',
            },
            {
                name: 'XmNrightPosition',
                type: 'int',
                value: '50',			
            }		
        ]
    },
    {
        parentName: 'form',
        instanceName: 'users->homedir',
        className: 'xmTextWidgetClass',
        resources: [
            {
                name: 'XmNeditable',
                type: 'Boolean',
                value: 'False',
            },
            {
                name: 'XmNcursorPositionVisible',
                type: 'Boolean',
                value: 'False',
            },
            {
                name: 'XmNvalue',
                type: 'String',
                value: '{users->homedir}',
            }
        ],
        layoutResources: [
            {
                name: 'XmNtopAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_FORM',
            },
            {
                name: 'XmNbottomAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_FORM',
            },
            {
                name: 'XmNleftAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_POSITION',
            },
            {
                name: 'XmNleftPosition',
                type: 'int',
                value: '50',
            },		
            {
                name: 'XmNrightAttachment',
                type: 'XmCAttachment',
                value: 'XmATTACH_FORM',
            }	
        ]
    }
];

*/

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

const widgetList = [
    {
        instanceName: "scrolled_w",
        className: "xmScrolledWindowWidgetClass",
        resources: [
            {
                label: "XmNwidth",
                name: "XmNwidth",
                type: "input",
                value: "500"
            },
            {
                label: "XmNheight",
                name: "XmNheight",
                type: "input",
                value: "300"
            },
            {
                label: "XmNscrollingPolicy",
                name: "XmNscrollingPolicy",
                type: "select",
                options: [
                    {
                        value: 'XmAUTOMATIC',
                        label: 'XmAUTOMATIC',
                    }
                ],  
                value: "300"                
            }            
        ]
    },
    {
        instanceName: 'main_rc',
        className: 'xmRowColumnWidgetClass',
        resources: [
        ]
    },
    {
        instanceName: 'form',
        className: 'xmFormWidgetClass',
        resources: [
        ]
    },
    {
        instanceName: 'users->login',
        className: 'xmToggleButtonWidgetClass',
        resources: [
        ],
        layoutResources: [
            {
                name: 'XmNalignment',
                type: "select",
                options: [
                    {
                        value: 'XmALIGNMENT_BEGINNING',
                        label: 'XmALIGNMENT_BEGINNING',
                    }
                ],  
                value: 'XmALIGNMENT_BEGINNING',
            },
            {
                name: 'XmNtopAttachment',
                type: "select",
                options: [
                    {
                        value: 'XmATTACH_FORM',
                        label: 'XmATTACH_FORM',
                    }
                ],  
                value: 'XmATTACH_FORM',
            },
            {
                name: 'XmNbottomAttachment',
                type: "select",
                options: [
                    {
                        value: 'XmATTACH_FORM',
                        label: 'XmATTACH_FORM',
                    }
                ],  
                value: 'XmATTACH_FORM',
            },
            {
                name: 'XmNleftAttachment',
                type: "select",
                options: [
                    {
                        value: 'XmATTACH_FORM',
                        label: 'XmATTACH_FORM',
                    }
                ], 
                value: 'XmATTACH_FORM',
            },
            {
                name: 'XmNrightAttachment',
                type: "select",
                options: [
                    {
                        value: 'XmATTACH_POSITION',
                        label: 'XmATTACH_POSITION',
                    }
                ], 
                value: 'XmATTACH_POSITION',
            },
            {
                name: 'XmNrightPosition',
                type: "input",
                value: '15',			
            }		
        ]
    },    
]

const initWidgetClass = {
    instanceName: "instanceName",
    className: "className",
    resources: []                                            
};

const OutlinePage = () => {
    const [active, setActive] = useState({instanceName: "instanceName", className: "className", resources: []})

    const handleChange = (evt) => {
        console.log(evt.target.id);
        console.log(evt.target.value);
        debugger;
    }

    const handleSelect = (selectedKeys, evt) => {
        console.log(selectedKeys);
        console.log(JSON.stringify(evt));
    
        findAndSetActive(selectedKeys);
    }

    const findAndSetActive = (selectedKeys) => {
        debugger;
        // At least one element selected, we are only going to use the first
        if (selectedKeys.length > 0)
        {
            const idx = widgetList.findIndex(x => x.instanceName === selectedKeys[0]);
            if (idx !== -1)
            {
                const li = widgetList[idx];

                setActive(li);
            }
        }
    }


    return (
        <>
            <Tree
                treeData={treeData}
                defaultExpandAll={true}
                onSelect={handleSelect}
            />

            {JSON.stringify(active)}

            <Card style={{ maxWidth: 600, }}>
                <Form
                    name="resources"
                    labelCol={{ span: 6, }}
                    wrapperCol={{ span: 18, }}
                    layout="horizontal"
                    autoComplete="off"
                >
                    <Form.Item style={{float: 'right'}}>
                        <Flex gap="small" wrap>
                            <Button type="primary" htmlType="submit">Save</Button>
                            <Button>Close</Button>
                        </Flex>
                    </Form.Item>

                    <Divider/>

                    <Form.Item label="Instance Name" name="instanceName" >
                        <Input placeholder='active.instanceName' value={active.instanceName} onChange={handleChange}/>
                    </Form.Item>

                    <Form.Item label="Class Name" name="className" >
                        <Input placeholder='className' value={active.className} onChange={handleChange}/>
                    </Form.Item>                

                    <Divider/>

                    {active.resources.map(resource => {
                        return renderResource(resource);
                    })}
                </Form>
            </Card>
        </>
    )
}

export default OutlinePage