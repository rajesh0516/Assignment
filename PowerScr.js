function onSubmit() {
    var inputValue;
    var ans = 1;
    var cnt = 0;
    //var checkProvider = [3,5]
    inputValue = document.getElementById("num").value;
    for(i =2;ans<=inputValue;){
        ans = ans*i;
        cnt++;
    }
    if(36%2 == 0)
      document.getElementById("ansValue").value = cnt;
}