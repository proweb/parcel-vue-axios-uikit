import Vue from 'vue';
import http from 'axios';
import UIkit from 'uikit'; // UIkit framework
import Icons from 'uikit/dist/js/uikit-icons';
import '../css/style.less'; // our styles


// loads the Icon plugin
UIkit.use(Icons);
// components can be called from the imported UIkit reference
UIkit.notification(
    'Welcome, my friend!', {
        status: 'primary',
        pos: 'bottom-center',
    });

// VueJS instanse
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

// Axios request test
http.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
        console.log(response.data.title);
    })
    .catch(function (error) {
        console.log(error);
    });