var userid, addBtn, std, classId;

function playMusic(){
myMusic=document.getElementById("music")
myMusic.play()
}

function updateDB(){
    var db = firebase.firestore();
    userid = document.getElementById("userName").value;
    std = parseInt(document.getElementById("std").value, 10);
    if(userid == "" || std == "" || classId == ""){
    alert("Some fields are empty")}else{

    db.collection("users").add({
        name: userid,
        std: std,
        score: 0
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        sessionStorage.setItem('docId', docRef.id)

        window.location = './quiz.html'
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });}
}
