<!-- =========================================================================================
	File Name: ChartjsComponentPolarAreaChart.vue
	Description: Chartjs component - Polar Area Chart
	----------------------------------------------------------------------------------------
  Item Name: Vuejs, HTML Template
  Author: Krylov
========================================================================================== -->


<script>
import { PolarArea } from 'vue-chartjs'

export default {
    extends: PolarArea,
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
