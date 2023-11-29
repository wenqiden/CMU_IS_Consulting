var btn = document.getElementById('filter-btn');
var main = document.getElementById('project-main-container');
var filter = document.getElementById('filter-list');

document.addEventListener('click', function(e) {
    if (!filter.contains(e.target) && filter.style.display == 'block') {
        filter.style.display = 'none';
        main.style.filter = 'none';
    }
    else if (e.target.id == 'filter-btn') {
        filter.style.display = 'block';
        main.style.filter = 'blur(3px) grayscale(50%)';
    }
});
