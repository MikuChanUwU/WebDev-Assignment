const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {

  filter.addEventListener('click', function() {
    //When selected specific button
    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);
    //When selected all
    if (selectedFilter == 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.projects [data-filter]');
    }
    //When image is disappearing
    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show');
    });
    //When image is reappearing
    itemsToShow.forEach(el => {
      el.classList.remove('hide');
      el.classList.add('show');
    });

  });
});
