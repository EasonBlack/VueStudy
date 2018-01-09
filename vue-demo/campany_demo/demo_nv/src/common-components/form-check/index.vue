<template>
    <div class='checkbox checkbox-primary'>
        <input :id="'ck'+ id" type="checkbox"
                 @change='$emit("input", $event.target.checked)'  :value="value"
        />
        <label :for="'ck'+ id">{{title}}</label>
    </div>
</template>
<script>
    export default {
        props: ['id', 'title', 'value']
    }
</script>