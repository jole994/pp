function App(name,licence,stars){
    this.name=name;
    this.licence=licence;
    this.stars=stars;
}
App.prototype.isCCLicence=function(){
    return this.licence==="CC"
}
App.prototype.likeThis=function(){
    this.stars+=1;
}
App.prototype.showStars=function(){
    console.log(this.stars)
}

function WebApp(name,url,technologies,licence,stars){
    App.call(this,name,licence,stars)
    this.url=url;
    this.technologies=technologies;
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData=function(){
    console.log(this.name + " " + this.url + " " +this.technologies + " "
    + this.licence + " " + this.stars);
}
WebApp.prototype.reactBased=function(){
 return (this.technologies==="React");
}

function MobileApp(name,platforms,licence,stars){
    App.call(this,name,licence,stars)
    this.platforms=platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

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