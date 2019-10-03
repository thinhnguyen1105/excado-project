export declare class ServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    /**
     * Register user
     * @param body (optional)
     * @return successful operation
     */
    registerUser(body: any | undefined): Promise<void>;
    protected processRegisterUser(response: Response): Promise<void>;
    /**
     * Find permissions list of all modules
     * @return successful operation
     */
    findPermissions(): Promise<any>;
    protected processFindPermissions(response: Response): Promise<any>;
    /**
     * Check role name exist
     * @param roleName roleName
     * @return successful operation
     */
    checkRoleNameExist(roleName: string): Promise<CheckRoleNameExistResult>;
    protected processCheckRoleNameExist(response: Response): Promise<CheckRoleNameExistResult>;
    /**
     * Find all roles
     * @return successful operation
     */
    getAllRoles(): Promise<GetAllRolesResult>;
    protected processGetAllRoles(response: Response): Promise<GetAllRolesResult>;
    /**
     * Find role by id
     * @param roleId roleId
     * @return successful operation
     */
    findRoleById(roleId: string): Promise<Role>;
    protected processFindRoleById(response: Response): Promise<Role>;
    /**
     * Update role
     * @param roleId roleId
     * @param body (optional)
     * @return successful operation
     */
    updateRole(roleId: string, body: any | undefined): Promise<Role>;
    protected processUpdateRole(response: Response): Promise<Role>;
    /**
     * Find roles
     * @param search (optional) search
     * @param permissions (optional) filter by permissions
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */
    findRoles(search: string | undefined, permissions: string[] | undefined, first: string, sortBy: string, before: string | undefined, after: string | undefined): Promise<FindRolesResult>;
    protected processFindRoles(response: Response): Promise<FindRolesResult>;
    /**
     * Create role
     * @param body (optional)
     * @return successful operation
     */
    createRole(body: any | undefined): Promise<Role>;
    protected processCreateRole(response: Response): Promise<Role>;
    /**
     * Find profile
     * @return successful operation
     */
    findProfile(): Promise<User>;
    protected processFindProfile(response: Response): Promise<User>;
    /**
     * Find use profile for guess view
     * @param userId userId
     * @return successful operation
     */
    findPublicProfile(userId: string): Promise<User>;
    protected processFindPublicProfile(response: Response): Promise<User>;
    /**
     * Update profile
     * @param userId userId
     * @param body (optional)
     * @return successful operation
     */
    updateProfile(userId: string, body: any | undefined): Promise<void>;
    protected processUpdateProfile(response: Response): Promise<void>;
    /**
     * Find users
     * @param search (optional) search
     * @param roles (optional) filter by roles
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */
    findUsers(search: string | undefined, roles: string[] | undefined, first: number, sortBy: string, before: number | undefined, after: number | undefined): Promise<FindUserResult>;
    protected processFindUsers(response: Response): Promise<FindUserResult>;
    /**
     * Create user
     * @param body (optional)
     * @return successful operation
     */
    createUser(body: any | undefined): Promise<User>;
    protected processCreateUser(response: Response): Promise<User>;
    /**
     * Check phone number exist
     * @param phoneNo phoneNo
     * @return successful operation
     */
    checkPhoneNoExist(phoneNo: string): Promise<CheckPhoneNoExistResult>;
    protected processCheckPhoneNoExist(response: Response): Promise<CheckPhoneNoExistResult>;
    /**
     * Check email exist
     * @param email email
     * @return successful operation
     */
    checkEmailExist(email: string): Promise<CheckEmailExistResult>;
    protected processCheckEmailExist(response: Response): Promise<CheckEmailExistResult>;
    /**
     * Find user by id
     * @param userId userId
     * @return successful operation
     */
    findUserById(userId: string): Promise<User>;
    protected processFindUserById(response: Response): Promise<User>;
    /**
     * Update user
     * @param userId userId
     * @param body (optional)
     * @return successful operation
     */
    updateUser(userId: string, body: any | undefined): Promise<void>;
    protected processUpdateUser(response: Response): Promise<void>;
    /**
     * update adsense
     * @param adsenseId adsenseId
     * @param body (optional)
     * @return successful operation
     */
    updateAdsense(adsenseId: string, body: any | undefined): Promise<void>;
    protected processUpdateAdsense(response: Response): Promise<void>;
    /**
     * Create adsense
     * @param body (optional)
     * @return successful operation
     */
    createAdsense(body: any | undefined): Promise<Adsense>;
    protected processCreateAdsense(response: Response): Promise<Adsense>;
    /**
     * Get adsense
     * @param first limit size
     * @param sortBy order by
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */
    getAdsense(first: number, sortBy: string, before: any | undefined, after: any | undefined): Promise<GetAdsenseResult>;
    protected processGetAdsense(response: Response): Promise<GetAdsenseResult>;
    /**
     * update feature brand
     * @param featureBrandId featureBrandId
     * @param body (optional)
     * @return successful operation
     */
    updateFeatureBrand(featureBrandId: string, body: any | undefined): Promise<void>;
    protected processUpdateFeatureBrand(response: Response): Promise<void>;
    /**
     * Get feature brands
     * @param first limit size
     * @param sortBy order by
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */
    getFeatureBrands(first: number, sortBy: string, before: any | undefined, after: any | undefined): Promise<GetFeatureBrandsResult>;
    protected processGetFeatureBrands(response: Response): Promise<GetFeatureBrandsResult>;
    /**
     * Create feature brand for ads
     * @param body (optional)
     * @return successful operation
     */
    createFeatureBrand(body: any | undefined): Promise<FeatureBrand>;
    protected processCreateFeatureBrand(response: Response): Promise<FeatureBrand>;
    /**
     * Update rental period
     * @param rentalPeriodId rental period id
     * @param body (optional)
     * @return successful operation
     */
    updateRentalPeriod(rentalPeriodId: string, body: any | undefined): Promise<void>;
    protected processUpdateRentalPeriod(response: Response): Promise<void>;
    /**
     * Create rental period item
     * @param body (optional)
     * @return successful operation
     */
    createRentalPeriod(body: any | undefined): Promise<RentalPeriod>;
    protected processCreateRentalPeriod(response: Response): Promise<RentalPeriod>;
    /**
     * Get rental periods
     * @return successful operation
     */
    getAllRentalPeriods(): Promise<GetAllRentalPeriodsResult>;
    protected processGetAllRentalPeriods(response: Response): Promise<GetAllRentalPeriodsResult>;
    /**
     * Update weight range
     * @param weightRangeId weight range Id
     * @param body (optional)
     * @return successful operation
     */
    updateWeightRange(weightRangeId: string, body: any | undefined): Promise<void>;
    protected processUpdateWeightRange(response: Response): Promise<void>;
    /**
     * Create weight range item
     * @param body (optional)
     * @return successful operation
     */
    createWeightRange(body: any | undefined): Promise<WeightRange>;
    protected processCreateWeightRange(response: Response): Promise<WeightRange>;
    /**
     * Get weight ranges
     * @return successful operation
     */
    getAllWeightRanges(): Promise<GetAllWeightRangesResult>;
    protected processGetAllWeightRanges(response: Response): Promise<GetAllWeightRangesResult>;
    /**
     * Get common search keywords
     * @param first limit size
     * @param sortBy order by
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */
    getCommonKeywords(first: number, sortBy: string, before: any | undefined, after: any | undefined): Promise<GetCommonKeywordsResult>;
    protected processGetCommonKeywords(response: Response): Promise<GetCommonKeywordsResult>;
    /**
     * Create recent viewed item
     * @param body (optional)
     * @return successful operation
     */
    createRecentViewed(body: any | undefined): Promise<RecentViewedItem>;
    protected processCreateRecentViewed(response: Response): Promise<RecentViewedItem>;
    /**
     * Get recent viewed items by users or uuid key
     * @param first limit size
     * @param sortBy order by
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */
    getRecentViewed(first: number, sortBy: string, before: any | undefined, after: any | undefined): Promise<GetRecentViewedResult>;
    protected processGetRecentViewed(response: Response): Promise<GetRecentViewedResult>;
    /**
     * Search news most follow
     * @param shopId (optional) shop Id
     * @param first limit size
     * @param sortBy order by
     * @param otherSortBy other order by
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */
    searchNewsMostFollow(shopId: number | undefined, first: number, sortBy: string, otherSortBy: string, before: any | undefined, after: any | undefined): Promise<SearchNewsMostFollowResult>;
    protected processSearchNewsMostFollow(response: Response): Promise<SearchNewsMostFollowResult>;
    /**
     * Count unread notification
     * @param ownerId owner id
     * @return successful operation
     */
    countUnreadNotifications(ownerId: string): Promise<CountUnreadNotificationsResult>;
    protected processCountUnreadNotifications(response: Response): Promise<CountUnreadNotificationsResult>;
    /**
     * Read notifications
     * @param ownerId owner id
     * @param body (optional)
     * @return successful operation
     */
    readNotifications(ownerId: string, body: any | undefined): Promise<void>;
    protected processReadNotifications(response: Response): Promise<void>;
    /**
     * Find notifications
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */
    findNotifications(first: number, sortBy: string, before: string | undefined, after: string | undefined): Promise<FindNotificationsResult>;
    protected processFindNotifications(response: Response): Promise<FindNotificationsResult>;
    /**
     * Update report
     * @param reportId report id
     * @param body (optional)
     * @return successful operation
     */
    updateReport(reportId: string, body: any | undefined): Promise<void>;
    protected processUpdateReport(response: Response): Promise<void>;
    /**
     * Find report by id
     * @param reportId report id
     * @return successful operation
     */
    findReportById(reportId: string): Promise<Report>;
    protected processFindReportById(response: Response): Promise<Report>;
    /**
     * Create report
     * @param body (optional)
     * @return successful operation
     */
    createReport(body: any | undefined): Promise<Report>;
    protected processCreateReport(response: Response): Promise<Report>;
    /**
     * Find reports
     * @param search (optional) state filter
     * @param state (optional) state filter
     * @param reason (optional) reason filter
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */
    findReports(search: string | undefined, state: State | undefined, reason: Reason | undefined, first: number, sortBy: string, before: string | undefined, after: string | undefined): Promise<FindReportsResult>;
    protected processFindReports(response: Response): Promise<FindReportsResult>;
    /**
     * Find shop by owner id
     * @param ownerId shop owner id
     * @return successful operation
     */
    findShopByOwner(ownerId: string): Promise<Shop>;
    protected processFindShopByOwner(response: Response): Promise<Shop>;
    /**
     * Find shop by id
     * @param shopDomain shop domain
     * @param authId (optional) authUserId
     * @return successful operation
     */
    findShopByDomain(shopDomain: string, authId: string | undefined): Promise<Shop>;
    protected processFindShopByDomain(response: Response): Promise<Shop>;
    /**
     * Find news by id
     * @param shopId shop id
     * @return successful operation
     */
    findShopById(shopId: string): Promise<Shop>;
    protected processFindShopById(response: Response): Promise<Shop>;
    /**
     * Update shop
     * @param shopId shop id
     * @param body (optional)
     * @return successful operation
     */
    updateShop(shopId: string, body: any | undefined): Promise<void>;
    protected processUpdateShop(response: Response): Promise<void>;
    /**
     * Create shops
     * @param body (optional)
     * @return successful operation
     */
    createShop(body: any | undefined): Promise<Shop>;
    protected processCreateShop(response: Response): Promise<Shop>;
    /**
     * Find shops
     * @param search (optional) search query
     * @param isActive (optional) isActive filter
     * @param owner (optional) owner filter
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */
    findShops(search: string | undefined, isActive: boolean | undefined, owner: string | undefined, first: number, sortBy: string, before: string | undefined, after: string | undefined): Promise<FindShopsResult>;
    protected processFindShops(response: Response): Promise<FindShopsResult>;
    /**
     * Find news by id
     * @param newsId newsId
     * @return successful operation
     */
    findNewsById(newsId: string): Promise<FindNewsDetail>;
    protected processFindNewsById(response: Response): Promise<FindNewsDetail>;
    /**
     * Update news
     * @param newsId newsId
     * @param body (optional)
     * @return successful operation
     */
    updateNews(newsId: string, body: any | undefined): Promise<void>;
    protected processUpdateNews(response: Response): Promise<void>;
    /**
     * Find news statistics for admin
     * @param startDate startDate
     * @param endDate endDate
     * @return successful operation
     */
    findNewsStatisticsInfo(startDate: string, endDate: string): Promise<NewsStatisticsResult>;
    protected processFindNewsStatisticsInfo(response: Response): Promise<NewsStatisticsResult>;
    /**
     * Find news by owner
     * @param ownerId ownerId
     * @param status news status
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */
    findNewsByOwner(ownerId: string, status: string, first: number, sortBy: string, before: string | undefined, after: string | undefined): Promise<FindNewsResultWithFollow>;
    protected processFindNewsByOwner(response: Response): Promise<FindNewsResultWithFollow>;
    /**
     * Find news
     * @param keyword (optional) search keyword
     * @param state (optional) product state (old/new)
     * @param priceType (optional) price type (fixed/negociate)
     * @param minPrice (optional) min price
     * @param maxPrice (optional) max price
     * @param newsType (optional) news type (sell/buy/...)
     * @param owner (optional) news owner id
     * @param shop (optional) shop id
     * @param location (optional) location (only by city)
     * @param type (optional) product type (may ui/may xuc/may dao)
     * @param brand (optional) product's brand
     * @param model (optional) product model
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */
    findNews(keyword: string | undefined, state: string | undefined, priceType: string | undefined, minPrice: number | undefined, maxPrice: number | undefined, newsType: string | undefined, owner: string | undefined, shop: string | undefined, location: string | undefined, type: string | undefined, brand: string | undefined, model: string | undefined, first: number, sortBy: string, before: string | undefined, after: string | undefined): Promise<FindNewsResult>;
    protected processFindNews(response: Response): Promise<FindNewsResult>;
    /**
     * Create news
     * @param body (optional)
     * @return successful operation
     */
    createNews(body: any | undefined): Promise<News>;
    protected processCreateNews(response: Response): Promise<News>;
    /**
     * Find brands
     * @param search (optional) search query to filter brands
     * @param first search query to filter brands
     * @param sortBy search query to filter brands
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */
    findBrands(search: string | undefined, first: number, sortBy: string, before: string | undefined, after: string | undefined): Promise<FindBrandsResult>;
    protected processFindBrands(response: Response): Promise<FindBrandsResult>;
    /**
     * Create brand
     * @param body (optional)
     * @return successful operation
     */
    createBrand(body: any | undefined): Promise<Brand>;
    protected processCreateBrand(response: Response): Promise<Brand>;
    /**
     * Find brands list
     * @return successful operation
     */
    findBrandList(): Promise<FindBrandsResult>;
    protected processFindBrandList(response: Response): Promise<FindBrandsResult>;
    /**
     * Find brand detail by slug
     * @param brandSlug brandSlug
     * @return successful operation
     */
    findBrandDetail(brandSlug: string): Promise<Brand>;
    protected processFindBrandDetail(response: Response): Promise<Brand>;
    /**
     * Find top brands
     * @return successful operation
     */
    findTopBrands(): Promise<FindBrandsResult>;
    protected processFindTopBrands(response: Response): Promise<FindBrandsResult>;
    /**
     * Find brand by id
     * @param brandId brandId
     * @return successful operation
     */
    findBrandById(brandId: string): Promise<Brand>;
    protected processFindBrandById(response: Response): Promise<Brand>;
    /**
     * Update brand
     * @param brandId brandId
     * @param body (optional)
     * @return successful operation
     */
    updateBrand(brandId: string, body: any | undefined): Promise<void>;
    protected processUpdateBrand(response: Response): Promise<void>;
    /**
     * Find categories
     * @return successful operation
     */
    findCategories(): Promise<FindCategoriesResult>;
    protected processFindCategories(response: Response): Promise<FindCategoriesResult>;
    /**
     * Create category
     * @param body (optional)
     * @return successful operation
     */
    createCategory(body: any | undefined): Promise<Category>;
    protected processCreateCategory(response: Response): Promise<Category>;
    /**
     * Find category detail by slug
     * @param categorySlug categorySlug
     * @return successful operation
     */
    findCategoryDetail(categorySlug: string): Promise<Category>;
    protected processFindCategoryDetail(response: Response): Promise<Category>;
    /**
     * Find category by id
     * @param categoryId categoryId
     * @return successful operation
     */
    findCategoryById(categoryId: string): Promise<Category>;
    protected processFindCategoryById(response: Response): Promise<Category>;
    /**
     * Update category
     * @param categoryId categoryId
     * @param body (optional)
     * @return successful operation
     */
    updateCategory(categoryId: string, body: any | undefined): Promise<void>;
    protected processUpdateCategory(response: Response): Promise<void>;
    /**
     * Find models
     * @param search (optional) search string
     * @param brand (optional) brand
     * @param category (optional) category
     * @param first search query to filter brands
     * @param sortBy search query to filter brands
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */
    findModels(search: string | undefined, brand: string | undefined, category: string | undefined, first: number, sortBy: string, before: string | undefined, after: string | undefined): Promise<FindModelsResult>;
    protected processFindModels(response: Response): Promise<FindModelsResult>;
    /**
     * Create model
     * @param body (optional)
     * @return successful operation
     */
    createModel(body: any | undefined): Promise<Model>;
    protected processCreateModel(response: Response): Promise<Model>;
    /**
     * Find model by id
     * @param modelId modelId
     * @return successful operation
     */
    findModelById(modelId: string): Promise<Model>;
    protected processFindModelById(response: Response): Promise<Model>;
    /**
     * Update model
     * @param modelId modelId
     * @param body (optional)
     * @return successful operation
     */
    updateModel(modelId: string, body: any | undefined): Promise<void>;
    protected processUpdateModel(response: Response): Promise<void>;
    /**
     * Find provinces
     * @return successful operation
     */
    findProvinces(): Promise<FindProvincesResult>;
    protected processFindProvinces(response: Response): Promise<FindProvincesResult>;
    /**
     * Create province
     * @param body (optional)
     * @return successful operation
     */
    createProvince(body: any | undefined): Promise<Province>;
    protected processCreateProvince(response: Response): Promise<Province>;
    /**
     * Find province by id
     * @param provinceId provinceId
     * @return successful operation
     */
    findProvinceById(provinceId: string): Promise<Province>;
    protected processFindProvinceById(response: Response): Promise<Province>;
    /**
     * Update province
     * @param province provinceId
     * @param body (optional)
     * @return successful operation
     */
    updateProvince(province: string, body: any | undefined): Promise<void>;
    protected processUpdateProvince(response: Response): Promise<void>;
    /**
     * Search by elasticsearch
     * @param keyword (optional) search keyword
     * @param state (optional) product state (old/new)
     * @param priceType (optional) price type (fixed/negociate)
     * @param minPrice (optional) min price
     * @param maxPrice (optional) max price
     * @param weightRange (optional) weight range
     * @param otherNewsType (optional) news type (sell/buy/...)
     * @param newsType (optional) news type (sell/buy/...)
     * @param categoryId (optional) categoryID
     * @param owner (optional) news owner id
     * @param shop (optional) shop id
     * @param location (optional) location (only by city)
     * @param type (optional) product type (may ui/may xuc/may dao)
     * @param brand (optional) product's brand
     * @param model (optional) product model
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */
    searchElasticsearch(keyword: string | undefined, state: string | undefined, priceType: string | undefined, minPrice: number | undefined, maxPrice: number | undefined, weightRange: string | undefined, otherNewsType: string | undefined, newsType: string | undefined, categoryId: string | undefined, owner: string | undefined, shop: string | undefined, location: string | undefined, type: string | undefined, brand: string | undefined, model: string | undefined, first: number, sortBy: string, before: string | undefined, after: string | undefined): Promise<ElasticSearchResult>;
    protected processSearchElasticsearch(response: Response): Promise<ElasticSearchResult>;
    /**
     * Follow
     * @param id newsId
     * @param body (optional)
     * @return successful operation
     */
    follow(id: string, body: any | undefined): Promise<void>;
    protected processFollow(response: Response): Promise<void>;
    /**
     * Find follow by user/news
     * @param id id
     * @param type type
     * @param newsType (optional) type
     * @param first first
     * @param sortBy sortBy
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */
    findFollow(id: string, type: string, newsType: string | undefined, first: number, sortBy: string, before: string | undefined, after: string | undefined): Promise<any>;
    protected processFindFollow(response: Response): Promise<any>;
}
export interface GetAllRolesResult {
    roles: Role[];
}
export interface CheckPhoneNoExistResult {
    phoneNoExist: boolean;
}
export interface CheckRoleNameExistResult {
    roleNameExist: boolean;
}
export interface RegisterUserPayload {
    idToken: string;
}
export interface FindRolesResult {
    data: Role[];
    before: any;
    after: any;
}
export interface ActivateRolePayload {
    operation: ActivateRolePayloadOperation;
}
export interface DeactivateRolePayload {
    operation: DeactivateRolePayloadOperation;
}
export interface UpdateRolePayload {
    operation: UpdateRolePayloadOperation;
    payload: Payload;
}
export interface Role {
    _id: string;
    name: string;
    description: string;
    permissions: string[];
}
export interface CreateRolePayload {
    name: string;
    description: string;
    permissions: string[];
}
export interface FindUserResult {
    data: User[];
    before: any;
    after: any;
    roles: any[];
    completeSignUp: boolean;
    isActive: boolean;
    isDeleted: boolean;
    lastModifiedAt: any;
    _id: string;
    permissions: any[];
    email: string;
    createdBy: string;
    createdAt: any;
    followBy: any[];
}
export interface FacebookLogin {
    uid: string;
    email: string;
    provider: FacebookLoginProvider;
}
export interface GoogleLogin {
    uid: string;
    email: string;
    provider: GoogleLoginProvider;
}
export interface PhoneLogin {
    phoneNo: string;
    provider: PhoneLoginProvider;
}
export interface EmailLogin {
    email: string;
    provider: EmailLoginProvider;
}
export interface User {
    _id: string;
    email: string;
    familyName: string;
    givenName: string;
    fullName: string;
    phoneNo: string;
    address: string;
    description: string;
    avatarUrl: string;
    province: string;
    dob: number;
    gender: string;
    loginDetail: any;
    roles: string[];
    completeSignUp: boolean;
    followBy: any[];
    isActive: boolean;
    createdAt: number;
    createdBy: number;
    counterFollow: number;
    isFollowing: boolean;
}
export interface CheckEmailExistResult {
    emailExist: boolean;
}
export interface UpdateUserPayload {
    operation: UpdateUserPayloadOperation;
    payload: Payload2;
}
export interface UpdateProfilePayload {
    operation: UpdateProfilePayloadOperation;
    payload: Payload3;
}
export interface ChangePasswordPayload {
    newPassword: string;
}
export interface ActivateUserPayload {
    operation: ActivateUserPayloadOperation;
}
export interface DeactivateUserPayload {
    operation: DeactivateUserPayloadOperation;
}
export interface UpdateAvatarPayload {
    operation: UpdateAvatarPayloadOperation;
    data: Data;
}
export interface CreateUserPayload {
    email: string;
    password: string;
    roles: string[];
    familyName: string;
    givenName: string;
}
export interface NewsStatisticsResult {
    daysOfWeek: DaysOfWeek[];
    hoursOfDay: HoursOfDay[];
    brands: Brand[];
    categories: Category[];
    provinces: Province[];
}
export interface UpdateAdsensePayload {
    operation: UpdateAdsensePayloadOperation;
    payload: Payload4;
}
export interface CreateAdsensePayload {
    name: string;
    imageUrl: string;
    hyperlink: string;
    position: number;
}
export interface GetAdsenseResult {
    data: Adsense[];
}
export interface Adsense {
    _id: string;
    name: string;
    imageUrl: string;
    hyperlink: string;
    position: number;
    createdAt: number;
}
export interface UpdateFeatureBrandPayload {
    operation: UpdateFeatureBrandPayloadOperation;
    payload: Payload5;
}
export interface GetFeatureBrandsResult {
    data: FeatureBrand[];
    before: string;
    after: string;
}
export interface CreateFeatureBrandPayload {
    brand: string;
    logoImage: string;
    hyperlink: string;
    order: number;
}
export interface FeatureBrand {
    _id: string;
    brand: any;
    logoImage: string;
    hyperlink: string;
    order: number;
    createdAt: number;
}
export interface CreateRentalPeriodPayload {
    min: number;
    max: number;
}
export interface UpdateRentalPeriodPayload {
    operation: UpdateRentalPeriodPayloadOperation;
    payload: Payload6;
}
export interface UpdateWeightRangePayload {
    operation: UpdateWeightRangePayloadOperation;
    payload: Payload7;
}
export interface CreateWeightRangePayload {
    min: number;
    max: number;
}
export interface RentalPeriod {
    _id: string;
    min: number;
    max: number;
    createdAt: number;
}
export interface GetAllRentalPeriodsResult {
    data: RentalPeriod[];
}
export interface WeightRange {
    _id: string;
    min: number;
    max: number;
    createdAt: number;
}
export interface GetAllWeightRangesResult {
    data: WeightRange[];
}
export interface CommonKeyword {
    keyword: string;
    count: number;
    createdAt: number;
}
export interface GetCommonKeywordsResult {
    data: CommonKeyword[];
    before: string;
    after: string;
}
export interface CreateRecentViewedPayload {
    news: string;
}
export interface RecentViewedItem {
    _id: string;
    uuid: string;
    user: string;
    news: any;
    createdAt: number;
    lastModifiedAt: number;
}
export interface GetRecentViewedResult {
    data: RecentViewedItem[];
    before: string;
    after: string;
}
export interface SearchNewsMostFollowResult {
    data: SearchNewsMostFollowItemResult[];
    before: string;
    after: string;
}
export interface ReadNotificationPayload {
    operation: ReadNotificationPayloadOperation;
    payload: Payload8;
}
export interface ReadAllNotificationsPayload {
    operation: ReadAllNotificationsPayloadOperation;
}
export interface CountUnreadNotificationsResult {
    unreadNotifications: number;
}
export interface Notification {
    _id: string;
    owner: any;
    news: any;
    state: NotificationState;
    type: NotificationType;
    createdAt: number;
}
export interface FindNotificationsResult {
    data: Notification[];
    before: string;
    after: string;
}
export interface SearchNewsMostFollowItemResult {
    _id: string;
    imageUrls: string[];
    isDeleted: boolean;
    lastModifiedAt: number;
    isFollowing: boolean;
    title: string;
    state: string;
    newsType: string;
    counterFollow: number;
    counterView: number;
}
export interface FindReportsResult {
    data: Report[];
    before: string;
    after: string;
}
export interface UpdateReportPayload {
    operation: UpdateReportPayloadOperation;
    payload: Payload9;
}
export interface Report {
    _id: any;
    news: any;
    reports: Reports[];
    state: ReportState;
    resolvedResult: ReportResolvedResult;
    resolvedBy: any;
    resolvedAt: number;
}
export interface CreateReportPayload {
    news: string;
    reason: CreateReportPayloadReason;
    description: string;
    email: string;
    phoneNo: string;
}
export interface UpdateIntroImagesShopPayload {
    operation: UpdateIntroImagesShopPayloadOperation;
    payload: Payload10;
}
export interface UpdateLogoImageShopPayload {
    operation: UpdateLogoImageShopPayloadOperation;
    payload: Payload11;
}
export interface DeactivateShopPayload {
    operation: DeactivateShopPayloadOperation;
}
export interface ActivateShopPayload {
    operation: ActivateShopPayloadOperation;
}
export interface UpdateShopPayload {
    operation: UpdateShopPayloadOperation;
    payload: Payload12;
}
export interface CreateShopPayload {
    owner: string;
    domain: string;
    name: string;
    email: string;
    address: string;
    geocode: Geocode;
    description: string;
    phone: string;
    introImages: string[];
    logoImage: string;
    expiryDate: number;
}
export interface FindShopsResult {
    data: Shop[];
    before: string;
    after: string;
}
export interface Shop {
    _id: string;
    owner: any;
    domain: string;
    name: string;
    address: string;
    geocode: Geocode2;
    description: string;
    followBy: any[];
    isFollowing: boolean;
    phone: string;
    email: string;
    introImages: string[];
    logoImage: string;
}
export interface ElasticSearchResult {
    data: ElasticSearchItemResult[];
    before: string;
    after: string;
}
export interface ElasticSearchItemResult {
    title: string;
    state: string;
    description: string;
    imageUrls: string[];
    price: number;
    priceType: string;
    newsType: string;
    owner: string;
    location: Location;
    status: string;
    usedHours: number;
    serialNo: number;
    categoryId: CategoryId;
    brand: Brand2;
    model: Model2;
    weight: number;
    year: number;
    followBy: string[];
    isDeleted: boolean;
    createdBy: number;
    createdAt: number;
    lastModifiedAt: number;
    elasticsearchID: string;
    elasticsearchTitle: string;
    isFollowing: boolean;
    _id: string;
}
export interface News {
    _id: string;
    title: string;
    state: string;
    description: string;
    imageUrls: string[];
    price: number;
    priceType: string;
    newsType: string;
    owner: any;
    shop: any;
    location: any;
    status: string;
    usedHours: number;
    serialNo: string;
    categoryId: any;
    type: any;
    brand: any;
    model: any;
    weight: number;
    year: number;
    weightRange: any;
    rentalPeriod: any;
    followBy: any[];
    isFollowing: boolean;
    createdAt: number;
    counterFollow: number;
    counterView: number;
}
export interface FindNewsDetail {
    _id: string;
    title: string;
    state: string;
    description: string;
    imageUrls: string[];
    price: number;
    priceType: string;
    newsType: string;
    owner: any;
    shop: any;
    location: any;
    status: string;
    usedHours: number;
    serialNo: string;
    categoryId: any;
    type: any;
    brand: any;
    model: any;
    weight: number;
    year: number;
    weightRange: any;
    rentalPeriod: any;
    followBy: any[];
    isFollowing: boolean;
    createdAt: number;
    counterView: number;
    counterFollow: number;
}
export interface CreateNewsPayload {
    title: string;
    state: string;
    newsType: string;
    priceType: string;
    location: string;
    owner: string;
    status: string;
    usedHours: number;
    serialNo: string;
    categoryId: string;
    type: string;
    brand: string;
    model: string;
    weight: number;
    year: number;
}
export interface UpdateNewsPayload {
    operation: string;
    data: Data2;
}
export interface FindNewsResult {
    data: News[];
    before: string;
    after: string;
}
export interface FindNewsResultWithFollow {
    data: FindNewsDetail[];
    before: string;
    after: string;
}
export interface Brand {
    _id: string;
    slug: string;
    name: string;
    logoImage: string;
    totalNews: number;
    brandCategories: Category[];
    brandModels: Model[];
    createdAt: number;
}
export interface FindBrandsResult {
    data: Brand[];
    before: string;
    after: string;
}
export interface CreateBrandPayload {
    name: string;
    logoImage: string;
}
export interface UpdateBrandPayload {
    operation: UpdateBrandPayloadOperation;
    payload: any;
}
export interface Category {
    _id: string;
    slug: string;
    name: string;
    imageUrl: string;
    totalNews: number;
    categoryBrands: Brand[];
    categoryModels: Model[];
    createdAt: number;
}
export interface FindCategoriesResult {
    data: Category[];
}
export interface CreateCategoryPayload {
    name: string;
    imageUrl: string;
}
export interface UpdateCategoryPayload {
    operation: UpdateCategoryPayloadOperation;
    payload: Payload13;
}
export interface Model {
    _id: string;
    slug: string;
    name: string;
    brand: any;
    category: any;
    totalNews: number;
    createdAt: number;
}
export interface FindModelsResult {
    data: Model[];
    before: string;
    after: string;
}
export interface CreateModelPayload {
    name: string;
    slug: string;
    brand: string;
    model: string;
}
export interface UpdateModelPayload {
    _id: string;
    name: string;
    slug: string;
    brand: string;
    model: string;
}
export interface Province {
    _id: string;
    slug: string;
    name: string;
    totalNews: number;
}
export interface FindProvincesResult {
    data: Province[];
}
export interface CreateProvincePayload {
    name: string;
    slug: string;
}
export interface UpdateProvincePayload {
    _id: string;
    name: string;
    slug: string;
}
export interface FollowPayload {
    operation: string;
    payload: Payload14;
}
export interface FindUserFollowResult {
    data: FindUserResult[];
}
export declare enum State {
    PENDING = "PENDING",
    RESOLVED = "RESOLVED"
}
export declare enum Reason {
    WRONG_INFO = "WRONG_INFO",
    SOLD = "SOLD",
    VIOLATE = "VIOLATE"
}
export declare enum ActivateRolePayloadOperation {
    Activate = "activate"
}
export declare enum DeactivateRolePayloadOperation {
    Deactivate = "deactivate"
}
export declare enum UpdateRolePayloadOperation {
    UpdateDetail = "updateDetail"
}
export interface Payload {
    name: string;
    description: string;
    permissions: string[];
}
export declare enum FacebookLoginProvider {
    Facebook = "facebook"
}
export declare enum GoogleLoginProvider {
    Google = "google"
}
export declare enum PhoneLoginProvider {
    Phone = "phone"
}
export declare enum EmailLoginProvider {
    Email = "email"
}
export declare enum UpdateUserPayloadOperation {
    UpdateDetail = "updateDetail"
}
export interface Payload2 {
    roles: string[];
    familyName: string;
    givenName: string;
    email: string;
}
export declare enum UpdateProfilePayloadOperation {
    UpdateDetail = "updateDetail"
}
export interface Payload3 {
    familyName: string;
    givenName: string;
    phoneNo: string;
    email: string;
    address: string;
    description: string;
}
export declare enum ActivateUserPayloadOperation {
    Activate = "activate"
}
export declare enum DeactivateUserPayloadOperation {
    Deactivate = "deactivate"
}
export declare enum UpdateAvatarPayloadOperation {
    UpdateAvatar = "updateAvatar"
}
export interface Data {
    avatarUrl: string;
}
export interface DaysOfWeek {
    _id: number;
    totalNews: number;
}
export interface HoursOfDay {
    _id: number;
    totalNews: number;
}
export declare enum UpdateAdsensePayloadOperation {
    UpdateDetail = "updateDetail"
}
export interface Payload4 {
    name: string;
    imageUrl: string;
    hyperlink: string;
    position: number;
}
export declare enum UpdateFeatureBrandPayloadOperation {
    UpdateDetail = "updateDetail"
}
export interface Payload5 {
    brand: string;
    logoImage: string;
    hyperlink: string;
    order: number;
}
export declare enum UpdateRentalPeriodPayloadOperation {
    UpdateDetail = "updateDetail"
}
export interface Payload6 {
    min: number;
    max: number;
}
export declare enum UpdateWeightRangePayloadOperation {
    UpdateDetail = "updateDetail"
}
export interface Payload7 {
    min: number;
    max: number;
}
export declare enum ReadNotificationPayloadOperation {
    ReadNotification = "readNotification"
}
export interface Payload8 {
    notificationId: string;
}
export declare enum ReadAllNotificationsPayloadOperation {
    ReadAllNotifications = "readAllNotifications"
}
export declare enum NotificationState {
    READ = "READ",
    UNREAD = "UNREAD"
}
export declare enum NotificationType {
    FOLLOW_USER = "FOLLOW_USER",
    FOLLOW_SHOP = "FOLLOW_SHOP",
    CREATE_NEWS = "CREATE_NEWS"
}
export declare enum UpdateReportPayloadOperation {
    ResolveReport = "resolveReport"
}
export interface Payload9 {
    resolvedResult: Payload9ResolvedResult;
}
export interface Reports {
    reason: ReportsReason;
    description: string;
    email: string;
    phoneNo: string;
    createdAt: number;
}
export declare enum ReportState {
    PENDING = "PENDING",
    RESOLVED = "RESOLVED"
}
export declare enum ReportResolvedResult {
    SKIP = "SKIP",
    DELETE = "DELETE"
}
export declare enum CreateReportPayloadReason {
    WRONG_INFO = "WRONG_INFO",
    SOLD = "SOLD",
    VIOLATE = "VIOLATE"
}
export declare enum UpdateIntroImagesShopPayloadOperation {
    UpdateCover = "updateCover"
}
export interface Payload10 {
    introImages: string[];
}
export declare enum UpdateLogoImageShopPayloadOperation {
    UpdateAvatar = "updateAvatar"
}
export interface Payload11 {
    logoImage: string;
}
export declare enum DeactivateShopPayloadOperation {
    Deactivate = "deactivate"
}
export declare enum ActivateShopPayloadOperation {
    Activate = "activate"
}
export declare enum UpdateShopPayloadOperation {
    UpdateDetail = "updateDetail"
}
export interface Payload12 {
    domain: string;
    name: string;
    address: string;
    geocode: Geocode3;
    phone: string;
    email: string;
    expiryDate: number;
}
export interface Geocode {
    lng: number;
    lat: number;
}
export interface Geocode2 {
    lng: number;
    lat: number;
}
export interface Location {
    isDeleted: boolean;
    lastModifiedAt: number;
    _id: string;
    name: string;
    slug: string;
}
export interface CategoryId {
    isDeleted: boolean;
    lastModifiedAt: number;
    _id: string;
    name: string;
    slug: string;
}
export interface Brand2 {
    isDeleted: boolean;
    lastModifiedAt: number;
    _id: string;
    name: string;
    slug: string;
    totalNews: number;
}
export interface Model2 {
    isDeleted: boolean;
    lastModifiedAt: number;
    _id: string;
    name: string;
    slug: string;
    brand: string;
    category: string;
}
export interface Data2 {
    title: string;
    state: string;
    newsType: string;
    priceType: string;
    location: string;
    owner: string;
    status: string;
    usedHours: number;
    serialNo: string;
    categoryId: string;
    type: string;
    brand: string;
    model: string;
    weight: number;
    year: number;
}
export declare enum UpdateBrandPayloadOperation {
    UpdateDetail = "updateDetail"
}
export declare enum UpdateCategoryPayloadOperation {
    UdpateDetail = "udpateDetail"
}
export interface Payload13 {
    name: string;
    imageUrl: string;
}
export interface Payload14 {
    userId: string;
    newsId: string;
}
export declare enum Payload9ResolvedResult {
    SKIP = "SKIP",
    DELETE = "DELETE"
}
export declare enum ReportsReason {
    WRONG_INFO = "WRONG_INFO",
    SOLD = "SOLD",
    VIOLATE = "VIOLATE"
}
export interface Geocode3 {
    lng: number;
    lat: number;
}
export declare class SwaggerException extends Error {
    message: string;
    status: number;
    response: string;
    headers: {
        [key: string]: any;
    };
    result: any;
    constructor(message: string, status: number, response: string, headers: {
        [key: string]: any;
    }, result: any);
    protected isSwaggerException: boolean;
    static isSwaggerException(obj: any): obj is SwaggerException;
}
