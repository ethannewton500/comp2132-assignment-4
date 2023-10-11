const currentTime = new Date();
const currentHour = currentTime.getHours();

const timeMessageElement = document.getElementById('timeMessage');
const timeImageElement = document.getElementById('timeImage');

const wrongImageArray = document.getElementById('imageWrongArrayArgument');
const wrongImageNumbers = document.getElementById('imageNumbers');
const wrongImageBooleans = document.getElementById('imageBooleans');
const validImage = document.getElementById('imageValid');
const junkImage = document.getElementById('imageJunk');

if (currentHour < 12)
{
    timeMessageElement.innerHTML = "Good morning its a beautiful day!";
    timeImageElement.src = '../images/sun.png';
}
else
{
    timeMessageElement.innerHTML = "Good evening its a dark spooky night!";
    timeImageElement.src = '../images/moon.png';
}

wrongImageArray.innerHTML = listImages(true);
wrongImageNumbers.innerHTML = listImages[1, 2, 3];