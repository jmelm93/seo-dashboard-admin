import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { FieldConfig } from '../DynamicForm';

type Props = {
    field: FieldConfig;
    formik: any;
    dataModel: any[] | undefined;
};


const FormikAutocomplete = ({ field, formik, dataModel }: Props) => {
    // If "type" exists in an item, filter by field.name that matches the "type".
    // If "type" does not exist in an item, include that item in the result.
    // Else, return all options.
    const options = dataModel
        ? dataModel.filter(item => (item.type ? field.name.includes(item.type) : true))
        : [];
    
    if (options) {
        return (
            <Grid item xs={12} md={6}>
                <Autocomplete
                    options={options}
                    getOptionLabel={(option) => option.label}
                    onChange={(_, newValue) => formik.setFieldValue(field.name, newValue?.name || '')}
                    renderInput={(params) => 
                        <TextField 
                            {...params} 
                            label={field.label} 
                            onBlur={formik.handleBlur}
                            error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                            helperText={formik.touched[field.name] && formik.errors[field.name]}
                        />
                    }
                />
            </Grid>
        );
    }
    return null;
};

export default FormikAutocomplete;
