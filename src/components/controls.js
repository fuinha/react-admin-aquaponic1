
import React from 'react';
import { BooleanInput, NumberInput,SelectInput,DateInput,ReferenceInput,Datagrid ,NumberField,BooleanField , ReferenceField, Create, List, TextField, Edit, SimpleForm, TextInput, Show, SimpleShowLayout, DateField ,EditButton, EmailField } from 'react-admin';

export const ControlList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <BooleanField source="control_state" /> */}
            <ReferenceField source="device_id" reference="device"><TextField source="devicename" /></ReferenceField>
            {/* <TextField source="control_device" /> */}
            <BooleanField source="is_activated" />
            {/* <DateField source="last_update" /> */}
            <TextField source="control_name" />
            <NumberField source="control_pin" />
            {/* <TextField source="id" /> */}
            
        </Datagrid>
    </List>
);


export const ControlEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="control_state" />
            <ReferenceInput source="device_id" reference="device"><SelectInput optionText="id" /></ReferenceInput>
            {/* <TextInput source="control_device" /> */}
            {/* <DateInput source="last_update" /> */}
            <TextInput source="control_name" />
            <NumberInput source="control_pin" />
            {/* <TextInput source="id" /> */}
            <BooleanInput source="is_activated" />
        </SimpleForm>
    </Edit>
);

export const ControlCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="control_state" /> */}
            <ReferenceInput source="device_id" reference="device"><SelectInput optionText="devicename" /></ReferenceInput>
            <TextInput source="control_device" />
            {/* <DateInput source="last_update" /> */}
            <TextInput source="control_name" />
            <NumberInput source="control_pin" />
            {/* <TextInput source="id" /> */}
            <BooleanInput source="is_activated" />
        </SimpleForm>
    </Create>
);