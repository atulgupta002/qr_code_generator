
var qr_form = document.getElementById('qr_form').addEventListener('submit', async (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value,key)=>{
        data[key] = value;
    })

    const responseData = await getResponse(data)
    removeTextBox()
    displayImage(responseData)
    changeButton(responseData)
})

async function getResponse(data){
    const endpoint = "https://uyg9wpp1f8.execute-api.us-east-1.amazonaws.com/qr-code"
    var url = endpoint + "?url=" + data['url']
    const response = await fetch(url,{
        method:'GET',
        // body: JSON.stringify(data)
    })

    if (!response.ok) {
        console.log("Network error. Missing response");
        throw new Error("Network error. Missing response.");
    }

    const responseData = await response.json();
    console.log("Success");
    return responseData;
}

function removeTextBox(){
    var inputBox = document.getElementById('input-box');
    var parent = inputBox.parentNode
    parent.removeChild(inputBox)
}

function getComputedStyles(element) {
    const styles = window.getComputedStyle(element);
    let styleString = '';
    for (let i = 0; i < styles.length; i++) {
        const key = styles[i];
        const value = styles.getPropertyValue(key);
        styleString += `${key}: ${value}; `;
    }
    return styleString;
}

function displayImage(imageURL){
    const imageElement = document.createElement('img');
    imageElement.src = imageURL;
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear any existing content
    imageContainer.appendChild(imageElement);
}

function changeButton(data){
    var button = document.getElementById('generate_button');
    var origParent = button.parentNode
    var newButton = document.createElement('a')
    newButton.style.cssText = getComputedStyles(button);
    newButton.href = data
    newButton.textContent = "Download"
    newButton.id = 'download_button'
    origParent.removeChild(button)
    var parent = document.getElementById('button_container')
    parent.appendChild(newButton)
}