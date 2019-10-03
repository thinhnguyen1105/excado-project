import './NavBarStore.less';
interface Props {
    linkLogoStore: string;
    shopName: string;
    t: (key: string) => string;
}
declare const NavBarStore: (props: Props) => JSX.Element;
export default NavBarStore;
