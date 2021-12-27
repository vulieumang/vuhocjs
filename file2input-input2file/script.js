var btnLoadUrl = document.querySelector('#loadUrl');
btnLoadUrl.addEventListener("click", ()=>{
  var url = document.querySelector('#url').value;
  loadURLToInputField(url)
});

var btnLoadImage = document.querySelector('#loadImage');
btnLoadImage.addEventListener("click", ()=>{
  var img_preview = document.querySelector('#img-preview');
  console.log(img_preview)
  loadInputFieldToPreview(img_preview)
});

var file_browser = document.querySelector('#file_browser');
var img_preview2 = document.querySelector('#img-preview2');
file_browser.addEventListener('change',()=>{
  var reader = new FileReader();
  reader.onload = function(e) {
    img_preview2.src = e.target.result
  }
  reader.readAsDataURL(document.querySelector('#file_browser').files[0]);
})

function loadURLToInputField(url){
  getImgURL(url, (imgBlob)=>{
    // Load img blob to input
    let fileName = 'hasFilename.jpg' // should .replace(/[/\\?%*:|"<>]/g, '-') for remove special char like / \
    let file = new File([imgBlob], fileName,{type:"image/jpeg", lastModified:new Date().getTime()}, 'utf-8');
    let container = new DataTransfer(); 
    container.items.add(file);
    document.querySelector('#file_input').files = container.files;
    // document.querySelector('#status').files = container.files;
    
  })
}

function loadInputFieldToPreview(imgElement){
  // Load preview to img tag
  var reader = new FileReader();
  reader.onload = function(e) {
    imgElement.src = e.target.result
  }
  reader.readAsDataURL(document.querySelector('#file_input').files[0]); // convert to base64 string
}

// xml json res
function httpGetAsync(url, callback){
  var req = new XMLHttpRequest();
  req.responseType = 'json';
  req.open('GET', url);
  req.onload  = function() {
    var jsonResponse = req.response;
    callback(jsonResponse)
    // do something with jsonResponse
  };
  req.send(null);
}

// xml blob res
function getImgURL(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
      callback(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

//check input status
setInterval(() => {
  var input = document.querySelector('#file_input');
  var status = document.querySelector('#status');
  if(input.value){
    status.innerHTML = 'has input'
    
  } else {
    status.innerHTML = 'empty input'
  }
}, 500);