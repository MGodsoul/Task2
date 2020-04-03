const money = +prompt("Ваш бюджет на месяц?"),
  time = prompt("Введите дату в формате YYYY-MM-DD");

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Введите обязательную статью расходов в этом месяце"),
//     b = prompt("Во сколько обойдется?");
//     if (56656
//       typeof a === "string" &&
//       typeof a != null &&
//       typeof b != null &&
//       a != "" &&
//       b != "" &&
//       a.length < 20 &&
//       b.length < 10
//     ) {
//       appData.expenses[a] = b;
//       console.log ("done")
//     } else {
//       console.log ("wrong result");
//           i--
//     }
//   }
  // let i = 0;
  // while (i < 2) {
  //   const a = prompt("Введите обязательную статью расходов в этом месяце"),
  //     b = prompt("Во сколько обойдется?");
  //   if (
  //     typeof a === "string" &&
  //     typeof a != null &&
  //     typeof b != null &&
  //     a != "" &&
  //     b != "" &&
  //     a.length < 20 &&
  //     b.length < 10
  //   ) {
  //     console.log("done");

  //     appData.expenses[a] = b;
  //   } else {
  //     console.log("wrong result");
  //     i--;
  //   }
  //   i++;
  // }

  let i = 0;
  do {
    const a = prompt("Введите обязательную статью расходов в этом месяце"),
      b = prompt("Во сколько обойдется?");
    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 20 &&
      b.length < 10
    ) {
      console.log("done");

      appData.expenses[a] = b;
    } else {
      console.log("wrong result");
      i--;
    }
    i++;
  } 
  while (i < 2);
  appData.moneyPerDay = appData.budget / 30;

  alert("Budget per day is: " + appData.moneyPerDay);

  if (appData.moneyPerDay < 50) {
    console.log("minimal budget");
  } else if (appData.moneyPerDay > 50 && appData.moneyPerDay < 200) {
    console.log("middle budget");
  } else if (appData.moneyPerDay > 200) {
    console.log("oversize budget");
  } else {
    console.log("defaultmean");
  }

