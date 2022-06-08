// code your solution here
function saturdayFun(action = "roller-skate"){
    return (`This Saturday, I want to ${action}!`)
}


function mondayWork(event = "go to the office"){
    return (`This Monday, I will ${event}.`)
}


/*function demoChain(name) {
    const part1 = "hi";
    return function () {
      const part2 = "there";
      return function () {
        console.log(`${part1.toUpperCase()} ${part2} ${name}`);
      };
    };
  }
  
  demoChain("Dr. Stephen Strange")()(); //=> HI there Dr. Stephen Strange*/



  function wrapAdjective(){
      return function (character = "special") {
          return `You are ${character}`
      }
  }
  wrapAdjective("%")("a dedicated programmer")