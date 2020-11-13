//use event load in window to loaded html and styling css files 
window.addEventListener('load',function(){
    //create nav bar 
    // query all sections in dom
    const thesec=document.querySelectorAll("section");
    // the sec return nodelist and converted to array to use foreach functionality of array in it and access it directly
    const thesections=Array.from(thesec);
    //select unorder list in the dom 
    const newUl=document.querySelector("#navbar__list");
    //  use document fragmention to get the best performance in code
    const fragment=document.createDocumentFragment();
    thesections.forEach((sec,index)=>{
       
        
        const newLi=document.createElement('li');
        const newAnchor=document.createElement('a');
        //using style in li element
        
        //extract the data-nav value form the section 
        const new_data_nav=sec.getAttribute("data-nav");
        
        //console.log(new_data_nav);
        // add value of data-nav to the links we are created
        //newAnchor.textContent=new_data_nav;
        const link=document.createTextNode(new_data_nav);
        newAnchor.appendChild(link);

        //append anchor links to li element
        newLi.appendChild(newAnchor);
        // append li elements to fragment to little reflow and repain
        fragment.appendChild(newLi);
        //scroll links into sections when you click it
          newAnchor.addEventListener('click',function(event){
           // prevent default action which is the page to quickly scroll
            event.preventDefault();
          sec.scrollIntoView({behavior:"smooth"});
          
          console.log(newAnchor);

          });
          

    });
      //append the result of fragment to the list to control it
    newUl.appendChild(fragment);
      console.log(newUl);
     
     ///////////////////////////////////////////////////////////////

    // create active section by using intersection observer
    /// to make active scrolling in the view port
 /*  const option={
    threshold:0.45,
  } */
///active link and section
const observer=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    // // If our target enters the viewport, add an “active” class to it
    if(entry.isIntersecting)
    {      
          
           //add active class to the section
           entry.target.classList.add("your-active-class");
           //test in console if the section in the view or out and section is active
           console.log("entry in the view");         
         // add active secion to the active link to make highlight
         //by calling back function which retrieve the active link  
     
         //apply highlight to active link
         
          get_active_link(entry);
                 
 
    }
    else{
     // if you scroll out and skip acive secion ..remove acive class
     entry.target.classList.remove("your-active-class");
     //section is not active
     console.log("entry out of the view");
    }
    
    
    
    
  });
});
// beacuse the secion return node list i use foreach in it
thesections.forEach(section=>{
   observer.observe(section);
});//end of observe sections


// function to get active link
function get_active_link(active_section){
    // get all links to get data from it
  let links=document.querySelectorAll("a");
    //get data_nav from active secion
    let active_data_section=active_section.target.getAttribute("data-nav")
 
    // check using if condition
    // which link has the textContent equal to active section data-nav then add the active section to active link
  links.forEach(link=>{
     
    if(link.textContent=== active_data_section){
           
      //add active class to active link
          link.classList.add("your-active-class");
           
    }
 
    
   });
        
}

 
//end of the load page
});
    
  

  
  
   