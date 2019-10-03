import './RegisterForm.less';
interface Props {
    error: any;
    values: any;
    isRegister: boolean;
    handleChange: any;
    handleSubmit: any;
}
declare const RegisterForm: (props: Props) => JSX.Element;
export { RegisterForm, };
