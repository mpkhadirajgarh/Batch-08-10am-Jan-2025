let age = 18 ;

let Gender = "Male"

if(age>=21 && Gender=="Male") {

    console.log(`You are eligible for marriage, Because your age is:${age} and Gender:${Gender}`)
}

else if(age>=18 && Gender=="Female") {

    console.log(`You are eligible for marriage, Because your age is: ${age} and Gender:${Gender}`)
}
else {

    console.log(`You are Not Eligible for Marriage Becuase You Not Fit in age(${age}) && ${Gender} Criteria`)
}