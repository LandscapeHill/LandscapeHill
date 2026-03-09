// ============================================================
//  diary.js  —  Farm Diary "Database"
//  
//  HOW TO ADD A NEW ENTRY:
//  Copy one object from the array below, paste it in yearly section
//  and fill in the details. The page rebuilds itself
//  automatically — no HTML editing needed.
//
//  FIELDS:
//    date        — display string shown above the photo
//                  e.g. "March 2025"
//    year        — numeric year
//    month       — numeric month (1–12)
//    image       — path to photo relative to the HTML file
//    alt         — alt text for the image (accessibility)
//    description — caption shown below the photo
// ============================================================


const diaryEntries = [

// ============================= 2026 ===============================


// ============================= 2025 ===============================

{
date: "December 2025",
year: 2025,
month: 12,
image: "../images/diary/2025/December2.jpg",
alt: "Lovely Spanish Roja harvest",
description: "Lovely Spanish Roja harvest."
},

{
date: "December 2025",
year: 2025,
month: 12,
image: "../images/diary/2025/December1.jpg",
alt: "White crookneck plaits ready for December 2025 market",
description: "White crookneck plaits ready for December 2025 market."
},

{
date: "November 2025",
year: 2025,
month: 11,
image: "../images/diary/2025/November3.jpg",
alt: "Curing the white turbans",
description: "Curing the white turbans."
},

{
date: "November 2025",
year: 2025,
month: 11,
image: "../images/diary/2025/November2.jpg",
alt: "Pulling turbans at start of harvest",
description: "Pulling turbans at start of harvest."
},

{
date: "November 2025",
year: 2025,
month: 11,
image: "../images/diary/2025/November1.jpg",
alt: "Everything looking good just before harvest ",
description: "Everything looking good just before harvest ."
},

// ============================= 2024 ===============================

{
date: "February 2024",
year: 2024,
month: 2,
image: "../images/diary/2024/February1.jpg",
alt: "Tallarook Market February 2024",
description: "Tallarook Market February 2024."
},

{
date: "Unknown 2024",
year: 2024,
month: 2,
image: "../images/diary/2024/February2.jpg",
alt: "Seymour Market February 2024 (+ excess veggies from the garden)",
description: "Seymour Market February 2024 (+ excess veggies from the garden)."
},

{
date: "Unknown 2024",
year: 2024,
month: 1,
image: "../images/diary/2024/02.jpg",
alt: "A river instead of the track! Lexie is loving it",
description: "A river instead of the track! Lexie is loving it."
},

{
date: "January 2024",
year: 2024,
month: 1,
image: "../images/diary/2024/January.jpg",
alt: "Double rainbow after 300mm rain in a day at start of January",
description: "Double rainbow after 300mm rain in a day at start of January."
},

// ============================= 2023 ===============================

{
date: "December 2023",
year: 2023,
month: 12,
image: "../images/diary/2023/December3.jpg",
alt: "Panic harvest of silverskins before forecast torrential rain at end of December 2023",
description: "Panic harvest of silverskins before forecast torrential rain at end of December 2023."
},

{
date: "December 2023",
year: 2023,
month: 12,
image: "../images/diary/2023/December2.jpg",
alt: "First Tallarook Market in December 2023 - a learning experience!",
description: "First Tallarook Market in December 2023 - a learning experience!."
},

{
date: "December 2023",
year: 2023,
month: 12,
image: "../images/diary/2023/December1.jpg",
alt: "Prepping for our first market",
description: "Prepping for our first market."
},

{
date: "Unknown 2023",
year: 2023,
month: 1,
image: "../images/diary/2023/01.jpg",
alt: "Drying the 2023 crop - garlic shed not quite finished!",
description: "Drying the 2023 crop - garlic shed not quite finished!."
},

{
date: "Unknown 2023",
year: 2023,
month: 1,
image: "../images/diary/2023/02.jpg",
alt: "First plaits!!",
description: "First plaits!!."
},

// ============================= 2022 ===============================
// ============================= 2021 ===============================
// ============================= 2020 ===============================

// ============================= 2019 ===============================

{
date: "October 2019",
year: 2019,
month: 10,
image: "../images/diary/2019/October.jpg",
alt: "Protection for the first crop",
description: "Protection for the first crop."
},

{
date: "May 2019",
year: 2019,
month: 5,
image: "../images/diary/2019/May.jpg",
alt: "Prepping for the first planting",
description: "Prepping for the first planting."
}

];



const timeline = document.getElementById("timeline");
const yearNav = document.getElementById("yearNav");



/* GROUP ENTRIES BY YEAR */

const grouped = {};

diaryEntries.forEach(entry => {

if(!grouped[entry.year]){
grouped[entry.year] = [];
}

grouped[entry.year].push(entry);

});



/* BUILD PAGE */

Object.keys(grouped).sort((a,b)=>b-a).forEach(year => {

const yearHeader = document.createElement("div");
yearHeader.className = "year-header";
yearHeader.id = "year-"+year;
yearHeader.innerText = year;

timeline.appendChild(yearHeader);



/* YEAR NAV LINK */

const link = document.createElement("a");
link.href = "#year-"+year;
link.innerText = year;
yearNav.appendChild(link);



/* ENTRIES */

grouped[year].forEach(entry => {

const item = document.createElement("div");
item.className = "timeline-item";


const img = entry.image
? `<img src="${entry.image}" alt="${entry.alt}" class="timeline-image" loading="lazy">`
: `<div class="timeline-image">No Image</div>`;


item.innerHTML = `

<div class="timeline-date">${entry.date}</div>

${img}

<div class="timeline-text">${entry.description}</div>

`;

timeline.appendChild(item);

});

});



/* IMAGE MODAL */

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");


document.addEventListener("click", e => {

if(e.target.classList.contains("timeline-image")){

modal.style.display="flex";
modalImg.src = e.target.src;

}

});


closeModal.onclick = ()=> modal.style.display="none";
modal.onclick = ()=> modal.style.display="none";



/* SMOOTH SCROLL */

document.querySelectorAll('#yearNav a').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});

});

});