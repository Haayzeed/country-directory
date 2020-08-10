<template>
  <div id="app">
    <form>
      <select name="" id="" v-model="selectCountry" @change="changeState()">
        <option value="">--Select Country--</option>
          <option  v-for="(country, index) in countries" :key="country.id" :value="index">{{country.name}}</option>
      </select> <br><br>
      <select name="" id="" @change="changeCity()" v-model="selectState">
          <option  v-for="(state, index) in states" :key="state.id" :value="index">{{state.name}}</option>
      </select> <br><br>
       <select name="" id="">
          <option  v-for="(city, index) in cities" :key="city.id" :value="index">{{city.name}}</option>
      </select>
    </form>
  </div>
</template>

<script>

export default {
  data(){
    return{
      countries: {},
      states: {},
      selectCountry: '',
      selectState: '',
      cities: {}
    }
  },
  methods: {
    changeState(){
      this.states = this.countries.find(
      (tester) => 
      tester.id === this.selectCountry
      )
      this.states = this.countries[this.selectCountry].states
    },
    changeCity(){
      this.cities = this.countries.find(
      (tester1) => 
      tester1.id === this.selectState
      )
      this.cities = this.states[this.selectState].cities
    }
  },
  created(){
      this.$http.get("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json")
        .then((response) => {
          const resultArray = [];
          for (let key in response.data){
            response.data[key].id = key
            resultArray.push(response.data[key]);
            this.countries = resultArray;
          }
        })
        .catch((error) => console.error(error));
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
