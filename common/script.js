window.addEventListener('load', COMMON_LOAD);

function $(query) {
    let nodes = document.querySelectorAll(query);
    if (nodes.length == 1) return nodes[0];
    else return Array.from(nodes);
}

function COMMON_LOAD() {
    if (main) main();
}