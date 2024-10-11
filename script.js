// JavaScript for filtering video categories
document.querySelectorAll('.category-filter').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      filterVideos(category);
    });
  });
  
  function filterVideos(category) {
    const videos = document.querySelectorAll('.video-card');
  
    videos.forEach(video => {
      if (category === 'all') {
        video.style.display = 'block';
      } else {
        video.getAttribute('data-category') === category
          ? video.style.display = 'block'
          : video.style.display = 'none';
      }
    });
  }
  