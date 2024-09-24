//Noakhali 


document.getElementById('donateNoakhali').addEventListener('click',function(){
    let DonateAmount = Number(document.getElementById('noakhaliDonation').value)
    let TotalFunding = Number(document.getElementById('totalNoakhaliFund').innerText)
    let balance =Number(document.getElementById('mainBalance').innerText)
    if(DonateAmount >= 0){
        if(DonateAmount <= balance){
            if(!isNaN(DonateAmount)){
                balance = balance - DonateAmount;
                TotalFunding = TotalFunding + DonateAmount;
                console.log(balance);
                console.log(TotalFunding);
                document.getElementById('mainBalance').innerText = balance;
                document.getElementById('totalNoakhaliFund').innerText = TotalFunding
            }else{
                alert('Not possible to donate')
            }
           }else{
                alert('Not possible to donate')
           }
    }else{
        alert('Not possible to donate')
    }
   
    
})

//Feni

document.getElementById('donateFeni').addEventListener('click',function(){
    let DonateAmount = Number(document.getElementById('feniDonation').value)
    let TotalFunding = Number(document.getElementById('totalfeniFund').innerText)
    let balance =Number(document.getElementById('mainBalance').innerText)
    if(DonateAmount >= 0){
        if(DonateAmount <= balance){
            if(!isNaN(DonateAmount)){
                balance = balance - DonateAmount;
                TotalFunding = TotalFunding + DonateAmount;
                console.log(balance);
                console.log(TotalFunding);
                document.getElementById('mainBalance').innerText = balance;
                document.getElementById('totalfeniFund').innerText = TotalFunding
            }else{
                alert('Not possible to donate')
            }
           }else{
                alert('Not possible to donate')
           }
    }else{
        alert('Not possible to donate')
    }
   
    
})

document.getElementById('donateQuota').addEventListener('click',function(){
    let DonateAmount = Number(document.getElementById('quotaDonation').value)
    let TotalFunding = Number(document.getElementById('totalQuotaFund').innerText)
    let balance =Number(document.getElementById('mainBalance').innerText)
    if(DonateAmount >= 0){
        if(DonateAmount <= balance){
            if(!isNaN(DonateAmount)){
                balance = balance - DonateAmount;
                TotalFunding = TotalFunding + DonateAmount;
                console.log(balance);
                console.log(TotalFunding);
                document.getElementById('mainBalance').innerText = balance;
                document.getElementById('totalQuotaFund').innerText = TotalFunding
            }else{
                alert('Not possible to donate')
            }
           }else{
                alert('Not possible to donate')
           }
    }else{
        alert('Not possible to donate')
    }
   
    
})


