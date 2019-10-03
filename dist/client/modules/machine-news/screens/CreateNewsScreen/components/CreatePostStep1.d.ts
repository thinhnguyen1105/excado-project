import React from 'react';
import './CreatePost.less';
import { User } from '@client/services/service-proxies';
import { FormComponentProps } from 'antd/lib/form';
import 'firebase/auth';
interface Props extends FormComponentProps {
    newsType?: string;
    userProfile?: User;
    changeData: (payload: {
        [key: string]: any;
    }) => void;
    nextStep: () => void;
    updateUserPhoneNo: (payload: {
        phoneNo: string;
    }) => void;
    t: (key: string) => string;
}
declare const _default: React.ComponentClass<import("antd/lib/form/Form").RcBaseFormProps & Pick<Props, "newsType" | "t" | "userProfile" | "changeData" | "nextStep" | "updateUserPhoneNo">, any>;
export default _default;
