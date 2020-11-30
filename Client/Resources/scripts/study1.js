function getResults(){
    const getResultsApiUrl = "https://localhost:5001/api/feedback";
    let html = "</p>"
    fetch(getResultsApiUrl).then(function(response){
        return response.json(); 
    }).then(function(json){
        console.log(json);
        //const imageUrl = json[0].url; 
        const leadOne = json[0].leadTotal; 
        const commOne = json[0].commTotal;
        const techOne = json[0].techTotal;

        const leadTwo = json[1].leadTotal;
        const commTwo = json[1].commTotal; 
        const techTwo = json[1].techTotal; 

        const compareLead = leadOne - leadTwo; 
        const compareComm = commOne - commTwo; 
        const compareTech = techOne - techTwo; 

        console.log(compareLead); 

       html+= "<div class = \"resultsBox\"><p>Your Leadership Score improved " + compareLead +" points since last quarter</p>" + 
       "<p>Your Communication Score improved " + compareComm +" points since last quarter</p>" + 
       "<p>Your Technology Score improved " + compareTech +" points since last quarter</p></div>";

        document.getElementById("resultsContainer").innerHTML = html;
    }).catch(function(error){
        console.log(error); 
    })
}

function getCategoryHours(json){
    //const getCategoryHoursApiUrl = "https://localhost:5001/api/sessions"; 
   // let html =  "<p>" //"<div class=\"card border-info mb-3\" style=\"max-width: 75rem;\">";
    //fetch(getCategoryHoursApiUrl).then(function(response){
    //    return response.json(); 
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
                overallHours = 0; 
                x++; 
                count+1; 

            }
            console.log(count); 

        //document.getElementById("javaCards").innerHTML = html;
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
            //return json; 

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
        })

    }).catch(function(error){
        console.log(error); 
    })

}

            //html+= "<div class=\"card-header\"><h4>Virtual Library - Study Hours</h4></div>" + //card header
            //"<div class=\"card-body\">" + //card body 
            //"<h1 class=\"card-title\">" + session.category + "</h1>" + //card title 
            //"<h2 class=\"card-text\" style = \"font-weight: lighter;\">Total hours : " + session.totalTime + "</h2>" + //card text 
            //"</div></div>"; //close out the body and head 

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