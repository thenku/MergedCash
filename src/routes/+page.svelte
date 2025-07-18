<script lang="ts">
    import { siteconfig } from "src/siteconfig";
    import HeadPageSeo from "@components/HeadPageSEO.svelte";
    import UserAccountContainer from "@components/UserAccount/UserAccountContainer.svelte";
    import { dev } from "$app/environment";
    import HomelessCashDemoContainer from "@components/HomelessCash/HomelessCashDemoContainer.svelte";
    import { onMount } from "svelte";

    let title = "Welcome to MergedCash";
    
    let apiEndpoint = (dev) ? "http://localhost:3000/api" : "/api";
    onMount(()=>{

    });

  </script>
  
  <HeadPageSeo {...siteconfig} title={title} />
  
  <div class="gwc">
    <UserAccountContainer isDemo={true} endpoint="">
      <br/>
      <HomelessCashDemoContainer />
    </UserAccountContainer>

  </div>