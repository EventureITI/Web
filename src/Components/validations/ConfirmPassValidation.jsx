import React from 'react'

export default function ConfirmPassValidation({confirmPassState,correctConfirmPassState}) {
  return (
    confirmPassState && (
        <div className="flex sm:items-center flex-col sm:flex-row justify-between py-2">
          {correctConfirmPassState ? (
            <p
              className={`
                ${
                  !correctConfirmPassState
                    ? " text-main-color"
                    : "text-red-800"
                }
              `}
            >
              This field must match your Password{" "}
              <span>{!correctConfirmPassState ? "✔" : "✖"}</span>
            </p>
          ) : null}
        </div>
      )
  )
}
