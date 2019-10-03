import 'firebase/auth';
import { ServiceProxy } from './service-proxies';
declare const getServiceProxy: (idToken?: string) => ServiceProxy;
export { getServiceProxy, };
