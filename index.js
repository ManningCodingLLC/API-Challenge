const picture = document.getElementById('image')
console.log(picture);
fetch('https://picsum.photos/400/500/') 
.then(function(response) {
  if (!response.ok){ 
    console.log(response);
    return new Error(response); 
  } 
  console.log("Response:", response);
  picture.src=response.url; 
})