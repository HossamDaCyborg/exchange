
        var key =config.MY_API_KEY;
        
        
        document.addEventListener('DOMContentLoaded',()=>{
            fetch(`https://api.fastforex.io/fetch-all?api_key=${key}`).then(blueberry=>blueberry.json()).then(crambery =>{ 



                let g=Object.keys(crambery["results"]);
                let para=document.querySelector('.br')
                console.log(key)    
                for(let key of g){
                    let ll=document.createElement('option')
                    ll.textContent=`${key}`
                    para.appendChild(ll);
                    



                }
                document.querySelector('.quack').addEventListener('click',()=>{
                    let val=parseInt(document.querySelector('#inp').value);
                    let rate =document.querySelector('.br').value;
                    let bingo =parseFloat(crambery["results"][rate]);
                    document.querySelector('.res').textContent=val * bingo







                })

                }


              );})


              
              
    