<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<!-- <span v-for="value in answers" v-bind:key="value"> -->
		{{answers}}
	<!-- </span> -->
	<GChart
    type="BarChart"
    :data="chartData"
    :options="chartOptions"
  />
  </div>
</template>

<script>
// @ is an alias to /src
import { GChart } from 'vue-google-charts'
import HelloWorld from '@/components/HelloWorld.vue';
import { db } from '../firebase';

export default {
  name: 'Home',
  components: {
	HelloWorld,
	GChart
  },
   data(){
        return{
            answers: db.ref('answers'),
			password: '',
			chartData: [
        ['pregunta', 'Aciertos', {role: 'style'} , 'errores', {role: 'style'}],
        ['2014', 1000, 'blue' , 400, 'orange'],
        ['2015', 1170, 'blue', 460, 'orange'],
        ['2016', 660, 'blue',1120 ,'orange'],
        ['2017', 1030, 'blue',540 ,'orange']
      ],
      chartOptions: {
        chart: {
          title: 'Aciertos y errores por pregunta',
          subtitle: 'Aciertos / Errores',
		},
		isStacked: true,
        title: 'Aciertos y errores por pregunta',
        subtitle: 'Aciertos / Errores',
		
      }
        }
    },
mounted (){
//   console.log(this.answers, 'this answers')
  let answer = this.answers.orderByChild('questionId').equalTo(0).on('child_added', function(snapshot){
	console.log(snapshot.key,' sss')
  });
console.log(answer.size,' answer size');
//   let answers = this.answers.orderByChild('questionId').on('child_added', function(snapshot){
// let questionId = snapshot.val().questionId;if(questionId == 0){console.log(snapshot.val())}
//   });
//   console.log(answers);
}
}
</script>
