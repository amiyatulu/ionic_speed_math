        $(document).ready(function() {
          data = {
            "questions":[

            {"q":"9 X 9", "a":"81"},
            {"q":"8 X 8","a":"64"},
            {"q":"7 X 7","a":"49"},
            {"q":"7 X 9","a":"63"},
            {"q":"8 X 9","a":"72"},
            {"q":"9 X 6","a":"54"},
            {"q":"5 X 9","a":"45"},
            {"q":"8 X 7","a":"56"},
            {"q":"96 X 97","a":"9312"},
            {"q":"96 X 96","a":"9216"},
            {"q":"97 x 95","a":"9215"},
            {"q":"95 X 95","a":"9025"},
            {"q":"13 X 14","a":"182"},
            {"q":"12 X 15","a":"180"},
            {"q":"13 X 15","a":"195"},
            {"q":"12 X 12","a":"144"},
            {"q":"13 X 13","a":"169"},
            {"q":"12 X 14","a":"168"},
            {"q":"12 X 16","a":"192"},
            {"q":"14 X 14","a":"196"},
            {"q":"15 X 15","a":"225"},
            {"q":"102 X 114","a":"11628"},
            {"q":"103 X 112","a":"11536"},
            {"q":"112 X 112","a":"12544"},
            {"q":"102 X 125","a":"12750"},
            {"q":"92 X 93","a":"8556"},
            {"q":"86 X 87","a":"7482"},
            {"q":"92 X 92","a":"8464"},
            {"q":"88 X 85","a":"7480"},
            {"q":"Half of 19", "a":"9.5"},
            {"q":"Half of 12", "a":"6"},
            {"q":"Half of 17", "a":"8.5"},
            {"q":"Half of 33", "a":"16.5"},
            {"q":"Half of 55", "a":"27.5"},
            {"q":"Half of 77", "a":"38.5"},
            {"q":"Half of 64", "a":"32"},
            {"q":"Half of 99", "a":"49.5"},
            {"q":"Half of 70", "a":"35"},
            {"q":"Half of 45", "a":"22.5"},
            {"q":"Half of 71", "a":"35.5"},
            {"q":"Half of 46", "a":"23"},
            {"q":"Half of 9", "a":"4.5"},
            {"q":"Half of 88", "a":"44"},
            {"q":"Half of 7", "a":"3.5"},
            {"q":"Double of 38", "a":"76"},
            {"q":"Double of 29", "a":"58"},
            {"q":"Double of 59", "a":"118"},
            {"q":"Double of 68", "a":"136"},
            {"q":"Double of 39", "a":"78"},
            {"q":"Double of 47", "a":"94"},
            {"q":"Double of 39", "a":"78"},
            {"q":"Double of 48", "a":"96"},
            {"q":"Double of 63", "a":"126"},
            {"q":"Double of 57", "a":"114"},
            {"q":"Double of 98", "a":"196"},
            ]
          }
        
          lines = 55;
          randnumber = Math.floor(Math.random() * lines);
          $('#ques').html(data["questions"][randnumber]["q"]);
            $('#subm').click(function() {
                var answer = $("#answer").val();

                

                $("#trueans").html("Answer:" + data["questions"][randnumber]["a"]); 
            });
           
            $('#new').click(function(){
              $("#answer").val("");
               $("#trueans").html("");

              randnumber = Math.floor(Math.random() * lines);
              //console.log(randnumber);
          $('#ques').html(data["questions"][randnumber]["q"]);
            $('#subm').click(function() {
                var answer = $("#answer").val();

                

                $("#trueans").html("Answer:" + data["questions"][randnumber]["a"]); 
            });

            });
        });