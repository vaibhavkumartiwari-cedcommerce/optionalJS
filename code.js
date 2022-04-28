function check(event){
    event.preventDefault();

    console.log("connected");
    var result = [];

    var i=0;

var fname=document.getElementById("fname").value;

if(fname=="")
   {
       result[i]="first name ";
       i+=1;
   }

var lname=document.getElementById("lname").value;

if(lname=="")
{
    result[i]="second name ";
    i+=1;
}

var email=document.getElementById("email").value;
if(fname=="")
{
    result[i]="email ";
    i+=1;
}

var mobile=document.getElementById("mobile").value;
if(mobile==""||mobile.length<10)
{
    result[i]=" valid mobile number ";
    i+=1;
}

   genderr=null;
if (document.getElementById('male').checked) {
 genderr = document.getElementById('male').value;
 }
 if (document.getElementById('female').checked) {
 genderr = document.getElementById('female').value;
 }
 if(genderr==null)
 {
    result[i]="gender ";
    i+=1;
}


var  dob="";
 dob=document.getElementById("dob").value;
if(dob=="")
{
    result[i]="DOB ";
    i+=1;
}

 var  address="";
address=document.getElementById("Address").value;
if(address=="")
{
    result[i]="Address ";
    i+=1;
};

var city="";
 city=document.getElementById("city").value;
 if(city=="")
 {
    result[i]="City ";
    i+=1;
}


pin=document.getElementById("pin").value;
if(pin=="")
{
    result[i]="pin ";
    i+=1;
}
var state=document.getElementById("state").value;
if(state=="")
{
    result[i]="state ";
    i+=1;
}
 

 var qualii="";
 qualii=document.getElementById("quali").value;
 if(qualii=="")
 {
    result[i]="qualifications ";
    i+=1;
}



special=[];
count=0;
if (document.getElementById('sp1').checked) {
 special[count] = "Computer Science";
 count=count+1;
 }
 
 if (document.getElementById('sp2').checked) {
 special[count] = "Information Technology";
 count=count+1;
 }
 if (document.getElementById('sp3').checked) {
 special[count] = "Computer Architecture";
 count=count+1;
 }
 if (document.getElementById('sp4').checked) {
 special[count] = "Tele Communication";
 count=count+1;
 }

if(special.length==0)
{
    result[i]="specialization ";
    i+=1;
}


var password="";
 password=document.getElementById("password").value;
 if(qualii=="")
 {
    result[i]="password ";
    i+=1;
}



if(result.length!=0){
    alert("please enter  "+ result);
}
else{
    var f= [
        ["First name",fname],
        ["Second name",lname],
        ["Email",email],
        ["mobile",mobile],
        ["Gender",genderr],
        ["date of Birth",dob],
        ["Address",address],
        ["City",city],
        ["Pin",pin],
        ["State",state],
        ["Qualification",qualii],
        ["Specialization",special]
    ];
    let text= "<table>";
    for (const j of f)
    {
        text += "<tr>";
    
        text += "<td>" + j[0] + "</td>";
        
        text += "<td>" + j[1] + "</td>";
        text += "</tr>";
    }


    text += "</table>";

    document.getElementById("hide").innerHTML = text;
    
    console.log("submitted");
    

    

}

}

