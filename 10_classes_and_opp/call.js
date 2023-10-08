function setUser(username){
    this.username = username
    console.log("user called")

}
function creatUser(username,email,password){
    setUser.call(this,username)
    this.email = email
    this.password = password


}
const newObj = new creatUser('amit','amit@gmail.com',"@123");
console.log(newObj)