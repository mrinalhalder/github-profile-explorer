export async function fetchUser(userName) {
   const response = await fetch(`https://api.github.com/users/${userName}`);

   return response;
}

export async function fetchRepos(userName) {
   const response = await fetch(
      `https://api.github.com/users/${userName}/repos`,
   );

   return response;
}
