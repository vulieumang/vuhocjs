//callback xmlhttp
function httpGetAsync(theUrl, callback){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        callback(xhttp)
      }
  };
  xhttp.open("GET", theUrl, true);
  xhttp.send();
}
var urlImg = 'http://via.placeholder.com/150';
var urlImg = 'https://picsum.photos/200/300';


httpGetAsync(urlImg,(data)=>{
  console.log(data)
})


//callback hell
httpGetAsync(urlImg,(data)=>{
  console.log(data)
  document.getElementById('img1').setAttribute('src', data.responseURL)
  httpGetAsync(urlImg,(data)=>{
    document.getElementById('img2').setAttribute('src', data.responseURL)
    httpGetAsync(urlImg, (data)=>{
      document.getElementById('img3').setAttribute('src', data.responseURL)
    })
  })
  }
)