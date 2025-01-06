// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2UDesaxb8IqKRgS6GGcBhdBhfLNhSbxo",
  authDomain: "leadson-bank-app.firebaseapp.com",
  projectId: "leadson-bank-app",
  storageBucket: "leadson-bank-app.appspot.com",
  messagingSenderId: "1011064039007",
  appId: "1:1011064039007:web:59acca967e30b39c1b9dea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


let currentSlide = 0;
const slides = document.querySelectorAll('.slideShow-container > div');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}
function showNextSlide() {
  nextSlide();
}
function showPrevSlide() {
  prevSlide();
}
setInterval(nextSlide, 8000);
showSlide(currentSlide);

document.getElementById('next').addEventListener('click', showNextSlide);
document.getElementById('prev').addEventListener('click', showPrevSlide);

document.getElementById('signUp').addEventListener('click', function() {
  alert('Navigating to Sign Up page');
  
});

document.getElementById('signIn').addEventListener('click', function() {
  alert('Navigating to Sign In page');
 
});

let scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
 const totalHeight = document.documentElement.scrollHeight;
 const currentScrollPos = window.innerHeight + window.scrollY;
 if (totalHeight - currentScrollPos < 500) {
   scrollTopBtn.style.display = "block";
 } else {
   scrollTopBtn.style.display = "none";
 }
};
scrollTopBtn.onclick = function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
