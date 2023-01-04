import React, { useState } from 'react';

    export default function ScoreBoard(props) {

    var wordEntered = props.LwordEntered.toLowerCase();
    
    //var CscoredWords = props.scoredWords.slice(0)
    //make somehthing which compares to a dictionary

    const[score,setScore] = useState(0)

    //var total = this.state.total.valueOf();

    switch (wordEntered.length){
        case 1:
            setScore(0); 
            break;

        case 2:
            setScore(0); 
            break;

        case 3:
            setScore(score + 1);
            break;

        case 4:
            setScore(score + 1); 
            break;

        case 5:
            setScore(score + 2);
            break;

        case 6:
            setScore(score + 3); 
            break;

        case 7:
            setScore(score + 5);
            break;

        case 8:
            setScore(score + 7); 
            break;

}
    return(
        <div>
            <p>hi</p>
        </div>
    );
}

