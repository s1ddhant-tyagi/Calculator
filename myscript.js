var screen = document.getElementById('screen');
var buttons = document.querySelectorAll('button');
screenValue = '';
for(item of buttons)
{
    item.addEventListener('click', (e)=>
    {
        var buttonText = e.target.innerText;
        if(buttonText=='x')
        {
            screenValue+='*';
            screen.value=screenValue;
        }
        else if(buttonText=='=')
        {
            screenValue=eval(screenValue);
            screen.value=screenValue;
        }
        else if(buttonText=='C')
        {
            screenValue='';
            screen.value=screenValue;
        }
        else
        {
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}