export function getCommits() {
    return fetch('https://api.github.com/repos/sntlln93/fulltimeforce_assessment/commits')
    .then(response => response.json());
}