<template>
	<div class="container">
		<h1>{{ title }}</h1>
		<div class="input-form-backgroud row">
			<div class="input-form col-md-12 mx-auto">
				<h4 class="mb-3">{{ title }}</h4>

				<!-- 1.  @submit.prevent="sendPost" -->
				<form id="frm_insert" class="validation-form" novalidate action="#" @submit.prevent="sendPost"
					method="post">

					<div class="mb-3">
						<label for="id">ID</label> <input type="text" class="form-control" name="id" id="id"
							placeholder="" value="admin" required>
						<div class="invalid-feedback">ID 입력해주세요.</div>
					</div>
					<div class="mb-3">
						<label for="pw">PW</label> <input type="password" class="form-control" name="pw" id="pw"
							 placeholder="" value="hi1234" required>
						<div class="invalid-feedback">PW 입력해주세요.</div>
					</div>
					<div class="mb-3">
						<label for="name">NAME</label> <input type="text" class="form-control" name="name" id="name"
							 placeholder="" value="lee" required>
						<div class="invalid-feedback">NAME 입력해주세요.</div>
					</div>
					<div class="mb-3">
						<label for="tel">TEL</label> <input type="text" class="form-control" name="tel" id="tel"
							 placeholder="" value="010" required>
						<div class="invalid-feedback">TEL 입력해주세요.</div>
					</div>


					<hr class="mb-4">
					<div class="custom-control custom-checkbox">
						<input type="checkbox" class="custom-control-input" id="aggrement" checked required> <label
							class="custom-control-label" for="aggrement">개인정보 수집 및 이용에 동의합니다.</label>
					</div>
					<div class="mb-4"></div>
					<button class="btn btn-primary btn-lg btn-block" type="submit">가입
						완료</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
// import EventBus from '../assets/js/event_bus';

export default {
	name: 'vue_insert',
	data() {
		return { 
			title: '회원가입' ,
			domain : 'http://localhost:8814',
			id : 'admin',
			pw : 'hi1234',
			name : 'lee',
			tel : '678',
		}
	},
	methods: { // #2.  method를 정의
		sendPost: function () { // #3. $.ajax
			// $.ajax({
			// 	url: this.domain + '/api/insertOK',
			// 	data: { 
			// 		id: $("#id").val(), 
			// 		pw: $("#pw").val(), 
			// 		name: $("#name").val(), 
			// 		tel: $("#tel").val() },  // HTTP 요청과 함께 서버로 보낼 데이터
			// 	method: "POST",   // HTTP 요청 메소드(GET, POST 등)
			// 	dataType: "json", // 서버에서 보내줄 데이터의 타입
			// 	success: function (responseDate) {
			// 		console.log(responseDate);
			// 	}
			// });
			// console.log( {
			// 		id: this.id,
			// 		pw : this.pw,
			// 		name : this.name,
			// 		tel : this.tel
			// 	});
			// EventBus.$emit('login', 1);
			axios({
				method: 'post',
				url: this.domain + '/api/insertOK',
				data: {
					id: this.id,
					pw : this.pw,
					name : this.name,
					tel : this.tel
                    
				}
			}).then(console.log).catch(console.log)
		}
	},
	watch:{
		//함수 하나 선언할건데, 모델에 적용한 이름과 동일
		tel : function(x){
			console.log(x); // 현재 input에 입력되어있는 값이 매개변수로 옴
			
		}
	}
}
</script>
