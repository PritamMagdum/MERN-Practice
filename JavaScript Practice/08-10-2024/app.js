let tbody = document.getElementById("tbody");

let fetchAPI = async () => {
    let data = await fetch("https://api.github.com/users");
    let finalData = await data.json();
    // console.log(finalData)
    finalData.map((m) => {
        tbody.innerHTML += `
         <tr>
                <td>${m.id}</td>
                <td>${m.login}</td>
                <td><img src=${m.avatar_url} alt=${m.id}></td>
                <td><a href=${m.url}>Link</a></td>
                <td>${m.node_id}</td>
            </tr>
        `
    })
}

fetchAPI();