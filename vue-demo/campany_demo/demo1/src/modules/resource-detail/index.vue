<template>
    <div class='resource__container'>
        <div class='search'>
            <div class='search-box'>
                <label>Location</label>
                <select>
                    <option>aaaaa</option>
                </select>
            </div>
            <div class='search-box'>
                <label>Plant</label>
                <select>
                    <option>aaaaa</option>
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
                <select>
                    <option>bbbbb</option>
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
                items: [

                ]
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