<template>
  <div class="home">
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
import { db } from '../firebase';

export default {
	name: 'Home',
	components: {
		GChart
	},
	data(){
        return{
			email: null,
			password: null,
			answers: db.ref('answers'),
			chartData: [
				['pregunta', 'Aciertos', {role: 'style'} , 'Errores', {role: 'style'}]
			],
			chartOptions: {
				isStacked: true,
				title: 'Aciertos y errores por pregunta',
				width: 'auto',
				height: 1500,
				hAxis: {
					title: 'Aciertos / Errores',
					minValue: 0
				},
				vAxis: {
					title: 'Pregunta'
				},
				colors: ['blue', 'orange']
			}
		}
    },
	mounted (){
		let newArray = this.chartData; // array para los valores en chartData
		let answer = this.answers.orderByChild('questionId');
		answer.once('value').then(function(snapshot){
			let sumCorrect = 0;
			let sumIncorrect = 0;
			let questionId;
			snapshot.forEach(function(childSnapshot){
				let questionIdAux = questionId;
				questionId = childSnapshot.val().questionId;
				if(childSnapshot.val().right == true){
					sumCorrect = sumCorrect + 1;
				}else{
					sumIncorrect = sumIncorrect + 1;
				}
				if(questionIdAux != questionId){
					newArray.push([questionIdAux, sumCorrect, 'blue', sumIncorrect ,'orange']);
					sumCorrect = 0;
					sumIncorrect = 0;
				}
			});
		});
		this.chartData = newArray; //sustituyo el nuevo array con los datos de la consulta
	}
}
</script>