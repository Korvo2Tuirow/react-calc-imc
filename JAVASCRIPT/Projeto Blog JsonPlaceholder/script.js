//https://jsonplaceholder.typicode.com/posts

async function postsGet() {
  let postArea = document.querySelector(".posts");
  postArea.innerHTML = "Carregando...";

  let jsonPlacehoder = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  let json = await jsonPlacehoder.json();

  console.log(json);

  if (json.length > 0) {
    postArea.innerHTML = "";

    for (let i in json) {
      let postHTML = `<div><h1>${json[i].title}</h1><p>${json[i].body}</p></div><hr>`;
      postArea.innerHTML += postHTML;
    }
  } else {
    postArea.innerHTML = "Nenhum post para exibir";
  }
};

postsGet();


document.querySelector("#buttonInsert").addEventListener("click", () => {
  let title = document.querySelector("#title").value;
  let body = document.querySelector("#textBody").value;

  if (title && body) {
    addNewPost(title,body);
  } else {
    alert("PREENCHA TODOS OS CAMPOS");
  }
});

async function addNewPost(title, body) {
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      title,
      body,
      userID: 2,
    }),
  });

  document.querySelector("#title").value = '';
  document.querySelector("#textBody").value = '';


postsGet();
};