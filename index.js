// YNAB Type App

class User {
  constructor(income) {
    this.expenses = {
      loansOrDebt: {
        mortgageOrRent: 0,
        creditCards: 0,
        homeEquityLoan: 0,
        carLoan: 0,
        studentLoan: 0,
      },
      utilities: {
        gasOrOil: 0,
        electricity: 0,
        telephone: 0,
        waterAndSewer: 0,
        total: 0
      },
      insurancePremiums: {
        life: 0,
        auto: 0,
        home: 0,
        health: 0,
        longTermCare: 0,
        total: 0
      },
      savingsAndInvestments: {
        emergencyFund: 0,
        savings: 0,
        investments: 0,
        retirement: 0,
        total: 0
      },
      miscellaneous: {
        groceries: 0,
        childCare: 0,
        vacation: 0,
        entertainment: 0,
        clothing: 0,
        gasAutomobile: 0,
        commuting: 0,
        charity: 0,
        outOfPocketMedical: 0,
        total: 0
      },
    };
    this.income = {
      paycheck: income,
      other: 0,
    };
    this.percentageGoal = {
      loansOrDebt: 0,
      utilities: 0,
      insurance: 0,
      savings: 0,
      miscellaneous: 0,
    };
    this.percentageExpenses = {
      transportation: {
        low: 10,
        high: 15,
      },
      savings: {
        low: 10,
        high: 15,
      },
      food: {
        low: 10,
        high: 15,
      },
      insurance: {
        low: 10,
        high: 20,
      },
      housing: {
        low: 25,
        high: 35,
      },
      clothing: {
        low: 5,
        high: 5,
      },
      personal: {
        low: 5,
        high: 10,
      },
      entertainment: {
        low: 5,
        high: 10,
      },
      utilities: {
        low: 5,
        high: 10,
      },
    };
    this.actualExpensePercentage = {
      transportation: 0,
      savings: 0,
      food: 0,
      insurance: 0,
      housing: 0,
      clothing: 0,
      personal: 0,
      entertainment: 0,
      utilities: 0,
    };
  }

// function that will generate goals based on percentages given using income and this.percentageGoal
  goalGenerater = () => {
    //   for (let expense of this.percentageExpenses) {
    //       console.log(this.percentageExpenses)
    //       console.log(expense)
    //   }

    console.log(typeof(this.percentageExpenses))
  }


// function that will populate expenses
// function that will take expenses and return this.actualExpensePercentage
// function that will show how far under or over budget you are and whether you should reduce some expense or increase another to reach that 0 goal


}

let c = new User(442.70)
c.goalGenerater()