<?php 

//? Global variables used throught the website

$context['additional_cdn'] = get_field('additional_cdn', 'options');
$context['metaDescription'] = get_field('description', 'options');
$context['meteImage'] = get_field('meta_image', 'options');
$context['siteTitle'] = get_bloginfo( 'name' );
$context['GA'] = get_field('google_analytics', 'options');
$context['custom_css'] = get_field('custom_css', 'options');
$context['custom_javascript'] = get_field('custom_javascript', 'options');
$context['url'] = site_url();

