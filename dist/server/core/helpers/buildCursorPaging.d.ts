export declare const execCursorPaging: (model: any, filters: any[], sortBy: string, pageSize: number, populates: string[], before?: string | undefined, after?: string | undefined) => Promise<{
    data: any;
    before: string | undefined;
    after: string | undefined;
}>;
