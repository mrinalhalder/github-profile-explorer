import { fetchUser } from "./api/githubApi.js";

const form = document.querySelector("#search-form");
const input = document.querySelector("#username-input");

async function readUserName(e) {
   e.preventDefault();
   const userName = input.value;
   console.log(userName);

   try {
      const response = await fetchUser(userName);
      const data = await response.json();

      console.log(response);
      console.log(data);
   } catch (e) {
      console.log(e);
   }
}

form.addEventListener("submit", readUserName);
console.log(form);
