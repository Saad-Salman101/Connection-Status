import store from "@/src/store";
import { Provider } from "react-redux";
import "@/styles/globals.scss";
import Layout from "@/components/Layout";
import { toast, ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }) {
  return (

    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer/>
    </Provider>

  );
}
