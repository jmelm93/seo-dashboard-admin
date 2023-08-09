import React from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicForm, { FormConfig } from '../components/forms/DynamicForm';
import dashboardTypes from '../@configs/form-item-options/dashboardTypes.json';
import newCustomerConfig from '../@configs/forms/newCustomer.json';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { setDocInCollection } from '../lib/firebase/firestore'
import { DocumentType } from '../@types';

type Props = {
    documentType: DocumentType;
}

type Configuration = {
    title: string;
    config: FormConfig;
    dataModel: any;
}


const getConfiguration = (documentType: DocumentType): Configuration => {
    switch(documentType) {
        case 'customers':
            return {
                title: 'Customer',
                config: newCustomerConfig as FormConfig,
                dataModel: dashboardTypes
            };
        case 'dashboards':
            return {
                title: 'Dashboard',
                config: newCustomerConfig as FormConfig,
                dataModel: dashboardTypes
            };
        case 'data-models':
            return {
                title: 'Data Model',
                config: newCustomerConfig as FormConfig,
                dataModel: dashboardTypes
            };
        default:
            throw new Error('Unsupported document type');
    }
}


const NewFirestoreDocument = ({ documentType }: Props): JSX.Element => {
    const navigate = useNavigate();

    const handleSubmit = async (values: Record<string, string>) => {
        await setDocInCollection({ collectionId: documentType, data: values });
        navigate('/');
    };

    const configuration = getConfiguration(documentType);

    return (
        <Box component="section" sx={{ p: 4 }}>
            <Typography variant="h3" component="h3" align="center" marginBottom={2}>
                {configuration.title}
            </Typography>
            <DynamicForm 
                config={configuration.config} 
                dataModel={configuration.dataModel} 
                onSubmit={handleSubmit} 
            />
        </Box>
    );
};

export default NewFirestoreDocument;
