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


  let monthlyInfo = {
    january: 31,
    february: 29,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november:30,
    december: 31,
  };
  let dailyIncome = 45 * total;

  let monthly = [monthlyInfo.january*dailyIncome, monthlyInfo.february*dailyIncome, monthlyInfo.march*dailyIncome, monthlyInfo.april*dailyIncome, monthlyInfo.may*dailyIncome, monthlyInfo.june*dailyIncome, monthlyInfo.july*dailyIncome, monthlyInfo.august*dailyIncome, monthlyInfo.september*dailyIncome, monthlyInfo.october*dailyIncome, monthlyInfo.november*dailyIncome, monthlyInfo.december*dailyIncome];
  function monthlyIcome(){

  `Your income for january is${monthlyInfo[0]}
  Your Income for february is ${monthlyInfo[1]}
  Your income for march is ${monthlyInfo[2]}
  Your income for april is ${monthlyInfo[3]}
  Your income for May is ${monthlyInfo[4]}
  your income for June is ${monthlyInfo[5]}
  Your income for July is ${monthlyInfo[6]}
  Your income for August is ${monthlyInfo[7]}
  Your income for September is ${monthlyInfo[8]}
  Your income for october is ${monthlyInfo[9]}
  Your income for November is ${monthlyInfo[10]}
  Your income for december is ${monthlyInfo[11]}` ;
}

