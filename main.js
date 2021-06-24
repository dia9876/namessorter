student_array = []
function submitNames(){
    var name1 = document.getElementById("name_1").value;
    var name2 = document.getElementById("name_2").value;
    var name3 = document.getElementById("name_3").value;
    var name4 = document.getElementById("name_4").value;
    var name5 = document.getElementById("name_5").value;

    student_array.push(name1)
    student_array.push(name2)
    student_array.push(name3)
    student_array.push(name4)
    student_array.push(name5)

    console.log(student_array)
    document.getElementById("display_name").innerHTML=student_array;

    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function sortNames(){
    student_array.sort()
    document.getElementById("display_name").innerHTML=student_array;
}