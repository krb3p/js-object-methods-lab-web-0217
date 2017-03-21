class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }

  veto() {
    return "NO!";
  }

  passBill() {
    return "You can do that!";
  }

  doCharity() {
    return "I like to help people.";
  }

  conductPressInterview() {
    return "I am proud to be an American."
  }

  sayHi() {
    return "Hi, my name is " + this.name + ". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + "."
  }
}

var washington = new President ("George Washington", "Virginia", "Federalist",
5)
var lincoln = new President ("Abraham Lincoln", "Illinois", "Republican",
5)
var nixon = new President ("Richard Nixon", "New Jersey", "Republican",
3)
var carter = new President ("Jimmy Carter", "Georgia", "Democrat",
4)



console.log (washington.veto())
console.log (washington.name)
