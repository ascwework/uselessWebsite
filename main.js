const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here


const database = [];

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    const messageObject = {
        USERNAME: username, 
        MESSAGE: message
    }
    database.push(messageObject)


    const messageBoard = document.getElementsByClassName("allMessages")[0]


    const pElement = document.createElement("p")
    pElement.innerHTML = username +":"+ message
    
    messageBoard.appendChild(pElement);
    
    //Update database here
}

// Set database "child_added" event listener here



// function addMessageToBoard(){
//     // const row = rowData.val();
//     // console.log (row);
//     const pElement = document.createElement("p")
//     pElement.innerHTML = messageObject;
    
//     messageBoard.appendChild(pElement);
// }



year = 2018
month =   Math.floor( Math.random()*12 )
day =   Math.floor( Math.random()*30 )
console.log(day);
console.log(month);

let randomDate = year +"-" + month +"-" + day

var urls = "https://api.nasa.gov/planetary/apod?date="+randomDate +"&api_key=DvcgWYvSoEot9hMh5xkN6StF6dwlbpBAyQ86HjbZ";
console.log (url);

var url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";

$.ajax({
  url: url,
  success: function(result){
 
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.url);
  
}
});


