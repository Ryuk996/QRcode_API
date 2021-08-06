function generatetab() {
  const codecontainer = document.createElement("div");
  codecontainer.className = "generate-container";
       codecontainer.innerHTML =   `<h1 class = "header">QR CoDe Generator</h1>
       <input class='input_txt' onclick="resetcode()" placeholder='text_url_reset'/>
       <div class="bar">
       <input class='input_pixel1' placeholder='pixels'/>
       <span> X </span>
       <input class='input_pixel2' placeholder='pixels'/>
          </div>
          <button class="search" onclick="getQrcode()"> Generate </button>
          `;
          document.body.append(codecontainer);  
}

  async function getQrcode() {
    const example = document.querySelector(".input_txt").value;
    const pixels1 = document.querySelector(".input_pixel1").value;
    const pixels2 = document.querySelector(".input_pixel2").value;
    if((example=="")){
        alert("enter the content and pixel")
       if(pixels1&&pixels2==""){
      alert("enter the content and pixel")
      }
    }
     else if((pixels1&&pixels2<50)){
        alert("enter the correct pixel size")
     }
     else if((pixels1&&pixels2>200)){
      alert("enter the correct pixel size")
   }
    else{
    const data = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?data=${example}&size=${pixels1}x${pixels2}`, 
      {
        method: "GET"
      }
    );
    
      try {
        const code =  data;  
        loadQr(code)
      }
      // alerts the user if fetching from api fails
      catch {
        alert("please check your connection/ data not available now");
      }
    
    }
}
function loadQr(code){
    const userList=document.createElement('div')
    userList.className="user-list"  
    const example = document.querySelector(".input_txt").value;
     const pixels1 = document.querySelector(".input_pixel1").value;
     const pixels2 = document.querySelector(".input_pixel2").value;
  const userContainer=document.createElement('div');        
  userContainer.className='user-container'
  userContainer.innerHTML=`

  <div class="content">
  <div class= "card">
  <img class="code" src="https://api.qrserver.com/v1/create-qr-code/?data=${example}&amp;size=${pixels1}x${pixels2}" alt="" title="" />
  </div>
  </div>`                     
  userList.append(userContainer);                           
document.body.append(userList);
}

function resetcode(){
  document.querySelector(".input_txt").value="";
  document.querySelector(".input_pixel1").value="";
  document.querySelector(".input_pixel2").value="";
  document.querySelector('.user-list').remove();
  loadQr() 
}
