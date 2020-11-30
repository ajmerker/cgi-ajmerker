
function getMIS321Goals(){
    const getMISGoalsAPiUrl = "https://localhost:5001/api/sessions"; 
    //let html = "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p><div class = \"col-md-12 d-flex justify-content-center\">" //<p> ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p>";
    fetch(getMISGoalsAPiUrl).then(function(response){
        return response.json(); 
    }).then(function(json){


        //console.log(total);  
        json.forEach((session)=>{
            
            if(session.category == "MIS321" && session.name == "Goal"){
                //console.log(session.totalTime); 
                var MIS321goal = session.totalTime;
                //console.log(MIS321goal);  
                
            }
            if(session.category == "MIS321" && session.name != "Goal"){
                var i = 0; 
                total = 0,  
                //total321 = 0; 
                time = json.totalTime,  
                i;
                for (i = 0; i < json.length; i++) {  
                total += json[i].totalTime; 
                //console.log(total); 
                }
                var mis321Total = total; 
            }
            if(mis321Total >= 1){
               var totalNew =  mis321Total; 
               //this.totalNew = totalNew; 
               //console.log(totalNew); 
            }
            if(MIS321goal >= 1){
                var goalNew = MIS321goal; 
                //console.log(goalNew); 
            }

           printGoals(goalNew, totalNew); 

    
        });
        //console.log(goals, totals); 


        //document.getElementById("mis321goals").innerHTML = html;
    }).catch(function(error){
        console.log(error); 
    })
}

function printGoals(goalNew, totalNew){
    const printGoalsApiUrl = "https://localhost:5001/api/sessions";
    let html = "<p>"; 
    fetch(printGoalsApiUrl).then(function(response){
        //console.log(response);  
        return response.json();
        
    }).then(function(json){
        //console.log(goalNew); 
        if(goalNew >= 1){
            var goalFinal =  goalNew; 
            console.log(goalFinal); 
         }
         if(totalNew >= 1){
             var totalFinal = this.totalNew; 
             console.log(totalNew); 
         }



        
        html += "<p class=\"text-info\" style = \"font-size: 16px; font-weight: light;\">You have the goal to study " + goalFinal +  " hours of MIS321.</p>" + 
        "<p class=\"text-info\" style = \"font-size: 16px; font-weight: light;\">So far you have logged " + totalNew +  " hours of MIS321.</p>"; 


        document.getElementById("mis321goals").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}


        //console.log(goalNew, totalNew); 

       // var totalLast = parseInt(totalFinal); 
       // console.log(totalLast); 
        //var goalLast = parseInt(goalFinal); 
        //console.log(goalLast); 
        //totalFinal = math.abs(totalFinal); 
       // console.log(totalFinal); 
       // var percentage = totalFinal - goalFinal; 