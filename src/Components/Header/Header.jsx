import Banner from "./Banner";
import Nav from "./Nav";

const Header = () => {
    return (
        <div className="container mx-auto">
            <Nav></Nav>
            <Banner></Banner>            
        </div>
    );
};

export default Header;