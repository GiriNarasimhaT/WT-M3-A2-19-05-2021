function addvalues(){
    var a = document.getElementById("value1").value;
    var b = document.getElementById("value2").value;
    if(a=='' || b=='')
    {
        window.alert("Enter the Integers to Add");
    }
    else{
        x=parseInt(a);
        y=parseInt(b);
        var sum=x+y;
        document.getElementById("sum").innerHTML = 'Sum : '+ sum;
    }
}
