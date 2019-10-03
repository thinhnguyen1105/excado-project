declare const commonKeywordsHook: {
    before: {
        all: ((context: import("@feathersjs/feathers").HookContext<any>) => Promise<void>)[];
    };
};
export default commonKeywordsHook;
