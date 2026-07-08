const input = document.getElementById("#favchap");
const button = document.getElementById("button");
const list = document.getElementById("_______");

const li = document.createElement("li");

const deleteButton = document.createElement("button");

li.textContent = input.value;

deleteButton.textContent = "❎";

li.append(deleteButton);

li.append(li);