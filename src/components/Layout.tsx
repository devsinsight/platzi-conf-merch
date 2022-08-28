import { Footer } from "./Footer";
import { Header } from "./Header";
import '../styles/components/Layout.scss';

export const Layout = ({children}: any) =>
{
    return (
        <div className="Main">
            <Header />
            {children}
            <Footer />
        </div>
    );
}