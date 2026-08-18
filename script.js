function agecheck(number) {
    if (number >= 18) {
        console.log("you are an Adult");
        
    } else {
        console.log("you are a minor");
        
    }
}

agecheck(19)

function numbercheck(nc) {
    if (nc > 0) {
        console.log("positive");
    }
    else if (nc < 0) {
        console.log("negative");
    }
    else{
        console.log("Zero");
        
    }
}

numbercheck(0)


let username="chisom"
let pasword="ch123"
function login(us , pa) {
    if (us === username || pasword === pa) {
        console.log("login successful");
        
    } else {
        console.log("invalid credentials");
        
    }
}

login("chisom ", "ch123")


const checknumber = (num) => {
    if (num % 2 === 0) {
        console.log("even number");
    } else {
        console.log("odd number");
    }
}

checknumber(1)


let gna=80
let gnb=79
let gnc=69
let gnd=59
let gnf=49

const gradecheck=(grade)=>{
    if (grade>= gna || grade>= 100) {
        return("A");
        
    }else if (grade<=gnb && grade>= 70 ) {
        return("B")
    } else if(grade<=gnc && grade>= 60){
        return("C")
    }else if(grade<=gnd &&  grade>= 50){
        return("D")
    }else if (grade<=gnf && grade>=0) {
        return("F")
    }
}

console.log(gradecheck(100));


