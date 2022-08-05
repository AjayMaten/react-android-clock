import React from "react";
import "../Stopwatch.css";

function TimeBtn(props) {
  return (
    <div
      className="text"
      onClick={props.handleClick ? props.handleClick : () => {}}
    >
      {props.text}
    </div>
  );
}

export default TimeBtn;

// switch (props.type) {
//   case "start":
//     return (
//       <div
//         className="text"
//         onClick={props.handleClick ? props.handleClick : () => {}}
//       >
//         {props.text}
//       </div>
//     );
//   case "stop":
//     return (
//       <div
//         className="text"
//         onClick={props.handleClick ? props.handleClick : () => {}}
//       >
//         {props.text}
//       </div>
//     );
//   case "resume":
//     return (
//       <div
//         className="text"
//         onClick={props.handleClick ? props.handleClick : () => {}}
//       >
//         {props.text}
//       </div>
//     );
//   case "pause":
//     return (
//       <div
//         className="text"
//         onClick={props.handleClick ? props.handleClick : () => {}}
//       >
//         {props.text}
//       </div>
//     );
//   case "time":
//     return (
//       <div
//         className="text"
//         onClick={props.handleClick ? props.handleClick : () => {}}
//       >
//         {props.text}
//       </div>
//     );
//   default:
//     return (
//       <div
//         className="text"
//         onClick={props.handleClick ? props.handleClick : () => {}}
//       >
//         {props.text}
//       </div>
//     );
// }
