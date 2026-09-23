const API_URL = "https://olive-branch-api-dev.onrender.com/api/organizations";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
    renderOrganizations(data);
    })
    .catch(error => {
        console.error("Failed to fetch organizations:", error);
    });

    function renderOrganizations(organizations) {
    const container = document.getElementById("organizations");

    container.innerHTML = "";

    if (organizations.length === 0) {
        container.innerHTML = "<p>No organizations available.</p>";
        return;
    }

    organizations.forEach(organization => {
        const card = document.createElement("article");

        card.innerHTML = `
            <h2>${organization.name}</h2>
            <p>${organization.description}</p>
            <p>${organization.category}</p>
            <a href="${organization.website}" target="_blank">
                Visit organization
            </a>
        `;

        container.appendChild(card);
    });
}