<template>
	<top></top>
	<div>{{test}}</div>
</template>

<style>
body {
	background-color: #faebd7;
}
</style>

<script>
import Top from "./components/top/top.vue";

export default {
	components: {Top},
	data() {
		return {test: "test"};
	}
};
</script>