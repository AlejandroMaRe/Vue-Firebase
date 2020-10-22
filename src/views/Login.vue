<template>
    <div class="login">
        <h3> Sing in </h3>
        <input v-model="email" type="text" placeholder="Email"><br>
        <input v-model="password" type="password" placeholder="Password"><br>
        <button @click="login">Connection</button>
        <p>You don´t have an account ?  You can <router-link to="/sign-up">create  one</router-link></p>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name:'login',
    data(){
        return {
            email: null,
            password: null
        };
    },
    methods:{
        login: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                function(user){
                    console.log(user);
                    location.reload();
                },
                function(error){
                    alert('Ops.' + error.message);
                }
            )
        }
    }
}
</script>

<style scoped>
.login{
    margin-top: 40px;
}
input{
    margin: 10px;
    width: 20%;
    padding: 15px;
}
button{
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}
p{
    margin-top: 40px;
    font-size: 13px;
}
p a {
    text-decoration: underline;
    cursor: pointer;
}
</style>