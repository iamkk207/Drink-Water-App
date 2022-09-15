const liters = document.getElementById("liters");
const remained = document.getElementById("remained");
const percentage = document.getElementById("percentage");
const smallCups = document.querySelectorAll(".cup-small");

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
});

function highlightCups(index) {

    if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--
    }


    smallCups.forEach((cup, idx) => {
        if (idx <= index) {
            cup.classList.add("full");
        } else {
            cup.classList.remove('full');
        }
    })

    updateBigCup();


}

function updateBigCup(){

    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    const height = fullCups / totalCups * 330;
    const calculatePercentage = (fullCups*100)/totalCups;
    const drinkLiters = 2-(250 * fullCups/1000);

    if(fullCups ===0){
        percentage.style.visibility='hidden';
        percentage.style.height = 0;
    }else{
        percentage.visibility ="visible";
        percentage.style.height = height+"px";
        percentage.innerHTML = calculatePercentage +" %";
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }else{
        remained.style.visibility ="visible";
        liters.innerHTML = drinkLiters +"L";
    }
}