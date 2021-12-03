function addressSame()
{
    if (document.getElementById("same").ariaChecked)
    {
        document.getElementById("secondaryaddress").value = document.getElementById("primaryaddress").value;
        document.getElementById("secondaryzip").value = document.getElementById("primaryzip").value;
    }
    else
    {
        document.getElementById("secondaryaddress").value ="";
        document.getElementById("secondaryzip").value = "";
    }
}