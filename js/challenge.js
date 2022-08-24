//counterTimer/count/heart/input/pause

let countT = document.getElementById("counter")
let count = 0;
let countInterval = setInterval(increasesec, 1000)

const minusSign = document.getElementById("minus")
const plusSign = document.getElementById("plus")

const like = document.getElementById('heart');
let likes = 0;

const paused = document.getElementById("pause")
const isPsaused = false

let form = document.querySelector("form");


//counter increment
function increasesec(){
    count++;
    countT.innerHTML = count
    return count;
}

//minus
minusSign.addEventListener("click", ()=>{
    count--;
    countT.innerHTML = count
    return count;

})

//plus
plusSign.addEventListener("click", ()=>{
    count++;
    countT.innerHTML = count
    return count;
})

//Heart like

like.addEventListener('click', (e) => {
  likes ++
  console.log(e.target)
  let listLikes= document.querySelector('.likes');
  let list = document.createElement('li');
  list.textContent = `${counter.innerHTML} has ${likes} likes`;
  listLikes.appendChild(list);
});

//pause
paused.addEventListener("click", ()=>{
if (paused.innerText === 'pause'){
    like.disabled = 'true';
    minusSign.disabled = 'true';
    plus.disabled = 'true';

    btnPaused();
    paused.innerText = 'resume';
}else if (paused.innerText === 'resume'){
    like.disabled = 'false';
    minusSign.disabled ='false';
    plusSign.disabled = 'false';
    btnPaused();
    paused.innerText = ''
}
});



form.addEventListener("submit", (e) => {
    e.preventDefault();
    addComment();
    form.reset();
} );

const addComment = () => {
    let input = document.getElementById("comment-input").value;
    let activeComments = document.getElementById('list');
    let comment = document.createElement('li');
    comment.innerText = input;
    activeComments.appendChild(comment);
};