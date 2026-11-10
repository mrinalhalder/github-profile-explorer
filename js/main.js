import { fetchUser, fetchRepos } from "./api/githubApi.js";
import { showProfileDetails, profileNotFound } from "./ui/profileUi.js";
import { showRepositories, repositoriesNotFound } from "./ui/repositoryUi.js";
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
      const response2 = await fetchRepos(userName);
      const repos = await response2.json();

      if (!data || data.status === "404") {
         profileNotFound();
         repositoriesNotFound();
         return;
      }

      const newData = updateMissingState(data);
      newData.created_at = updateCreatedTime(data.created_at);

      showProfileDetails(newData);
      showRepositories(repos);

      console.log(repos);
   } catch (error) {
      console.log(error);
      alert(error);
   }
}

form.addEventListener("submit", readUserName);
console.log(form);
