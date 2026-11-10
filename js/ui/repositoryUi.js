const repoCount = document.querySelector("#repository-count");
const repoList = document.querySelector("#repository-list");

export function showRepositories(repos) {
   repoCount.textContent = `${repos.length}`;
   if (repos.length === 0) {
      repoList.innerHTML = `<p style="color: var(--muted);">No repositories found.</p>`;
      return;
   }

   repoList.innerHTML = repos
      .map(
         (item) => `
      <div class="repository-card">
         <a href="${item.html_url}" target="_blank" class="repository-name">${item.name}</a>
         
         <p class="repository-description">
            ${item.description || "No description available"}
         </p>
         
         <div class="repository-meta">
            <span>
               <span class="language-dot"></span> 
               ${item.language || "HTML"}
            </span>
            <span>⭐ ${item.stargazers_count}</span>
            <span>🍴 ${item.forks_count}</span>
         </div>

         <p class="repository-description"> ${item.visibility} </p>
      </div>
   `,
      )
      .join("");
}

export function repositoriesNotFound() {
   repoCount.textContent = 0;
   repoList.innerHTML = `<p style="color: var(--muted);">No repositories found.</p>`;
}
