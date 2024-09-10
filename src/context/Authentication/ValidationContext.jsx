import React, { createContext, useEffect, useState } from "react";

export const Validation = createContext();

export default function ValidationContext({ children }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState(null);
  const [nameState, setNameState] = useState(false);
  const [emailState, setEmailState] = useState();
  const [passState, setPassState] = useState();
  const [confirmPassState, setConfirmPassState] = useState();

  const [userConfirmPass, setUserConfirmPass] = useState(null);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  const [minNameState, setMinNameState] = useState();
  const [noNumNameState, setNoNumNameState] = useState();
  const [requiredNameState, setRequiredNameState] = useState();

  const [correctEmailState, setCorrectEmailState] = useState();
  const [requiredEmailState, setRequiredEmailState] = useState(true);
  const [editEmailRequireState, setEditEmailRequireState] = useState();
  const [correctPassState, setCorrectPassState] = useState();
  const [requiredPassState, setRequiredPassState] = useState(true);
  const [minPassState, setminPassState] = useState();
  const [correctConfirmPassState, setCorrectConfirmPassState] = useState(true);

  function handleFirstName(e) {
    setUserFirstName(e.target.value);
    setNameState(true);
  }
  function handleLastName(e) {
    setUserLastName(e.target.value);
    setNameState(true);
  }

  useEffect(() => {
    const text = /^[a-zA-Z\s]*$/;
    if (!userFirstName || !userLastName) {
      setRequiredNameState(true);
      setMinNameState(false);
      setNoNumNameState(false);
    } else if (userFirstName?.length < 3 || userLastName?.length < 3) {
      setMinNameState(true);
      setRequiredNameState(false);
      setNoNumNameState(false);
    } else if (!text.test(userFirstName) || !text.test(userLastName)) {
      setNoNumNameState(true);
      setMinNameState(false);
    } else {
      setRequiredNameState(false);
      setNoNumNameState(false);
      setMinNameState(false);
    }
  }, [userFirstName, userLastName]);

  function handleEmail(e) {
    setUserEmail(e.target.value);
    setEmailState(true);
    const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (e.target.value.length == 0) {
      setRequiredEmailState(true);
      setEditEmailRequireState(true);
      setCorrectEmailState(false);
    } else if (!emailExp.test(e.target.value)) {
      setCorrectEmailState(true);
      setRequiredEmailState(false);
      setEditEmailRequireState(false);
    } else {
      setRequiredEmailState(false);
      setCorrectEmailState(false);
      setEditEmailRequireState(false);
    }
  }
  function handlePass(e) {
    setUserPass(e.target.value);
    setPassState(true);
    const passExp = /^[A-Z][a-zA-Z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~-]*$/;
    if (e.target.value.length == 0) {
      setRequiredPassState(true);
      setminPassState(false);
      setCorrectPassState(false);
    } else if (e.target.value.length < 6) {
      setminPassState(true);
      setRequiredPassState(false);
      setCorrectPassState(false);
    } else if (!passExp.test(e.target.value)) {
      setCorrectPassState(true);
      setRequiredPassState(false);
      setminPassState(false);
    } else {
      setminPassState(false);
      setRequiredPassState(false);
      setCorrectPassState(false);
    }
  }

  function handleConfirmPass(e) {
    setConfirmPassState(true);
    setUserConfirmPass(e.target.value);
  }

  useEffect(() => {
    if (userConfirmPass === userPass) {
      setCorrectConfirmPassState(false);
    } else {
      setCorrectConfirmPassState(true);
    }
  }, [userConfirmPass, userPass]);

  return (
    <Validation.Provider
      value={{
        userEmail,
        setUserEmail,
        userPass,
        nameState,
        setNameState,
        emailState,
        setEmailState,
        passState,
        setPassState,
        confirmPassState,
        setConfirmPassState,
        userFirstName,
        setUserFirstName,
        userLastName,
        setUserLastName,
        minNameState,
        noNumNameState,
        requiredNameState,
        correctEmailState,
        requiredEmailState,
        editEmailRequireState,
        correctPassState,
        requiredPassState,
        minPassState,
        correctConfirmPassState,
        handleFirstName,
        handleLastName,
        handleEmail,
        handlePass,
        handleConfirmPass,
      }}
    >
      {children}
    </Validation.Provider>
  );
}
