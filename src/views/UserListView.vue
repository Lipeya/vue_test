<!-- <template id="user-list">
    <div class="container">
        <div class="input-form-backgroud row">
            <div class="table-vos col-md-12 mx-auto">
                <h4 class="mb-3">{{ title }}</h4>
                <p>총회원수({{total_rowCount}}명)</p>
                <p>페이지수:{{pageCount}}</p>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">PW</th>
                            <th scope="col">NAME</th>
                            <th scope="col">TEL</th>
                            <th scope="col">REGDATE</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="selectOne" v-for="vo in vos">
                            <th scope="row"><a href="#" class="selectOne_num"
                                    v-on:click="fn_go_selectOne_num_click(vo.num)">{{vo.num}}</a></th>
                            <td><a href="#" class="selectOne_id" v-on:click="fn_go_selectOne_id(vo.num)">{{vo.id}}</a></td>
                            <td>{{vo.pw}}</td>
                            <td>{{vo.name}}</td>
                            <td>{{vo.tel}}</td>
                            <td>{{vo.regdate}}</td>
                            <td><a class="deleteOK" href="#" v-on:click ="fn_delete(vo.num)">삭제하기</a></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th v-for="i in pageCount">
                                <a href="user_list?page=222">{{i}}페이지</a>
                            </th>
                        </tr>
                    </tfoot>
                </table>

            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

    export default {
        name : 'user_list',
        data() {
            return {
                title : '회원목록',
                domain : 'http://localhost:8814',
                total_rowCount: 0,
                pageCount: 0,
                vos: [],

            }
        },
        methods: {
            fn_go_selectOne_num_click(num) {
                location.href = "/user_info?num=" + num;

            },
            fn_go_selectOne_id(num) {
                location.href = "/user_info?num=" + num;
            },
            fn_delete(num) {
                let result = confirm("정말 삭제하시겠습니까?");
                console.log("result....", result);
                if (result) {
                    $.ajax({
                        url: this.domain + '/api/deleteOK',
                        data: {
                            num,
                        }, // HTTP 요청과 함께 서버로 보낼 데이터
                        method: "GET", // HTTP 요청 메소드(GET, POST 등)
                        dataType: "json", // 서버에서 보내줄 데이터의 타입
                        success: function (responseDate) {
                            console.log(responseDate);
                        }
                    });
                }

                return false;
            }

        },
        async created() {
            // const responseData = await new Promise((resolve) => {
            //     $.ajax({
            //         url: this.domain + '/api/selectAll',
            //         data: {
            //             page: 1
            //         }, // HTTP 요청과 함께 서버로 보낼 데이터
            //         method: "GET", // HTTP 요청 메소드(GET, POST 등)
            //         dataType: "json", // 서버에서 보내줄 데이터의 타입
            //         success: function (responseDate) {
            //             resolve(responseDate);
            //         }
            //     });
            // });

            // this.total_rowCount = responseData.total_rowCount;
            // this.pageCount = responseData.pageCount;
            // this.vos = responseData.vos;
            // console.log('beforecreate...');
            // console.log(this.vos);

            axios.get(this.domain + '/api/selectAll')
			.then(response => {
				console.log(response.data);
				this.total_rowCount = response.data.total_rowCount;
				this.pageCount= response.data.pageCount;
				this.vos= response.data.vos;
			});
        },
    }
</script> -->
<template>
	<div class="container">
		<h1>{{ title }}</h1>
		<h1>{{ member }}</h1>
		<div class="input-form-backgroud row">
			<div class="table-vos col-md-12 mx-auto">
				<h4 class="mb-3">{{ title }}</h4>
				<p>총회원수({{ total_rowCount }}명)</p>
				<p>페이지수:{{ pageCount }}</p>

				<table class="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">ID</th>
							<th scope="col">PW</th>
							<th scope="col">NAME</th>
							<th scope="col">TEL</th>
							<th scope="col">REGDATE</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="vo in vos"  :key="vo.num">
							<th scope="row"><router-link  v-bind:to="`vue_selectOne?num=${vo.num}`" class="navbar-brand">{{ vo.num }}</router-link></th>

							<td><a href="#" class="selectOne_id">{{ vo.id }}</a></td>
							<td>{{ vo.pw }}</td>
							<td>{{ vo.name }}</td>
							<td>{{ vo.tel }}</td>
							<td>{{ vo.regdate }}</td>
							<td><a class="deleteOK" href="#">삭제하기</a></td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th v-for="i in pageCount"   :key="i">
								<a href="#" @click.prevent="getSelectAll(i)">{{ i }}페이지</a>
							</th>
						</tr>
					</tfoot>
				</table>

			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';


//#--------------------------------------------------------------
//#	npm 서버 종료
//#	관리자권한으로 명령프롬프트 실행
//#	cd C:\golfzon\springBoot4\boot13_vie_cli\test_vue
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
			title: '회원목록',
			total_rowCount: 0,
			pageCount: 0,
			vos: [],
		}
	},
	methods: {
		getSelectAll: function (page=1,searchKey,searchWord) {
			let url = 'http://localhost:8814/api/selectAll?page='+page;
			if(searchKey){
				url = 'http://localhost:8814/api/searchList?page='+page+'&searchKey='+searchKey+'&searchWord='+searchWord
			}
			axios.get(url)
			.then(response => {
				console.log(response.data);
				this.total_rowCount = response.data.total_rowCount;
				this.pageCount= response.data.pageCount;
				this.vos= response.data.vos;
			});
		},

		
	}, mounted() {  //일반적으로 가장 많이 사용하는 mounted훅입니다. 가상 DOM의 내용이 실제 DOM에 부착되고 난 이후에 실행되므로, this.$el을 비롯한 data, computed, methods, watch 등 모든 요소에 접근이 가능합니다.
		
		this.$nextTick(function () {
			// 모든 화면이 렌더링된 후 실행하는 메소드.
            console.log(this.member);
			console.log("mounted >> nextTick");
			console.log(this.$route.query.searchKey,this.$route.query.searchWord);
			this.getSelectAll(1,this.$route.query.searchKey,this.$route.query.searchWord);
		});

		

	}
}
</script>
