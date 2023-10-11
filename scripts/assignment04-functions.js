function listImages(imageArray)
{
    let imageList = "<ul>";

    if(!Array.isArray(imageArray))
    {
        return `*** Error: you must provide an array. \"${imageArray}\" is not an array ***`;
    }

    imageArray.forEach(image => {
        if(typeof image !== "string")
        {
            console.error(`*** Error: ${image} was not a string, it will not be added ***`);
        }
        else
        {
            imageList += `<li><img src="${image}" alt="${image}"></li>`;
        }
    });

    imageList += "</ul>";
    return imageList;
}

function listHyperLinks(linkArray)
{
    let linkList = "<ul>";

    if(!Array.isArray(linkArray))
    {
        return `*** Error: you must provide an array. \"${linkArray}}\" is not an array ***`;
    }

    linkArray.forEach(link => {
        if(typeof link !== "string")
        {
            console.error(`*** Error: ${link} was not a string, it will not be added ***`);
        }
        else
        {
            linkList += `<li><a href="${link}">${link}</a></li>`;
        }
    })

    linkList += "</ul>";
    return linkList;
}

function listNames(nameArray, listType = "ul")
{
    if (!Array.isArray(namesArray)) 
    {
        return `*** Error: you must provide an array. \"${namesArray}}\" is not an array ***`;
    }

    if (listType !== 'ul' && listType !== 'ol') 
    {
        return '*** Error: The second parameter must be either "ul" or "ol" ***';
    }

    let listHTML = `<${listType}>`;

    namesArray.forEach(name => {
        if (typeof name !== "string") 
        {
            console.error(`*** Error: "${name}" was not a string, it will not be added ***`);
        }
        else
        {
            listHTML += `<li>${name}</li>`;
        }
    });

    listHTML += `</${listType}>`;

    return listHTML;
}