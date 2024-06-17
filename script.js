let topic1 = document.querySelector("#topic1");
let topic2 = document.querySelector("#topic2");
let topics = document.querySelector(".topics");
let choose = document.querySelector(".choose");
let t1_category = document.querySelector(".t1_category");
let t2_category = document.querySelector(".t2_category");
let body = document.querySelector("body");
let options1 = [];
let check = 0;
let i=0;
let j=0;
let timeLeft;
let E_t1 = document.querySelector("#E_t1");
let M_t1 = document.querySelector("#M_t1");
let H_t1 = document.querySelector("#H_t1");
let E_t2 = document.querySelector("#E_t2");
let M_t2 = document.querySelector("#M_t2");
let H_t2 = document.querySelector("#H_t2");

let easyEnglish = [["Q1.)What is the capital of France?","1.) London","2.) Paris","3.) Berlin","4.) Rome",2],["Q2.)Which of the following is a primary color?","1.)Green","2.)Orange","3.)Blue","4.)Purple",3],["Q3.)How many sides does a triangle have?","1.) 3","2.) 4","3.) 5","4.) 6",1],["Q4.)What is the opposite of hot?","1.)Cold","2.)Warm","3.)Cool","4.)Scorching",1],["Q5.)What is the longest river in the world?","1.)Nile","2.)Amazon","3.)Mississippi","4.)Yangtze",1]];

let mediumEnglish = [["Q1.) What is the correct form of the verb in the following sentence? She ________ to the store yesterday.","1.) go","2.) went","3.) goes","4.) going",2],["Q2.) What type of figurative language is used in the phrase:- time is a thief?","1.) Metaphor","2.) Simile","3.) Personification","4.) Hyperbole",1],["Q3.)  Which of the following is a coordinating conjunction?","1.) and","2.) but","3.) because","4.) although",1],["Q4.) Which sentence contains an example of the past perfect tense?","1.) She will finish her work by noon","2.) They have been waiting for over an hour.","3.) He had already eaten dinner when his friends arrived.","4.) I am going to the movie theater tonight",3],["Q5.) Identify the correct form of the possessive pronoun in the sentence:- That book belongs to ______.","1.) me","2.) I","3.) my","4.) mine",4]];

let hardEnglish = [["Q1.)Which of the following is an example of synecdoche?","1.) The pen is mightier than the sword.","2.) All hands on deck.","3.) The White House issued a statement today.","4.) The wheels of justice turn slowly.",2],["Q2.) In Shakespeare's play 'Hamlet,' 'what is the significance of the line' To be, or not to be: that is the question?","1.) Hamlet is contemplating suicide.","2.) Hamlet is pondering the meaning of existence.","3.) Hamlet is considering his options for revenge.","4.) Hamlet is reflecting on his father's death.",1],["Q3.) What literary device is most prominent in the following excerpt: 'The darkness swallowed everything, like a hungry beast lurking in the shadows'?","1.) Simile","2.) Metaphor","3.) Personification","4.) Hyperbole",2],["Q4.) Which of the following best describes the tone of T.S. Eliot's poem 'The Waste Land'?","1.) Optimistic","2.) Melancholic","3.) Joyful","4.) Satirical",2],["Q5.) In which of the following works would you find the character Holden Caulfield?","1.) 'To Kill a Mockingbird' by Harper Lee","2.)  'The Catcher in the Rye' by J.D. Salinger","3.) '1984' by George Orwell","4.) 'The Great Gatsby' by F. Scott Fitzgerald",2]];

let easyMaths = [["Q1.) What is the value of 3 X 5 + 10?","1.) 15","2.) 25","3.) 35","4.) 20",2],["Q2.) If x = 7 and y = 3, what is the value of x^2 - y^2?","1.) 16","2.) 28","3.) 40","4.) 44",1],["Q3.) If a = 5 and b = 3, what is the value of 2a + 3b?","1.) 19","2.) 21","3.) 23","4.) 25",2],["Q4.) What is the product of 9 x 8 / 4?","1.) 16","2.) 18","3.) 20","4.) 22",2],["Q5.) What is the next number in the sequence: 2, 5, 8, 11, ... ?","1.) 12","2.) 13","3.) 14","4.) 15",2]];

