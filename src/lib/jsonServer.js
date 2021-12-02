import Axios from 'axios'
import Cookies from "universal-cookie"
let messageError = ''
let message= ""

const cookies= new Cookies()
 const login= async(e, email, password)=> {
    e.preventDefault()
    await Axios.get("https://fake-server-burguer-queen.herokuapp.com/users", {params : {email: email, password: password}})
    .then((response)=>{
       
       
        return response.data
    })
    .then((response)=>{
        if(response.length>0){
          
let respuesta = response[0];

cookies.set("id", respuesta.id, {path:'/'});
cookies.set("name", respuesta.name, {path:'/'});
cookies.set("email", respuesta.email, {path:'/'});
cookies.set("admin", respuesta.role.admin, {path:'/'}); 
cookies.set("waiter", respuesta.role.waiter, {path:'/'}); 
cookies.set("kitchen", respuesta.role.kitchen, {path:'/'}); 

if(cookies.get('admin')==='true'){
    window.location.href= '/admin'
}else if(cookies.get('waiter')=== 'true'){
 window.location.href= '/menu'
}else if(cookies.get('kitchen')=== "true"){
    window.location.href= '/cocina'
}



        }else{
            messageError = 'El usuario o la contraseña no son correctos'
        }
    })
    .catch(()=>{
     

    messageError = 'Ocurrió un error, intente nuevamente'
         
        
    })
}

export {messageError, login}