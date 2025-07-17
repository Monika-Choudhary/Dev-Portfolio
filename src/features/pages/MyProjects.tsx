import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  languages_url: string;
  languages: string[];
}

const GitHubProjects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Monika-Choudhary/repos"
        );
        const data = await response.json();

        // Fetch languages for each repository
        const reposWithLanguages = await Promise.all(
          data.map(async (repo: Repo) => {
            const languagesResponse = await fetch(repo.languages_url);
            const languagesData = await languagesResponse.json();
            const languages = Object.keys(languagesData).slice(0, 3); // Get up to 3 languages
            return { ...repo, languages };
          })
        );

        setRepos(reposWithLanguages);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-10">My GitHub Projects</h2>
      <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <li key={repo.id} className="p-4 rounded-lg">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:bg-fuchsia-700 p-2 rounded "
            >
              {repo.name}
            </a>
            <p className=" mt-2">
              {repo.description || "No description available"}
            </p>
            <div className="text-sm ">
              Languages: {repo.languages.join(", ") || "No languages available"}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubProjects;