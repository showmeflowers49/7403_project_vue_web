<template>
	<div class="content">
		
	</div>
</template>

<script>
	export default{
		data() {
			return{
				
			}
		},
		beforeCreate() {
			
		},
		created() {
			
		},
		beforeMount() {
			
		},
		mounted() {
			this.$nextTick(() => {
				
			})
		},
		beforeDestroy() {
			
		},
		destroyed() {
			
		}
	}
</script>

<style>
	.content{
		height: 100%;
		width: 100%;
		overflow: hidden;
		background-image: url(../../../public/static/img/back.png);
		background-size: 100% 100%;
	}
	
	.enter-action{
		position: relative;
		display: inline-block;
		height: 100%;
		width: 45%;
		margin-top: 2%;
		margin-left: 4%;
		margin-right: 2%;
		text-align: center;
		color: #FFFFFF;
	}
	
	.car-img{
		width: 100%;
		height: 50%;
		background-image: url(../../../public/static/img/contion.png);
		background-size: 100% 100%;
		margin-top: 5%;
	}
	
	.car-info{
		position: absolute;
		text-align: left;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 3%;
	}
	
	.leave-action{
		position: relative;
		display: inline-block;
		height: 100%;
		width: 45%;
		margin-top: 2%;
		text-align: center;
		color: #FFFFFF;
	}
</style>
