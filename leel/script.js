window.addEventListener('load', init);

async function post(path, data)
{
    let response = await fetch(path, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    return await response.json();
}

async function init()
{
    let rose = document.getElementById('rose');

    rose.addEventListener('click', set);

    let text = (await post('/leel/', {})).text ?? '';

    display(text);
}

async function set()
{
    let text = prompt('Nachricht eingeben.');

    text = (await post('/leel/', { write: true, text: text })).text ?? '';

    display(text);
}

function display(text)
{
    document.getElementById('text').innerText = text;
}