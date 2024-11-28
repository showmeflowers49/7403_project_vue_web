<template>
	<div class="login-content">
		<el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
			<h2 class="login-title"></h2>
			<el-form-item label="账号" prop="username">
				<el-input type="text" placeholder="请输入账号" v-model="form.username" />
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input type="password" placeholder="请输入密码" v-model="form.password" />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
			</el-form-item>
		</el-form>

		<el-dialog title="温馨提示" :visible.sync="dialogVisible" width="30%">
			<span>请输入账号和密码</span>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				form: {
					username: '',
					password: '',
					captcha: ''
				},

				// 表单验证，需要在 el-form-item 元素中增加 prop 属性
				rules: {
					username: [{
						required: true,
						message: '账号不可为空',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '密码不可为空',
						trigger: 'blur'
					}],
					// captcha: [{
					// 	required: true,
					// 	message: '验证码不可为空',
					// 	trigger: 'blur'
					// }]
				},

				// 对话框显示和隐藏
				dialogVisible: false
			}
		},
		methods: {
			onSubmit(formName) {
				// 为表单绑定验证功能
				this.$refs[formName].validate((valid) => {
					if (valid) {
						let params = {
							'username':this.form.username,
							'password':this.form.password,
							'captcha':'tongxiang-cms'
						}
						// let params = Qs.stringify(formData)
						this.api.login(params).then(res => {
							// this.$router.push("/home")
							if(res.code==1){
								let cookie = {
									'Authorization':res.data
								}
								this.cookie.setCookie(cookie,7)
								this.$router.push("/home")
							}
						})
					} else {
						this.dialogVisible = true;
						return false;
					}
				});
			}
		},
		beforeCreate(){
			// this.$router.push("/home")
		}
	}
</script>

<style lang="scss">
	.login-content{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		text-align: center;
		background: url(../../../public/static/img/login_bg.jpg);
		background-size: 100% 100%;
	}
	
	.login-box {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		border: 1px solid #DCDFE6;
		width: 350px;
		padding: 35px 35px 15px 35px;
		border-radius: 5px;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		box-shadow: 0 0 25px #909399;
	}

	.login-title {
		text-align: center;
		margin: 0 auto 40px auto;
		color: #FFFFFF;
	}
	
	.el-form-item__label{
		color: #FFFFFF;
	}
</style>
