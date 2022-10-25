

const buyClay = () => {
return pottery = {}
}

//pottery = {}

const makePottery = (pottery) => {
    pottery.shape = "Bowl";
    return pottery
}

//pottery = {
// shape:"Bowl"
// }

const bisqueFire = (pottery) => {
    pottery.readyForGlazing = true;
    return pottery;
}

//pottery = {
// shape:"Bowl",
// readyForGlazing: true
// }

const glazePottery = (pottery) => {
    if(pottery.readyForGlazing = false ){
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
    else {
        pottery.glazing = "Midnight Blue"
    }
    return pottery; 
}

//pottery = {
// shape:"Bowl",
// readyForGlazing: true,
// glazing: "Midnight Blue"
// }


const makeBowl = () => {
const boughtClay = buyClay()
const basicBowl = makePottery(boughtClay)
const fired = bisqueFire(basicBowl)
const glaze = glazePottery(fired)
console.log(glaze)
}

makeBowl()


// const firedPottery1400 = finalFiring(glazedPottery, 1400)
// console.log(firedPottery1400)

// // Also test if the temperature is correct, check that the pottery is not cracked.

// const firedPottery1200 = finalFiring(glazedPottery, 1200)
// console.log(firedPottery1200)

