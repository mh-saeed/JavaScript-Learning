let elem = document.getElementById(`search`);

elem.addEventListener(`click`, function (e) {
  elem.style.color = `Green`;
  let x = document.getElementById("myText");
  var defaultVal = x.defaultValue;
  var currentVal = x.value;
  location.href = `${currentVal ? currentVal : `https://${defaultVal}`}`;

  let clicked = e.target;
  console.log(clicked);
});
