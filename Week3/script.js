window.addEventListener("load",()=>{
const loader=document.getElementById("loader");
setTimeout(()=>{
loader.style.opacity="0";
loader.style.visibility="hidden";
},1200);
});
const themeToggle=document.getElementById("themeToggle");
const body=document.body;
if(localStorage.getItem("theme")==="dark"){
body.classList.add("dark");
themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>';
}
themeToggle.addEventListener("click",()=>{
body.classList.toggle("dark");
if(body.classList.contains("dark")){
localStorage.setItem("theme","dark");
themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>';
}else{
localStorage.setItem("theme","light");
themeToggle.innerHTML='<i class="fa-solid fa-moon"></i>';
}
});
const menuBtn=document.getElementById("menuBtn");
const navLinks=document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>{
navLinks.classList.toggle("show");
if(navLinks.classList.contains("show")){
menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';
}else{
menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';
}
});
const scrollBtn=document.getElementById("scrollTop");
window.addEventListener("scroll",()=>{
if(window.scrollY>350){
scrollBtn.classList.add("show");
}else{
scrollBtn.classList.remove("show");
}
});
scrollBtn.addEventListener("click",()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
});
const revealElements=document.querySelectorAll(".reveal");
function revealSections(){
revealElements.forEach(section=>{
const top=section.getBoundingClientRect().top;
const visible=window.innerHeight-120;
if(top<visible){
section.classList.add("active");
}
});
}
window.addEventListener("scroll",revealSections);
revealSections();
function animateCounter(id,target,speed){
const element=document.getElementById(id);
let count=0;
const increment=Math.ceil(target/100);
const timer=setInterval(()=>{
count+=increment;
if(count>=target){
count=target;
clearInterval(timer);
}
element.textContent=count.toLocaleString()+"+";
},speed);
}
let counterStarted=false;
window.addEventListener("scroll",()=>{
const heroStats=document.querySelector(".hero-stats");
if(!heroStats)return;
const position=heroStats.getBoundingClientRect().top;
if(position<window.innerHeight&&counterStarted===false){
counterStarted=true;
animateCounter("treeCounter",1250,20);
animateCounter("userCounter",7800,10);
animateCounter("tipsCounter",540,30);
}
});
const navbar=document.querySelector(".navbar");
window.addEventListener("scroll",()=>{
if(window.scrollY>50){
navbar.style.padding="14px 8%";
navbar.style.boxShadow="0 8px 20px rgba(0,0,0,.15)";
}else{
navbar.style.padding="18px 8%";
navbar.style.boxShadow="0 3px 15px rgba(0,0,0,.08)";
}
});
document.querySelectorAll('a[href^="#"]').forEach(link=>{
link.addEventListener("click",e=>{
e.preventDefault();
const target=document.querySelector(link.getAttribute("href"));
if(target){
target.scrollIntoView({
behavior:"smooth"
});
}
if(navLinks.classList.contains("show")){
navLinks.classList.remove("show");
menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';
}
});
});
document.querySelectorAll(".learnBtn").forEach(button=>{
button.addEventListener("click",()=>{
button.textContent="Added to Favorites ✓";
button.style.background="#2e7d32";
button.disabled=true;
});
});
const heroButtons=document.querySelectorAll(".primary-btn,.secondary-btn");
heroButtons.forEach(button=>{
button.addEventListener("mouseenter",()=>{
button.style.transform="translateY(-5px) scale(1.05)";
});
button.addEventListener("mouseleave",()=>{
button.style.transform="translateY(0)";
});
});const facts=[
"More than 80% of Earth's forests have already been altered by human activity.",
"A single mature tree can absorb around 22 kilograms of carbon dioxide every year.",
"Mangrove forests protect coastlines from storms and erosion.",
"Bamboo is one of the fastest-growing plants in the world.",
"Wetlands naturally filter water and reduce flooding.",
"Honeybees pollinate nearly one-third of the food we eat.",
"Forests are home to over 80% of terrestrial biodiversity.",
"Recycling one ton of paper helps save about 17 trees."
];
const quotes=[
{text:"The Earth is what we all have in common.",author:"Wendell Berry"},
{text:"Look deep into nature, and then you will understand everything better.",author:"Albert Einstein"},
{text:"Nature does not hurry, yet everything is accomplished.",author:"Lao Tzu"},
{text:"The future will either be green or not at all.",author:"Bob Brown"},
{text:"Take only memories, leave only footprints.",author:"Chief Seattle"},
{text:"Every flower is a soul blossoming in nature.",author:"Gerard De Nerval"}
];
const challenges=[
{title:"Plant a Tree",desc:"Plant one sapling this week and nurture it regularly."},
{title:"Save Electricity",desc:"Switch off unused lights and appliances today."},
{title:"Avoid Plastic",desc:"Carry a reusable shopping bag instead of plastic."},
{title:"Save Water",desc:"Reduce your shower time by two minutes today."},
{title:"Go Green",desc:"Walk or cycle instead of using a vehicle for a short trip."},
{title:"Clean Surroundings",desc:"Collect litter from a nearby public place safely."}
];
const galleryImages=[
"https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80",
"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80",
"https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80",
"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
];
document.getElementById("factBtn").addEventListener("click",()=>{
const random=Math.floor(Math.random()*facts.length);
document.getElementById("factText").textContent=facts[random];
});
document.getElementById("quoteBtn").addEventListener("click",()=>{
const random=Math.floor(Math.random()*quotes.length);
document.getElementById("quoteText").textContent=quotes[random].text;
document.getElementById("quoteAuthor").textContent="— "+quotes[random].author;
});
document.getElementById("challengeBtn").addEventListener("click",()=>{
const random=Math.floor(Math.random()*challenges.length);
document.getElementById("challengeTitle").textContent=challenges[random].title;
document.getElementById("challengeDesc").textContent=challenges[random].desc;
});
const thumbs=document.querySelectorAll(".thumb");
const gallery=document.getElementById("galleryImage");
thumbs.forEach((thumb,index)=>{
thumb.addEventListener("click",()=>{
gallery.src=galleryImages[index];
thumbs.forEach(item=>item.classList.remove("active"));
thumb.classList.add("active");
});
});
const contactForm=document.getElementById("contactForm");
const formMessage=document.getElementById("formMessage");
contactForm.addEventListener("submit",e=>{
e.preventDefault();
const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const message=document.getElementById("message").value.trim();
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(name.length<3){
formMessage.style.color="red";
formMessage.textContent="Please enter a valid name.";
return;
}
if(!emailPattern.test(email)){
formMessage.style.color="red";
formMessage.textContent="Please enter a valid email address.";
return;
}
if(message.length<10){
formMessage.style.color="red";
formMessage.textContent="Message should contain at least 10 characters.";
return;
}
formMessage.style.color="green";
formMessage.textContent="Message sent successfully!";
contactForm.reset();
});
const newsletter=document.getElementById("newsletterForm");
const newsletterEmail=document.getElementById("newsletterEmail");
const newsletterMessage=document.getElementById("newsletterMessage");
newsletter.addEventListener("submit",e=>{
e.preventDefault();
const value=newsletterEmail.value.trim();
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(emailPattern.test(value)){
newsletterMessage.style.color="#ffffff";
newsletterMessage.textContent="Thank you for subscribing!";
newsletter.reset();
}else{
newsletterMessage.style.color="#ffe082";
newsletterMessage.textContent="Please enter a valid email.";
}
});
const progressBars=document.querySelectorAll(".progress-fill");
let progressAnimated=false;
window.addEventListener("scroll",()=>{
const progress=document.querySelector(".progress");
if(!progress)return;
const top=progress.getBoundingClientRect().top;
if(top<window.innerHeight&&progressAnimated===false){
progressAnimated=true;
document.querySelector(".tree-fill").style.width="90%";
document.querySelector(".water-fill").style.width="75%";
document.querySelector(".plastic-fill").style.width="82%";
}
});
function createRipple(event){
const button=event.currentTarget;
const ripple=document.createElement("span");
const diameter=Math.max(button.clientWidth,button.clientHeight);
ripple.style.width=diameter+"px";
ripple.style.height=diameter+"px";
ripple.style.left=event.offsetX-diameter/2+"px";
ripple.style.top=event.offsetY-diameter/2+"px";
ripple.style.position="absolute";
ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.5)";
ripple.style.transform="scale(0)";
ripple.style.animation="ripple .6s linear";
button.appendChild(ripple);
setTimeout(()=>{
ripple.remove();
},600);
}
document.querySelectorAll("button").forEach(button=>{
button.style.position="relative";
button.style.overflow="hidden";
button.addEventListener("click",createRipple);
});
const style=document.createElement("style");
style.innerHTML="@keyframes ripple{to{transform:scale(4);opacity:0;}}";
document.head.appendChild(style);
console.log("VerdantLife Loaded Successfully");