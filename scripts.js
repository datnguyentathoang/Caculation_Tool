let MyCaculation = localStorage.getItem('MyCaculation') || "";
displayCalculation(MyCaculation);
function calculation(value){
    MyCaculation += value;
    displayCalculation();
    localStorage.setItem('MyCaculation',MyCaculation);
}
function displayCalculation(MyCaculation){
    document.querySelector('.result').innerHTML = MyCaculation;
}