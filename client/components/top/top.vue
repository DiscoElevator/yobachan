<template>
	<div class="top">
		<board-list></board-list>
	</div>
</template>

<style>
.top {
	display: flex;
	border-bottom: 2px solid #9E9E9E;
}
</style>

<script>
import BoardList from "./board-list.vue";

export default {
	components: {BoardList}
};
</script>