/* eslint-disable no-unused-vars */

import styles from "./form.module.scss";
import { Icon } from "@iconify/react";
import Button from "../../../../components/atoms/button";
import BrandLogo from "../../../../components/shared/brand";
import { useState } from "react";
import Input from "../../../../components/atoms/input";
import { useNavigate } from "react-router-dom";
import Signin from "../../partials/signin";
import Signup from "../../partials/signup";

function Form() {
  const [active, setActive] = useState("signin");

  return (
    <section className={styles["form-container"]}>
      <BrandLogo />
      {active == "signin" ? <Signin /> : <Signup handleSwitch={()=>setActive('signin')}/>}
      {active=='signin'?<p>Not a registered user? <span onClick={()=>{setActive('signup')}}> Sign up Now</span></p> : <p>Already a user? <span onClick={()=>{setActive('signin')}}> Sign in Now</span></p>}
    </section>
  );
}

export default Form;
