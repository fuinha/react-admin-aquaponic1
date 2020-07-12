
import React from 'react';
import {TextField,BooleanInput, NumberInput,SelectInput,DateInput,ReferenceInput,Datagrid ,NumberField, ReferenceField, Create, List, BooleanField, Edit, SimpleForm, TextInput, Show, SimpleShowLayout, DateField ,EditButton, EmailField } from 'react-admin';


    export const aquacontrolList = props => (
        <List {...props}>
            <Datagrid rowClick="edit">
                {/* <BooleanField source="tag" /> */}
                <DateField source="time" showTime />
                <TextField label= "Device ID" BooleanField  source="record.deviceid" />
                <BooleanField label= "Fish tank water Pump Status" BooleanField source="record.FSTP_Status" />
                <BooleanField label= "Filter tank water Pump Status" BooleanField source="record.FTTP_Status" />
                <BooleanField label= "Fish tank Sensor Status" BooleanField source="record.FSTS_Status" />
                <BooleanField label= "Filter tank Sensor Status" BooleanField source="record.FTTS_Status" />
                <BooleanField label= "Fish tank Air Pump Status" BooleanField source="record.FSTAir_Status" />
              

            </Datagrid>
        </List>
    );
 


// export const ControlEdit = props => (
//     <Edit {...props}>
//         <SimpleForm>
//             <TextInput source="control_state" />
//             <ReferenceInput source="device_id" reference="device"><SelectInput optionText="id" /></ReferenceInput>
//             <TextInput source="control_device" />
//             <DateInput source="last_update" />
//             <TextInput source="control_name" />
//             <NumberInput source="control_pin" />
//             {/* <TextInput source="id" /> */}
//             <BooleanInput source="is_activated" />
//         </SimpleForm>
//     </Edit>
// );

// export const ControlCreate = (props) => (
//     <Create {...props}>
//         <SimpleForm>
//             {/* <TextInput source="control_state" /> */}
//             <ReferenceInput source="device_id" reference="device"><SelectInput optionText="devicename" /></ReferenceInput>
//             <TextInput source="control_device" />
//             <DateInput source="last_update" />
//             <TextInput source="control_name" />
//             <NumberInput source="control_pin" />
//             {/* <TextInput source="id" /> */}
//             <BooleanInput source="is_activated" />
//         </SimpleForm>
//     </Create>
// );