var persons = [];
let sno;
let id = 0;
let a = document.getElementsByName('subjects');
let gender = document.getElementsByName('gender');
function checkvalidation(){
    if(namevalidation()== false || phonevalidation() == false||  emailalidation()== false || calendorvalidation()== false)
    {
        return false;
    }
    else {
        document.getElementById('name-warning').innerHTML="";
        document.getElementById('name-warning').style.display="none";
        document.getElementById("name").style.border = "none";
        document.getElementById('phone-warning').innerHTML="";
        document.getElementById('phone-warning').style.display="none";
        document.getElementById("lastname").style.border = "none";
        document.getElementById('email-warning').innerHTML="";
        document.getElementById('email-warning').style.display="none";
        document.getElementById('email').style.border = "none";
        document.getElementById('dob-warning').innerHTML="";
        document.getElementById('dob-warning').style.display="none";
        document.getElementById('dob').style.border = "none";
        submit();
    }
}
function validationedit(id){
    if(namevalidation(id)== false || phonevalidation(id) == false||  emailalidation(id)== false || calendorvalidation(id)== false)
    {
        console.log("in apply false");
        return false;
    }
    else {
        document.getElementById('name-warning').innerHTML="";
        document.getElementById('name-warning').style.display="none";
        document.getElementById("name").style.border = "none";
        document.getElementById('phone-warning').innerHTML="";
        document.getElementById('phone-warning').style.display="none";
        document.getElementById("lastname").style.border = "none";
        document.getElementById('email-warning').innerHTML="";
        document.getElementById('email-warning').style.display="none";
        document.getElementById('email').style.border = "none";
        document.getElementById('dob-warning').innerHTML="";
        document.getElementById('dob-warning').style.display="none";
        document.getElementById('dob').style.border = "none";
        apply(id);}
}
function clear() {
    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("dob").value = "";
    for (let i = 0; i < gender.length; i++) {
        if (i !== 2) {
            gender[i].checked = false;
        } else {
            gender[i].checked = true;
        }
    }
    for (let i = 0; i < a.length; i++) {
        if (i !== 0) {
            a[i].checked = false;
        } else {
            a[i].checked = true;
        }
    }
}
function submit() {
    function calAge(dobVal1) {
        // convert user input value into date object
        let birthDate = new Date(dobVal1);
        // get difference from current date;
        let difference = Date.now() - birthDate.getTime();
        let ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    let name = document.getElementById("name").value;
    let surname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementsByName('gender');
    let gender_value;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gender_value = gender[i].value;
        }
    }
  let age = calAge(dob);
    let a = document.getElementsByName('subjects');
    let subjects = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i].checked) {
            subjects.push(a[i].value);
        }
    }
    let person = {}
    person.name = name;
    person.surname = surname;
    person.email = email;
    person.dob = dob;
    person.age = age;
    person.genderoption = gender;
    person.gender = gender_value;
    person.subjects = subjects;
    person.id = ++id;
    persons.push(person);
    sno = persons.length;
    var table = document.getElementById("tablebody");
    var row = table.insertRow(sno);
    row.setAttribute("id", 'rowid' + id);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    // var cell8 = row.insertCell(7);
    cell1.innerHTML = sno;
    cell2.innerHTML = name;
    cell3.innerHTML = surname;
    cell4.innerHTML = gender_value;
    cell5.innerHTML = age;
    cell6.innerHTML = email;
    cell7.innerHTML = subjects;
    let x = document.createElement("button");
    let t = document.createTextNode("REMOVE");
    x.appendChild(t);
    row.insertCell(7).appendChild(x);
    x.setAttribute('id', id);
    x.onclick = function () {
        remove(this.id)
    };
    let edit = document.createElement("button");
    let edittype = document.createTextNode("EDIT");
    edit.appendChild(edittype);
    row.insertCell(7).appendChild(edit);
    edit.setAttribute('id', id);
    edit.onclick = function () {
        editf(this.id)
    };
    clear();
    x.setAttribute('class', 'removebutton');
    edit.setAttribute('class', 'editbutton');
}
function remove(id) {
    let removeapply = document.getElementsByClassName('apply')[0];
    removeapply.style.display="none";
    let enablesumbit = document.getElementsByClassName('submit')[0];
    enablesumbit.style.display="inline-block";
    document.getElementById("rowid" + id).remove();
    let masti = persons.findIndex((position => position.id == id));
    persons.splice(masti, 1);
    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("dob").value = "";
    for (let i = 0; i < gender.length; i++) {
        if (i !== 2) {
            gender[i].checked = false;
        } else {
            gender[i].checked = true;
        }
    }
    for (let i = 0; i < a.length; i++) {
        if (i !== 0) {
            a[i].checked = false;
        } else {
            a[i].checked = true;
        }
    }

    serialnumber();
}
function editf(id) {
    let arrayedit = persons.filter(index => index.id == id);
    document.getElementById("name").value = arrayedit[0].name;
    document.getElementById("lastname").value = arrayedit[0].surname;
    document.getElementById("email").value = arrayedit[0].email;
    document.getElementById("dob").value = arrayedit[0].dob;
    let a = document.getElementsByName("gender");
    let b = arrayedit[0].gender;
    for (let i = 0; i < 3; i++) {
        if (a[i].value === b) {
            a[i].checked = true;
        }
    }
    let sub = document.getElementsByName("subjects");
    let sub1 = arrayedit[0].subjects;
    for (let i = 0; i < 8; i++) {
        sub[i].checked = false;
    }
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (sub[i].value == sub1[j]) {
                sub[i].checked = true;
            }
        }
    }
    let applyset = document.getElementsByClassName('apply')[0];
    applyset.setAttribute("id", id);
    applyset.setAttribute('onclick', 'validationedit(this.id)');
    applyset.style.display = "inline-block";
