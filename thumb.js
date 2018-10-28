var images = document.getElementById("divId").getElementsByTagName("iframe");

        for (var i = 0; i < images.length; i++) 
        {
            images[i].onmouseover = function () 
            {
                this.style.cursor = 'hand';
                this.style.borderColor = 'red';
            }
            images[i].onmouseout = function () 
            {
                this.style.cursor = 'pointer';
                this.style.borderColor = 'grey';
            }
        }
function changeImageOnClick(event) 
        {
            event = event || window.event;
            var targetElement = event.target || event.srcElement;

            if (targetElement.tagName == "IFRAME") 
            {
                mainImage.src = targetElement.getAttribute("src");
            }
        }