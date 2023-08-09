import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FieldConfig } from '../DynamicForm';

type Props = {
    field: FieldConfig;
    formik: any
};


const FormikTextField = ({ field, formik }: Props) => (
    <Grid item xs={12} sm={6}>
        <TextField
            name={field.name}
            label={field.label}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
            helperText={formik.touched[field.name] && formik.errors[field.name]}
            fullWidth
        />
    </Grid>
);

export default FormikTextField;
