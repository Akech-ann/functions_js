
class Car{
    constructor(make,model,year,isAvailable){
        this.make=make
        this.model=model
        this.year=year
        this.isAvailable=isAvailable
    }
    toggleAvailability(){
        this.isAvailable=!this.isAvailable
    }
}
let car1= new Car("BMW","legacy",2023,true)
console.log(car1);
car1.toggleAvailability()
console.log(car1);

class Rental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car=car;
        this.renterName=renterName;
        this.rentalStartDate=rentalStartDate;
        this.rentalEndDate=rentalEndDate;
    }
    calculateRentalDuration(){
        let day=24*60*60*1000;
        let sDate=new Date(this.rentalStartDate);
        let eDate= new Date(this.rentalEndDate);
        let x=Math.round(Math.abs((sDate-eDate)/day));
        return x;
    }
}
let car= new Car("Hanry","convo","2023")
let rental= new Rental(car,"Montyann","2023-03-01","2023-03-05")
console.log(rental.calculateRentalDuration());

class MotorCar{
    constructor(make,model,year,isAvailable){
        this.make=make
        this.model=model
        this.year=year
        this.isAvailable=isAvailable
    }
}
class MotorRental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car=car;
        this.renterName=renterName;
        this.rentalStartDate=rentalStartDate;
        this.rentalEndDate=rentalEndDate;
    }
    calculateRentalDuration(){
        let day=24*60*60*1000;
        let sDate=new Date(this.rentalStartDate);
        let eDate= new Date(this.rentalEndDate);
        let x=Math.round(Math.abs((sDate-eDate)/day));
        return x;
    }
}
let motorcar= new MotorCar("BtW","DOPE","2023")
let motorrental= new MotorRental(car,"MONTY","2023-04-01","2023-04-05")
let c=motorrental.calculateRentalDuration()
console.log(c);


class Question {
    constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
  
    checkAnswer(userAnswer) {
      return userAnswer === this.correctAnswer;
    }
  }
  
  class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    addQuestion(question) {
      this.questions.push(question);
    }
  
    nextQuestion() {
      this.currentQuestionIndex++;
    }
  
    submitAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
      }
      this.nextQuestion();
    }
  }

const question1 = new Question('What is your favourite country?', ['Paris', 'Madrid', 'London'], 'Paris');
const question2 = new Question('What is the largest mammal in the world?', ['Elephant', 'Whale', 'Giraffe'], 'Whale');

const quiz = new Quiz();
quiz.addQuestion(question1);
quiz.addQuestion(question2);

quiz.submitAnswer('Paris');
quiz.submitAnswer('Elephant');


























