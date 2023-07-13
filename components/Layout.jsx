// import InternetConnectionPopup from './InternetConnectionPopup';
import ConnectivityCheck from './ConnectivityCheck';

const Layout = ({ children }) => {
  return (
    <div>

      <ConnectivityCheck />
      {children}
    </div>
  );
};

export default Layout;
