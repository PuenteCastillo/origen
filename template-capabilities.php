<?php
/**
 * Template Name: Capabilities
 * Description:  Capabilities page template
 */


//?  variables
$context          = Timber::context();
$context['posts'] = new Timber\PostQuery();
$context['foo']   = 'bar';
$templates        = array( 'index.twig' );
include 'variables.php';



//?methoids 

Timber::render( array( 'page-' . $timber_post->post_name . '.twig',  'template-capabilities.twig' ), $context );
