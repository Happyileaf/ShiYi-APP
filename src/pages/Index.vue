<template>
  <div class="index">
    <header>
      <div class="indexHeader">
        <div class="logoWord">拾易</div>
        <div class="searchBox">
          <form data-v-4bc9d7de action="/">
            <div data-v-4bc9d7de class="van-search van-search--show-action">
              <div data-v-4bc9d7de class="van-search__content van-search__content--round">
                <div data-v-4bc9d7de class="van-cell van-cell--borderless van-field">
                  <div class="van-field__left-icon">
                    <i class="van-icon van-icon-search">
                      <!---->
                    </i>
                  </div>
                  <div class="van-cell__value van-cell__value--alone">
                    <div class="van-field__body">
                      <input type="search" placeholder="请输入搜索关键词" class="van-field__control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
    <div class="indexContainer">
      <van-tabs v-model="activeName" :swipe-threshold="5">
        <van-tab title="首页" name="a">
          <IndexContent></IndexContent>
        </van-tab>
        <van-tab title="学习用品" name="b">
          <SchoolSupply></SchoolSupply>
        </van-tab>
        <van-tab title="服饰" name="c">
          <Clothing></Clothing>
        </van-tab>
        <van-tab title="零食" name="d">
          <Snack></Snack>
        </van-tab>
        <van-tab title="其他" name="e">
          <OtherGoods></OtherGoods>
        </van-tab>
      </van-tabs>
    </div>
    <Tabber></Tabber>
  </div>
</template>

<script>
import IndexContent from "@/components/IndexContent";
import SchoolSupply from "@/components/SchoolSupply";
import Clothing from "@/components/Clothing";
import Snack from "@/components/Snack";
import OtherGoods from "@/components/OtherGoods";
import Tabber from "@/components/Tabber";
export default {
  name: "Index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      activeName: "a"
    };
  },
  components: { IndexContent,SchoolSupply,Clothing,Snack,OtherGoods,Tabber }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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

.indexHeader {
  display: flex;

  align-items: center;
  height: 7.5vh;
  background-color: rgb(174, 227, 145);
  padding: 0 3vw 0 3vw;
}

.indexHeader .logoWord {
  width: 20%;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  /* margin: 0 3vw 0 3vw; */
}

.indexHeader .searchBox {
  width: 75%;
}

.indexContainer {
  /* height: 89.5vh; */
  margin: 0 0 5vh 0;
  padding: 0 3vw 0 3vw;
}
</style>
