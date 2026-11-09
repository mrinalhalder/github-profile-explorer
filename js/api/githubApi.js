export async function fetchUser(userName) {
   const response = await fetch(`https://api.github.com/users/${userName}`);

   return response;
}
