//google search function on click of google search button.

function googleSearch()
{
    let text=document.getElementById("searchbar").value;
    let cleanQuery = text.replace(" ","+",text);
    let url='http://www.google.com/search?q='+cleanQuery;

    window.location.href=url;
}