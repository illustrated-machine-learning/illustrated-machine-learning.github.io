function collapseExplodeHandler() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

function createIndex(res) {
    const lines = res.split(/\r?\n/).map(x => x.trimEnd().replace(/\s\s\s/g, '\t')).filter(x => x != '');
    const title = lines[0].replace('#', '');
    const topics = lines.filter(x => x[0] != '#');

    const navBar = document.getElementById('my-menu');
    const newSection = document.createElement('li');
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu__item', 'collapsible');
    menuButton.textContent = title;
    menuButton.addEventListener("click", collapseExplodeHandler);
    newSection.append(menuButton);
    navBar.append(newSection);

    const menuContentRoot = document.createElement('div');
    menuContentRoot.classList.add('content');
    newSection.append(menuContentRoot);

    const menuTopicList = document.createElement('ol');
    menuContentRoot.append(menuTopicList);

    let currentLevel = 0;
    let currentOl = menuTopicList;

    topics.forEach(element => {
        const matches = element.match(/\[(.*)\]\((.*)\)/);
        if(matches.length !== 3) {
            console.log('Malformed element ' + element);
        }
        else {
            let entry = document.createElement('li');
            let link = document.createElement('a');
            link.classList.add('menu__item', 'h3');
            link.textContent = matches[1];
            link.href = matches[2];
            entry.append(link);

            let tabulations = (element.match(/\t/g) || []).length;
            if(tabulations > currentLevel) {
                newOl = document.createElement('ol');
                currentOl.append(newOl);
                currentOl = newOl;
                currentLevel = tabulations;
            } else if(currentLevel == tabulations) {
                currentOl.append(entry);
            } else {
                currentLevel = 0;
                currentOl = menuTopicList;
                while(currentLevel < tabulations) {
                    console.log(currentOl);
                    currentOl = currentOl.lastChild;
                    currentLevel++
                }
            }
            currentOl.append(entry);
        }
    });

}

function loadIndex(url) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() { createIndex(this.responseText); }
    xhttp.open("GET", url, true);
    xhttp.send();
}

window.addEventListener('load', function () {
    loadIndex('ml-index-website.md');
})