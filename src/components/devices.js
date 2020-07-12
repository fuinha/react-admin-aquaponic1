import React from 'react';
import { ChipField,SingleFieldList,ReferenceManyField,ReferenceField ,SelectInput,ReferenceInput, RichTextField, Create, List, Datagrid, TextField, Edit, SimpleForm, TextInput, Show, SimpleShowLayout, DateField ,EditButton, EmailField } from 'react-admin';
// import RichTextInput from 'ra-input-rich-text';

export const DeviceList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <RichTextField source="devicename" /> 
            <RichTextField source="location" />
            
            <TextField source="id" />
            {/* <ReferenceInput source="control_name" reference="controls"><TextField source="control_name" /></ReferenceInput> */}
            <TextField source="description" />
{/* First source is the lik to the foreign table which shoulf be the id , the second source is what we want to display in the view */}
            <ReferenceField source="systemid" reference="Systems"><TextField source="system_name" /></ReferenceField>
            {/* <ReferenceField source="device_id" reference="device"><TextField source="devicename" /></ReferenceField> */}
            <ReferenceManyField label="Device's Controls" reference="controls" target="device_id">
                <SingleFieldList>
                    <ChipField source="control_name" />
                </SingleFieldList>
            </ReferenceManyField>
            <ReferenceManyField label="Device's Sensors" reference="sensors" target="device_id">
                <SingleFieldList>
                    <ChipField source="sensor_name" />
                </SingleFieldList>
            </ReferenceManyField>
        </Datagrid>
    </List>
  );

  export const DeviceEdit = props => (
    <Edit {...props}>
         <SimpleForm>
            <TextInput source="location" />
            <ReferenceInput source="customer_id" reference="customer"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="devicename" />
            <TextInput source="id" />
            <TextInput source="description" />
            <ReferenceInput source="systemid" reference="Systems"><SelectInput optionText="system_name" /></ReferenceInput>
            
        </SimpleForm>
    </Edit>
);

export const DeviceCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="location" />
            <TextInput source="devicename" />
            <TextInput source="description" />
            <TextInput source="id" />
            <ReferenceInput source="customer_id" reference="customer"><SelectInput optionText="id" /></ReferenceInput>            
        </SimpleForm>
    </Create>
);