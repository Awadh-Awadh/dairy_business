  const shadeA=510;
  const shadeB=308;
  const shadeC=486;
  const shadeD=572;

  let total= shadeA + shadeB + shadeC + shadeD;

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

  let annualDays = 365;

  let annualPrice = 365 * 45;

  function incomeOverTime(selling_price, time){
    let weekly = selling_price * time * total;
    let annual = annualPrice * total;
    let weeklyYealy= `Your weekly income will be ${weekly}.
    Your yearly income will be ${annual}.`;
    const testVar = document.getElementById('weekanual').innerText = weeklyYealy;
    console.log(testVar);
  }
  incomeOverTime(45, 7);


  let




