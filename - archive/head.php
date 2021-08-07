<!doctype html>
<html class="no-js">
	<head itemscope="" itemtype="https://schema.org/WebPage">
        <?php /* GROUP WEB FONTS
        ===================================================
        Put webfonts here as Highest priority because render blocking. If we put the stylesheet at the very top we do not need to use preload. */ ?>

		<title>CSS Framework Patterns</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width" />

		<link rel="stylesheet" href="https://i.icomoon.io/public/988db47200/CSSFramework/style-svg.css">
		<script defer src="https://i.icomoon.io/public/988db47200/CSSFramework/svgxuse.js"></script>

		<?php if ( isset( $_SERVER["DEVELOPER_ENV"]) && $_SERVER["DEVELOPER_ENV"] == 'development' ) { ?>
			<link rel="stylesheet" href="/style-dev.css">
		<?php } else { ?>
			<link rel="stylesheet" href="/style.css">
		<?php } ?>

		<link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png?2017-01-10-111424">
		<link rel="icon" type="image/png" href="favicons/favicon-32x32.png?2017-01-10-111424" sizes="32x32">
		<link rel="icon" type="image/png" href="favicons/favicon-16x16.png?2017-01-10-111424" sizes="16x16">
		<link rel="manifest" href="favicons/manifest.json?2017-01-10-111424">
		<link rel="mask-icon" href="favicons/safari-pinned-tab.svg?2017-01-10-111424" color="#00a9eb">
		<link rel="shortcut icon" href="favicons/favicon.ico?2017-01-10-111424">
		<meta name="application-name" content="CSS Framework">
		<meta name="msapplication-config" content="favicons/browserconfig.xml">

		<script>
		/* Tell the html ASAP (without JS) to prevent a flicker of DOM changes e.g. nav collapsed. */
		var no_js_target = document.querySelectorAll("html");

		[].forEach.call(no_js_target, function(el) {
			el.classList.remove("no-js");
			el.classList.add("js");
		});
		</script>