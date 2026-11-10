const profile = document.querySelector("#profile-container");

export function showProfileDetails(data) {
   profile.innerHTML = `
      <div class="profile-card"> 
         <div class="profile-top">
            <div class=.profile-avatar">
               <img src="${data.avatar_url}">
            </div>

            <div class="profile-info">
               <ul>
                  <li class="profile-name"> ${data.name} </li>
                  <li class="profile-username"> <a href="${data.html_url}">${data.login}</a></li>
                  <li class="profile-bio"> ${data.bio} </li>
               </ul>

               <div class="profile-stats">
                  <div class="stat-card">
                     <h3> Repos </h3>
                     <p> ${data.public_repos} </p>
                  </div>
                  <div class="stat-card">
                     <h3> Followers </h3>
                     <p> ${data.followers} </p>
                  </div>
                  <div class="stat-card">
                     <h3> Following </h3>
                     <p> ${data.following} </p>
                  </div>
               </div>

               <ul class="other-info" style="padding: 25px 0px 5px">
                  <li> <span> Location: </span> ${data.location} </li>
                  <li> <span> Company: </span> ${data.company} </li>
                  <li> <span> Website/Portfolio: </span> ${data.blog} </li>
                  <li> <span> Github Link: </span> <a href="${data.html_url}">${data.html_url}</a></li>
                  <li> <span> Account Creation Date: </span> ${data.created_at} </li>
               </ul>

            </div>

         </div>
      </div>
   `;
}
