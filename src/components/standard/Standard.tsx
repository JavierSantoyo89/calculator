import { useState } from "react";
import "./standard.css";

interface items {
  inputNumber: number;
}

export const Standard = () => {
  //   const arrayCalculo: number[] = [];
  const [inputNumber, setInputNumbers] = useState<items[]>([]);
  const [num, setNum] = useState(0);
  //     // const numero =0

  function outputNumbers(): number {
    return num;
  }
  //     const calculate = (numero: number): number => {
  //         // setNum(num+numero)
  //     const calculo = num ;
  // console.log(calculo);

  //     return calculo;
  //   };

  function botonazo(data: number) {
    setInputNumbers([...inputNumber, { inputNumber: data }]);
    setNum(num + data);
    // console.log(inputNumber);
    // console.log("el setdata es:" + setNum);
    // console.log("el data es:" + num);
    // console.log("El valor almacenado es: " + num);
    // console.log("El valor de entradaes: " + data);
    // console.log("El total de valores es: " + (data + num));
    outputNumbers();
    // return num+data;
  }
  return (
    <div className="front">
      {/* <input className="outputScreen" type="text" placeholder="Calculator"  /> */}
      <h2>Picaste: {inputNumber.map((item) => item.inputNumber) + ""} </h2>
      <textarea
        className="outputScreen"
        value={outputNumbers()}
        typeof="number"
        readOnly
      ></textarea>
      <div className="console">
        <div className="numbers">
          <button value={9} onClick={() => botonazo(9)}>
            9
          </button>
          <button value={8} onClick={() => botonazo(8)}>
            8
          </button>
          <button value={7} onClick={() => botonazo(7)}>
            7
          </button>
          <button value={6} onClick={() => botonazo(6)}>
            6
          </button>
          <button value={5} onClick={() => botonazo(5)}>
            5
          </button>
          <button value={4} onClick={() => botonazo(4)}>
            4
          </button>
          <button value={3} onClick={() => botonazo(3)}>
            3
          </button>
          <button value={2} onClick={() => botonazo(2)}>
            2
          </button>
          <button value={1} onClick={() => botonazo(1)}>
            1
          </button>
          <button value={0} onClick={() => botonazo(0)}>
            0
          </button>

          <button>.</button>
          <button>{"<="}</button>
        </div>

        <div className="operators">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>{"÷"}</button>
          <button>=</button>
          <button>{"%"}</button>
          <button>{"AC"}</button>
        </div>
      </div>
    </div>
  );
};
