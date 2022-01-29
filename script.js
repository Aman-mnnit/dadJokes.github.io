const joke= document.querySelector('#joke');
const jokeBtn= document.querySelector('#jokeBtn');
const setHeader ={
    headers:{
        Accept:"application/json"
    }
}
const generateJokes =() =>{
    fetch('https://icanhazdadjoke.com',setHeader).then((res) =>
        res.json()).then((data) =>{
        joke.innerHTML=data.joke;
    })
}
jokeBtn.addEventListener('click', generateJokes);
generateJokes();