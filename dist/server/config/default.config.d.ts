export declare const config: {
    appName: string;
    web: {
        cors: {
            whitelistUrls: (string | RegExp)[];
        };
        api: {
            prefix: string;
            docsUrl: string;
            'docsJson': string;
        };
        log: {
            apiRequest: boolean;
        };
    };
    database: {
        connectionString: string;
    };
    logger: {
        streams: {
            level: string;
            stream: string;
        }[];
    };
    storage: {
        type: string;
        folder: string;
    };
    firebase: {
        serviceAccount: {
            'type': string;
            'project_id': string;
            'private_key_id': string;
            'private_key': string;
            'client_email': string;
            'client_id': string;
            'auth_uri': string;
            'token_uri': string;
            'auth_provider_x509_cert_url': string;
            'client_x509_cert_url': string;
        };
        databaseURL: string;
    };
    elasticsearch: {
        host: string;
    };
    upload: {
        allowImageExt: RegExp;
        allowExcelExt: RegExp;
        shopIntroImageNumber: number;
    };
    regex: {
        password: RegExp;
        email: RegExp;
        phone: RegExp;
    };
    cache: {
        ttl: number;
        checkperiod: number;
    };
};
