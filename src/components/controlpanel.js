import React from 'react';
import { BooleanInput, NumberInput,SelectInput,DateInput,ReferenceInput,Datagrid ,NumberField,BooleanField , ReferenceField, Create, List, TextField, Edit, SimpleForm, TextInput, Show, SimpleShowLayout, DateField ,EditButton, EmailField } from 'react-admin';

export const Customer_controlList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="devicename" />
            <TextField source="location" />
            {/* <TextField source="username" /> */}
            {/* <ReferenceField source="customer_id" reference="customers"><TextField source="id" /></ReferenceField> */}
            <TextField source="control_name" />
            <ReferenceField source="control_id" reference="controls"><TextField source="id" /></ReferenceField>
            <NumberField source="control_pin" />
            <TextField source="id" />
        </Datagrid>
    </List>
);