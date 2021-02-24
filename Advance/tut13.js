// Exercise
// will fetch all links from website named with javascript or word javascript is included in those links
let ilinks = `javascript`;
let a = document.links;
Array.from(a).forEach(function (element) {
    if (element.href.includes(ilinks)){
console.log(element);
}
});