let disablesumbit = document.getElementsByClassName('submit')[0];
disablesumbit.style.display="none";
}
function apply(id) {
    function calAge(dobVal1) {
        let birthDate = new Date(dobVal1);
        let difference = Date.now() - birthDate.getTime();
        let ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    let nameapply = document.getElementById("name").value;
    let surnameapply = document.getElementById("lastname").value;
    let emailapply = document.getElementById("email").value;
    let dobapply = document.getElementById("dob").value;
    let genderapply = document.getElementsByName('gender');
    let subjectapply = document.getElementsByName('subjects');
    let gender_valueapply;
    for (var i = 0; i < genderapply.length; i++) {
        if (genderapply[i].checked) {
            gender_valueapply = genderapply[i].value;
        }
    }
    let ageapply = calAge(dobapply);
    let electives = [];
    for (var i = 0; i < subjectapply.length; i++) {
        if (subjectapply[i].checked) {
            electives.push(subjectapply[i].value);
        }
    }
    let arrayapply = persons.filter(index => index.id == id);
    arrayapply[0].name= nameapply;
    arrayapply[0].surname=surnameapply
    arrayapply[0].email=emailapply;
    arrayapply[0].age=ageapply;
    arrayapply[0].gender=gender_valueapply;
    arrayapply[0].subjects=electives;
  let tableapply =  document.getElementById("rowid" + id).cells;
    tableapply[1].innerHTML=nameapply;
    tableapply[2].innerHTML=surnameapply;
    tableapply[3].innerHTML=gender_valueapply;
    tableapply[4].innerHTML=ageapply;
    tableapply[5].innerHTML=emailapply;
    tableapply[6].innerHTML=electives;
    let applyset = document.getElementsByClassName('apply')[0];
    let enablesumbit = document.getElementsByClassName('submit')[0];
    applyset.style.display = "none";
    enablesumbit.style.display="inline-block";
    clear();
 }
function serialnumber() {
    let rowcount=document.getElementById('tablebody').rows.length;
    for (let i=1; i<rowcount;i++)
    {
     document.getElementById('tablebody').rows[i].cells[0].innerHTML = Number(i);
    }
}
function namevalidation(){
    let name = document.getElementById('name').value;
    if(name=="")
    {/*alert("Please Type Name");*/
        document.getElementById('name-warning').innerHTML="Please Type Name";
        document.getElementById('name-warning').style.display="block"
        document.getElementById("name").style.border = "1px solid red";
    return false;}
    else if (name.length > 30)
    {document.getElementById('name-warning').innerHTML="Word Limit Exceed :(";
        document.getElementById('name-warning').style.display="block"
        document.getElementById("name").style.border = "1px solid red";
        return false;}
    else {
        let regExp = /^[a-zA-Z ]{3,30}$/,
            result = regExp.test(name);

        if (result === false) {
            document.getElementById('name-warning').innerHTML="Give a Valid Name :(";
            document.getElementById('name-warning').style.display="block"
            document.getElementById("name").style.border = "1px solid red";
            return false;
        }
        else {
            document.getElementById('name-warning').innerHTML="";
            document.getElementById('name-warning').style.display="none";
            document.getElementById("name").style.border = "none";
            return true;
        }
    }


}
function phonevalidation(){
    let phone = document.getElementById("lastname").value;
    if(phone=="")
    {document.getElementById('phone-warning').innerHTML="Please Type Phone Number";
        document.getElementById('phone-warning').style.display="block"
        document.getElementById("lastname").style.border = "1px solid red";
    return false;}
    else if (phone.length >0 && phone.length < 10 )
    {
        document.getElementById('phone-warning').innerHTML="Give a Valid Phone Number :(";
        document.getElementById('phone-warning').style.display="block"
        document.getElementById("lastname").style.border = "1px solid red";
    return false;}
    else {
        let regExp = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
        let result = regExp.test(phone);
        if (result === false) {
            document.getElementById('phone-warning').innerHTML="Give a Valid Phone Number :(";
            document.getElementById('phone-warning').style.display="block"
            document.getElementById("lastname").style.border = "1px solid red";
            return false;
        }
        else{
            document.getElementById('phone-warning').innerHTML="";
            document.getElementById('phone-warning').style.display="none";
            document.getElementById("lastname").style.border = "none";
            return true;
        }
    }

}
function emailalidation() {
    let email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById('email-warning').innerHTML="Please Type Email";
        document.getElementById('email-warning').style.display="block";
        document.getElementById('email').style.border = "1px solid red";
        return false;
    } else if (email.length > 40) {
        document.getElementById('email-warning').innerHTML="Word Limit Exceed :(";
        document.getElementById('email-warning').style.display="block";
        document.getElementById('email').style.border = "1px solid red";
        return false;
    } else {  let regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        let result = regExp.test(email);
        if (result === false) {
            document.getElementById('email-warning').innerHTML="Give Valid Email Address :(";
            document.getElementById('email-warning').style.display="block";
            document.getElementById('email').style.border = "1px solid red";
            return false;
        } else
        {
            document.getElementById('email-warning').innerHTML="";
            document.getElementById('email-warning').style.display="none";
            document.getElementById('email').style.border = "none";
            return true;}
    }
}
function calendorvalidation(){
    function calAge(dobVal1) {
        // convert user input value into date object
        let birthDate = new Date(dobVal1);
        // get difference from current date;
        let difference = Date.now() - birthDate.getTime();
        let ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    let date=document.getElementById("dob").value;
     let agevalidation = calAge(date);
    /*console.lrfrwfog(date);*/
    if(date=="" )
    {document.getElementById('dob-warning').innerHTML="Please Give Date of Birth";
        document.getElementById('dob-warning').style.display="block";
        document.getElementById('dob').style.border = "1px solid red";
        return false;}
    else if(agevalidation < 10 || agevalidation > 100)
    {document.getElementById('dob-warning').innerHTML="Please Select Valid Date Of Birth";
        document.getElementById('dob-warning').style.display="block";
        document.getElementById('dob').style.border = "1px solid red";
        return false;
    }
    else {

        document.getElementById('dob-warning').innerHTML="";
        document.getElementById('dob-warning').style.display="none";
        document.getElementById('dob').style.border = "none";
        return true;}
}
