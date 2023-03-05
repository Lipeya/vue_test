<template>
	<div class="container">
		<h1>{{ title }}</h1>
		<div class="input-form-backgroud row">
			<div class="input-form col-md-12 mx-auto">
				<h4 class="mb-3">{{ title }}</h4>
				<form id="frm_login" @submit.prevent="sendPost" class="validation-form" novalidate action="#" method="post">
					<div class="mb-3">
						<label for="id">ID</label> <input type="text" class="form-control"
							v-model = "username" name="id" id="id" placeholder="" required>
						<div class="invalid-feedback">ID 입력해주세요.</div>
					</div>
					<div class="mb-3">
						<label for="pw">PW</label> <input type="password" class="form-control"
							v-model = "password" name="pw" id="pw" placeholder="" required>
						<div class="invalid-feedback">PW 입력해주세요.</div>
					</div>
					<div class="mb-4"></div>
					<button class="btn btn-primary btn-lg btn-block" type="submit">로그인</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
    name : 'vue_login',
    data(){
        return {
            title : '로그인',
			username : '',
			password : '',
            domain : 'http://localhost:8814'
        }
    },
    methods: { // #2.  method를 정의
		sendPost: function () { // #3. $.ajax
			// $.ajax({
			// 	url: this.domain + '/api/loginOK',
			// 	data: { 
			// 		id: $("#id").val(), 
			// 		pw: $("#pw").val(), 
			// 		},  // HTTP 요청과 함께 서버로 보낼 데이터
			// 	method: "POST",   // HTTP 요청 메소드(GET, POST 등)
			// 	dataType: "json", // 서버에서 보내줄 데이터의 타입
			// 	success: function (responseDate) {
			// 		console.log(responseDate);
			// 	}
			// });
			console.log({
					username: this.username,
					password: this.password,
				});
			axios({
				method : 'post',
				url: this.domain + '/api/loginOK',
				data : {
					username: this.username,
					password: this.password,
				}
			}).then(console.log)
			.catch(err => console.log(err.toJSON()));
		}	
	}
}
</script>