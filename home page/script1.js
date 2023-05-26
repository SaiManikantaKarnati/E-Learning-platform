function loadContent(url) {
    event.preventDefault();
    fetch(url)
        .then(response => response.text())
        .then(data => {
            var rightContainer = document.getElementById("rightContainer");
            rightContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading content:", error);
        });} 
        /*function loadContent(url) {
            var contentDiv = document.getElementById('rightContainer');
          
            // Create a new iframe element
            var iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';
          
            // Remove any existing content
            while (contentDiv.firstChild) {
              contentDiv.removeChild(contentDiv.firstChild);
            }
          
            // Append the iframe to the content div
            contentDiv.appendChild(iframe);
          }
          */
          