let mediumMaths = [["Q1.) What is the solution to the equation 2x + 5 = 17?","1.) x=6","2.) x=7","3.) x=8","4.) x=9",1],["Q2.) If a rectangle has a length of 8 units and a width of 5 units, what is its perimeter?","1.) 13 units","2.) 16 units","3.) 26 units","4.) 36 units",3],["Q3.) What is the area of a circle with a radius of 4 units? (Use π = 3.14)","1.) 12.56 square units","2.) 16 square units","3.) 25.12 square units","4.) 50.24 square units",4],["Q4.) If f(x)=2x^2−3x+1, what is f(4)?","1.) 21","2.) 29","3.) 33","4.) 37",1],["Q5.) A car travels 120 miles in 3 hours. What is its average speed in miles per hour (mph)?","1.) 30 mph","2.) 40 mph","3.) 45 mph","4.) 50 mph",2]];

let hardMaths = [["Q1.) What is the limit as x approaches infinity of (2x^3 - 5x^2 + 3) / (4x^3 + x + 1)?","1.) 1/2","2.) 2","3.) -5/4","4.) 1",1],["Q2.) The probability of event A is 0.6 and the probability of event B is 0.7. What is the maximum possible value for the probability of the intersection of events A and B?","1.) 0.3","2.) 0.42","3.) 0.6","4.) 0.7",1],["Q3.) What is the value of the integral ∫(x^2 + 2x + 3) dx from x = 0 to x = 2?","1.) 12","2.) 9","3.) 8","4.) 6",3],["Q4.) If f(x) = 2x^3 - 5x^2 + 3x - 2 and g(x) = x^2 - 4x + 7, what is f(g(3))?","1.) -245","2.) 27","3.) 245","4.) 0",3],["Q5.) In triangle ABC, if sin(A) = 4/5 and cos(B) = 3/5, what is the value of cos(C)?","1.) 0","2.) 1/3","3.) 4/5","4.) -4/5",4]];

t1_category.classList.add('hide2');
t2_category.classList.add('hide3');

topic1.addEventListener("click",() => {
    choose.classList.add('hide');
    topics.classList.add('hide1');
    t1_category.classList.remove('hide2');    
});

topic2.addEventListener("click",() => {
    choose.classList.add('hide');
    topics.classList.add('hide1');
    t2_category.classList.remove('hide3');    
});

E_t1.addEventListener("click",()=>{
    body.style.height = "2150px";
    t1_category.classList.add('hide2');
    t2_category.classList.add('hide3');
    check = 1;
    level1Questions(easyEnglish[i][0],easyEnglish[i][1],easyEnglish[i][2],easyEnglish[i][3],easyEnglish[i][4],easyEnglish[i][5]);
    i++;
});

M_t1.addEventListener("click",()=>{
    body.style.height = "2150px";
    t1_category.classList.add('hide2');
    t2_category.classList.add('hide3');
    check = 2;
    level1Questions(mediumEnglish[i][0],mediumEnglish[i][1],mediumEnglish[i][2],mediumEnglish[i][3],mediumEnglish[i][4],mediumEnglish[i][5]);
    i++;
});

H_t1.addEventListener("click",()=>{
    body.style.height = "2150px";
    t1_category.classList.add('hide2');
    t2_category.classList.add('hide3');
    check = 3;
    level1Questions(hardEnglish[i][0],hardEnglish[i][1],hardEnglish[i][2],hardEnglish[i][3],hardEnglish[i][4],hardEnglish[i][5]);
    i++;
});

E_t2.addEventListener("click",()=>{
    body.style.height = "2150px";
    t1_category.classList.add('hide2');
    t2_category.classList.add('hide3');
    check = 4;
    level1Questions(easyMaths[i][0],easyMaths[i][1],easyMaths[i][2],easyMaths[i][3],easyMaths[i][4],easyMaths[i][5]);
    i++;
});

