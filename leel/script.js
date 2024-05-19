window.addEventListener('load', init);

var Password = '';

async function get()
{
    let response = await fetch("https://io.eliaskamm.com/leel/", {
        headers: {
            'Authorization': `Basic ${btoa('leel:' + Password)}`,
            'X-Requested-With': 'XMLHttpRequest'
        },
        method: 'GET'
    });

    if (response.status != 200) return null;

    return await response.text();
}

async function init()
{
    let text = null;

    while (text == null)
    {
        Password = prompt('Passwort eingeben.');
        text = await get();
    }

    let rose = document.getElementById('rose');
    rose.addEventListener('click', set);
    rose.style.display = 'block';

    display(text);
}

async function set()
{
    let text = prompt('Nachricht eingeben.');

    let response = await fetch("https://io.eliaskamm.com/leel/", {
        headers: {
            'Authorization': `Basic ${btoa('leel:' + Password)}`,
            'X-Requested-With': 'XMLHttpRequest'
        },
        method: 'POST',
        body: text
    });

    if (response.status != 200) return;

    display(text);
}

function display(text)
{
    document.getElementById('text').innerText = text;
}