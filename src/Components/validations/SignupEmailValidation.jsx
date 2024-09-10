import React from 'react'

export default function SignupEmailValidation({emailState,requiredEmailState,correctEmailState}) {
  return (
    emailState && (
        <div className="flex py-2 flex-row justify-between">
          {requiredEmailState ? (
            <p
              className={`
              ${
                !requiredEmailState
                  ? " text-main-color"
                  : "text-red-800"
              }
            `}
            >
              This field is required{" "}
              <span>{!requiredEmailState ? "✔" : "✖"}</span>
            </p>
          ) : null}
          {correctEmailState ? (
            <p
              className={`
              ${
                !correctEmailState ? " text-main-color" : "text-red-800"
              }
            `}
            >
              Email format: "example@email.com"{" "}
              <span>{!correctEmailState ? "✔" : "✖"}</span>
            </p>
          ) : null}
        </div>
      )
  )
}
