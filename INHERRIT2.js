function App(){

}


function WebApp(name,url,technologies,licence,stars){
    this.name=name;
    this.url=url;
    this.technologies=technologies;
    this.licence=licence;
    this.stars=stars;
}
WebApp.prototype.getData=function(){
    console.log(this.name + " " + this.url + " " +this.technologies + " "
    + this.licence + " " + this.stars);
}
WebApp.prototype.reactBased=function(){
 return (this.technologies==="React");
}

function MobileApp(name,platforms,licence,stars){
    this.name=name;
    this.platforms=platforms;
    this.licence=licence;
    this.stars=stars;
}
MobileApp.prototype.getData=function(){
    console.log(this.name + " " + this.platforms + " " +this.licence + " "
    + this.stars);
}

MobileApp.prototype.forAndroid=function(){
    return (this.technologies==="Android")
}

var appW1= new WebApp("facebook","https//facebook.com","js,html","CC",4);
var appW2= new WebApp("facebook","https//facebook.com","React","1325",4);
var appM1=new MobileApp("instagram","android","5465",3);
console.log(appW1.reactBased())
console.log(appW2.reactBased())
console.log(appM1);
appM1.getData();