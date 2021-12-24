// YNAB Type App

class User {
  constructor(income) {
    this.expenses = [
{      loansOrDebt: {
        mortgageOrRent: 0,
        creditCards: 0,
        homeEquityLoan: 0,
        carLoan: 0,
        studentLoan: 0,
      }},
      {utilities: {
        gasOrOil: 0,
        electricity: 0,
        telephone: 0,
        waterAndSewer: 0,
      }},
      {insurancePremiums: {
        life: 0,
        auto: 0,
        home: 0,
        health: 0,
        longTermCare: 0,
      }},
      {savingsAndInvestments: {
        emergencyFund: 0,
        savings: 0,
        investments: 0,
        retirement: 0,
      }},
      {miscellaneous: {
        groceries: 0,
        childCare: 0,
        vacation: 0,
        entertainment: 0,
        clothing: 0,
        gasAutomobile: 0,
        commuting: 0,
        charity: 0,
        outOfPocketMedical: 0,
      }},
    ];
    this.income = {
      paycheck: income,
      other: 0,
    };
    this.percentageGoal = {
      transportation: 0,
      savings: 0,
      food: 0,
      insurance: 0,
      housing: 0,
      clothing: 0,
      personal: 0,
      entertainment: 0,
      utilities: 0,
      total: {
        loansOrDebt: 0,
        utilities: 15,
        insurance: 15,
        savings: 0,
        miscellaneous: 0,
      }
    };
    this.totalExpenses = {
      loansOrDebt: 0,
      utilities: 0,
      insurance: 0,
      savingsAndInvestments: 0,
      miscellaneous: 0,
    }
  }

// function that will populate expenses
    generateExpenses() {
      this.expenses.forEach((expense) => {
        for (const [category, subCat] of Object.entries(expense)) {
          for (const [subCatExpense, value] of Object.entries(subCat)) {
            expense[category][subCatExpense] = 1
            // console.log()
            // good point to stop here I have available every expense
            // changes values to 1
            
          }
        }
      })

      console.log(this.expenses)
    }
// function that will take expenses and return this.actualExpensePercentage
// function that will show how far under or over budget you are and whether you should reduce some expense or increase another to reach that 0 goal
  }

let c = new User(885.4)
c.generateExpenses()

// 386 CAR Loan
// 45 CFCU Card
// 25 CapitalOne CC
// 75 Cell
// 50 Gas
// 194 Internet + Cable
// 25 Paypal

// 184 55 DUE 28TH ASK TO EXTEND THE GRACE DAYS SUE TACTET DEBBIE