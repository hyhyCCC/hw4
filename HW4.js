/*
   Yicheng Huang
    yicheng_huang@student.uml.edu
    11/20/2021
    Get a lot of help from w3school and online sources.
    This JS is main part for the homewrok.
    I am trying to do the same thing with jquery.validator.
*/

/*The idea with $.validator.addMethod to find the large row and col
 * I just get the idea from this web
 * https://stackoverflow.com/questions/1674981/jquery-validation-value-cant-be-greater-than
 * That is one way we can find the large one
 * and I just that twice to get both of the large number from input.
 * 
 */
$.validator.addMethod("larger", function (value, element, param) {
    var first_r = $("#firstr").val();
    value = parseInt(value);
    return this.optional(element) || value > first_r;
}, "The min row alwasy should be min");


$.validator.addMethod("largec", function (value, element, param) {
    var first_c = $("#firstc").val();
    value = parseInt(value);
    return this.optional(element) || value > first_c;
}, "The min col should always be min too");


/* the  star part with the ready function
 * 
  */
$(document).ready(function () {

    $("#Form").validate({
        rules: {
            /*
            Rules for the id Form
            those input we want them follow the rule with rules
              */
            firstc: {
                required: true,
                number: true,
                min: -50,
                max: 50,
            },
            secondc: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                largec: true,
            },
            firstr: {
                required: true,
                number: true,
                min: -50,
                max: 50,
            },
            secondr: {
                required: true,
                number: true,
                min: -50,
                max: 50,
                larger: true,
            }
        },
        /*not a cool message
         but it can tell user what is going on with the input
         so there are different details of the messages
         which can show the correct way for user with their inputs
         */
        messages: {
            firstr: {
                required: "Error, this part should not be empty",
                number: "Error,Please enter a number or you will lost points",
                min: "Error,Pleas the mix is -50",
                max: " Error,Please the max is 50",

            },
            secondr: {
                required: "Error, this part should not be empty",
                number: "Error,Please enter a number or you will lost points",
                min: "Error,Pleas the mix is -50",
                max: " Error,Please the max is 50",
                larger: "Please Second one should larger than the first one",
            },
            firstc: {
                required: "Error, this part should not be empty",
                number: "Error,Please enter a number or you will lost points",
                min: "Error,Pleas the mix is -50",
                max: " Error,Please the max is 50",
            },
            secondc: {
                required: "Error, this part should not be empty",
                number: "Error,Please enter a number or you will lost points",
                min: "Error,Pleas the mix is -50",
                max: " Error,Please the max is 50",
                larger: "Please Second one should larger than the first one",
            }
        }
    });
    /*Finally
     * After we valid all the input
     * Then we got the click on the button
     * 
     * we can creat the table and show the magic.
     */
    $("#button").click(function () {
        //if ($("#firstr").valid() && $("#secondr").valid() && $("#firstc").valid() && $("#secondc").valid())
        if ($("#Form").valid())
        $("#Form").submit(createtb());
     
    });
});

/*
 * parts from hw3
 * how we get a table and some details about table
 * 
 */

 function createtb() {

    //Get value from input
    var row1 = parseInt(document.getElementById('firstr').value);
    var col1 = parseInt(document.getElementById('firstc').value);
    var row2 = parseInt(document.getElementById("secondr").value);
    var col2 = parseInt(document.getElementById("secondc").value);

//Table 

var table = document.createElement('table');
table.setAttribute('id', 'newtable');
var tr = document.createElement('tr');
var th = document.createElement('th');

// how to get the first row and col are blank
var nod = document.createTextNode('');
th.appendChild(nod);
tr.appendChild(th);
table.appendChild(tr);

//remove used table
var used_table = document.getElementById('newtable');
if (used_table) {
    used_table.parentNode.removeChild(used_table);
}

//for the  column of table.
for (var i = col1; i <= col2; i++) {
    tr.appendChild(tablebox(i, 'th'));
}

//for the row of the table. 
for (var j = row1; j <= row2; j++) {

    var tr = document.createElement('tr');
    tr.appendChild(tablebox(j, 'th'));
    for (var i = col1; i <= col2; i++) {
        //Calculate the output  
        var value = j * i;

        //table
        tr.appendChild(tablebox(value, 'td'));
    }
    table.appendChild(tr);
}
     htmltable = table;
     $("#Table").html(htmltable);
    
}


//Create box
function tablebox(text, type) {
    var box = document.createElement(type);
    box.appendChild(document.createTextNode(text));
    return box;
}
    