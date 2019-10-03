export interface UploadService {
    uploadExcelFile: (file: any, authorizationHeader: string) => void;
    createNewsFromExcelRow: (row: any, index: number, newsType: string) => void;
}
