let User = prompt("Enter S, W or G");
let CPU1 = Math.floor(Math.random() * 3);
let CPU = ["S", "W", "G"][CPU1]

const match = (CPU, User) => {
    if(CPU === User) {
        return "Nobody, The match is tied"
    }
    else if(CPU === "S" & User === "W") {
        return "CPU"
    }
    else if(CPU === "S" & User === "G") {
        return "CPU"
    }
    else if(CPU === "G" & User === "W") {
        return "User"
    }
    else if(CPU === "G" & User === "S") {
        return "CPU"
    }
    else if(CPU === "W" & User === "S") {
        return "User"
    }
    else if(CPU === "W" & User === "G") {
        return "CPU"
    }
}

let result= match(CPU, User)
console.log(`CPU: ${CPU} and User: ${User} \nThe winner is: ${result}`) // when we use console.log, we can use \n
document.write(`CPU: ${CPU} and User: ${User} <br>The winner is ${result}`) // when we use document.write, we can use <br>