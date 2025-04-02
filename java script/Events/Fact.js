// Factorial 5 = 5*4*3*2*1 = 120 

let Num = 5 ;

let Total = 1 ;

for(let i = 0 ; i<Num ; i++) {

    Total = Total * (Num-i) ; //  1 * (5-0) = 1*5 = 5 
                             //  5 * (5-1) = 5 * 4 = 20 
                             //  20 * (5-2) = 20 * 3 = 60 
                             //  60 * (5-3) = 60 * 2 = 120 
                             // 120 * (5-4) = 120 * 1 = 120 

}

console.log(Total);