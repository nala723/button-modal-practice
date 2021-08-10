import { useState } from "react";
import "./styles.scss";
export default function App() {
  const [click, setClick] = useState(false);

  const handelClick = () => {
    setClick(!click);
  };

  return (
    <div className="App">
      <button className="button" onClick={handelClick}>
        Click Me!!
      </button>
      <button className="button sc" onClick={handelClick}>
        Click Me!!
      </button>
      <button className="button" onClick={handelClick}>
        Click Me!!
      </button>
      <div className={`modal ${click ? "active" : ""}`}>
        <div
          className={`content-wrapper ${click ? "active" : ""}`}
          onClick={handelClick}
        >
          <div className="close-btn">&times;</div>
          <div className="content">Hello Hi How are you!!?</div>
        </div>
      </div>
    </div>
  );
}
// <button className="button" onClick={handelClick}>
//       Click Me!!
//     </button>
//     {click ? (
//       <div className="modal">
//         <div className={`content-wrapper ${click ? 'active': ''}`} onClick={handelClick}>
//           <div className="close-btn">&times;</div>
//           <div className="content">Hello Hi How are you!!?</div>
//         </div>
//       </div>
//     ) : null}
