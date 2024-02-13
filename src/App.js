import { useState } from "react";
import "./App.css";

function App() {
   const [hoverPosition, setHoverPosition] = useState({ x: "55%", y: "70%" });
   const [isHovered, setIsHovered] = useState(false);
   const [heSaidYes, setHeSaidYes] = useState(false);
   const [heSaidNo, setHeSaidNo] = useState(false);

   const handleMouseEnter = () => {
      const newX = Math.random() * window.innerWidth;
      const newY = Math.random() * window.innerHeight;
      setHoverPosition({ x: newX, y: newY });
      setIsHovered(true);
   };

   const handleMouseLeave = () => {
      setIsHovered(false);
   };

   return (
      <div className="App">
         {heSaidNo ? (
            <>
               <h1 className="app__title">Как ты мог ?!?!</h1>
               <img className="app__gif" src={"./gif-2.gif"}></img>
            </>
         ) : (
            <>
               {heSaidYes ? (
                  <>
                     <h1 className="app__title">
                        Я знала что ты так ответишь. Я в тебе не сомневалась :D
                     </h1>
                     <img className="app__gif" src={"./gif-3.gif"}></img>
                  </>
               ) : (
                  <>
                     <h1 className="app__title">
                        Ты любишь больше меня? Или Гориллу (желтую)?
                     </h1>
                     <img className="app__gif" src={"./gif-1.gif"}></img>
                     <div className="app__buttons">
                        <button
                           className={"button"}
                           style={{
                              top: hoverPosition.y,
                              left: hoverPosition.x,
                           }}
                           onMouseEnter={handleMouseEnter}
                           onMouseLeave={handleMouseLeave}
                           onClick={() => {
                              setHeSaidNo(true);
                           }}
                        >
                           Горилла ван лаф!
                        </button>
                        <button
                           className={"button"}
                           onClick={() => {
                              setHeSaidYes(!heSaidYes);
                           }}
                        >
                           Конечно тебя! <3
                        </button>
                     </div>
                  </>
               )}
            </>
         )}
      </div>
   );
}

export default App;
