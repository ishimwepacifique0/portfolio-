let screenResul = document.getElementById("result-screen");
let resultSet = document.getElementById("result-set");
let form  = document.getElementById("form");
 

    function handleOpen(){
        screenResul.value += "(";
    }
    
    function handleClose(){
        screenResul.value += ")";
    }
    function handleClear(){
        screenResul.value = "";
        if (screenResul.value == ''){
            resultSet.innerHTML = "";
        }
    }
    function handleMod(){
        
    }
    function handleLog(){
        screenResul.value +=  Math.log(screenResul.value);
    }
    function handleSeven(){
        screenResul.value += "7";
    }
    function handleEigth(){
        screenResul.value += "8";
    }
    function handleNine(){
        screenResul.value += "9";
    }
    function handleDivision(){
        screenResul.value += "/";
    }
    function handleSqrt(){
        screenResul.value += Math.sqrt(screenResul.value);
    }
    function handleFour(){
        screenResul.value += "4";
    }
    function handleFive(){
        screenResul.value += "5";
    }
    function handleSix(){
        screenResul.value += "6";
    }
    function handleMultiple(){
        screenResul.value += "*";
    }
    function handlePower(){
     screenResul.value += Math.pow(screenResul.value,screenResul.value);
    }
    function handleOne(){
        screenResul.value += "1";
    }
    function handleTwo(){
        screenResul.value += "2";
    }
    function handleThree(){
        screenResul.value += "3";
    }
    function handleSubtraction(){
        screenResul.value += "-";
    }
    function handleEqual(){
        let resul = eval(screenResul.value);
        resultSet.innerHTML = `${screenResul.value} = ${resul}`;
        console.log(resul);
    }
    function handleZero(){
        screenResul.value += "0";
    }
    function handleDot(){
        screenResul.value += ".";
    }
    function handleModular(){
        screenResul.value += "%";
    }
    function handleModular(){
        screenResul.value += "%";
    }
    function handleModular(){
        screenResul.value += "%";
    }
    function handleAdd(){
        screenResul.value += "+";
    }

// const div = document.createElement("span")
// div.innerHTML = handleEqual();
// resultSet.appendChild(div);
