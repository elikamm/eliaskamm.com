var BackFrame, BackCTX, BackMeasure,
    BackWidth, BackHeight, BackScale;

async function main()
{
    BackFrame = $('#back-frame');
    BackMeasure = $('#back-measure');
    BackCTX = BackFrame.getContext('2d');

    window.addEventListener('resize', scaleBack);
    setInterval(updateBack, 100);
    scaleBack();
}

function scaleBack()
{
    BackScale = BackMeasure.offsetWidth;

    BackWidth = Math.ceil(window.innerWidth / (BackScale * 8));
    BackHeight = Math.ceil(window.innerHeight / (BackScale * 8));

    BackFrame.width = BackWidth * (BackScale * 8);
    BackFrame.height = BackHeight * (BackScale * 8);

    BackCTX.fillStyle = '#000000';
    BackCTX.fillRect(0, 0, BackWidth * (BackScale * 8), BackHeight * (BackScale * 8));

    for (let y = 0; y < BackHeight; y++)
        for (let x = 0; x < BackWidth; x++)
        {
            drawBack(x, y);
        }
}

function updateBack()
{
    for (let i = 0; i < BackWidth * BackHeight / 100; i++)
    {
        drawBack(
            Math.floor(Math.random() * BackWidth),
            Math.floor(Math.random() * BackHeight)
        );
    }
}

function drawBack(x, y)
{
    let char = Math.floor(Math.random() * CHARS.length);

    for (let i = 0; i < 64; i++)
    {
        BackCTX.fillStyle = CHARS[char][i] ? '#ffffff' : '#000000';

        BackCTX.fillRect(
            x * BackScale * 8 + BackScale * (i % 8),
            y * BackScale * 8 + BackScale * Math.floor(i / 8),
            BackScale, BackScale
        );
    }
}