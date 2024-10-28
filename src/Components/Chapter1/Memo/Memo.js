import React, { useCallback, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DisplayCounter from "./DisplayCounter";
import DIsplayFlag from "./DIsplayFlag";
import ChangeState from "./ChangeState";

export default function Memo() {
  const [cont, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  const changeCounter = useCallback(() => {
    // Usecallback is used to render Change State component based on count only
    setCount(cont + 1);
  }, [cont]);
  const changeFlag = useCallback(() => {
    setFlag(!flag);
  }, [flag]);
  return (
    <div>
      <Header />
      <DisplayCounter counter={cont} />
      <DIsplayFlag mflag={flag} />
      <ChangeState caption="Change Counter" click={changeCounter} />
      <ChangeState caption="Change Flag" click={changeFlag} />
      <Footer />
    </div>
  );
}
