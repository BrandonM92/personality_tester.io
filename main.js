const firstPart = ["Brave" , "Smart", "Funny", "Special", "Unique", "Awesome", "Beautiful","Charming", "Creative", "Amazing"]
const secondPart = ["The Only way out is through", "Don't count the days, Make the days count.","Life isn't about finding yourself. Life is about creating yourself.", 
"Perpetual optimism is a force multiplier", "The only approval you need is your own", "If you fell down yesterday, stand up today.", "The only impossible journey is the one you never begin.",
"You miss 100% of the shots you don't take.", "Don't Watch the Clock; do what it does. Keep going.", "Fight for the things that you care about, but do it in a way that will lead others to join you."]

const randomFirstPart = (firstPart) => {
    const randomIndex = Math.floor(Math.random() * firstPart.length);
    return firstPart[randomIndex];
}

const randomSecondPart = (secondPart) => {
    const randomIndex = Math.floor(Math.random() * secondPart.length);
    return secondPart[randomIndex];
}

const thirdPart = () => {
    const specialNumber = Math.floor(Math.random() * 1000);
    return specialNumber;
}

const first = randomFirstPart(firstPart);
const second = randomSecondPart(secondPart);
const third = thirdPart();

const displayInspirationalMessage = (first,second,third) =>{
    return `You are ${first}.\nYour quote for the day is : "${second}".\nYour lucky number is: ${third}.`
}

const displayMessage = displayInspirationalMessage(first,second,third);

console.log(displayMessage)



