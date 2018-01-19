<template>
    <div class='container bg-white py-10'>
        <h4 class='mb-20'>Account Information</h4>
        <div class='row mb-10'>
            <div class='radio radio-info radio-inline col-6 d-flex align-items-center'>
                <input type='radio' id='radShowAllAccount' name='homeSearchRadio'/>
                <label for="radShowAllAccount">Show All Account</label>
            </div>
        </div>
        <div class='row mb-10'>
            <div class='radio radio-info radio-inline col-6   d-flex align-items-center'>
                <input type='radio' id='radFilterByAccountNum' name='homeSearchRadio'/>
                <label for="radFilterByAccountNum">Filter By Account Number</label>
                <input type='text' class='form-control d-inline w-30p h-30 ml-auto'/>
            </div>
        </div>
        <div class='row mb-10'>
            <div class='radio radio-info radio-inline col-6 d-flex align-items-center'>
                <input type='radio' id='radFilterByMeterNum' name='homeSearchRadio'/>
                <label for="radFilterByMeterNum">Filter By Meter Number</label>
                <input type='text' class='form-control d-inline w-30p h-30  ml-auto'/>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang='scss' scoped>
    .container {

    }
    
</style>