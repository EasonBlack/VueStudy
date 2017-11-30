<template>
    <div class='resource__container'>
        <div class='search'>
            <div class='search-box'>
                <label>Location</label>
                <select v-model='selectLocation' @change='locationChange'>
                    <option v-for='(location, $index) in locations' :value='location' :key='$index'>{{location.name}}</option>
                </select>
            </div>
            <div class='search-box'>
                <label>Plant</label>
                <select v-model='selectPlant' @change='plantChange'>
                    <option  v-for='(plant, $index) in selectLocation.plants' :value='plant'  :key='$index'>{{plant.name}}</option>
                </select>
            </div>
            <a>Show Detail</a>
        </div>
        <div class='content'>
            <ul class='tab-list'>
                <li>Solar Plant</li>
                <li>BESS</li>
            </ul>
            <div class='content-type'>
                <select v-model='selectUnit' @change='unitChange'>
                    <option v-for='(unit, $index) in selectPlant.units' :value='unit'  :key='$index'>{{unit.name}}</option>
                </select>
            </div>
            <div class='content__wrapper'>
                <div class='panel standing'>
                    <div class='title'>Standing Data</div>
                    <div class='grid'>
                        <div class='col'>
                            <label>Lable 1</label> <label>Value 1</label>
                        </div>
                        <div class='col'>
                            <label>Lable 1</label> <label>Value 1</label>
                        </div>
                        <div class='col'>
                            <label>Lable 1</label> <label>Value 1</label>
                        </div>
                    </div>
                    <div class='action'>
                        <a class='btn btn-cancel'>Cancel</a>
                        <a class='btn btn-save'>Save</a>
                    </div>
                </div>
                <div class='panel dynamic'>
                     <div class='title'>Dynamic Data</div>
                     <div class='grid'>
                        <div class='row'>
                            <label>Lable 1</label> <label>Value 1</label>
                        </div>
                        <div class='row'>
                            <label>Lable 2</label> <label>Value 2</label>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default  {
        data() {
            return {
                
                // selectPlant: 'Plant 1',
                locations: [
                    {name: "Location 1", plants: [
                        {name: "Plant 1", units: [
                            {name: 'P1-Solar1' , type: 'solor'},
                            {name: 'P1-Solar2' , type: 'solor'},
                            {name: 'P1-Battery1' , type: 'battery'},
                            {name: 'P1-Battery2' , type: 'battery'},
                            {name: 'P1-Wind1' , type: 'wind'},
                            {name: 'P1-Wind2' , type: 'wind'},
                            {name: 'P1-Gen1' , type: 'gen'},
                            {name: 'P1-Gen2' , type: 'gen'},
                        ]},
                        {name: "Plant 2", units: [
                            {name: 'P2-Solar1' , type: 'solor'},
                            {name: 'P2-Solar2' , type: 'solor'},
                            {name: 'P2-Battery1' , type: 'battery'},
                            {name: 'P2-Battery2' , type: 'battery'},
                            {name: 'P2-Wind1' , type: 'wind'},
                            {name: 'P2-Wind2' , type: 'wind'},
                            {name: 'P2-Gen1' , type: 'gen'},
                            {name: 'P2-Gen2' , type: 'gen'},
                        ]},
                    ]},
                    {name: "Location 2", plants: [
                        {name: "Plant 3", units: [
                            {name: 'P3-Solar1' , type: 'solor'},
                            {name: 'P3-Solar2' , type: 'solor'},
                            {name: 'P3-Battery1' , type: 'battery'},
                            {name: 'P3-Battery2' , type: 'battery'},
                            {name: 'P3-Wind1' , type: 'wind'},
                            {name: 'P3-Wind2' , type: 'wind'},
                            {name: 'P3-Gen1' , type: 'gen'},
                            {name: 'P3-Gen2' , type: 'gen'},
                        ]},
                        {name: "Plant 4", units: [
                            {name: 'P4-Solar1' , type: 'solor'},
                            {name: 'P4-Solar2' , type: 'solor'},
                            {name: 'P4-Battery1' , type: 'battery'},
                            {name: 'P4-Battery2' , type: 'battery'},
                            {name: 'P4-Wind1' , type: 'wind'},
                            {name: 'P4-Wind2' , type: 'wind'},
                            {name: 'P4-Gen1' , type: 'gen'},
                            {name: 'P4-Gen2' , type: 'gen'},
                        ]},
                    ]}
                ],
                selectLocation: null,
                selectPlant: null,
                selectUnit: null
                
            }
        },
        created() {
            this.selectLocation = this.locations[0];
            this.selectPlant = this.selectLocation.plants[0]
        },
        methods: {
            locationChange() {
               this.selectPlant = this.selectLocation.plants[0]
            },
            plantChange() {
               //this.selectPlant = this.selectLocation.plants[0]
            },
            unitChange() {
                
            }
        }
    }
</script>
<style lang='scss' scoped>
    .resource__container {
        width:100%;
        height:100%;
        
    }
    .resource__container .search {
        width: 100%;
        height: 60px;
        display: flex;
        align-items:center;
        padding: 0 20px;
        border: 1px solid grey;
    }
    .resource__container .search .search-box {
        margin-right:50px;
    }
    .content {

    }
    .content .tab-list {  
        display:flex;
    }
    .content .tab-list li {
        padding: 10px 20px;
    }
    .content-type {
        padding: 10px 20px;
    }
    .content__wrapper {
        display:flex;
        padding: 0 20px;
    }
    .panel {
        .title {
            background-color: rebeccapurple;
            color:white;
            height:30px;
            line-height:30px;
        }
    }
    .standing {
        width:66.66%;
        height:200px;
        background-color: steelblue;

        .action {
            background-color: grey;
            display: flex;
            bottom: 0;
            position: absolute;
            height: 30px;
            line-height: 30px;
            width: 100%;
            a {
                flex:1 ;
                color:white;
            }
        }
        .grid {
            width:100%;
            display: flex;
            flex-wrap: wrap;
            padding: 20px 20px;
            .col {
                display: flex;
                height:40px;
                width:50%;
                label {
                    flex: 1;
                    text-align: left;
                }
            }
        }
    }
    .dynamic {
        width:33.33%;
        height:200px;
        background-color: seagreen;
        .grid {
            width:100%;
            padding: 20px 20px;
            .row {
                display: flex;
                label {
                    flex: 1;
                    text-align: left;
                }
            }
            
        }
       
    }
    

</style>