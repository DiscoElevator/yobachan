import Vue from "vue";
import Resource from "vue-resource";
import App from "./app.vue";

Vue.use(Resource);

new Vue({
	el: 'body',
	components: {
		app: App
	}
});