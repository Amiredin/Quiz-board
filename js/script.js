$(document).ready(function(){
  $("#quizz").submit(function(event){
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=1]:checked").val());
    var q2 =parseInt($("input:radio[name=2]:checked").val());
    var q3 =parseInt($("input:radio[name=3]:checked").val());
    var q4 =parseInt($("input:radio[name=4]:checked").val());
    var q5 =parseInt($("input:radio[name=5]:checked").val());
    var marks =(q1+q2+q3+q4+q5);
    $("#display").text(marks);


    if(marks>=80) {
      alert("Execllent")
    } else if(marks>=50) {
      alert("poor")
    } else {
      alert ("poor work redo the quiz")
    };
  });
});
