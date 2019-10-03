import { FormikContext } from 'formik';
import * as yup from 'yup';
interface ValidateFieldInput {
    fieldName: string;
    context: FormikContext<any>;
    validateSchema: yup.Schema<any>;
}
export declare const validateField: (params: ValidateFieldInput) => void;
export {};
