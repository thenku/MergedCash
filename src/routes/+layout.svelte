<script lang="ts">
	import '../site.less';
	import { siteconfig } from '../siteconfig';
	import Menu from '@components/Menu.svelte';
	import LoginButton from '@components/CustomFormElements/LoginButton.svelte';
	import BottomNotifications from '@components/BottomNotifications.svelte';
	import EnableEditableClicks from '@components/EnableEditableClicks.svelte';

    import ScrollToTopButton from '@components/ScrollToTopButton.svelte';
    import { onMount } from 'svelte';

	onMount(()=>{
		// if(!dev){
		// 	SWExec.register();
		// }
	});


</script>
<svelte:head>
	<link rel="manifest" href="/manifest.json"/>

	<meta name="theme-color" content={siteconfig.theme.themeColor} />
	<link rel="icon" type="image/png" href={siteconfig.favicon}/>
	<link rel="apple-touch-icon" href={siteconfig.favicon}>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href={siteconfig.theme.fonts} rel="stylesheet"/>

</svelte:head>

<EnableEditableClicks/>

<div id="layout">
	<header id="header">
		<div class="gwshadow bg-light" style="position: fixed;left:0;top:0;width:100%;height:inherit;z-index:9">
			
			<div class="gwc gwflex-b" style="height: inherit;">
				<a href="/" style="height: inherit;display:flex;align-items:center;">
					<img src={siteconfig.logoSrc} alt={siteconfig.brandName} style="height: 65%;"/>
				</a>
				<div class="gwp-1 gwflex" style="flex-grow: 1;">
				</div>
				<div>
				</div>
				
				<nav class="gwflex" style="height: inherit;">
					<div class="tabletOnly gwflex-c">
						<!-- <CartButton /> -->
						<LoginButton href={siteconfig.dashboardURL}/>
						&nbsp;
					</div>
					
					<Menu navLinks={siteconfig.navLinks}/>

					<div class="desktopOnly gwflex-c">
						<!-- <CartButton /> -->
						 &nbsp;
						<LoginButton href={siteconfig.dashboardURL}/>
					</div>
				</nav>
				<div style="position: absolute;bottom:0;width:100%;">
					<!-- <LocationSelector /> -->
				</div>
			</div>
			<div class="gwc gwflex-e" style="">
					<!-- <SearchFilterFeedback/> -->
			</div>
			
			<!-- <ScrollProgressFeedback className="bgc3"/> -->
		</div>
	</header>
	<main>
		<slot />
	</main>
	<footer class="gwshadow" id="footer">
		<ScrollToTopButton className="bgc3"/>
	</footer>
	<BottomNotifications/>
</div>