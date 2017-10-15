function numberOnly(len){
    this.value=this.value.replace(/\D/g,"");
    if(this.value.length>len){
        this.value=this.value.slice(0,6);
    }
}