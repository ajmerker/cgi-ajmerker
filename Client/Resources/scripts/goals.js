
//GET MIS 321 GOALS
function getMIS321Goals(){
    const getMISGoalsAPiUrl = "https://localhost:5001/api/sessions"; 
    //let html = "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p><div class = \"col-md-12 d-flex justify-content-center\">" //<p> ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p>";
    fetch(getMISGoalsAPiUrl).then(function(response){
        return response.json(); 
    }).then(function(json){


        //console.log(total);  
        json.forEach((session)=>{
            
            
            if(session.category == "Goal" && session.name == "MIS321"){
                //console.log(session.totalTime); 
                var MIS321goal = session.totalTime;
                console.log(MIS321goal);  
                
            }
            
           // else{
            //    var MIS321goal = 0; 
            //}
            //if(session.category == "MIS321" ){
                var i = 0; 
                total = 0,
                //total321 = 0; 
                //total = session.totalTime,  
                i;
               // if(session.category == "MIS321" && session.name != "Goal")
                 for (i = 0; i < json.length; i++) {  
                    if(json[i].category == "MIS321"){
                        total += json[i].totalTime; 
                        console.log(total); 
                       // total = total + session.totalTime; 
                        //console.log("We got here"); 
                    }
                    //else{
                     // total -= json[i].totalTime; 
                     //  console.log("we got here");
                   //}
                }
           // }
      
            console.log(total);

           printGoals(MIS321goal, total); 

    
        });
        //console.log(goals, totals); 


        //document.getElementById("mis321goals").innerHTML = html;
    }).catch(function(error){
        console.log(error); 
    })
}

