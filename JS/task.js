{
  /**
   * Step 1: Describe the way ... -> ... for each step and finalize whats the return value and type in the end
   * Step 2: Change the string to "Happy" and do Step 1 again
   */
  // 'Tablet' -> ['T','a','b','l','e','t'] -> ['t','e','l'..] -> 't' ==> 'true'
  // 'Happy' -> ['H','a',..] -> ['y','p','p'..] -> 'y' ==> false
  const whatsInHere = "Tablet".split("").reverse()[0] == "t" ? "true" : false;
  // const- wenn array-> elemente in array ändern o, einmal initialisieren o, reinitialisieren x
  // const array = ["a", "b", "c"];
  // array[0] = 0;
  // array = ["c"];
  // array = "string";
  // console.log(typeof whatsInHere, whatsInHere);
}

{
  /**
   * Step 1: Describe the way ... -> ... for each step and finalize whats the return value and type in the end
   */
  // ['s','t','r' ..] -> ['sss','ttt','rrr'...] ==> 'ssstttrrr...'
  const strangeArray = ["s", "t", "r", "a", "n", "g", "e"];
  let newStrangeArray = strangeArray
    .map((value) => {
      return `${value}${value}${value}`;
    })
    .join(""); //immer in string v

  // console.log(typeof newStrangeArray, newStrangeArray);
}

{
  /**
   * Step 1: Describe the way ... -> ... for each step and finalize whats the return value and type in the end
   */
  // '54' -> ['5','4'] -> [5,4] -> [4,5] ==> 1
  const numbers = "54";
  let numbersArray = numbers
    .split("") //immer array
    .map((value) => {
      return Number(value);
    })
    .reverse();
  let numbersResult = numbersArray[1] - numbersArray[0];

  // console.log(typeof numbersResult, numbersResult);
}

{
  /**
   * Step 1: Describe the way ... -> ... for each step and finalize whats the return value and type in the end
   */
  //['sayNo', 'sayYes'] ==> undefined
  const someObject = Object.keys({
    sayNo: "no",
    sayYes: "yes",
  });
  // let someObjectValue = someObject.sayNo;
  console.log(someObject.sayNo);
  //console.log(someObject, someObjectValue);
}

{
  /**
   * Step 1: Describe the way ... -> ... for each step and finalize whats the return value and type in the end
   */
  //[5, 5, 4, 1] ==> '15'
  const numbersArray = [5, 5, 4, 1];
  let sum = String(
    numbersArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )
  );

  // console.log(typeof sum, sum);
}
