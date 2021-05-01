  const shadeA=510;
  const shadeB=308;
  const shadeC=486;
  const shadeD=572;
  const total= shadeA + shadeB + shadeC + shadeD;
  function totalProduction(){
    let output = `Your production in Shed A is ${shadeA} litres per day.
    Your production in Shed B is ${shadeB} litres per day.
    Your production in Shed C is ${shadeC}litres per day.
    Your production in Shed D is ${shadeD} litres per day.
    The total production is ${total} litres per day.`;
   const testVar = document.getElementById('totalOutput').innerText = output;
    console.log(testVar);
  }
  totalProduction();