//PRINT MIS 321 GOALS 
function printGoals(MIS321goal, total){
    const printGoalsApiUrl = "https://localhost:5001/api/sessions";
    let html = "<p>"; 
    fetch(printGoalsApiUrl).then(function(response){
        //console.log(response);  
        return response.json();
        
    }).then(function(json){
        //console.log(goalNew); 
        console.log(MIS321goal);

        var i = 0; 
        for (i = 0; i < json.length; i++) {  
        if(json[i].category == "Goal" && json[i].name == "MIS321"){
            //console.log(session.totalTime); 
            var newGoal = json[i].totalTime;
            console.log(newGoal);  
            
        }
    }
        
        
        if(MIS321goal >= 1){
            var goal = MIS321goal;  
            console.log(goal); 
        }

         var percentage = total / newGoal; 
         percentage = percentage * 100; 
         console.log(percentage);
         var hoursLeft = newGoal - total; 
       // var finalGoal = MIS321goal; 

        //console.log(finalGoal);
        html += "<div class = \"progress\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-info\" role=\"progressbar\" style=\"width:" + percentage +"%;\" aria-valuenow=\" " + percentage+ "\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div></div>" + 
        "<p class=\"text\" style = \"font-size: 16px; font-weight: light;\">You have the goal to study " + newGoal +  " hours of MIS321." + 
        " So far you have logged " + total +  " hours of MIS321.</p>" +
        "<p class=\"text text-info\" style = \"font-size: 16px; font-weight: light;\">You need to study " + hoursLeft +  " more hours to achieve your Goal.</p>"; 


        document.getElementById("mis321goals").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}

//GET MIS 330 GOALS
function getMIS330Goals(){
    const getMIS330GoalsAPiUrl = "https://localhost:5001/api/sessions"; 
    //let html = "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p><div class = \"col-md-12 d-flex justify-content-center\">" //<p> ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p>";
    fetch(getMIS330GoalsAPiUrl).then(function(response){
        return response.json(); 
    }).then(function(json){


        //console.log(total);  
        json.forEach((session)=>{
            
            if(session.category == "Goal" && session.name == "MIS330"){
                //console.log(session.totalTime); 
                var MIS330goal = session.totalTime;
                console.log(MIS330goal);  
                
            }
           // else{
            //    var MIS321goal = 0; 
            //}
            if(session.category == "MIS330" ){
                var i = 0; 
                total = 0,  
                //total321 = 0; 
                //total = session.totalTime,  
                i;
               // if(session.category == "MIS321" && session.name != "Goal")
                 for (i = 0; i < json.length; i++) {  
                    if(json[i].category == "MIS330"){
                        total += json[i].totalTime; 
                       // total = total + session.totalTime; 
                        //console.log("We got here"); 
                    }
                    //else{
                     // total -= json[i].totalTime; 
                     //  console.log("we got here");
                   //}
                }
            }
      
            console.log(total);

           print330Goals(MIS330goal, total); 

    
        });
        //console.log(goals, totals); 


        //document.getElementById("mis321goals").innerHTML = html;
    }).catch(function(error){
        console.log(error); 
    })
}

//PRINT 330 GOALS
function print330Goals(MIS330goal, total){
    const printGoalsApiUrl = "https://localhost:5001/api/sessions";
    let html = "<p>"; 
    fetch(printGoalsApiUrl).then(function(response){
        //console.log(response);  
        return response.json();
        
    }).then(function(json){
        //console.log(goalNew); 
        console.log(MIS330goal);

        var i = 0; 
        for (i = 0; i < json.length; i++) {  
        if(json[i].category == "Goal" && json[i].name == "MIS330"){
            //console.log(session.totalTime); 
            var newGoal = json[i].totalTime;
            console.log(newGoal);  
            
        }
    }
              
        if(MIS330goal >= 1){
            var goal = MIS330goal;  
            console.log(goal); 
        }

         var percentage = total / newGoal; 
         percentage = percentage * 100; 
         console.log(percentage);

         var hoursLeft = newGoal - total; 
       // var finalGoal = MIS321goal; 

        //console.log(finalGoal);
        html += "<div class = \"progress\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-danger\" role=\"progressbar\" style=\"width:" + percentage +"%;\" aria-valuenow=\" " + percentage+ "\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div></div>" + 
        "<p class=\"text\" style = \"font-size: 16px; font-weight: light;\">You have the goal to study " + newGoal +  " hours of MIS330." + 
        " So far you have logged " + total +  " hours of MIS330.</p>" + 
        "<p class=\"text text-danger\" style = \"font-size: 16px; font-weight: light;\">You need to study " + hoursLeft +  " more hours to achieve your Goal.</p>"; 


        document.getElementById("mis330goals").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}

//GET GBA 300 GOALS
function getGBA300Goals(){
    const getGBA300GoalsAPiUrl = "https://localhost:5001/api/sessions"; 
    fetch(getGBA300GoalsAPiUrl).then(function(response){
        return response.json(); 
    }).then(function(json){


        //console.log(total);  
        json.forEach((session)=>{

            if(session.category == "Goal" && session.name == "GBA300"){
                //console.log(session.totalTime); 
                var GBA300goal = session.totalTime;
                console.log(GBA300goal);  
                
            }

            if(session.category == "GBA300" ){
                var i = 0; 
                total = 0,  
                //total321 = 0; 
                //total = session.totalTime,  
                i;
               // if(session.category == "MIS321" && session.name != "Goal")
                 for (i = 0; i < json.length; i++) {  
                    if(json[i].category == "GBA300"){
                        total += json[i].totalTime; 

                    }

                }
            }
      
            console.log(total);

           printGBA300Goals(GBA300goal, total); 

    
        });
        //console.log(goals, totals); 


        //document.getElementById("mis321goals").innerHTML = html;
    }).catch(function(error){
        console.log(error); 
    })
}

//PRINT GBA 300 GOALS 
function printGBA300Goals(GBA300goal, total){
    const printGBA300GoalsApiUrl = "https://localhost:5001/api/sessions";
    let html = "<p>"; 
    fetch(printGBA300GoalsApiUrl).then(function(response){
        //console.log(response);  
        return response.json();
        
    }).then(function(json){
        //console.log(goalNew); 
        console.log(GBA300goal);

        var i = 0; 
        for (i = 0; i < json.length; i++) {  
        if(json[i].category == "Goal" && json[i].name == "GBA300"){
            //console.log(session.totalTime); 
            var newGoal = json[i].totalTime;
            console.log(newGoal);  
            
        }
    }
        
        
        
        if(GBA300goal >= 1){
            var goal = GBA300goal;  
            console.log(goal); 
        }

         var percentage = total / newGoal; 
         percentage = percentage * 100; 
         console.log(percentage);

         var hoursLeft = newGoal - total; 
       // var finalGoal = MIS321goal; 

        //console.log(finalGoal);
        html += "<div class = \"progress\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-success\" role=\"progressbar\" style=\"width:" + percentage +"%;\" aria-valuenow=\" " + percentage+ "\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div></div>" + 
        "<p class=\"text\" style = \"font-size: 16px; font-weight: light;\">You have the goal to study " + newGoal +  " hours of GBA300." + 
        " So far you have logged " + total +  " hours of GBA300.</p>" +
        "<p class=\"text text-success\" style = \"font-size: 16px; font-weight: light;\">You need to study " + hoursLeft +  " more hours to achieve your Goal.</p>"; 


        document.getElementById("gba300goals").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}

