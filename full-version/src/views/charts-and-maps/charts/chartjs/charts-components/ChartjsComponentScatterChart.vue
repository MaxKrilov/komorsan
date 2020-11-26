<!-- =========================================================================================
	File Name: ChartjsComponentScatterChart.vue
	Description: Chartjs component - Scatter Chart
	----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
========================================================================================== -->


<script>
import { Scatter } from 'vue-chartjs'

export default {
    extends: Scatter,
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
