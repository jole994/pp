(function (){
    function Product(name,price,expirationDate){
        if( !name || !price || !expirationDate){
            throw new Error("You have to insert name, price, expirationDate!");
        }
        this.id=(((99999-10000)*Math.random())+10000).toFixed(0);
        this.name=name;
        this.price=price.toFixed(2)
        this.expirationDate=new Date(expirationDate);
        this.getInfo=function(){
            string=this.name[0].toUpperCase() + this.name.charAt(this.name.length-1).toUpperCase() 
            + this.id + ", " + this.name[0].toUpperCase() + this.name.slice(1,this.name.length).toLowerCase()
            + ", " + this.price;
            return string;
        }
    }

    function ShoppingBag(){
        this.listOfProducts=[];
        this.addPoduct=function(productToBuy){
            if(!(productToBuy instanceof Product)){
                throw new Error("You have to insert product that is instance of Product constructor function");
            }
            var today=Date.now();
            var exp=Date.parse(productToBuy.expirationDate);
            if(exp<today){
                console.log(productToBuy.name+": watch out expiration date!");
                
            }else{
                this.listOfProducts.push(productToBuy);
            }  
        }

        this.averageProductPrice=function(){
            var sum=0;
            this.listOfProducts.forEach(function(element){
                sum += parseFloat(element.price);
            })
            return (sum/this.listOfProducts.length).toFixed(3);
        }

        this.getMostExpensive=function(){
            var max=-1000;
            var infoMax;
            var arrOfPrices= this.listOfProducts.map( function(element){
                if(max<parseFloat(element.price)){
                    max=parseFloat(element.price);
                    infoMax=element.getInfo();
                }
                return parseFloat(element.price)
            } )
            return "Most expensive:" + max + "RSD ---> " + infoMax ;
        }

        this.totalPriceOfProducts=function(){
            var sum=0;
            var arrOfPrices= this.listOfProducts.forEach( function(element){
                sum += parseFloat(element.price);
            } )
            return sum;
        }
    }

    function PaymentCard(accountBalance,validityDate){
        if( !accountBalance || !validityDate){
            throw new Error("You have to insert account balance, status, expiration date of payment card");
        }
        this.accountBalance=accountBalance;
        this.status="";
        var val=new Date(validityDate)
        this.validityDate=val.getDate() + "." + val.getMonth()+1 + "." + val.getFullYear();

        if(Date.parse(validityDate) < Date.now()){
            this.status="inactive";
        }else{
            this.status="active";
        }

    }

    function checkoutAndBuy(shopBag,card){
        if(!(shopBag instanceof ShoppingBag) || !(card instanceof PaymentCard)){
            throw new Error("You have to insert valid values for shopBag and card");
        }
        if(card.status==="inactive"){
            return "Your card is inactive,you can not buy those items"
        }
        if(card.accountBalance < shopBag.totalPriceOfProducts() ){
            return "Not enough money,missing: " + (shopBag.totalPriceOfProducts()-card.accountBalance);
        }
        return "Your purchase was succesful"
    }
    //////////////////////////////
    var milk=new Product("milk",92.562,"June 1 2024");
    var flour=new Product("flour", 63, "January 15 2021");
    var cocoa=new Product("cocoa powder", 368, "Oct 12 2021")
    var butter=new Product("butter", 451, "Oct 4 2021")
    var water=new Product("water", 53, "Oct 12 2023")
    // console.log(milk.getInfo());
    // console.log(flour.getInfo());
    // console.log(cocoa.getInfo());
    var myShoppingBag=new ShoppingBag();
    // console.log(myShoppingBag);
    (myShoppingBag.addPoduct(milk));
    (myShoppingBag.addPoduct(flour));   //exp date 
    (myShoppingBag.addPoduct(cocoa));
    (myShoppingBag.addPoduct(butter));
    (myShoppingBag.addPoduct(water));
    // console.log(myShoppingBag);
    //console.log(myShoppingBag.averageProductPrice());
    //console.log(myShoppingBag.getMostExpensive());
    //console.log(myShoppingBag.totalPriceOfProducts());
    var mycard=new PaymentCard(7800,"Jan 2 2023");
    //console.log(mycard);
    
    console.log(checkoutAndBuy(myShoppingBag,mycard));

})();
