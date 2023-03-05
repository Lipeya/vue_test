<!-- <template>
    <div class="container">

        <div class="input-form-backgroud row">
            <div class="input-form col-md-12 mx-auto">
                <h4 class="mb-3">{{title}}</h4>
                <form class="validation-form" v-on:submit="onSubmitForm" novalidate id="frm_update" method="post">

                    <div class="mb-3">
                        <label for="id">NUM</label> : <span>{{userData.num}}</span> <input type="hidden"
                            class="form-control" v-model="userData.num" name="num" id="num" placeholder=""
                            ref="target" required>
                        <div class="invalid-feedback"></div>
                    </div>
                    <div class="mb-3">
                        <label for="id">ID</label> : <span>{{userData.id}}</span> <input type="hidden"
                            class="form-control" v-model="userData.id" name="id" id="id" placeholder="" ref="target"
                            required>
                        <div class="invalid-feedback"></div>
                    </div>
                    <div class="mb-3">
                        <label for="pw">PW</label> : <input type="password" class="form-control" name="pw" id="pw"
                            placeholder="" v-model="userData.pw" ref="target" required>
                        <div class="invalid-feedback">PW 입력해주세요.</div>
                    </div>
                    <div class="mb-3">
                        <label for="name">NAME</label> <input type="text" class="form-control" name="name" id="name"
                            placeholder="" v-model="userData.name" ref="target" required>
                        <div class="invalid-feedback">NAME 입력해주세요.</div>
                    </div>
                    <div class="mb-3">
                        <label for="tel">TEL</label> <input type="text" class="form-control" name="tel" id="tel"
                            placeholder="" v-model="userData.tel" ref="target" required>
                        <div class="invalid-feedback">TEL 입력해주세요.</div>
                    </div>


                    <hr class="mb-4">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="aggrement" checked required> <label
                            class="custom-control-label" for="aggrement">개인정보 수집 및 이용에 동의합니다.</label>
                    </div>
                    <div class="mb-4"></div>

                    <button class="btn btn-primary btn-lg btn-block" id="btn_submit">수정
                        완료</button>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'user_info',
      
        data() {
            return {
                title: '회원정보',
                domain : 'http://localhost:8814',
                userData: {
                    num: '1',
                    id: 'admin',
                    pw: 'hi1234',
                    name: 'lee',
                    tel: '02',
                },
            }
        },
        methods: {
            onSubmitForm(e) {
                e.preventDefault();
                console.log(this.currentTitle);
                console.log(this.userData);

                //입력값검증

                $.ajax({
                    url: this.domain + '/api/updateOK',
                    data: {
                        num : this.userData.num,
                        id : this.userData.id,
                        pw : this.userData.pw,
                        name : this.userData.name,
                        tel : this.userData.tel
                    }, // HTTP 요청과 함께 서버로 보낼 데이터
                    method: "POST", // HTTP 요청 메소드(GET, POST 등)
                    dataType: "json", // 서버에서 보내줄 데이터의 타입
                    success: function (responseDate) {
                        console.log(responseDate);
                    }
                });

                this.$refs.target.focus();//인풋박스 포커싱에 쓰인다.
            }
        },
        async created() {
            const urlParams = new URL(location.href).searchParams;
            const param_num = urlParams.get('num') ? urlParams.get('num') : '11';

            const responseData = new Promise((resolve) => {
                $.ajax({
                    url: this.domain + '/api/selectOne',
                    data: {
                        num: param_num,
                    }, // HTTP 요청과 함께 서버로 보낼 데이터
                    method: "GET", // HTTP 요청 메소드(GET, POST 등)
                    dataType: "json", // 서버에서 보내줄 데이터의 타입
                    success: function (responseDate) {
                        //이 안에서의 결과가 vue와 연동되지 않음
                        console.log(responseDate);
                        resolve(responseDate);

                    }
                })
            });
            
            this.userData = {... await responseData};

            
        },
    }
</script> -->
<template>
	<div class="container">
		<h1>{{ title }}    param:{{ $route.query.num }}</h1>
		<h1>{{ member }}</h1>
		<div class="input-form-backgroud row">
			<div class="input-form col-md-12 mx-auto">
				<h4 class="mb-3">{{ title }}</h4>

			
				<form id="frm_insert" class="validation-form" novalidate action="#" @submit.prevent="sendPost"
					method="post">

					<div class="mb-3">
						<label for="id">NUM</label> {{ num }} <input type="hidden" class="form-control" name="num" id="num"
							placeholder="" v-model=num required>
					</div>
					<div class="mb-3">
						<label for="id">ID</label> <input type="text" class="form-control" name="id" id="id"
							placeholder="" v-model=id required>
						<div class="invalid-feedback">ID 입력해주세요.</div>
					</div>
					<div class="mb-3">
						<label for="pw">PW</label> <input type="password" class="form-control" name="pw" id="pw"
							placeholder=""  v-model=pw required>
						<div class="invalid-feedback">PW 입력해주세요.</div>
					</div>
					<div class="mb-3">
						<label for="name">NAME</label> <input type="text" class="form-control" name="name" id="name"
							placeholder=""  v-model=name required>
						<div class="invalid-feedback">NAME 입력해주세요.</div>
					</div>
					<div class="mb-3">
						<label for="tel">TEL</label> <input type="text" class="form-control" name="tel" id="tel"
							placeholder=""  v-model=tel required>
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
//#--------------------------------------------------------------
//#	npm 서버 종료
//#	관리자권한으로 명령프롬프트 실행
//#	cd C:\golfzon\springBoot4\boot13_vie_cli\test_vue -> cd C:\SDS_EDU\onlineVuework\test_vue
//#	git clone https://github.com/axios/axios.git node_modules/axios
//#	cd node_modules/axios
//#	npm install
//#	npm run build
//#	npm 서버 실행
//#--------------------------------------------------------------

export default {
	name: 'vue_insert',
	props:{
		member:Object      //App.vue로부터 받은 member객체
	},
	data() {
		return { 
			title: '회원정보 및 수정',
			num : this.$route.query.num,
			id : 'aaa',
			pw : 'bbb',
			name : 'ccc',
			tel : 'ddd',
		}
	},
	methods: { // #2.  method를 정의
		sendPost: function () { // #3. $.ajax
			axios({
                method: 'post',
                url : 'http://localhost:8814/api/updateOK',
                data : {
                    num : this.num,
                    id: this.id,
                    pw : this.pw,
                    name : this.name,
                    tel : this.tel
                }
            }).then(console.log).catch(console.log);
		},
		getSelectOne: function (num=1) {
			axios.get('http://localhost:8814/api/selectOne?num='+num)
			.then(response => {
				console.log(response.data);
				//this.num = response.data.num;
				this.id = response.data.id;
				this.pw = response.data.pw;
				this.name = response.data.name;
				this.tel = response.data.tel;
			});
		}
	}, mounted() {  //일반적으로 가장 많이 사용하는 mounted훅입니다. 가상 DOM의 내용이 실제 DOM에 부착되고 난 이후에 실행되므로, this.$el을 비롯한 data, computed, methods, watch 등 모든 요소에 접근이 가능합니다.
		this.$nextTick(function () {
            console.log(this.member);
			// 모든 화면이 렌더링된 후 실행하는 메소드.
			this.getSelectOne(this.$route.query.num);
		})

	}
}
</script>
