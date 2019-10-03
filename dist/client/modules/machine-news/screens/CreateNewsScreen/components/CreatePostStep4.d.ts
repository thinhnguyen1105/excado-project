import { Component } from 'react';
import './CreatePost.less';
interface Props {
    newsType?: string;
    imageUrls: {
        uid: string;
        url: string;
    }[];
    title?: string;
    description?: string;
    fileList: any[];
    submit: () => void;
    backStep: () => void;
    nextStep: () => void;
    changeFileList: (payload: {
        fileList: any;
    }) => void;
    changeData: (payload: {
        [key: string]: any;
    }) => void;
    t: (key: string) => string;
}
interface State {
    previewVisible: boolean;
    previewImage: string;
    isUploading: boolean;
    uploadPercent: string;
}
declare class CreatePostStep4 extends Component<Props, State> {
    state: State;
    handleCancel: () => void;
    handlePreview: (file: any) => void;
    handleChange: (obj: any) => void;
    beforeUpload: (file: any) => boolean;
    uploadImage: (image: any) => Promise<void>;
    render(): JSX.Element;
}
export default CreatePostStep4;
