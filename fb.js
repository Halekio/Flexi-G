// Objects with which we will interact from our eventsheet

var CONNECTION = {
  ready:"No",
  allowConnection:"No",
  maxConnections:0
}

function GetConnectionAuthorization(){
  firebase.database().ref("PhotonConnection").on("value", function(ss){
    CONNECTION.allowConnection = ss.child("AllowConnection").val();
    CONNECTION.maxConnections = ss.child("MaxConnections").val();
    CONNECTION.ready = "Yes";
  });
}


