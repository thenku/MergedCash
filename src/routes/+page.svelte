<script lang="ts">
    import { siteconfig } from "src/siteconfig";
    import HeadPageSeo from "@components/HeadPageSEO.svelte";
    import UserAccountContainer from "@components/UserAccount/UserAccountContainer.svelte";
    import { dev } from "$app/environment";
    import HomelessCashContainer from "@components/HomelessCash/HomelessCashContainer.svelte";
    // import HomelessCashContainer from "@components/HomelessCash/HomelessCashDemoContainer.svelte";
    import { onMount } from "svelte";

    let title = "Welcome to MergedCash";
    
    let apiEndpoint = (dev) ? "http://localhost:3000/api" : "/api";
    onMount(()=>{

    });

  </script>
  
  <HeadPageSeo {...siteconfig} title={title} />
  