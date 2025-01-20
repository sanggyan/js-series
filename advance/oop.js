function personalInfo(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
};

personalInfo1 =  personalInfo("sangyan",8,true);
//personalInfo2 = new personalInfo("samak",10,true);

console.log(personalInfo1);
//console.log(personalInfo2);