M_t2.addEventListener("click",()=>{
    body.style.height = "2150px";
    t1_category.classList.add('hide2');
    t2_category.classList.add('hide3');
    check = 5;
    level1Questions(mediumMaths[i][0],mediumMaths[i][1],mediumMaths[i][2],mediumMaths[i][3],mediumMaths[i][4],mediumMaths[i][5]);
    i++;
});

H_t2.addEventListener("click",()=>{
    body.style.height = "2150px";
    t1_category.classList.add('hide2');
    t2_category.classList.add('hide3');
    check = 6;
    level1Questions(hardMaths[i][0],hardMaths[i][1],hardMaths[i][2],hardMaths[i][3],hardMaths[i][4],hardMaths[i][5]);
    i++;
});

function level1Questions(ques,b1,b2,b3,b4,ans){
    let str = document.createElement("p");
    str.innerText = ques;
    str.style.marginTop = "20px";
    str.style.fontSize="30px";
    str.style.paddingLeft = "20px";

    body.appendChild(str);
    let div1 = document.createElement("div");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button"); 
    let btn3 = document.createElement("button");
    let btn4 = document.createElement("button");

    div1.classList.add("buttons_box");

    btn1.classList.add("buttons");
    btn1.addEventListener("mouseover",()=>{
        btn1.style.borderWidth = "5px";
    });
    btn1.addEventListener("mouseout",()=>{
        btn1.style.borderWidth = "";
    });

    btn2.classList.add("buttons");
    btn2.addEventListener("mouseover",()=>{
        btn2.style.borderWidth = "5px";
    });
    btn2.addEventListener("mouseout",()=>{
        btn2.style.borderWidth = "";
    });

    btn3.classList.add("buttons");
    btn3.addEventListener("mouseover",()=>{
        btn3.style.borderWidth = "5px";
    });
    btn3.addEventListener("mouseout",()=>{
        btn3.style.borderWidth = "";
    });

    btn4.classList.add("buttons");
    btn4.addEventListener("mouseover",()=>{
        btn4.style.borderWidth = "5px";
    });
    btn4.addEventListener("mouseout",()=>{
        btn4.style.borderWidth = "";
    });

    btn1.innerText = b1;
    btn1.setAttribute("id","1");
    btn2.innerText = b2;
    btn2.setAttribute("id","2");
    btn3.innerText = b3;
    btn3.setAttribute("id","3");
    btn4.innerText = b4;
    btn4.setAttribute("id","4");

    options1.push(btn1,btn2,btn3,btn4);

    str.after(div1);
    div1.appendChild(btn1);
    div1.appendChild(btn2);
    div1.appendChild(btn3);
    div1.appendChild(btn4);

    let score = document.createElement("p");
    score.innerText = `Score: ${j}`;
    score.style.textAlign="end";
    score.style.marginRight = "10px";
    score.style.fontSize = "20px";
    str.before(score);

    let container = document.createElement("div");
    container.style.textAlign = "end";
    score.after(container);

    timeLeft = 30;
    let timer = document.createElement("p");
    timer.innerText = `Time Left: ${timeLeft}`;
    timer.style.display = "inline-block";
    timer.style.fontSize = "20px";
    timer.style.marginRight = "10px";
    container.appendChild(timer);

    var decrTimer = setInterval(()=>{
        timeLeft--;
        timer.innerText = `Time Left: ${timeLeft}`;
        if(timeLeft <= 0){
            clearInterval(decrTimer);
            timer.innerText = "Time's Up!";
            for(let i of options1){
                i.disabled=true;
            }
            let myoutput = document.createElement("p");
            myoutput.innerText = "No attempt.";
            myoutput.style.fontSize = "40px";
            myoutput.style.marginTop = "20px";
            div1.after(myoutput);

            if(i<5){
                let nextQues = nextButton();
                myoutput.after(nextQues);
                nextQuestion(nextQues);
            }
            else{
                let lastoutput = quizFinished();
                myoutput.after(lastoutput);
            }
        }
    },1000);       // 1000 milliseconds = 1 second

    function pauseTimer(){
        clearInterval(decrTimer);
        console.log("Time Paused!");
    }

    function nextButton(){
        let nextQues = document.createElement("button");
        nextQues.innerText = "Next Question";
        nextQues.style.marginTop = "40px";
        nextQues.style.fontSize = "30px";
        nextQues.style.padding = "5px";
        nextQues.style.borderRadius = "1rem";
        nextQues.style.marginLeft = "500px";
        return nextQues;
    }

    function quizFinished(){
        let lastoutput = document.createElement("p");
        lastoutput.innerText = "Quiz has been finished.";
        lastoutput.style.fontSize = "40px";
        lastoutput.style.marginTop = "20px";
        return lastoutput;
    }

    function correctans(){
        let myoutput = document.createElement("p");
        myoutput.innerText = "You have guessed the correct answer.";
        score.innerText = `Score: ${++j}`;
        myoutput.style.fontSize = "40px";
        myoutput.style.marginTop = "20px";
        return myoutput;
    }

    function incorrectans(){
        let myoutput = document.createElement("p");
        myoutput.innerText = "Wrong Answer!";
        myoutput.style.fontSize = "40px";
        myoutput.style.marginTop = "20px";
        return myoutput;
    }

    function showAnswer(){
        if(btn1.getAttribute("id")==ans){
            btn1.style.backgroundColor = "green";
            btn1.style.color = "black";
        } 
        else if(btn2.getAttribute("id")==ans){
            btn2.style.backgroundColor = "green";
            btn2.style.color = "black";
        }
        else if(btn3.getAttribute("id")==ans){
            btn3.style.backgroundColor = "green";
            btn3.style.color = "black";
        }
        else{
            btn4.style.backgroundColor = "green";
            btn4.style.color = "black";
        }
    }

    btn1.addEventListener("click",()=>{
        pauseTimer();
        if(btn1.getAttribute("id") == ans){
            let myoutput = correctans();
            div1.after(myoutput);

            btn1.style.backgroundColor = "green";
            btn1.style.color = "black";

            for(let i of options1){
                i.disabled=true;
            }
            options1=[];

            if(i<5){
                let nextQues = nextButton();
                myoutput.after(nextQues);
                nextQuestion(nextQues);
            }
            else{
                let lastoutput = quizFinished();
                myoutput.after(lastoutput);
            }
        }
        else{
            let myoutput = incorrectans();
            div1.after(myoutput);

            btn1.style.backgroundColor = "red";
            btn1.style.color = "black"; 

            showAnswer();

            for(let i of options1){
                i.disabled=true;
            }
            options1=[];

            if(i<5){
                let nextQues = nextButton();
                myoutput.after(nextQues);
                nextQuestion(nextQues);
            }
            else{
                let lastoutput = quizFinished();
                myoutput.after(lastoutput);
            }
        }  
    });

    btn2.addEventListener("click",()=>{
        pauseTimer();
        if(btn2.getAttribute("id") == ans){
            let myoutput = correctans();
            div1.after(myoutput);

            btn2.style.backgroundColor = "green";
            btn2.style.color = "black";

            for(let i of options1){
                i.disabled=true;
            }
            options1=[];

            if(i<5){
                let nextQues = nextButton();
                myoutput.after(nextQues);
                nextQuestion(nextQues);
            }
            else{
                let lastoutput = quizFinished();
                myoutput.after(lastoutput);
            }
        }
        else{
            let myoutput = incorrectans();
            div1.after(myoutput);

            btn2.style.backgroundColor = "red";
            btn2.style.color = "black"; 

            showAnswer();

            for(let i of options1){
                i.disabled=true;
            }
            options1=[];

            if(i<5){
                let nextQues = nextButton();
                myoutput.after(nextQues);
                nextQuestion(nextQues);
            }
            else{
                let lastoutput = quizFinished();
                myoutput.after(lastoutput);
            }
        }
    });
    
    btn3.addEventListener("click",()=>{
        pauseTimer();
        if(btn3.getAttribute("id") == ans){
            let myoutput = correctans();
            div1.after(myoutput);

            btn3.style.backgroundColor = "green";
            btn3.style.color = "black";

            for(let i of options1){
                i.disabled=true;
            }
            options1=[];

            if(i<5){
                let nextQues = nextButton();
                myoutput.after(nextQues);
                nextQuestion(nextQues);
            }
            else{
                let lastoutput = quizFinished();
                myoutput.after(lastoutput);
            }
        }
        else{
            let myoutput = incorrectans();
            div1.after(myoutput);

            btn3.style.backgroundColor = "red";
            btn3.style.color = "black"; 

            showAnswer();
            
            for(let i of options1){
                i.disabled=true;
            }
            options1=[];

            if(i<5){
                let nextQues = nextButton();
                myoutput.after(nextQues);
                nextQuestion(nextQues);
            }
            else{
                let lastoutput = quizFinished();
                myoutput.after(lastoutput);
            }
        }
    });

    btn4.addEventListener("click",()=>{
        pauseTimer();
        if(btn4.getAttribute("id") == ans){
            let myoutput = correctans();
            div1.after(myoutput);

            btn4.style.backgroundColor = "green";
            btn4.style.color = "black";

            for(let i of options1){
                i.disabled=true;
            }
            options1=[];

            if(i<5){
                let nextQues = nextButton();
                myoutput.after(nextQues);
                nextQuestion(nextQues);
            }
            else{
                let lastoutput = quizFinished();
                myoutput.after(lastoutput);
            }
        }
        else{
            let myoutput = incorrectans();
            div1.after(myoutput);

            btn4.style.backgroundColor = "red";
            btn4.style.color = "black"; 

            showAnswer();
            
            for(let i of options1){
                i.disabled=true;
            }
            options1=[];

            if(i<5){
                let nextQues = nextButton();
                myoutput.after(nextQues);
                nextQuestion(nextQues);
            }
            else{
                let lastoutput = quizFinished();
                myoutput.after(lastoutput);
            }
        }
    });
}

