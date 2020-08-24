import React, { useEffect, useState } from "react";
import Card from "./components/card/card";
import "./App.scss";
import { data } from "./data";
const randomNumGen = (base = 10) => {
  return Math.floor(Math.random() * base);
};

const randomNumList = (base = 20, x = 2) => {
  let ListOfNum = [];
  for (let i = x; i > 0; i--) {
    ListOfNum.push(randomNumGen(base));
  }
  return ListOfNum;
};

function App() {
  //states
  const [op, setOp] = useState("");
  const [r, setR] = useState("");
  const [l, setL] = useState("");
  const [num, setNum] = useState(0);
  const [randomList, setRandomList] = useState([5, 4]);
  //const [answer, setAnswer] = useState("");

  //Input Helper Functions
  const handleDigit = (n) => (!l ? setL(n) : (l && !op ? setL(n) : setR(n)));
  const handleOp = (n) => l && setOp(n);

  //Calculation Helper  
  const answer = r && eval(`${l}${op}${r}`);

  //Button Changers

  //Restart
  const restartSame = () => {
    setOp("");
    setL("");
    setR("");
  };
  const setNewGame = () => {
    setRandomList(randomNumList());
  };

  const answerGenerator = () => {
    const x = randomNumGen(4);
    const min = Math.min(randomList[0], randomList[1]);
    const max = Math.max(randomList[0], randomList[1]);
    if (x === 0) {
      return min + max;
    }
    if (x === 1) {
      return max - min;
    }
    if (x === 2) {
      return max * min;
    }
    if (x === 3) {
      if (randomList[1] === 0) {
        return max - min;
      }
      const ans = max / min;
      if (ans % 1 !== 0) {
        return max - min;
      }
      if (ans % 1 === 0) {
        return ans;
      }
    }
  };

  useEffect(() => {
    const makeItNum = answerGenerator();
    setNum(makeItNum);
    restartSame();
  }, [randomList]);
  return (
    <div>
      {/* <Ascii /> */}
      {/* <div className="product-container">
      {data.map((item) => (
        <Card
          productTitle={item.productTitle}
          productDescription={item.productDescription}
          img={item.img}
        />
      ))}
      
    </div> */}

      <div>
        <h1>{`Make it ${num}`}</h1>
        <div>
          <button onClick={() => handleOp("+")}>+</button>
          <button onClick={() => handleOp("-")}>-</button>
          <button onClick={() => handleOp("*")}>x</button>
          <button onClick={() => handleOp("/")}>➗</button>
        </div>
        <div>
          {randomList.map((n) => {
            return (
              <div>
                <button onClick={() => handleDigit(n.toString())}>{n}</button>
              </div>
            );
          })}
        </div>
        <h1>{`${l}${op}${r}=${answer && answer}`}</h1>
        <h1>{answer === num ? " You won" : r && "You Lost"}</h1>
        {r && <button onClick={() => restartSame()}>RESTART</button>}
        <button onClick={() => setNewGame()}>NEW GAME</button>
      </div>
    </div>
  );
}

export default App;
