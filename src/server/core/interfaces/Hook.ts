export interface Hook {
  before?: {
    all?: ((context: any) => Promise<any>)[],
    find?: ((context: any) => Promise<any>)[],
    get?: ((context: any) => Promise<any>)[],
    create?: ((context: any) => Promise<any>)[],
    update?: ((context: any) => Promise<any>)[],
    patch?: ((context: any) => Promise<any>)[],
    remove?: ((context: any) => Promise<any>)[],
  };
  after?: {
    all?: ((context: any) => Promise<any>)[],
    find?: ((context: any) => Promise<any>)[],
    get?: ((context: any) => Promise<any>)[],
    create?: ((context: any) => Promise<any>)[],
    update?: ((context: any) => Promise<any>)[],
    patch?: ((context: any) => Promise<any>)[],
    remove?: ((context: any) => Promise<any>)[],
  };
  error?: {
    all?: ((context: any) => Promise<any>)[],
    find?: ((context: any) => Promise<any>)[],
    get?: ((context: any) => Promise<any>)[],
    create?: ((context: any) => Promise<any>)[],
    update?: ((context: any) => Promise<any>)[],
    patch?: ((context: any) => Promise<any>)[],
    remove?: ((context: any) => Promise<any>)[],
  };
}
