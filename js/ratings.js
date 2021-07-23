function collect_ratings() {
const ratings = { 
    count: 0,
    sum: 0,
    average: 0
}
let rating = 0;
const elements = document.querySelectorAll('.rating');
console.log(elements);
elements.forEach(element => {
    console.log(element.id)
rating = parseInt(element.name)
console.log("rating", rating)
ratings.count += parseInt(element.value);
console.log("elementval", element.value)
console.log(ratings.count)
ratings.sum += parseInt(element.value)*rating;
console.log(ratings.sum)
}

);
if (ratings.count!==0) {
ratings.average = ratings.sum / ratings.count;
}
return ratings;
};

document.addEventListener('change', () => {
    const ratings = collect_ratings();
    document.querySelector('#average').value = ratings.average.toFixed(2);
});
