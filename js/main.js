import { fetchUser } from "./api/githubApi.js";
import { showProfileDetails } from "./ui/profileUi.js";
import { updateMissingState, updateCreatedTime } from "./utils/helpers.js";

const form = document.querySelector("#search-form");
const input = document.querySelector("#username-input");

async function readUserName(e) {
   e.preventDefault();
   const userName = input.value;
   console.log(userName);

   try {
      const response = await fetchUser(userName);
      const data = await response.json();

      if (!data || data.status === "404") {
         alert("Error: This repo not found");
      }

      const newData = updateMissingState(data);
      newData.created_at = updateCreatedTime(data.created_at);
      showProfileDetails(newData);

      console.log(response);
      console.log(data);
      console.log(newData);
   } catch (error) {
      console.log(error);
      alert(error);
   }
}

form.addEventListener("submit", readUserName);
console.log(form);
