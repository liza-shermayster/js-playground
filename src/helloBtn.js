

const app = document.getElementById('app');
app.innerHTML = `<button id="helloBtn">hello</button>`;

const helloBtn = document.getElementById('helloBtn');
helloBtn.addEventListener("click", () => {
    console.log('hello')
})


