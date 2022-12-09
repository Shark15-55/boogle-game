import React from "react"; 


class ScoreBoard extends React.Component{
   return{total: 0}

    var wordEntered = this.props.wordEntered.toLowerCase();
    var score = 0; 
    var total = this.state.total.valueOf();

    switch (wordEntered.length){
        case 1:
            score = 0;
            break;
        case 2:
            score = 0; 
            break;
        case 3:
            score = 1;
            break;
        case 4:
            score = 1; 
            break;
        case 5:
            score = 2;
            break;
        case 6:
            score = 3; 
            break;
        case 7:
            score = 5;
            break;
        case 8:
            score = 7; 
            break;
}
        
}

