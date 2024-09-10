import React from "react";

export default function PassValidation({
  passState,
  minPassState,
  correctPassState,
}) {
  return (
    passState && (
      <div className="flex flex-col justify-center py-2">
        <div className="flex flex-col sm:flex-row justify-between">
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
