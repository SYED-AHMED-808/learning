# New Things Which I am Learning

1. [Testing with Jest](https://github.com/SYED-AHMED-808/learning#testingwithjest)



## testingwithjest

 ## Lets Write our very first test with test runner

. why test runner? 
1. Dry
2. auto run (infastructure )
3. pretty test result
4. predicatable for team
5. Continues intergration

step 1: create project then install jest library
step 2: create a test file name ``` file_name.test.js```
step 3: now add tests in the test.js file by using jest syntax
step 4: add scripts cmd in package .json "test":"jest" and "watch":"jest --watch"


jest syntax

``` 
it("works",()=>{ // works is test name
    expect(1)     // expect =>  contains our test version
    .toBe(1);  //toBe => contains value we want it to be equal 
})
```
