// var vs let vs const 
// scope
    // global functional block 

// var comes under functional scope
// const and let are block scope

// VARIABLE SHADOWING 
    // int x = 10;
    // void func() {
    //     int x = 20;   // shadows global x
    //     cout << x;    // prints 20
    // } 
    // cout<< x; // print 10

    // if we try first declare var and then let its ok
    // but if we try let and then var it will give error


//  let and const cant be re declare in the same scope but var can be re declared in the same scope 


// HOISTING 
    // javascript moves your function and variable declaration at the top of the code this is called hoisting
    // LET IS ALSO HOISTED BUT IN THE TEMPORAL DEAD ZONE


// TEMPORAL DEAD ZONE
    // 
