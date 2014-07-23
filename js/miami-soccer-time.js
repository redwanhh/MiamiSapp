var ref = new Firebase('https://miamisoccertime.firebaseio.com/matches');
//ref.push({name:'Radhwan', text:"Hi"});
//read 
ref.on('child_added', function(snapshot) {
  var matches = snapshot.val();

$("#submit").click(function(){
//alert("You clicked me!");
title = $("#title").val();
date = $("#date").val();
time = $("#time").val();

ref.push({title: matches, date:matches, time:matches});
});
 
  
});

