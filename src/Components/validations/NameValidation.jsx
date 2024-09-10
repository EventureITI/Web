import React from 'react'

export default function NameValidation({nameState,requiredNameState,noNumNameState,minNameState}) {
  return (
    nameState && (
        <div className="flex font-Inter font-400 flex-col justify-center py-2">
          <div className="flex flex-row justify-between">
            {requiredNameState ? (
              <p
                className={`
                  ${
                    !requiredNameState
                      ? " text-main-color"
                      : "text-red-800"
                  }
                `}
              >
                Both fields are required{" "}
                <span>{!requiredNameState ? "✔" : "✖"}</span>
              </p>
            ) : null}
            {noNumNameState ? (
              <p
                className={`
                  ${!noNumNameState ? " text-main-color" : "text-red-800"}
                `}
              >
                Only characters are allowed{" "}
                <span>{!noNumNameState ? "✔" : "✖"}</span>
              </p>
            ) : null}
          </div>

          {minNameState ? (
            <p
              className={`
                  ${!minNameState ? " text-main-color" : "text-red-800"}
                `}
            >
              Minimum 3 charachters required in each field{" "}
              <span>{!minNameState ? "✔" : "✖"}</span>
            </p>
          ) : null}
        </div>
      )
  )
}
