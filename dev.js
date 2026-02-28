fetch("http://127.0.0.1:8000/api/projects/")
.then(response => response.json())
.then(data => {

let projectHTML="";

data.forEach(p=>{
projectHTML+=`
<div class="card">
<img src="http://127.0.0.1:8000/media/${p.image}">
<h3>${p.name}</h3>
<p>${p.description}</p>
<button>Read More</button>
</div>`;
});

document.getElementById("projectList").innerHTML=projectHTML;

});


document.getElementById("contactForm")
.addEventListener("submit",(e)=>{
e.preventDefault();
alert("Message Sent Successfully ✅");
});



function subscribe(){
let email=document.getElementById("email").value;
alert("Subscribed ✅ "+email);
}