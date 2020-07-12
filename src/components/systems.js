
import React from 'react';
import { ReferenceArrayField,ChipField,SingleFieldList,ReferenceManyField ,BooleanInput, NumberInput,SelectInput,DateInput,ReferenceInput,Datagrid ,NumberField,BooleanField , ReferenceField, Create, List, TextField, Edit, SimpleForm, TextInput, Show, SimpleShowLayout, DateField ,EditButton, EmailField } from 'react-admin';

export const SystemList = props => (
   
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <ReferenceField source="device_id" reference="devices"><TextField source="id" /></ReferenceField> */}
            <TextField source="location" />
            <NumberField source="owner" />
            {/* <TextField source="id" /> */}
            <TextField source="system_name" />
            <TextField source="description" />
            <ReferenceManyField label="System's Devices" reference="device" target="systemid">
                <SingleFieldList>
                    <ChipField source="devicename" />
                </SingleFieldList>
            </ReferenceManyField>
        </Datagrid>
    </List>
);


export const SystemEditList = props => (
    <Edit {...props}>
         <SimpleForm>
            {/* <ReferenceField source="device_id" reference="device"><TextField source="id" /></ReferenceField> */}
            <TextInput source="location" />
            <TextInput source="owner" />
            <TextField source="id" />
            <TextInput source="system_name" />
            <TextInput source="description" />
{/* device is the table name from where we take the data to display it here , target is the connection point from same table ,source is what we want to diplay */}
            <ReferenceManyField label="System's Devices" reference="device" target="systemid">
                <SingleFieldList>
                    <ChipField source="devicename" />
                </SingleFieldList>
            </ReferenceManyField>
         </SimpleForm>
    </Edit>
);


export const SystemCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="control_state" /> */}
            {/* <ReferenceInput source="device_id" reference="device"><SelectInput optionText="id" /></ReferenceInput> */}
            <TextInput source="location" />
            <ReferenceInput source="owner" reference="customer"><SelectInput optionText="id" /></ReferenceInput>
            <ReferenceManyField label="System's Devices" reference="device" target="id">
                <SingleFieldList>
                    <ChipField source="device.name" />
                </SingleFieldList>
            </ReferenceManyField>
            <TextInput source="system_name" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);
