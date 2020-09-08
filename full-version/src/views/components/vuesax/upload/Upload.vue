<!-- =========================================================================================
    File Name: Upload.vue
    Description: Upload - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuejs Template
  Author: Krylov
========================================================================================== -->


<template>
    <div id="upload-demo">
        <upload-default></upload-default>
        <upload-multiple></upload-multiple>
        <upload-automatic></upload-automatic>
    </div>
</template>

<script>
import UploadDefault from './UploadDefault.vue'
import UploadMultiple from './UploadMultiple.vue'
import UploadAutomatic from './UploadAutomatic.vue'

export default{
    components: {
        UploadDefault,
        UploadMultiple,
        UploadAutomatic,
    }
}
</script>
