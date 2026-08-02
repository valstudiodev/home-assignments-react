import React from "react";

interface ResultDisplayProps {
  result: number;
}

export const ResultDisplay = React.memo(
  function ResultDisplay({ result }: ResultDisplayProps): React.JSX.Element {
    console.log('ResultDisplay render')
    return (
      <div className="bg-gray-400 p-3 ">
        {result}
      </div>
    )
  }
)


// export const Child = React.memo(function Child({
//   name,
// }: ChildProps): React.JSX.Element {
//   console.log('👶 Child render')

//   return <h2>{name}</h2>
// })