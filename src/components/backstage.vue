<template>
	<div class='backstage_box'>
		<div class='backstage_main'>	
			<leftNav class='backstage_leftnav'></leftNav>
      <div class='backstage_right'>
        <headinfo ></headinfo>
			  <router-view :provincearea='provinceArea' :admin='admin'></router-view>
      </div>
			
		</div>
		
	</div>
</template>

<script>
import leftNav from "@/components/leftNav";
import headinfo from "@/components/headinfo";
import Ajax from "./ajax/ajax_service";
import Store from "@/components/store";
export default {
  data() {
    return {
      provinceArea: [],
      admin: {}
    };
  },
  components: {
    leftNav,
    headinfo
  },
  Store,
  created() {
    // if (!localStorage.getItem("admin")) {
    //   this.$router.push("/");
    //   return;
    // }
    this.admin = JSON.parse(localStorage.getItem("admin"));
    Store.state.admin =this.admin 
    //this.$store.state.admin = this.admin;
    if (!localStorage.getItem("provinceArea")) {
      Ajax.provinceArea()
        .then(res => {
          if (res.data.code === 200) {
            this.provinceArea = res.data.data;
            localStorage.setItem("provinceArea", JSON.stringify(lists));
          } else {
            console.log(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.provinceArea = JSON.parse(localStorage.getItem("provinceArea"));
    }
  }
};
</script>

<style scoped>
.backstage_box {
  height: 100%;
}
.backstage_main {
  width: 100%;
  height: 100%;
  display: flex;
}
.backstage_leftnav {
  width: 18.333rem;
  height: 100%;
}
.backstage_right {
  width: calc(100% - 18.334rem);
}
</style>