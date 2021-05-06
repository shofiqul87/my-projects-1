//dom selection

window.onload=function(){

const bookName=document.querySelector('#bookName');
const author=document.querySelector('#authorName');
const session=document.querySelector('#session');
const button=document.querySelector('#btn');
var bookList=document.querySelector('#booklist');

button.addEventListener('click',function(e){
  e.stopPropagation();
 e.preventDefault();

//simple validation
if (bookName.value=="" && author.value=="" && session.value=="") {
  alert("ভাই কিছু লেখেন আগে");
}

else{
  create();
}
});

};