class Question{
    constructor(){
        this.input1 =  createInput("Enter Your Name Here");
        this.input2 =  createInput("Enter Correct Option No.");
        this.title =  createElement('h2');
        this.question =  createElement('h2');
        this.option1 =  createElement('h2');
        this.option2 =  createElement('h2');
        this.option3 =  createElement('h2');
        this.option4 =  createElement('h2');
        this.button = createButton('Submit');
    }

    hide(){
       this.input1.hide();
       this.button.hide();
       this.input2.hide();
       this.title.hide();
    }

    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350,0);

        this.question.html("Question:- What starts and ends with the letter 'E' , but has only one letter?");
        this.question.position(150,80);
        this.option1.html("1: Everyone " );
        this.option1.position(150,115);
        this.option2.html("2: Envelope");
        this.option2.position(150,142);
        this.option3.html("3: Estimate");
        this.option3.position(150,169);
        this.option4.html("4: Example");
        this.option4.position(150,196);

        this.input1.position(150,280);
        this.input2.position(400,280);
        this.button.position(330,360);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })
    }
}