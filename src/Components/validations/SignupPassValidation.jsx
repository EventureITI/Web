import React from "react";

export default function SignupPassValidation({
  passState,
  requiredPassState,
  minPassState,
  correctPassState,
}) {
  return (
    passState && (
      <div className="flex flex-col justify-center py-2">
        <div className="flex flex-col sm:flex-row justify-between">
          {requiredPassState ? (
            <p
              className={`
              ${!requiredPassState ? " text-main-color" : "text-red-800"}
            `}
            >
              This field is required{" "}
              <span>{!requiredPassState ? "✔" : "✖"}</span>
            </p>
          ) : null}
          {minPassState ? (
            <p
              className={`
             ${!minPassState ? " text-main-color" : "text-red-800"}
            `}
            >
              Minimum 6 charachters are required{" "}
              <span>{!minPassState ? "✔" : "✖"}</span>
            </p>
          ) : null}
        </div>
        {correctPassState ? (
          <p
            className={`
              ${!correctPassState ? " text-main-color" : "text-red-800"}
            `}
          >
            Should start with uppercase letter{" "}
            <span>{!correctPassState ? "✔" : "✖"}</span>
          </p>
        ) : null}
      </div>
    )
  );
}
