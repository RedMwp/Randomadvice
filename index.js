async function generate() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  document.querySelector("h1").innerText = "A D V I S E # " +data.slip.id;
  document.querySelector("p").innerText = '"' + data.slip.advice + '"';
}
generate()
document.querySelector('button').onclick = () => {
  generate();
}