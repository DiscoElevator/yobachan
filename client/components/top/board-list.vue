<template>
	<ul class="board-list">
		<li v-for="board in boards"><a href="#">{{board.name}}</a></li>
	</ul>
</template>

<style>
.board-list li {
	display: inline;
	padding-left: 5px;
	padding-right: 5px;
}
</style>

<script>
export default {
	data() {
		return {
			boards: []
		};
	},
	ready() {
		this.$http.get("/api/boards").then(response => {
			console.log(response);
			this.$set("boards", response.data);
		});
	}
};
</script>