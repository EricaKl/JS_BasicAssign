/* Write a Program to convert an array of objects to an object
	based on a given key */


    const convert = (arr,key) => 
        // Write your code here
       
        arr.reduce((obj,item)=>{
          obj[item[key]] = item
          return obj
        },{})        
        const peopleObject = convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id');
       console.log(peopleObject)
    
   // document.getElementById('showarrayobject').innerHTML = peopleObject;
   
    
    
   
    
    