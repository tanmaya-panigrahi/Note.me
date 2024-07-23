import Form from "./sections/form";
import Left from "./sections/left";

import styles from "./login.module.scss";
import { ToastContainer } from "react-toastify";
function Login() {
  return (
    <>
    <ToastContainer />
      <main className={styles.container}>
        <Left />
        <Form />
        
      </main>
    </>
  );
}

export default Login;
