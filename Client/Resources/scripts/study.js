function getMIS321Hours(){
    const getMIS321HoursApiUrl = "https://localhost:5001/api/sessions"; 
    let html = "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p><div class = \"col-md-12 d-flex justify-content-center\">";
    fetch(getMIS321HoursApiUrl).then(function(response){
        return response.json(); 
    }).then(function(json){
        //console.log(json);
        //sortCategory(json); 
        json.forEach((session)=>{
            
            if(session.category == "MIS321"){
                html+= "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p><div class=\"card border-info mb-3\" style=\"width: 30rem;\">" +
                "<div class=\"card-header\"><h4>Virtual Library - Study Hours</h4></div>" + //card header
                "<div class=\"card-body\">" + //card body 
                "<h1 class=\"card-title\">" + session.category + "</h1>" + //card title 
                "<h2 class=\"card-text\" style = \"font-weight: lighter;\">Date : " + session.startTime + "</h2>" + //card text  
                "<h2 class=\"card-text\" style = \"font-weight: lighter;\">Total Hours: " + session.totalTime + "</h2>" + //card text  
                "</div></div>"; //close out the body and head 
            }
            
    
        });


        document.getElementById("mis321").innerHTML = html;
    }).catch(function(error){
        console.log(error); 
    })
}

function getMIS330Hours(){
    const getMIS330HoursAPiUrl = "https://localhost:5001/api/sessions"; 
    let html = "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p><div class = \"col-md-12 d-flex justify-content-center\">" //<p> ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p>";
    fetch(getMIS330HoursAPiUrl).then(function(response){
        return response.json(); 
    }).then(function(json){
        //console.log(json);
        //sortCategory(json); 
        json.forEach((session)=>{
            
            if(session.category == "MIS330"){
                html+= "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p><div class=\"card border-danger mb-3\" style=\"width: 30rem;\">" +
                "<div class=\"card-header\"><h4>Virtual Library - Study Hours</h4></div>" + //card header
                "<div class=\"card-body\">" + //card body 
                "<h1 class=\"card-title\">" + session.category + "</h1>" + //card title 
                "<h2 class=\"card-text\" style = \"font-weight: lighter;\">Date : " + session.startTime + "</h2>" + //card text  
                "<h2 class=\"card-text\" style = \"font-weight: lighter;\">Total Hours: " + session.totalTime + "</h2>" + //card text  
                "</div></div>"; //close out the body and head 
            }
            
    
        });


        document.getElementById("mis330").innerHTML = html;
    }).catch(function(error){
        console.log(error); 
    })
}

function getGBA300Hours(){
    const getGBA300HoursApiUrl = "https://localhost:5001/api/sessions"; 
    let html = "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p><div class = \"col-md-12 d-flex justify-content-center\">" //<p> ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p>";
    fetch(getGBA300HoursApiUrl).then(function(response){
        return response.json(); 
    }).then(function(json){
        //console.log(json);
        //sortCategory(json); 
        json.forEach((session)=>{
            
            if(session.category == "GBA300"){
                html+= "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p><div class=\"card border-success mb-3\" style=\"width: 30rem;\">" +
                "<div class=\"card-header\"><h4>Virtual Library - Study Hours</h4></div>" + //card header
                "<div class=\"card-body\">" + //card body 
                "<h1 class=\"card-title\">" + session.category + "</h1>" + //card title 
                "<h2 class=\"card-text\" style = \"font-weight: lighter;\">Date : " + session.startTime + "</h2>" + //card text  
                "<h2 class=\"card-text\" style = \"font-weight: lighter;\">Total Hours: " + session.totalTime + "</h2>" + //card text  
                "</div></div>"; //close out the body and head 
            }
            
    
        });


        document.getElementById("gba330").innerHTML = html;
    }).catch(function(error){
        console.log(error); 
    })
}


