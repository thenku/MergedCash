<script lang="ts">
    import PrintVouchers from "@components/HomelessCash/PrintVouchers.svelte";
    import { getCashConfig } from "src/cashConfig";
    
</script>


<PrintVouchers cashConfig={getCashConfig().defaultDataFields}/>