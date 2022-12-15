let count=new Array();
let mass_one = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let mass_two = [4, 2, 21, 12, 13, 34, 46, 79, 10, 21, 34];
let variable = document.getElementById('solve--array')
for(let i = 0;i <mass_one.length;i++){
        
        count[i]= mass_one[i]+mass_two[i];
        
    }
    variable.innerHTML = count