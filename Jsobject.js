function Objects() {
    
    this.fobj=element(by.model("first"));
    this.sobj=element(by.model("second"));
    this.cobj=element(by.id("gobutton"));
    this.robj=element(by.css("h2[class='ng-binding']"));
}

module.exports=new Objects;
