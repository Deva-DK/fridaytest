function display()
{
    var a=document.getElementById('no1').value
    var b=document.getElementById('no2').value
    var c=parseInt(a)+parseInt(b)
    document.getElementsByName('output')[0].innerHTML=c;
    document.getElementsByName('output')[1].innerHTML=c;
}