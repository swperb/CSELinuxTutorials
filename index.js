const pageMap = {
    "CSE 1233: Programming in C": "cse1233.html",
    "CSE 1284: Intro to Programming": "cse1284.html",
    "CSE 1384: Intermediate Programming": "cse1384.html",
    "CSE 2213: Methods and Tools in SW Dev": "cse2213.html",
    "CSE 2383: Data Structures": "cse2383.html",
    "CSE 2813: Discrete Structures": "cse2813.html",
    "CSE 3724: Computer Organization": "cse3724.html"
};



function search() {
    var input = document.getElementById('searchInput').value;
    var resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';
    resultsDiv.style.display = 'none';

    if (input.trim().length > 0) {
        var matches = Object.keys(pageMap).filter(key => key.toLowerCase().includes(input.trim().toLowerCase()));

        if (matches.length > 0) {
            matches.forEach(match => {
                var link = document.createElement('a');
                link.href = pageMap[match];
                link.textContent = match;
                resultsDiv.appendChild(link);
            });
            resultsDiv.style.display = 'block';
        }
    }
}

let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    slides[slideIndex].classList.remove('active');
    
    slideIndex += step;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    
    slides[slideIndex].classList.add('active');
}

setInterval(() => moveSlide(1), 5000);

