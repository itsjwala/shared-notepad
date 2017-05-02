var socket;
var notepad=document.querySelector('textarea');

socket=io.connect('http://localhost:3000');

notepad.onkeyup=function(){
  //give text to server
  socket.emit('text',{gem:this.value});
};

//on receiving data from server due to text event
 socket.on('text',(data)=>{
notepad.value=data.gem;
 });