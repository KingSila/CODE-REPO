const text = "fun&!! time";
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

changedtext = text.replace(regex, '');
var arr = changedtext.split(" ");
var result ="";

var startWord = arr[0];
var secondWord = arr[1];
var i = 1;
var result ="";
var  firstWord ='';


        if( startWord.length == secondWord.length)
        {
            
            result = startWord;
            console.log("1st Block of Code executed");
        }
        else if( startWord.length > secondWord.length)
        {
            
            result = startWord
            console.log("2nd Block of Code executed");
        }
        else if( startWord.length < secondWord.length)
        {
            
            result = secondWord;
            console.log("3rd Block of Code executed");
        }
        else if(arr.length > 2){
            for(var j=2;j < arr.length; j++){
                    
                    firstWord = arr[i];
                    secondWord = arr[j]; 
                   
                    if(secondWord.length < startWord.length )
                    {
                    result = startWord;
                    console.log("5 Block of Code executed");
                        //console.log("Firstword is " + firstWord);
                    //console.log("StartWord is " +startWord);
                    }

                    else if(startWord.length == firstWord.length )
                    {
                    result = startWord;
                    console.log("6 Block of Code executed");
                    //console.log("Firstword is " + firstWord);
                    //console.log("SecondWord is " +secondWord);
                    }
                    else if(secondWord.length > firstWord.length)
                    {
                    result = secondWord;
                    console.log("7 Block of Code executed");
                    //console.log("Firstword is " + firstWord);
                    //console.log("SecondWord is " +secondWord);
                    }
                    else if(startWord.length > secondWord.length){
                        result = startWord;
                        console.log("8 Block of Code executed");
                    }
                    

                }
        
    
    

}


//console.log("Array Length " + arr.length);
console.log("Firstword is " + firstWord);
console.log("SecondWord is " +secondWord);
console.log("StartWord is " +startWord);
//console.log(secondWord);
console.log(result);
console.log(arr);