var playlist=[];

function addToPlaylist() {
  var song = prompt("Enter a song.");
  playlist.push(song);
  playlist.sort();
  if(song== playlist[i]){
  var x= alert("Song already Exists");
  
}
  displayPlaylist();
 
}

function displayPlaylist(){
  var listElem=document.getElementById("list");
  
  var i = 0;
  var listItem = "";
  for(i=0; i<playlist.length; i++){
    listItem += "<li>" + playlist[i] + "</li>" ; 
  }
  list.innerHTML= listItem; 
  

}