function getTotalHours(){
    const getTotalHoursApiUrl = "https://localhost:5001/api/sessions"; 
    let html = "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p><div class = \"col-md-12 d-flex justify-content-center\">" //<p> ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p>";
    fetch(getTotalHoursApiUrl).then(function(response){
        return response.json(); 
    }).then(function(json){

        var i = 0; 
        total = 0,  
        //total321 = 0; 
        time = json.totalTime,  

            i;
    
             for (i = 0; i < json.length; i++) {  
                if(json[i].category != "Goal"){
                    total += json[i].totalTime; 
    
                }
            
          
        

        }
         console.log(total);  

    
            html+= "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎</p><div class=\"card text-white bg-info mb-3\" style=\"width: 101rem;\">" + //change the color
            "<div class=\"card-header\"><h4>Virtual Library - Study Hours</h4></div>" + //this is good
            "<div class=\"card-body\">" + //card body 
            "<h1 class=\"card-title\">Total Logged Study Hours: " + total.toFixed(2) + "</h1>" + //card title 
            "</div></div>"; //close out the body and head 
            

        document.getElementById("total").innerHTML = html;
    }).catch(function(error){
        console.log(error); 
    })
}



function sortCategory(){
    const sortCategory = "https://localhost:5001/api/sessions"; 
    //let html =  "<p>" //"<div class=\"card border-info mb-3\" style=\"max-width: 75rem;\">";
    fetch(sortCategory).then(function(response){
        return response.json(); 
    }).then(function(json){
        //console.log(json);
        var i = json[0].category;
        console.log(i); 
        //var x = json[0].id; 
        var x = 0; 
        var count = 0; 
        console.log(x); 
        //var category = json[i].category; 
       // console.log(category); 
        json.forEach((session)=>{
            //var category = session[i].category; 
            console.log(json[x].category); 
            if(json[x].category != json[x+1].category){
                console.log(json[x+1].category)
                //overallHours += session.totalTime; 
                //console.log(overallHours); 
                 temp = json[x]; 
                json[x] = json[x+1]; 
                json[x+1] = temp; 
                x++; 
                count++; 
                console.log(x); 
            }
            else{
              console.log(json[x].category); 
              x++; 
            }
            console.log(json); 
            return json; 
            //return json; 
            /*
        }).then(function(json){
            json.forEach((session)=>{
            var x = 0; 
            var count = 0; 
            if(json[x].category == json[x+1].category){
                var overallHours = 0; 
                overallHours = overallHours + json[x].totalTime; 
                console.log(overallHours); 
                x++; 
            }
            else{
                //json.x print, then reset variables 
                overallHours = 0; 
                x++; 
                count+1; 

            }
            console.log(count); 
            })
            */
        })
    }).catch(function(error){
        console.log(error); 
    })

}

        //const imageUrl = json[0].url; 
        //const leadOne = json[0].leadTotal; 
        //const commOne = json[0].commTotal;
        //const techOne = json[0].techTotal;

        //const leadTwo = json[1].leadTotal;
        //const commTwo = json[1].commTotal; 
        //const techTwo = json[1].techTotal; 

        //const compareLead = leadOne - leadTwo; 
        //const compareComm = commOne - commTwo; 
        //const compareTech = techOne - techTwo; 

        //console.log(compareLead); 

                //console.log(json);
        //sortCategory(json);
        /*
        var timeTotal = 0; 

        var i = 0; 
        
        for(i = 0, i > json.length; i++;){
            //console.log(json); 
            var sum = sum + json.totalTime; 
            //console.log(json.totalTime); 
            console.log(sum);
        }
        */

                //console.log(sum); 
        /*
        json.forEach((session)=>{

            var totalTaxes = 0;

            $.each(session.totalTime, function () {
            totalTaxes += this.amount;
            });
            console.log(totalTaxes);
            
            var i = 0; 
            var sum = json[i].totalTime; 
            sum = sum + json[i].totalTime; 
            var x = 0;  
            var temp = json[x].totalTime;
            //var timeTwo = json[x+1].totalTime; 
            //console.log(timeTwo); 
            //console.log(timeOne);
            //var timeTotal = temp; 
            timeTotal = timeTotal.toFixed(2); 
            total = temp+timeTotal; 
            
            
            for(i = 0, i > json.length; i++;){
                //console.log(json); 
                var sum = sum + json.totalTime; 
                //console.log(json.totalTime); 
                console.log(sum);
            }
             
            

           x++;
           i++;  
            
             
        });

        */ 