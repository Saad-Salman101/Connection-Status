// import InternetConnectionPopup from './InternetConnectionPopup';
import ConnectivityCheck from './ConnectivityCheck';

const Layout = ({ children }) => {
  return (
    <div>
      {/* <InternetConnectionPopup /> */}
      {/* Rest of your layout */}
      <ConnectivityCheck />
      {children}
    </div>
  );
};

export default Layout;
