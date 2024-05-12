
// languages animation on hovering out

var languages = document.querySelectorAll(".com");

for (var i = 0; i < languages.length; i++) {
    addHoverClass(languages[i])
}

function addHoverClass(element) {
    var classes = element.classList
    var isMouseOver = false
    
    element.addEventListener("mouseover", function() {
        isMouseOver = true
        classes.add("com-hover");
    });

    element.addEventListener("mouseout", function() {
        isMouseOver = false
        setTimeout(function() {
            if (!isMouseOver) {
                removeHoverClass()
            }
        }, 2000)
    })

    function removeHoverClass() {
        classes.remove("com-hover");
    }
}