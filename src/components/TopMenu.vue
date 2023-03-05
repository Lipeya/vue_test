<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link  class="navbar-brand" to="/">VUE_INDEX</router-link >
        
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<router-link to="about" class="navbar-brand">about</router-link>
				<router-link to="vue_insert" class="navbar-brand">vue_insert</router-link>
				<router-link to="vue_login" class ="navbar-brand">vue_login</router-link>
				<router-link to="user_list" class ="navbar-brand">user_list</router-link>
				<router-link to="user_info" class ="navbar-brand">user_info</router-link>
				<router-link to="search_list" class ="navbar-brand">search_list</router-link>
			</ul>

			<form class="form-inline my-2 my-lg-0" action="vue_searchList">
				<select class="selectpicker" name="searchKey">
					<option value="name">NAME</option>
					<option value="tel">TEL</option>
				</select>

				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
					name="searchWord" value="ki">
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		</div>

	</nav>
</template>

<script>


export default {
  name: 'TopMenu',
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<style>
@import "../assets/css/main.css";
</style>
