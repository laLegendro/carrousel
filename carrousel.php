<?php

/**
 * Plugin Name: Carrousel
 * description: affiche un carrousel d'images contrôlable par des boutons
 * version: 1.0.0
 */




function eddym_enqueue()

/* rien avant la balise php et dans le plugin name. pas d<espace entre les 2 points  */
{
    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");


    wp_enqueue_style(
        'em_plugin_carrousel_css',
        plugin_dir_url(__FILE__) . "style.css",
        array(),
        $version_css
    );

    wp_enqueue_script(
        'em_plugin_carrousel_js',
        plugin_dir_url(__FILE__) . "js/carrousel.js",
        array(),
        $version_js,
        true
    );
}


add_action('wp_enqueue_scripts', 'eddym_enqueue');
/* inclure ceci dans l'index principal ... 
important:
 wp_header() ... juste avant la fermeture du header dans header.php, la balise
et wp_footer().... juste avant la fermeture de body dans footer.php */

function genere_html()
{


    $contenu = '<button class="bouton__ouvrir">Ouvrir</button>
       <div class="carrousel">
       <button class="carrousel__x">X</button>
       <figure class="carrousel__figure"></figure>
       <form class="carrousel__form"></form>
       </div>';
    return $contenu; // on peut rajouter les fleches avant et apres pour les images 
    //et les positionner dans css.
}
add_shortcode('carrousel', 'genere_html');
