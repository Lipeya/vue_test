<template>
	<div class="container">
		<h1>{{ title }}</h1>
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
			let url = 'http://localhost:8813/api/selectAll?page='+page;
			if(searchKey){
				url = 'http://localhost:8813/api/searchList?page='+page+'&searchKey='+searchKey+'&searchWord='+searchWord
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
			console.log("mounted >> nextTick");
			console.log(this.$route.query.searchKey,this.$route.query.searchWord);
			this.getSelectAll(1,this.$route.query.searchKey,this.$route.query.searchWord);
		});

		

	}
}
</script>
