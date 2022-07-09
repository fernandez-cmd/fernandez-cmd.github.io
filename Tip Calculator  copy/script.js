// below sets the variable for the button in the UI 

const great = document.getElementById("Great") ;
const good = document.getElementById("Good");
const okay = document.getElementById("Okay");
const ehh = document.getElementById("Ehh") ;
const poor = document.getElementById("Poor") ;

const price = document.getElementById("display");



great.addEventListener('click' , e =>{
    console.log(great.value)
    total = great.value * price.value 
    console.log(total)
    alert(`Total tip is $${total}`);
    return price.innerHTML = ''

})
good.addEventListener('click' , e =>{
    console.log(good.value)
    total = good.value * price.value 
    console.log(total)
    alert(`Total tip is $${total}`);
    return price.innerHTML = ''

})
okay.addEventListener('click' , e =>{
    console.log(okay.value)
    total = okay.value * price.value 
    console.log(total)
    alert(`Total tip is $${total}`);
    return price.innerHTML = ''

})
ehh.addEventListener('click' , e =>{
    console.log(ehh.value)
    total = ehh.value * price.value 
    console.log(total)
    alert(`Total tip is $${total}`);
    return price.innerHTML = ''

})
poor.addEventListener('click' , e =>{
    console.log(poor.value)
    total = poor.value * price.value 
    console.log(total)
    alert(`Total tip is $${total}`);
    return price.innerHTML = ''

})



// tip formulation 





// below will set the functionality to the button in the UI









