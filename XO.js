const squares= [];
let turn='x';
let title=document.querySelector(".title");
let gamee=document.querySelector(".game");
function winner()
{
 for(let i=1;i<10;i++){
  squares[i]=document.getElementById('item'+i).innerHTML;
 }
 
 if(squares[1]== squares[2] && squares[2]==squares[3] && squares[1]!=''){
  title.innerHTML=`${squares[1]}winner`;
  // setInterval(function(){
  //   title.innerHTML+='.';
  // },1000);
  setTimeout(() => {
    location.reload();
    
  }, 3000);
 }

else if(squares[1]== squares[4] && squares[4]==squares[7] && squares[1]!=''){
  title.innerHTML=`${squares[1]}winner`;
  setInterval(function(){
    title.innerHTML+='.';
  },1000);
  setTimeout(() => {
    location.reload();
    
  }, 3000);
 }

else if(squares[1]== squares[5] && squares[5]==squares[9] && squares[1]!=''){
  title.innerHTML=`${squares[1]}winner`;
  setInterval(function(){
    title.innerHTML+='.';
  },1000);
  setTimeout(() => {
    location.reload();
    
  }, 3000);
 }
 else if(squares[2]== squares[5] && squares[5]==squares[8] && squares[2]!=''){
  title.innerHTML=`${squares[2]}winner`;
  setInterval(function(){
    title.innerHTML+='.';
  },1000);
  setTimeout(() => {
    location.reload();
    
  }, 3000);
 }
 else if(squares[3]== squares[6] && squares[6]==squares[9] && squares[3]!=''){
  title.innerHTML=`${squares[3]}winner`;
  setInterval(function(){
    title.innerHTML+='.';
  },1000);
  setTimeout(() => {
    location.reload();
    
  }, 3000);
 }
 else if(squares[3]== squares[5] && squares[5]==squares[7] && squares[3]!=''){
  title.innerHTML=`${squares[3]}winner`;
  setInterval(function(){
    title.innerHTML+='.';
  },1000);
  setTimeout(() => {
    location.reload();
    
  }, 3000);
 }
 else if(squares[4]== squares[5] && squares[5]==squares[6] && squares[4]!=''){
  title.innerHTML=`${squares[1]}winner`;
  setInterval(function(){
    title.innerHTML+='.';
  },1000);
  setTimeout(() => {
    location.reload();
    
  }, 3000);
 }
 else if(squares[7]== squares[8] && squares[8]==squares[9] && squares[7]!=''){
  title.innerHTML=`${squares[7]}winner`;
  setInterval(function(){
    title.innerHTML+='.';
  },1000);c
  setTimeout(() => {
    location.reload();
    
  }, 3000);
 }
 else{
  title.innerHTML="no Winner"
 }
}


function game(id){
 let element=document.getElementById(id);
 if(turn==='x' &&element.innerHTML===''){
  element.innerHTML="x";
  turn='o';
  title.innerHTML="o";
 }
 else if(turn==='o' &&element.innerHTML===''){
  element.innerHTML="o";
  turn='x';
  title.innerHTML="x";
 }
 winner();
}
let resetbtn=document.getElementById("reset");
resetbtn.onclick=function(){
  resetbtn.style.background="blue";
  location.reload();
  
}
