var BackPattern, BackSlider, BackMeasure,
    BackWidth, BackHeight,
    BackDirection = 0;

const BACK_WIDTH = 30, BACK_HEIGHT = 6;

async function main()
{
    BackPattern = $('#back-pattern');
    BackSlider = $('#back-slider');
    BackMeasure = $('#back-measure');

    window.addEventListener('resize', scaleBack);
    setInterval(updateBack, 2000);
    scaleBack();

    updateBack();
}

function scaleBack()
{
    BackWidth = Math.ceil(window.innerWidth / BackMeasure.offsetWidth);
    BackHeight = Math.ceil(window.innerHeight / BackMeasure.offsetHeight);

    BackPattern.setAttribute('style', `width:${BackWidth * BACK_WIDTH}rem;height:${BackHeight * BACK_HEIGHT}rem;`);
}

function updateBack()
{
    let style = '',
        reverse = (BackDirection % 4 >= 2) ? ' reverse' : '';

    if (BackDirection % 2 == 0)
    {
        let top = Math.floor(Math.random() * BackHeight) * BACK_HEIGHT;

        style +=
            `left:0;top:${top}rem;width:100%;height:${BACK_HEIGHT}rem;` +
            `animation:back-slide-x 1.9s cubic-bezier(.5,0,.5,1)${reverse};`;
    }
    else
    {
        let left = Math.floor(Math.random() * BackWidth) * BACK_WIDTH;

        style +=
            `left:${left}rem;top:0;width:${BACK_WIDTH}rem;height:100%;` +
            `animation:back-slide-y 1.9s cubic-bezier(.5,0,.5,1)${reverse};`;
    }

    BackSlider.setAttribute('style', style);

    BackDirection++;
}