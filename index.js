const people=['Guadalupe','Ollie', 'Aki']
function writeCards(people, s='suprise'){
    let thankYouCards= []
    for(let a=0;a<people.length;a++){
        thankYouCards.push(`Thank you, ${people[a]}, for the wonderful ${s} gift!`)
    }
    return thankYouCards
}

function countDown(){
    let timer=10
    while (timer>-1){
        console.log(timer)
        timer--
    }
}
