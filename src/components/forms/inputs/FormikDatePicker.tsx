import React from 'react';
import Grid from '@mui/material/Grid';
import { FieldConfig } from '../DynamicForm';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateValidationError } from '@mui/x-date-pickers/models';

type Props = {
    field: FieldConfig;
    formik: any;
};

const FormikDatePicker = ({ field, formik }: Props) => {
    const [dateError, setDateError] = React.useState<DateValidationError | null>(null);

    const handleDateChange = (date: any) => {
        const dateString = date.toISOString();
        formik.setFieldValue(field.name, dateString);
        formik.setFieldTouched(field.name, true);
    };

    return (
        <Grid item xs={12}>
            <DatePicker
                label={field.label}
                value={formik.values[field.name]}
                onChange={handleDateChange}
                onError={(newError) => setDateError(newError)}
                slotProps={{
                    textField: {
                        helperText: dateError && formik.touched[field.name] && formik.errors[field.name]
                            ? "Date field is required."
                            : null,
                    },
                }}
            />
        </Grid>
    );
}


export default FormikDatePicker;
