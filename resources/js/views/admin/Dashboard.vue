<template>
    <p>Admin Dashboardss</p>
</template>

<script>

export default {
    name: "Admin Dashboard",
    async mounted(){
        await axios.post('/api/test', {
            
        })
    }
}
</script>