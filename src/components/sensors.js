
import React from 'react';
import { BooleanInput, NumberInput,SelectInput,DateInput,ReferenceInput,Datagrid ,NumberField,BooleanField , ReferenceField, Create, List, TextField, Edit, SimpleForm, TextInput, Show, SimpleShowLayout, DateField ,EditButton, EmailField } from 'react-admin';

export const SensorList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <BooleanField source="Sensor_state" /> */}
            <ReferenceField source="device_id" reference="device"><TextField source="devicename" /></ReferenceField>
            {/* <TextField source="Sensor_device" /> */}
            {/* <BooleanField source="is_activated" /> */}
            {/* <DateField source="last_update" /> */}
            <TextField source="sensor_name" />
            <NumberField source="sensor_pin" />
            {/* <TextField source="id" /> */}
            
        </Datagrid>
    </List>
);


export const SensorEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            {/* <TextInput source="Sensor_state" /> */}
            <ReferenceInput source="device_id" reference="device"><SelectInput optionText="id" /></ReferenceInput>
            {/* <TextInput source="Sensor_device" /> */}
            {/* <DateInput source="last_update" /> */}
            <TextInput source="sensor_name" />
            <NumberInput source="sensor_pin" />
            {/* <TextInput source="id" /> */}
            {/* <BooleanInput source="is_activated" /> */}
        </SimpleForm>
    </Edit>
);

export const SensorCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="Sensor_state" /> */}
            <ReferenceInput source="device_id" reference="device"><SelectInput optionText="devicename" /></ReferenceInput>
            {/* <TextInput source="Sensor_device" /> */}
            {/* <DateInput source="last_update" /> */}
            <TextInput source="sensor_name" />
            <NumberInput source="sensor_pin" />
            {/* <TextInput source="id" /> */}
            {/* <BooleanInput source="is_activated" /> */}
        </SimpleForm>
    </Create>
);