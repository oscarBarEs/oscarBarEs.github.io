// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/NCCHQwNAN6Y



var boo=true;
var songs = [];
var act;
var idi = 0;
class Song{
  name;
  url;
  id;
  constructor(name,url,id) {
    this.name = name;
    this.url = url;
    this.id = id;
  }
  get url(){
    return this.url;
  }
}
function createSongs(){
  if(boo){
  songs.push(new Song("Claire de Lune",'resources/sounds/Clair de Lune Debussy.mp3',idi));
  idi++;
  songs.push(new Song("Sarabande",'resources/sounds/Sarabande, Haendel.mp3',idi));
  idi++;
  }
  boo=false;
  
}
function setSong(n,u)
{
  songs.push(new Song(n,u,idi));
  setAct(idi);
  idi++;
}
function getSong(i){

  console.log(songs[0].url);

  return songs[i].url;
}
function getSongName(i){

  console.log(songs[0].name);

  return songs[i].name;
}
function setAct(a){
  act=a;
}
function getAct(){
  return act;
  
}
function getList(){
  return songs;
  
}




