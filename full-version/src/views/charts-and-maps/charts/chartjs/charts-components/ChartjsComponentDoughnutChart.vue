<!-- =========================================================================================
	File Name: ChartjsComponentDoughnutChart.vue
	Description: Chartjs component - Doughnut Chart
	----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
========================================================================================== -->


<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,
    props: {
        data: {
            type: Object,
            default: null,
        },
        options: {
            type: Object,
            default: null,
        }
    },
    mounted() {
        this.renderChart(this.data, this.options)
    }
}
</script>
