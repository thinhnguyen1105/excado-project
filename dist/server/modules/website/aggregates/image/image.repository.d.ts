import { Image } from '@app/website';
export declare const imageRepository: {
    find: () => Promise<Image[]>;
    findById: (id: string) => Promise<Image>;
    create: (payload: Partial<Image>) => Promise<Image>;
    update: (payload: any) => Promise<void>;
    deleteByUrls: (urls: any) => Promise<any>;
};
