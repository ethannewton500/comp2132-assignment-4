const currentTime = new Date();
const currentHour = currentTime.getHours();

const timeMessageElement = document.getElementById("timeMessage");
const timeImageElement = document.getElementById("timeImage");

const wrongImageArray = document.getElementById("imageWrongArrayArgument");
const alsoWrongImageArray = document.getElementById("alsoImageWrongArrayArgument");
const wrongImageNumbers = document.getElementById("imageNumbers");
const wrongImageBooleans = document.getElementById("imageBooleans");
const validImage = document.getElementById("imageValid");
const junkImage = document.getElementById("imageJunk");

const booleanLinks = document.getElementById("linksBooleans");
const numberNotArray = document.getElementById("numberNotArray");
const validUrlArray = document.getElementById("validUrlArray");
const validUrlArrayJunk = document.getElementById("validUrlArrayJunk");

const notNameArray = document.getElementById("notNameArray");
const smallArray = document.getElementById("smallArray");
const invalidSecondParamater = document.getElementById("invalidSecondParamater");
const validUlArray = document.getElementById("validUlArray");
const validOlArray = document.getElementById("validOlArray");

if (currentHour < 12) {
	timeMessageElement.innerHTML = "Good morning its a beautiful day!";
	timeImageElement.src = "images/sun.png";
} else {
	timeMessageElement.innerHTML = "Good evening its a dark spooky night!";
	timeImageElement.src = "images/moon.png";
}

wrongImageArray.innerHTML = listImages(notAnArrayOfImages);
alsoWrongImageArray.innerHTML = listImages(alsoNotAnArrayOfImages);
wrongImageNumbers.innerHTML = listImages(anArrayOfNumbers);
wrongImageBooleans.innerHTML = listImages(anArrayOfBooleans);
validImage.innerHTML = listImages(arrayOfImages);
junkImage.innerHTML = listImages(arrayOfSomeImages);

booleanLinks.innerHTML = listHyperLinks(notAnArrayOfLinks);
numberNotArray.innerHTML = listHyperLinks(alsoNotAnArrayOfLinks);
validUrlArray.innerHTML = listHyperLinks(arrayOfLinks);
validUrlArrayJunk.innerHTML = listHyperLinks(anotherArrayOfLinks);

notNameArray.innerHTML = listNames(notAnArrayOfNames);
smallArray.innerHTML = listNames(arrayOfNamesTooSmall);
invalidSecondParamater.innerHTML = listNames(arrayOfNames, "cheeseburger");
validUlArray.innerHTML = listNames(arrayOfNames);
validOlArray.innerHTML = listNames(arrayOfNames, "ol");
