function postSession(){
    const postSessionApiUrl = "https://localhost:5001/api/sessions";

    const nameData = document.getElementById("nameInput").value;
    const categoryData = document.getElementById("categoryInput").value;
    
    console.log(nameData); 
    console.log(categoryData);

    fetch(postSessionApiUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            name : nameData,
            category : categoryData,
        
        })
    })
    .then((response)=>{
        console.log(response);
        //location.reload();  //hello use this to hide the card / set the timer / do whatever it is u need to do 
        hideCard(); 
    })
}

function hideCard(){
        var x = document.getElementById("container1");
        console.log(x); 
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "none";
        }

        var y = document.getElementById("container2");
        console.log(y); 
        if (y.style.display === "none") {
            y.style.display = "block";
          } else {
            y.style.display = "block";
        }

}

function reverseHideCard(){
    var x = document.getElementById("container1");
    console.log(x); 
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }

    var y = document.getElementById("container2");
    console.log(y); 
    if (y.style.display === "block") {
        y.style.display = "none";
      } else {
        y.style.display = "none";
    }

    location.reload(); 

}

let seconds = 0;
let minutes = 0;
let hours = 0; 

let displaySeconds = 0;
let displayMinutes = 0; 
let displayHours = 0;  

let interval = null; 
let status = "stopped"; 

function stopWatch(){
    seconds++; 

    if(seconds/ 60 === 1){
        seconds = 0; 
        minutes ++; 

        if (minutes / 60 === 1){
            minutes = 0; 
            hours++; 
        }
    }

    if(seconds <10){
        displaySeconds = "0" + seconds.toString(); 
    }
    else{
        displaySeconds = seconds; 
    }
    
    if(minutes <10){
        displayMinutes = "0" + minutes.toString(); 
    }
    else{
        displayMinutes = minutes; 
    }

    if(hours <10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours; 
    }

    document.getElementById("timer").innerHTML = displayHours + ":" + displayMinutes + "." + displaySeconds; 
}


function startStop(){
    if(status === "stopped"){
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Take a Break"; 
        status = "started";
    }
    else{
        window.clearInterval(interval); 
        document.getElementById("startStop").innerHTML = "Resume Studying";
        status = "stopped"; 
    }

}

function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("timer").innerHTML = "00:00:00"; 
    document.getElementById("startStop").innerHTML = "Start"; 
    getWhatever();  
    //reverseHideCard(); 
}


//updates the stopTime 
function putSession(id){
    const putSessionApiUrl = "https://localhost:5001/api/sessions/" + id;
    //var id = JSON[length-1];  
    console.log(id); 

    fetch(putSessionApiUrl, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            
            id: id

        })
    })
    .then((response)=>{
        console.log(response);
        //reverseHideCard(); 
        getTimeTotal(); 
        
    })
}


//Gets the ID from the last element in the json array 
function getWhatever(){
    const getWhateverApiUrl = "https://localhost:5001/api/sessions"; 

    fetch(getWhateverApiUrl).then(function(response){
        console.log(response); 
        return response.json(); 
    }).then(function(json){
      
        json.forEach((session)=>{
        
        var lastElement = json.length; 
        //console.log(lastElement) 
       
        putSession(lastElement); 
 
       });

    }).catch(function(error){
        console.log(error); 
    })
}

//Get the two date variables out of the json 
function getTimeTotal(){
    const getTimeTotalApiUrl = "https://localhost:5001/api/sessions" ; 

    fetch(getTimeTotalApiUrl).then(function(response){
        //console.log(response); 
        return response.json(); 
    }).then(function(json){
      
        json.forEach((session)=>{
        
        var lastElement = json.length; 
        //console.log(lastElement); 
        if (session.id == lastElement)
        {

            var dateOne = new Date(session.startTime);
            var dateTwo = new Date(session.stopTime); 
            //var dateOne = dateOne.toFixed(2); 
            let ms = dateTwo.getTime() - dateOne.getTime(); 

            let hour = 1000*60*60; 
            var timeTotal = ms/hour; 
            timeTotal = timeTotal.toFixed(2); 
            timeTotal = parseFloat(timeTotal); 
            console.log(timeTotal); 
              
            //var dateOne = dateFromISO(dateOne);
            //var dateOne = parseString(dateOne);
            //var dateTwo = dateTwo.toFixed(2);
            //var dateTwo = dateFromISO(dateTwo);
           // dateOne = dateOne / (1000*60*60);
           // dateTwo = dateTwo / (1000*60*60);
            //dateTwo = dateTwo / (1000*60*60);
            

            //var timeTotal = dateTwo - dateOne;
            //console.log(timeTotal); 

        }
        
        putTotalTime(lastElement, timeTotal);
       });

    }).catch(function(error){
        console.log(error); 
    })
}

function dateFromISO(s) {
    s = s.split(/\D/);
    return new Date(Date.UTC(s[0], --s[1]||'', s[2]||'', s[3]||'', s[4]||'', s[5]||'', s[6]||''))
  }

//updates the Total Time 
function putTotalTime(id, timeTotal){
    const putTotalTimeApiUrl = "https://localhost:5001/api/sessions/" + id;
    //console.log(id); 
    if (timeTotal != 0){
    console.log(timeTotal + "this should be the right time total "); 

    fetch(putTotalTimeApiUrl, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            
            id: id,
            totalTime: timeTotal

        })
    })
    .then((response)=>{
        console.log(response);

       //dont forget to call reverse hide card 
       reverseHideCard();     
        
    })
    }
    else{
        console.log(response); 
    }
}