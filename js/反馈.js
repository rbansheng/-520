window.addEventListener('DOMContentLoaded', function () {
    var orientationMessage = document.getElementById('orientation-message');
    var mql = window.matchMedia("(orientation: portrait)");
    function checkOrientation(event) {
        if (event.matches) {
            orientationMessage.style.display = 'flex';
        } else {
            orientationMessage.style.display = 'none';
        }
    }
    mql.addListener(checkOrientation);
    checkOrientation(mql);
    window.addEventListener('orientationchange', function() {
        location.reload();
    });
});