let nextQuestion = (nextQues) => {
    nextQues.addEventListener("click",()=>{
        console.log(i);
        if(check === 1 ){
            level1Questions(easyEnglish[i][0],easyEnglish[i][1],easyEnglish[i][2],easyEnglish[i][3],easyEnglish[i][4],easyEnglish[i][5]);
            i++;
            nextQues.disabled=true;
        }
        else if(check === 2){
            level1Questions(mediumEnglish[i][0],mediumEnglish[i][1],mediumEnglish[i][2],mediumEnglish[i][3],mediumEnglish[i][4],mediumEnglish[i][5]);
            i++;
            nextQues.disabled=true;
        }
        else if(check === 3){
            level1Questions(hardEnglish[i][0],hardEnglish[i][1],hardEnglish[i][2],hardEnglish[i][3],hardEnglish[i][4],hardEnglish[i][5]);
            i++;
            nextQues.disabled=true;
        }
        else if(check === 4){
            level1Questions(easyMaths[i][0],easyMaths[i][1],easyMaths[i][2],easyMaths[i][3],easyMaths[i][4],easyMaths[i][5]);
            i++;
            nextQues.disabled=true;
        }
        else if(check === 5){
            level1Questions(mediumMaths[i][0],mediumMaths[i][1],mediumMaths[i][2],mediumMaths[i][3],mediumMaths[i][4],mediumMaths[i][5]);
            i++;
            nextQues.disabled=true;
        }
        else{
            level1Questions(hardMaths[i][0],hardMaths[i][1],hardMaths[i][2],hardMaths[i][3],hardMaths[i][4],hardMaths[i][5]);
            i++;
            nextQues.disabled=true;
        }
        console.log(i);
    });
}