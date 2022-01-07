import "../styles/globals.css";

import NavSidebar from "../components/nav-sidebar/nav-sidebar";
import { useRouter } from "next/router";
import Login from "./login";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router);
  return router.pathname == "/login" ? (
    <Login />
  ) : (
    <NavSidebar>
      <Component {...pageProps} />
    </NavSidebar>
  );
}

export default MyApp;
