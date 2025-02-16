let MyCaculation = localStorage.getItem('MyCaculation') || "";
displayCalculation(MyCaculation);
function calculation(value){
    MyCaculation += value;
    displayCalculation();
    localStorage.setItem('MyCaculation',MyCaculation);
}
function displayCalculation(){
    document.querySelector('.result').innerHTML = MyCaculation||"";
}