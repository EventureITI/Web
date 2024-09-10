import React from 'react'

export default function EmailValidation({emailState,editEmailRequireState,correctEmailState}) {
  return (
    emailState && (
        <div className="flex py-2 flex-row justify-between">
          {editEmailRequireState ? (
            <p
              className={`
                ${
                  !editEmailRequireState
                    ? " text-main-color"
                    : "text-red-800"
                }
              `}
            >
              This field is required{" "}
              <span>{!editEmailRequireState ? "✔" : "✖"}</span>
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
