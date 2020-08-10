<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-6 offset-md-3 mt-5">
					<h4 class="text-center mb-3">Wejapa Country Directory</h4>
					<form>
						<div class="form-group">
							<label for="">Select Country</label>
							<select name="" class="form-control rounded-0 bg-white" v-model="selectCountry" @change="changeState()">
								<option value="">--Select Country--</option>
								<option  v-for="(country, index) in countries" :key="country.id" :value="index">{{country.name}}</option>
							</select>
						</div>
						<div class="form-group">
							<label for="">Select State</label>
							<select name="" class="form-control rounded-0 bg-white" @change="changeCity()" v-model="selectState">
								<option value="">--Select State--</option>
								<option  v-for="(state, index) in states" :key="state.id" :value="index">{{state.name}}</option>
							</select>
						</div>
						<div class="form-group">
							<label for="">Select City</label>
							<select name="" class="form-control rounded-0">
								<option value="">--Select City--</option>
								<option  v-for="(city, index) in cities" :key="city.id" :value="index">{{city.name}}</option>
							</select>
						</div>
					</form>
				</div>
			</div>
		</div>
  </div>
</template>

<script>

export default {
  name: 'App',
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
  },
  computed(){

  }
};
</script>
<style scoped>
	select option{
		background: #fff !important;
		backface-visibility: hidden;
	}
</style>