const express=require('express')
const app=express();
// Set up the server
// process.env.PORT is related to deploying on heroku
const server=app.listen(process.env.PORT || 3000,()=>{

	console.log("listening on port "+server.address().port);
});

const io=require('socket.io')(server) //pass server ;


io.on('connection',(socket)=>{
 //on every new user connects   
 console.log("new user connected : "+socket.id);
   
   //on recieving data due to text event on client machine
   socket.on('text',(data)=>{
         //cause text event to every  other sockets
         socket.broadcast.emit('text',data);
         
  //this goes to everyone including sender
   // io.emit('message',"Hello");
  });
   
   socket.on('disconnect',()=>{
   console.log("User "+socket.id+ " disconnected");
    });
});

app.use(express.static('public'))
