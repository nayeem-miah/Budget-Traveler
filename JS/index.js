const allBtn= document.getElementsByClassName('add-btn');
let count = 0;

for(const btn of allBtn){
    btn.addEventListener('click',function(e){
        count=count+1;
        const placeName=e.target.parentNode.childNodes[1].innerText;
        
        const price=e.target.parentNode.childNodes[3].childNodes[1].innerText;

            id="selected-place-container"
        const selectContainer=document.getElementById('selected-place-container');
        const li=document.createElement('li');

        const p=document.createElement('p');
        p.innerText=placeName;
        const p2=document.createElement('p');
        p2.innerText=price;

        li.appendChild(p);
        li.appendChild(p2);

        selectContainer.appendChild(li);
        // console.log(selectContainer)

// -----------------------------------------------------------------
        totalCost('total-cost',parseInt(price));
    //     const totalCost=document.getElementById('total-cost').innerText;
    //    const convertTotalCost =parseInt(totalCost);
    //    const sum =  convertTotalCost + parseInt(price);

// -----------------------------------------------------------------
        GrandtotalCost('grand-total',parseInt(price));
    // const grandTotal=document.getElementById('grand-total').innerText;
    // const convertGrandTotalCost=parseInt(grandTotal);
    // const sum2=convertGrandTotalCost +parseInt(price);
    // // console.log(sum2);

    //    document.getElementById('total-cost').innerText =sum;
    // setInnerText('total-cost',sum);
    // ---------------------------------------------------------------------
    // setInnerText('grand-total',sum2);
       
        setInnerText('cart-count',count);
        
    })
}

// -------------------------------------------------------------
// same work add a function 
function setInnerText(id,value){
    document.getElementById(id).innerText=value;
}
// function total cost 
function totalCost(id,value){
    const totalCost=document.getElementById(id).innerText;
    const convertTotalCost =parseInt(totalCost);
    const sum  =  convertTotalCost + parseInt(value);
    setInnerText(id,sum);
}
// function Grand total cost 
// function GrandtotalCost(id,value){
//     const totalCost=document.getElementById(id).innerText;
//     const convertTotalCost =parseInt(totalCost);
//     const sum2  =  convertTotalCost + parseInt(value);
//     setInnerText(id,sum2);
// }
function GrandtotalCost(category){
    const totalCost=document.getElementById('total-cost').innerText;
    const convertTotalCost =parseInt(totalCost);
    
    if(category == 'bus'){
        setInnerText('grand-total',convertTotalCost + 100);

    }
    else if(category == 'train'){
        setInnerText('grand-total',convertTotalCost - 200);

    }
    else if(category == 'flight'){
        setInnerText('grand-total',convertTotalCost + 500);

    }
    else{
        setInnerText('grand-total',convertTotalCost);

    }

    
   
}