function mode(){
    var currentBG = document.body.style.backgroundColor;

    if (currentBG == 'white'){
        document.body.style.backgroundColor = 'black';
        document.getElementById('form').style.boxShadow = '0px 0px 50px 3px white'
    }else{
        document.body.style.backgroundColor = 'white';
        document.getElementById('form').style.boxShadow = '0px 0px 50px 3px black'
    }


}