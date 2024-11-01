export const nlBorders =`<?php

$fullpage = array (
    "index",
    "opinion",
    "sitemap",
    "refer",
    "maintenance",
    "free-estimate",
    "opinion-service",
    "energy-review",
    "crew-review",
    "free-estimate/confirmation",
    "survey",
    "privacy-policy",
    "service-area"
);

$modulepages = array (
    "opinion",
    "before-after",
    "photo-gallery",
    "refer",
    "meet-the-team",
    "news-and-events",
    "blog",
    "reviews",
    "awards",
    "press-release",
    "crew-review",
    "case-studies",
    "affiliations",
    "technical-papers",
    "case-studies",
    "search",
    "service-area",
    "homeshows",
    "about-us"
);  

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    \t<meta charset="utf-8">
    \t<meta name="viewport" content="width=device-width, initial-scale=1">
    \t<title>[[title]]</title>
    \t<meta name="description" content="[[description]]">
    \t<meta name="referrer" content="no-referrer-when-downgrade">
    \t<meta name="keywords" content="[[keywords]]">
        <link rel="icon" href="">
        
        [[css_head_helper]]
        <!-- Fonts -->
        
        <style>
            [[inline_css]]
        </style>
        
        <!-- NEW TW layout & content base -- temporary file path -->
            <link rel="stylesheet" href="https://cdn.treehouseinternetgroup.com/cms_images/1667/base-output04122004.css" />
        <!--modules in css bundler http://bsiadmin.com/portal/utility/css_bundler/index.php -->
        <?php if ($thePage != "index") { ?>
            <!-- We can use this to make a content.css and a module.css without php 
                  [[page_type]]
            -->
            <link rel="stylesheet" href="https://cdn.treehouseinternetgroup.com/cms_core/assets/module-22-test.css?v99">
        <?php
        }
        ?>
        <!-- template css tab - for site specific customizations / as="style" onload="this.rel='stylesheet';this.onload=null;" -->
        <link rel="stylesheet" href="/inc/sb-styles.css">
        
        <?php if ($thePage == "index") { ?>
            <!-- Tiny Slider -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css"> 
        <?php
        }
        ?>
        <!-- City Page CSS Overrides -->
        <?php if ($isCityPage == 1) { ?>
            <style>.citypage_index h1{clear:both;order:-1;grid-row:1;grid-column:1/-1}.citypage_index.module{display:grid;column-gap:2rem}.citypage_main_content{grid-row:2/span 1;grid-column:1}.citypage_index .citypage_sidebar{width:100%;margin-left:0}.citypage_index .widget.widget_citypage_map{margin-bottom:2rem}.widget_citypage_map .widget_content{padding:0}.citypage_index .widget.widget_citypage_map .leaflet-overlay-pane,.leaflet-pane{z-index:1!important}.citypage_index .widget_contact .widget_content{padding:1rem 0}.citypage_index .widget_contact .widget_content form{width:90%}.citypage_index .contact_form .widget_contact .widget_title{background:var(--brand-dark);padding:1rem .5rem;color:#fff;line-height:1.3;font-family:sans-serif}.reviews_sidebar_widget.widget{clear:both;border-width:0 1px}.citypage_index .widget_contact .widget_content form>div{width:100%;margin-bottom:5px}.citypage_index .widget_contact .widget_content form>div select{height:40px;width:100%}.citypage_index .widget_contact .widget_content form>div label{margin-bottom:3px;display:inline-block;font-family:sans-serif;font-size:13px}.citypage_index .widget_contact .widget_content form label#sms_consent-label{font-weight:400;font-style:normal;font-size:10px}.citypage_index .widget_contact .widget_content form button.submit{padding:.5rem;border-radius:100px;text-transform:uppercase;font-family:sans-serif;font-weight:600}.widget_title{background-color:var(--brand-dark);color:#fff;text-align:center;padding:1rem}.citypage_sidebar .reviews_sidebar_widget.widget .stars{display:flex;margin-bottom:5px}.citypage_sidebar .reviews_sidebar_widget li{margin:0;font-size:14px;line-height:1.3}.citypage_index .reviews_sidebar_widget .widget_items ul .text{margin-top:.5rem;font-style:italic}.citypage_sidebar .widget_services .widget_content{height:150px;overflow-y:scroll}.citypage_sidebar .widget{margin-bottom:1rem}.citypage_sidebar .contact_form.page_widget.us{margin-bottom:0}.citypage_sidebar .widget_awards .widget_thumbnail{width:60px;grid-column:1/3;padding:.5rem 0}.citypage_sidebar .widget_awards .widget_item{display:grid;grid-template-columns:repeat(6,1fr);padding:0 0 .75rem;margin:0 auto .75rem;border-bottom:1px solid #d9d9d9}.citypage_sidebar .widget_awards .widget_item_title{grid-column:3/-1;display:flex;align-items:center;font-size:14px;line-height:1.3}.citypage_sidebar .widget_awards .widget_preview{grid-column:1/-1}.citypage_index .widget_contact .widget_content form button.submit{width:100%}@media screen and (min-width:1024px){.citypage_index.module{display:grid;grid-template-columns:1fr 250px;column-gap:2rem}.citypage_main_content{grid-row:2/span 1;grid-column:1}.citypage_index .citypage_sidebar{grid-row:2;grid-column:2;width:250px}}</style>
        <?php
        }
        ?>
        
<style>.alert-box.warning{align-content:center;background-image:url(https://cdn.treehouseinternetgroup.com/cms_images/3443/dev-icon.svg);height:60px;position:fixed;bottom:0;z-index:9999999999999;width:60px;background-color:#ffea00;background-size:75%;background-position:center;background-repeat:no-repeat;border:0;text-indent:-9999px;border-radius:50px;box-shadow:0 0 20px rgb(0 0 0 / 20%);margin:0 0 10px 10px}.alert-box.warning a{color:#fff;position:absolute;display:flex;height:100%;width:100%;padding:0 .5rem;top:0;text-align:center;align-items:center;border-radius:50px;font-weight:800;font-size:12px;line-height:105%;text-transform:uppercase;font-family:Arial,sans-serif}.alert-box.warning:hover{background-image:none;background-color:green}.alert-box.warning:hover a{text-indent:0}</style>

</head>
<body>
    <header id="header" class="header__style1">
        [header__style1]
        
        <div id="header--nav">
            <!-- SUPER NAV TOOL -->
                [[top_nav]]
            <!-- END SUPER NAV TOOL -->
        </div>
    </header>
    
    <?php if ($thePage == "index") { ?>
        <div id="hero" class="home">
            <picture class="absolute h-full w-full">
                <source media="(min-width:769px)" srcset="https://picsum.photos/1200/800">
                <img class="hero-bg" src="https://picsum.photos/768/600" width="768" height="600" alt="[company]">
            </picture>
            <div id="hero-content">
                <p class="headline">This website<span>is going to kick butt!</span></p>
                <a class="button" href="https://www.nvwaterproofing.com/free-estimate.html?test=1" title="Contact us for a free estimate" contenteditable="false" style="cursor: pointer;">Get A Free Estimate</a>
            </div>
        </div>
        <!-----END HERO----->

        <?php
        }
        else
        {
        ?>
        <div id="page-wrap">
            <?php if ( (!in_array($thePage, $fullpage)) && ($isCityPage == 0) ) { ?>  
                <div id="siloBanner">
                    <img src=
                        <?php
                            if (stristr($thePage,"basement-waterproofing"))
                            {
                                ?>
                                 "https://cdn.treehouseinternetgroup.com/core/images/templates/bambam/images/headers/waterproofing-silo-grey.jpg"
                            <?php
                            }
                            elseif (stristr($thePage,"foundation-repair"))
                            {
                                ?>
                                 "https://cdn.treehouseinternetgroup.com/core/images/templates/bambam/images/headers/wall-crack-silo-grey.jpg"
                            <?php
                            }
                            else
                            {
                                ?>
                                "https://cdn.treehouseinternetgroup.com/core/images/templates/bambam/images/headers/about-silo-grey.jpg"
                        <?php
                        }
                        ?>
                    alt="<?php echo $cmsPageData['page.name']; ?>" /><!-- end #siloBanner img -->\t
                    <p>
                        <?php echo $cmsPageData['page.name']; ?>
                    </p>
                </div><!-- end #siloBanner -->
   
                    <div id="silo-sidebar">
                        <div id="sidebar-nav">[[single_silo_nav]]</div>
                    </div>
                    <div id="content-wrap">
            <?php
                }
            else
            {
                ?>
                    <div id="content-wrap" class="full-width">
                <?php
                }
                ?>
            
                [[breadcrumbs]]
        <?php
        }
        ?>
                [[content]]
        <?php if ($thePage != "index") { ?>
            </div><!-- end #content-wrap for child pages -->
        <?php
        }
        ?>
        </div><!-- end #page-wrap for child pages -->
        
        <?php if ( ($thePage != "service-area") && ($isCityPage == 0) ) { ?>
            <!-- Territory map & cities -->
            <div id="territory" class="home">
              <div id="territory__map">
                [[service_area_google_map]]
              </div>
              <div id="territory__content">
                <div>
                  <h2><span>Our Service Area</span>Proudly Serving [territory]</h2>
                  [[city_scroll:50]]
                </div>
              </div>
            </div>
            <!-- End territory -->
        <?php
        }
        ?>
            
        <footer>
            <div>
                <div id="footer-contact">
                    <span>Contact Us Online</span>
                    <a class="button" href="/free-estimate.html" title="Contact us for a free estimate">Get A Free Estimate</a>
                    <span>Or call us at</span>
                    <a href="tel:<?php echo $phonenumber; ?>">[phone]</a>
                </div>
                <div class="footer-links">
                    <?php
                        $superNav = new nav();
                        $superNav->superMode = 'bottom';
                        $superNav->superSplitAboutWork = true;
                        echo $superNav->generateSuperMarkup();
                    ?>
                    [[social_footer]]
                </div>
            </div>
            <div id="footer-address">
                <p>&copy;
                  <?php echo(date('Y')); ?>
                  [[company]]
                </p>
                <span></span>
                <p>[[address street]], [[address city]], [[address state]] [[address zip]]</p>
            </div>
        </footer>
  <script>
// Sticky Header/Nav
    let scrollpos = window.scrollY
    const pageBody = document.querySelector("body")  
    const header = document.getElementById("header")
    const header_height = header.offsetHeight - 1
    
    const add_class_on_scroll = () => pageBody.classList.add("stuck")
    const remove_class_on_scroll = () => pageBody.classList.remove("stuck")
    
    window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY;
    
      if (scrollpos > header_height) { add_class_on_scroll() }
      else { remove_class_on_scroll() }
    });
    
// Sticky Sidebar Nav
(function () {
    var subnav = document.getElementById("sidebar-nav");
    if (!subnav) return;
    var content = document.getElementById("content-wrap");
    var sidebar = subnav.parentElement;
    if (window.innerWidth >= 1024 && content.offsetHeight > subnav.offsetHeight) {
        var banner = document.getElementById("siloBanner");
        contentMT = window.getComputedStyle(content).getPropertyValue("margin-top");
        contentMT = parseInt(contentMT.slice(0, -2));
        
        window.addEventListener("scroll", stickySubnav);
    }
    function stickySubnav() {
        if (banner.getBoundingClientRect().top < 0) {
            var contentOffset = content.getBoundingClientRect();
            var fixednav = document.getElementById("header");
            if (contentOffset.top <= fixednav.offsetHeight + contentMT && contentOffset.bottom > subnav.offsetHeight + fixednav.offsetHeight) {
                subnav.style.position = "fixed";
                subnav.style.top = fixednav.offsetHeight + "px";
            } else if (contentOffset.bottom <= subnav.offsetHeight + fixednav.offsetHeight) {
                subnav.style.position = "relative";
                subnav.style.top = content.offsetHeight + contentMT - subnav.offsetHeight + "px";
            } else {
                subnav.style.position = "";
                subnav.style.top = "";
            }
        } else {
            subnav.style.position = "";
            subnav.style.top = "";
        }
    }
})();

</script>
<!-- TH Modal Popup -->
<script src="https://cdn.treehouseinternetgroup.com/cms_core/assets/js/th_modals.js" type="text/javascript"></script>
<script>
    const imagePopups = new ThModal({mode:'image', groupSelector: '[data-modal-gallery]', itemSelector: '[data-modal-image]'});
    const videoPopups = new ThModal({mode:'video', groupSelector: '[data-modal-videos]', itemSelector: '[data-modal-video]',useVideoElement: true});
</script>

  </body>

</html>`
export const nlTemplateCSS =`:root {
    --font-family:'Roboto', sans-serif;
    /* Primary color */
    --brand-default:#ff9441;
    /* Darker shade */
    --brand-dark:#715243;
    /* Lighter shade */
    --brand-light:#ffd8b6;
    /* Accent color for buttons, CTA, phone numbers - check for accessibility */
    --brand-accent:#7d1189;
    /* Defining color values to older css variables */
    --nav-brand-color:var(--brand-dark);
    --nav-brand-color-dark:var(--brand-dark);
    --color-primary:var(--brand-default);
    --color-secondary:var(--brand-accent);
}
/** HERO **/
#hero {
    position:relative;
    overflow:hidden;
    background-color:var(--brand-dark, #333);
    height:clamp(300px, 60vw, 600px);
}
img.hero-bg {
    position:absolute;
    inset:0;
    height:100%;
    width:100%;
    object-fit:cover;
    opacity:.5;
    mix-blend-mode:multiply;
}
#hero-content {
    position:relative;
    width:100%;
    position:relative;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    place-content:center;
}
#hero p.headline {
    font-size:clamp(36px, 5vw, 72px);
    font-family:var(--font-family);
    width:fit-content;
    margin:0 auto;
    line-height:1.1;
    text-transform:uppercase;
}
#hero p.headline span {
    font-family:var(--font-family);
    font-weight:700;
    font-size:clamp(24px, 3vw, 42px);
    text-transform:uppercase;
    font-style:italic;
    display:block;
}
#hero p {
    font-size:clamp(15px, 2vw, 18px);
    line-height:1.6;
    text-align:center;
    color:#fff;
    margin:.75rem auto 0;
}
#hero .button {
    border:1px solid #fff;
}
/* Special H2 treatment */
.home h2 {
    color:var(--brand-dark);
    text-transform:uppercase;
    text-align:center;
    font-size:clamp(26px,
    3.5vw,
    36px);
    line-height:1.5;
    letter-spacing:.05rem;
    font-family:inherit;
}
.home h2 span {
    font-family:inherit;
    font-size:.85rem;
    font-weight:400;
    display:block;
    color:var(--brand-default);
}
/** Territory Map & City Scroll **/
#territory {
    position:relative;
    overflow:auto;
    background:var(--brand-dark, #333);
}
#territory h2 {
    text-align:left;
    color:#fff;
}
#territory__map {
    right:0;
    top:0;
    bottom:0;
    height:22rem;
    width:100%;
}
#territory__content {
    position:relative;
    margin-inline:auto;
    display:flex;
    max-width:80rem;
    padding-inline:1rem;
    padding-block:2.5rem;
}
#territory__content> div {
    align-self:center;
    color:#fff;
}
#territory__contenth2 {
    margin-bottom:1rem;
    font-weight:800;
    font-size:1.875rem;
    line-height:2.25rem;
}
#territory__contenth3 {
    margin-bottom:0.5rem;
    font-size:1.125rem;
    line-height:1.75rem;
    font-weight:600;
}
@media screen and (min-width:1024px) {
    #territory__map {
        -webkit-clip-path:polygon(0 0, 100% 0, 100% 100%, 350px 100%);
        clip-path:polygon(0 0, 100% 0, 100% 100%, 350px 100%);
        position:absolute;
        height:100%;
        width:60%;
    }
    #territory__content {
        padding-block:5rem;
    }
    #territory__content > div {
        width:40%;
    }
    #territory__content h2 {
        margin-bottom:1rem;
        font-size:2.25rem;
        line-height:2.5rem;
    }
}
/* Content Elements */
:where(#hp-content,
#content-wrap) ul {
    margin-bottom:1rem;
}
:where(#hp-content,
#content-wrap) ul li {
    margin-left:1.25rem;
    margin-bottom:.5rem;
}
:where(#hp-content,
#content-wrap) ul.list-columns {
    display:grid;
    grid-template-columns:repeat( auto-fit, minmax(200px, 1fr) );
    gap:0 1rem;
}
:where(#hp-content,
#content-wrap) ul.list-columns li {
    margin-left:1.25rem;
}
p.page_bottom_estimate_callout {
    margin-top:2rem;
}
/* Free Estimate page */
.contact_form.module.us {
    font-family:'Roboto',
    sans-serif;
}
.contact_form .bar {
    line-height:1.4;
    font-weight:300;
    text-align:center;
}
.contact_form h1 {
    text-align:center;
}
.contact_form.module.us form > div {
    width:100%;
}
#content-wrap>div.contact_form div.form_fields {
    width:100%;
}
#content-wrap>div.contact_form div.form_fields :is(input, select, textarea) {
    width:100%;
    border-radius:3px;
    box-sizing:border-box;
    background-color:#fff;
    border:1px solid #dcdcdc;
}
#content-wrap>div.contact_form div.form_fields :is(input, select){
    height:40px !important;
}
label.error {
    color:red !important;
    font-weight:normal !important;
    width:100% !important;
    margin:5px 0 20px !important;
    line-height:0 !important;
}
.contact_form .step.current .title {
    background-color:var(--brand-dark);
    color:#fff;
}
.contact_form .step .title {
    color:#555;
    background-color:#efefef;
}
#content-wrap>.contact_form .step label {
    width:100%;
}
.contact_form.module label#sms_consent-label {
    font-weight:normal;
    font-size:12px;
    line-height:1.4;
}
#content-wrap>div.contact_form div.form_fields input#sms_consent {
    flex:0 1 15px;
    margin:0;
    height:fit-content !important;
}
#fin-form {
    width:100%;
    float:none;
    margin:0 auto;
    order:1;
}
#fin-form .contact_form.page_widget.us {
    max-width:100%;
    padding:2rem;
}
#fin-form .contact_form form {
    width:100%;
}
div#fin-content {
    display:grid;
}
#fin-form :is(input,
select,
textarea) {
    height:40px;
    display:block;
    width:100%;
}
#fin-form .contact_form [type=submit] {
    background:var(--brand-accent);
    color:#fff;
}
`
export const nlIndex =``
export const gsIndexFile =``