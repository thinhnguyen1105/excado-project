import './LoginForm.less';
interface Props {
    isLogin: boolean;
    isSendingVerificationCode: boolean;
    activeTab: string;
    getFieldDecorator: any;
    loginTabChange: (payload: {
        activeTab: string;
    }) => void;
    handleSubmit: (loginType: string) => void;
    getVerificationCode: () => void;
}
declare const LoginForm: (props: Props) => JSX.Element;
export { LoginForm, };
