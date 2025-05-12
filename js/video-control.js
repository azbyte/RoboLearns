// Ensure only one video plays at a time
document.addEventListener('play', function(e){
    var videos = document.querySelectorAll('video');
    for(var i = 0; i < videos.length; i++){
        if(videos[i] != e.target){
            videos[i].pause();
        }
    }
}, true);
