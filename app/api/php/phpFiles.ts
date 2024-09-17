export const gsBeforeBorders = `
<?php global $siteTokens, $phonenumber, $isTrafficPpc, $cmsPageData;

$siteTokens['[[sidebar_nav_css]]'] = '
<style>
#pageWrap {
    display: grid;
}
#contentWrap {
    width: 100vw;
}
#silo-sidebar {
    order: 1;
    position: relative;
    width: 100%;
    padding: 1.5rem 1.25rem;
}
#sidebar-nav {
    height: fit-content;
    padding: 1rem 2rem;
    border-top: 3px solid rgb(0 149 218);
    background: #fff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 0.25rem;
}
#sidebar-nav ul ul {
    margin-block:0;
}
#sidebar-nav>ul>li>a {
    font-size: 1.5rem;
    font-weight: 800;

}
#sidebar-nav ul li ul li a {
    margin: 0.5rem 0;
    display: block;
}
#sidebar-nav ul li ul li:not(:last-child) {
    border-bottom: 1px solid #dddddd;
}
#sidebar-nav a {
    color: #333;
    font-weight: 600;
}
#sidebar-nav a:hover {
    color: rgb(0 149 218);
    text-decoration: none;
}
#sidebar-nav li {
    position: relative;
}
#sidebar-nav ul li ul li::before {
    content: "";
    display: inline-block;
    height: 8px;
    width: 8px;
    border: 1px solid rgb(0 149 218);
    border-width: 3px 3px 0 0;
    transform: translate(-25px, 8px) rotateZ(45deg);
    position: absolute;
    opacity: 0;
    top: 3px;
    transition: 0.2s ease;
}
#sidebar-nav li:hover::before {
    opacity: 1;
    transform: translate(-16px, 8px) rotateZ(45deg);
}
@media screen and (min-width: 1024px){
    #siloBanner {
        grid-column: span 2;
        margin-bottom: 2.5rem;
    } 
    #pageWrap {
        grid-template-columns: auto auto;
        margin-bottom: 2.5rem;
    }
    #contentWrap {
        margin-right: 0;
        padding-block: 0;
        width: 65vw;
    }
    #silo-sidebar {
        width:300px;
        padding:0 0 0 1.25rem;
    }
    #sidebar-nav {
        width:calc(300px - 1.25rem);
    }
}
</style>';

$siteTokens['[[citypage_css]]'] = '
<style>
/*** City Pages ***/
.citypage_index.module{
    --cp-clr-primary:rgb(0 149 218);
    --cp-clr-dark: rgb(17 60 100);
}
.citypage_index.module #bread_crumbs {
    display:none;
}
.citypage_index img {
    margin-block: 0;
}
/** CP FORM **/
.cp-inline-form {
    box-shadow: 0px 3px 16px #00000027;
}
.inline-free-estimate-container .free-estimate-form-heading {
    color: var(--cp-clr-dark) !important;
}
.inline-free-estimate-container .step {
    background-color: var(--cp-clr-dark) !important;
    border:2px solid var(--cp-clr-dark) !important;
    opacity: .7
}
.inline-free-estimate-container .step small {
    color:#fff !important;
}
.inline-free-estimate-container .step.active {
    opacity: 1;
    color: var(--cp-clr-dark) !important;
    background-color: #fff !important;
}
.inline-free-estimate-container .step.active small {
    color: var(--cp-clr-dark) !important;
}
.inline-free-estimate-container .step.finish {
    opacity: 1;
    background-color: var(--cp-clr-dark) !important;
}
.inline-free-estimate-container .step-lines::after, .inline-free-estimate-container .step-lines::before {
    background-color: var(--cp-clr-dark) !important;
}
.inline-free-estimate-container #contact_form button, .inline-free-estimate-container #contact_form button, .inline-free-estimate-container #contact_form input[type="submit"]{
    background-color: var(--cp-clr-dark) !important;
    font-size: 1em;
    line-height: 1;
}
.inline-free-estimate-container #contact_form #prevBtn {
    border-color: currentColor !important;
    background-color: transparent !important;
    color: var(--cp-clr-dark) !important;
}

.inline-free-estimate-container #contact_form #prevBtn:hover {
    color: var(--cp-clr-dark) !important;
}
.inline-free-estimate-container .free-estimate-form-heading,
.inline-free-estimate-container label,
.inline-free-estimate-container span.step small {
    font-family: inherit !important;
}
.cp-review-stars img, .cp-case-study img, .widget_job_stories img {
    display: inline-block;
}
.citypage_map_legend p {
    font-size:1rem !important;
}
.citypage_index h2, .citypage_index p, .citypage_index a {
    font-family: inherit !important;
}
.citypage_index h2 {
    font-weight: 600;
}
.citypage_index .widget_title, 
.citypage_index .widget_work_requests .widget_title {
    font-family: inherit !important;
    background-color: var(--cp-clr-dark) !important;
    color: #fff !important;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1rem;
}
.cp-header.cp-container-gray {
    background-color: transparent;
}

.cp-header .cp-row {
    padding: 0;
}

.widget_citypage_map .widget_content {
    padding: 0;
}
.widget_citypage_map .widget_title {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
}
.citypage_map_legend {
    border: 0;
    padding-top: .5rem;
}
.citypage_index .cp-ba-slider {
    margin-bottom: 0;
}
.citypage_index span.cp-ba-slide-title {
    background: rgba(15 23 42 / 70%);
    font-size: 1rem;
}
.citypage_index .cp-ba-desc p {
    margin: 0;
    padding: 1rem;
    background: #f8f8f8;
}
.citypage_index .widget.widget_job_stories,
.citypage_index .widget.widget_citypage_list{
    margin-inline: auto;
    max-width: 100%;
}
.citypage_index .widget.widget_job_stories .widget_content {
    font-size: inherit;
}

.citypage_index .job_summary_image img {
    padding: .5rem;
}
.citypage_index .widget_job_stories .widget_item {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
}
</style>
';

$siteTokens['[[inline_step_form]]'] = '
<div id="inline-contact">
    <div class="wrapper contact_form">
            <div class="inline-free-estimate-container">
                <div id="form-heading">
                    <p class="free-estimate-form-heading">$1000 off a complete Gutter Shutter System!*</p>
                    <span>Never Clean Your Gutters Again!</span>
                </div>
                <form id="contact_form" action="/free-estimate/confirmation.html" method="post">
        <div id="submit-loader">
                <div class="loader-container">
                    <div class="loader load-1"></div>
                    <div class="loader load-2"></div>
                    <div class="loader load-3"></div>
                </div>
        </div>
        <input type="hidden" name="save" value="1">
        <!-- Circles which indicates the steps of the form: -->
        <div class="step-dot-container">
            <span class="step active"><small>1</small></span>
            <span class="step step-lines"><small>2</small></span>
            <span class="step"><small>3</small></span>
        </div>
        <!-- One "tab" for each step in the form: -->
        <div class="tab current">
            <div class="tab-content-wrap">
                <div id="fname-wrap" class="grid-span-6">
                    <label class="input-labels" for="First_Name">First Name</label>
                    <input type="text" id="First_Name" name="First_Name" placeholder="First Name" maxlength="50" required>
                </div>
                <div id="lname-wrap" class="grid-span-6">
                    <label class="input-labels" for="Last_Name">Last Name</label>
                    <input type="text" id="Last_Name" name="Last_Name" placeholder="Last Name" maxlength="50" required>
                </div>
            </div>
        </div>
        <div class="tab">
            <div class="tab-content-wrap">
                <div id="street-wrap" class="grid-span-12">
                    <label class="input-labels" for="Street_Address">Street Address</label>
                    <input id="Street_Address" name="Street" placeholder="Street Address" type="text" title="please enter a valid street address" required>
                </div>
                <div id="city-wrap" class="grid-span-4">
                    <label class="input-labels" for="City">City</label>
                    <input id="City" name="City" placeholder="City" type="text" title="please enter a valid city" required>
                </div>
                <div id="state-wrap" class="grid-span-4">
                    <label class="input-labels" for="State">State</label>
                    <select name="State" id="State" required="required">
                    <option value="">Please select...</option>
                                                <option value="AL">Alabama</option>
                                                    <option value="AK">Alaska</option>
                                                    <option value="AZ">Arizona</option>
                                                    <option value="AR">Arkansas</option>
                                                    <option value="CA">California</option>
                                                    <option value="CO">Colorado</option>
                                                    <option value="CT">Connecticut</option>
                                                    <option value="DE">Delaware</option>
                                                    <option value="DC">District of Columbia</option>
                                                    <option value="FL">Florida</option>
                                                    <option value="GA">Georgia</option>
                                                    <option value="HI">Hawaii</option>
                                                    <option value="ID">Idaho</option>
                                                    <option value="IL">Illinois</option>
                                                    <option value="IN">Indiana</option>
                                                    <option value="IA">Iowa</option>
                                                    <option value="KS">Kansas</option>
                                                    <option value="KY">Kentucky</option>
                                                    <option value="LA">Louisiana</option>
                                                    <option value="ME">Maine</option>
                                                    <option value="MD">Maryland</option>
                                                    <option value="MA">Massachusetts</option>
                                                    <option value="MI">Michigan</option>
                                                    <option value="MN">Minnesota</option>
                                                    <option value="MS">Mississippi</option>
                                                    <option value="MO">Missouri</option>
                                                    <option value="MT">Montana</option>
                                                    <option value="NE">Nebraska</option>
                                                    <option value="NV">Nevada</option>
                                                    <option value="NH">New Hampshire</option>
                                                    <option value="NJ">New Jersey</option>
                                                    <option value="NM">New Mexico</option>
                                                    <option value="NY">New York</option>
                                                    <option value="NC">North Carolina</option>
                                                    <option value="ND">North Dakota</option>
                                                    <option value="OH">Ohio</option>
                                                    <option value="OK">Oklahoma</option>
                                                    <option value="OR">Oregon</option>
                                                    <option value="PA">Pennsylvania</option>
                                                    <option value="RI">Rhode Island</option>
                                                    <option value="SC">South Carolina</option>
                                                    <option value="SD">South Dakota</option>
                                                    <option value="TN">Tennessee</option>
                                                    <option value="TX">Texas</option>
                                                    <option value="UT">Utah</option>
                                                    <option value="VT">Vermont</option>
                                                    <option value="VA">Virginia</option>
                                                    <option value="WA">Washington</option>
                                                    <option value="WV">West Virginia</option>
                                                    <option value="WI">Wisconsin</option>
                                                    <option value="WY">Wyoming</option>
                                            </select>
                </div>
                <div id="zip-wrap" class="grid-span-4">
                    <label class="input-labels" for="Zip_Code">Your Zip Code</label>
                    <input type="text" id="Zip" name="Zip_Code" placeholder="Zip Code" maxlength="10" data-validate-zip required>
                </div>
                <div id="phone-wrap" class="grid-span-6">
                    <label class="input-labels" for="Phone">Phone Number</label>
                    <input type="text" id="Phone" name="Phone" placeholder="Phone" data-validate-phone required>
                </div>
                <div id="email-wrap" class="grid-span-6">
                    <label class="input-labels" for="Email_Address">Email Address</label>
                    <input id="Email_Address" name="Email_Address" placeholder="Email Address" type="email" title="please enter a valid email address" required>
                </div>
                
                
            </div>
        </div>
        <div class="tab">
            <div class="tab-content-wrap">
                <div id="prompted-wrap" class="grid-span-12">
                    <label class="input-labels" for="What_Prompted_Id">What prompted you to contact us?</label>
                    <input type="hidden" id="lead_what_prompted_response" name="What_Prompted_Response" value="">
                    <select id="lead_what_prompted_id" name="What_Prompted_Id" required>
                        <option value="">Please select...</option>
                        <option value="1">Referral</option>
                        <option value="2">Previous Customer</option>
                        <option value="3">Internet / Web Search</option>
                        <option value="4">TV</option>
                        <option value="5">Radio</option>
                        <option value="6">Mail</option>
                        <option value="7">Billboards</option>
                        <option value="8">Other</option>
                    </select>
                </div>
                <div id="message-wrap" class="grid-span-12">
                    <label class="input-labels" for="Message">Describe your concerns:</label>
                    <textarea id="Message" type="text" name="Message" placeholder="Briefly describe the problem"></textarea>
                </div>
            </div>
        </div>
        <div>
            <div class="btn-container">
                <button type="button" id="nextBtn" onclick="nextPrev(1)">Next Step</button>
                <input class="hidden" type="submit" value="Send" style="display: none;">
                <button type="button" id="prevBtn" class="hidden" onclick="nextPrev(-1)" style="display: none;">Previous Step</button>
            </div>
        </div>
    </form>
    </div>
    <div id="headerImg"><img src="https://cdn.treehouseinternetgroup.com/cms_images/3289/MattW_Barn-Hang-NoWindows.jpg" width="1000" height="400"></div>
    <script type="text/javascript" src="https://cdn.treehouseinternetgroup.com/cms_core/assets/js/th_form_validator.js?v=1"></script>
    <script>
        const validator = new ThFormValidator("contact_form", {disableSubmit: true});
    </script>
    <script>
        var currentTab = 0;
        const emailAddress = document.querySelector("#Email_Address");
        const phone = document.querySelector("#Phone");
        const zip = document.querySelector("#Zip");
        const submit = document.querySelector("input[type=\'submit\']");
        const prevBtn = document.querySelector("#prevBtn");
        const nextBtn = document.querySelector("#nextBtn");
        const form = document.querySelector("#contact_form");
        const tabs = document.querySelectorAll("#contact_form .tab");
        const steps = document.querySelectorAll("#contact_form .step");
        const whatPromptedSelect = document.getElementById("lead_what_prompted_id");
        const whatPromptedResponse = document.getElementById("lead_what_prompted_response");
        
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const errorFields = validator.validateAll();
            if(errorFields.length) {
                errorFields[0].focus();
                return;
            }
            document.querySelector(\'#contact_form [type="submit"]\').setAttribute("disabled", "disabled");
            document.querySelector(\'#submit-loader\').classList.add("loading");
            this.submit();
        });
        
        whatPromptedSelect.addEventListener("change", (e) => {
            whatPromptedResponse.value = whatPromptedSelect.value;
        });
    
        function showTab(n) {
            document.querySelector("#contact_form .tab.current").classList.remove("current");
            tabs[n].classList.add("current");
            document.querySelector("#contact_form .step.active").classList.remove("active");
            steps[n].classList.add("active");
            steps[n].classList.remove("finish");

            if (n == 0) {
                prevBtn.style.display = "none";
            } else {
                prevBtn.style.display = "inline-block";
            }
            if (n == 1) {
                nextBtn.style.display = "inline-block";
            }
            if (n == 2) {
                nextBtn.style.display = "none";
                submit.style.display = "inline-block";
            } else {
                submit.style.display = "none";
            }
            
            let element = document.getElementById("contact_form");
            let header = document.getElementById("header");
            let headerOffset = header.offsetHeight;
            let elementPosition = element.getBoundingClientRect().top;
            let offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            if (window.innerWidth < 768)  {
                if (n >= 1) {
                    window.scrollTo({
                         top: offsetPosition,
                         behavior: "smooth"
                    });
                }
            }
        }
    
        function nextPrev(n) {
            if (n == 1 && validator) {
                const errorFields = validator.validateAll(tabs[currentTab]);
                if(errorFields.length) {
                    errorFields[0].focus();
                    return false;
                }
                steps[currentTab].classList.add("finish");
            }
            currentTab = currentTab + n;
            showTab(currentTab);
            return false;
        }
    </script>
            <style>
                /*  Inline Contact Form Container Styles */
                #inline-contact {
                    margin-block: 1rem 3rem;
                    width: min(1200px,100%);
                    margin-inline: auto;
                    padding-inline: .9375rem;
                }
                #inline-contact .wrapper {
                    display: grid;
                }
                #inline-contact .content_overlay {
                    padding: 2rem;
                    background-color: #fff;
                    max-width: 500px;
                }
                /* Form container and heading */
                .inline-free-estimate-container {
                    border: 0;
                    background-color: #e3ecf1;
                    position: relative;
                    box-shadow: 0 5px 15px rgb(0 0 0 / 15%);
                    z-index: 1;
                }
                .inline-free-estimate-container #form-heading {
                    text-align: center;
                    text-transform: none;
                    padding: 1.5rem;
                    color: #fff;
                    background-color: #173964;
                }
                .inline-free-estimate-container #form-heading p {
                    margin: 0 auto 1rem;
                    font-size: clamp(1.25rem, 3vw,1.75rem);
                    line-height: 2rem;
                    font-weight: 700;
                    text-transform: uppercase;
                }
                .inline-free-estimate-container #form-heading span {
                    font-size: clamp(1rem, 3vw, 1.25rem);
                    letter-spacing: .025rem;
                }
                #headerImg {
                        order:-1;
                    }
                #headerImg img {
                    object-fit: cover;
                    width: 100%;
                    object-position: left;
                }
                @media screen and (min-width: 969px){
                    #inline-contact .wrapper {
                        grid-template-columns: repeat(12, 1fr);
                        grid-template-rows: repeat(12,1fr);
                    }
                    .inline-free-estimate-container {
                        margin-top: 2rem;
                        grid-column: 6/-1;
                        grid-row: 1/-1;
                    }
                    #headerImg {
                        grid-column: 1/-1;
                        grid-row: 1/-1;
                        order:0;
                    }
                    #headerImg img {
                        -webkit-mask: linear-gradient(to right, #fff 50%, transparent);
                        height: 400px;
                    }
                }
                /* Hide all tabs by default: */
                .inline-free-estimate-container .tab-content-wrap {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    grid-gap: 0 clamp(.75rem, 2vw, 1.5rem);
                }
                .inline-free-estimate-container .tab-content-wrap>div {
                    margin-bottom: 15px;
                }
                .inline-free-estimate-container .tab {
                    display: none;
                }
                .inline-free-estimate-container .tab.current {
                    display: block;
                }
                /* Make circles that indicate the steps of the form: */
                .inline-free-estimate-container .step-dot-container {
                    display: grid;
                    grid-template-columns: repeat(3, auto);
                    justify-content: center;
                    width: 100%;
                    grid-gap: 75px;
                    max-width: unset;
                    margin: 0 auto 1rem;
                }
                .inline-free-estimate-container .step {
                    height: 30px;
                    width: 30px;
                    margin: 0 2px;
                    border: 2px solid rgb(0 57 92 / 40%);
                    background-color: rgb(255 255 255 / 40%);
                    border-radius: 50%;
                    display: inline-block;
                    transition: none;
                    position: relative;
                    text-align: center;
                }
                .inline-free-estimate-container .step-lines {
                    position: relative;
                }
                .inline-free-estimate-container .step-lines::after,
                .inline-free-estimate-container .step-lines::before {
                    content: "";
                    position: absolute;
                    height: 2px;
                    background-color: rgb(0 57 92 / 40%);
                    width: 79px;
                }
                .inline-free-estimate-container .step-lines::before {
                    right: 28px;
                    top: 13px;
                }
                .inline-free-estimate-container .step-lines::after {
                    left: 28px;
                    top: 13px;
                }
                .inline-free-estimate-container span.step small {
                    font-size: 1rem;
                    display: inline-block;
                    text-align: center;
                    text-transform: uppercase;
                    font-weight: 700;
                    line-height: 0;
                    color: #003a5d;
                    position: absolute;
                    transform: translateX(-50%);
                    top: 50%;
                    opacity: .4;
                }
                /* Mark the active step: */
                .inline-free-estimate-container .step.active {
                    border: 2px solid #003a5d;
                    background-color: #fff;
                }
                .inline-free-estimate-container .step.active small {
                    color: #003a5d;
                    opacity: 1;
                }
                /* Mark the steps that are finished and valid: */
                .inline-free-estimate-container .step.finish {
                    background-color: #003a5d;
                    border: 2px solid #003a5d;
                }
                .inline-free-estimate-container .step.finish small {
                    color: #fff;
                    opacity: 1;
                }
                .inline-free-estimate-container .step.finish+.step-lines::before,
                .inline-free-estimate-container .step.finish.step-lines::after {
                    background-color: #003a5d;
                }
                /* Style the form */
                .inline-free-estimate-container #contact_form {
                    padding: 2rem;
                    width: min(650px, 100%);
                    margin-inline: auto;
                }
                /* Form layout grid */
                .inline-free-estimate-container #contact_form .grid-span-12 {
                    grid-column: span 12;
                }
                .inline-free-estimate-container #contact_form .grid-span-8 {
                    grid-column: span 8;
                }
                .inline-free-estimate-container #contact_form .grid-span-6 {
                    grid-column: span 6;
                }
                .inline-free-estimate-container #contact_form .grid-span-4 {
                    grid-column: span 4;
                }
                @media screen and (max-width: 768px) {
                    .inline-free-estimate-container #contact_form {
                        padding: 2rem 1rem;
                    }
                    .inline-free-estimate-container #contact_form div[class*="grid-span"] {
                        grid-column: span 12;
                    }
                }
                /* Style the input fields */
                .inline-free-estimate-container #contact_form input,
                .inline-free-estimate-container #contact_form select {
                    box-sizing: border-box;
                    display: block;
                    width: 100%;
                    outline: none;
                    margin-bottom: 0;
                }
                .inline-free-estimate-container #contact_form input::placeholder {
                    color: #ccc;
                }
                .inline-free-estimate-container label.input-labels {
                    font-weight: 700;
                    line-height: 1.25;
                    font-size: .95rem;
                    margin-bottom: 5px;
                    display: block;
                }
                .inline-free-estimate-container #contact_form select,
                .inline-free-estimate-container #contact_form textarea,
                .inline-free-estimate-container input[type="email"],
                .inline-free-estimate-container input[type="submit"],
                .inline-free-estimate-container input[type="text"] {
                    height: 3rem !important;
                    border-radius: 0.5rem;
                    border: 1px solid #d9d9d9;
                    box-shadow: none;
                    padding: 0.5rem 1rem !important;
                    font-size: 1rem !important;
                }
                .inline-free-estimate-container #contact_form select,
                .inline-free-estimate-container #contact_form textarea {
                    background-color: #fff;
                    border-style: solid;
                    border-width: 1px;
                    color: rgba(0, 0, 0, 0.75);
                    display: block;
                    font-family: inherit !important;
                    font-size: 0.875rem;
                    width: 100%;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                }
                .inline-free-estimate-container #contact_form textarea {
                    padding-top: 1rem !important;
                    padding-bottom: 1rem !important;
                    width: 100%;
                    height: clamp(100px, 10vw, 150px) !important;
                    font-size: 16px;
                    font-family: arial, sans-serif;
                    box-sizing: border-box;
                }
                /* Mark input boxes that gets an error on validation: */
                .inline-free-estimate-container .invalid-label-hidden {
                    visibility: hidden;
                }
                .inline-free-estimate-container .invalid+label.invalid-label {
                    display: block;
                }
                .inline-free-estimate-container #contact_form input.error, 
                .inline-free-estimate-container #contact_form select.error {
                    background-color: #FFF5F6 !important;
                    border: 1px solid red !important;
                }
                .inline-free-estimate-container .invalid-label {
                    color: #f04124;
                    font-size: 12px;
                    display: none;
                    margin-bottom: 13px;
                }
                /* Form navigation and submit buttons */
                .inline-free-estimate-container #contact_form .btn-container {
                    display: grid;
                    grid-template-columns: auto auto;
                    justify-content: center;
                    padding-top: 1rem;
                }
                .inline-free-estimate-container #contact_form button,
                .inline-free-estimate-container #contact_form input[type="submit"] {
                    display: block;
                    width: 133px;
                    border-radius: 50px !important;
                    color: #fff;
                    font-weight: 700;
                    text-transform: uppercase;
                    background-color: #003a5d;
                    padding: 15px 0;
                    margin-bottom: 10px;
                    transition: all 0.1s ease;
                    outline: 0;
                    font-size: 0.85rem;
                    letter-spacing: 0;
                    margin: 0 !important;
                }
                .inline-free-estimate-container button#nextBtn {
                    order: 1;
                }
                .inline-free-estimate-container #contact_form #prevBtn {
                    background-color: transparent;
                    border: 2px solid #003a5d;
                    color: #003a5d;
                    order: -2;
                    margin-right: 1rem !important;
                }
                .inline-free-estimate-container #contact_form button:hover {
                    cursor: pointer;
                    background-color: #00588e;
                }
                .inline-free-estimate-container #contact_form #prevBtn:hover {
                    color: #00588e;
                    border-color: currentColor;
                }
                .inline-free-estimate-container #contact_form input[type="submit"] {
                    background-color: #CF421B;
                    border: 2px solid #CF421B;
                    font-size: 0.85rem !important;
                    font-family: sans-serif;
                }
                .inline-free-estimate-container #contact_form input[type="submit"]:hover {
                    background-color: #f13f0d;
                }
        /* Loader */
        #submit-loader {
            position:absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background-color: rgb(227 236 241 / 90%);
            z-index:100;
            display: none;
            justify-content: center;
            align-items: center;
        }
        #submit-loader.loading {
            display:flex;
        }
        .loader-container {
            position:relative;
            border-radius:50%;
            width:50px;
            height:50px;
        }
        .loader {
            position:absolute;
            top: 0;
            left: 15px;
            background:#173964;
            border-radius:50%;
            width:20px;
            height:20px;
            transform-origin:10px 25px;
            animation: load 1s ease infinite;
        }
        .load-2 {
            opacity: .8;
            animation: load 1s ease .1s infinite;
        }
        .load-3 {
            opacity: .6;
            animation: load 1s ease .2s infinite;
        }
        @keyframes load {
            0% {transform: rotate(0deg)}
            100% {transform: rotate(360deg)}
        }
            </style>
        </div>
    </div>
';
?>`

export const gsBorders = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1">
    	<title>[[title]]</title>
    	<meta name="description" content="[[description]]">
    	<meta name="keywords" content="[[keywords]]">
    	<link rel="icon" href="https://cdn.treehouseinternetgroup.com/cms_images/3168/favicon.png">
		[[css_head_helper]]
		<link rel="stylesheet" href="https://cdn.treehouseinternetgroup.com/cms_core/assets/[[page_type]]-22-test.css?v12345">
        <style>
        [[inline_css]]
        /* Dev warning banner */
            .alert-box.warning {
                position: fixed;
                bottom: 0;
                z-index: 1000;
                width: 100%;
                margin: 0;
                background: #000;
                padding: 10px 20px;
                font-size: 14px;
                color: #fff
            }
            
            .alert-box.warning a {
                color: #fffb6b;
                text-decoration: underline;
                font-weight: bold;
                font-size: 12px;
                text-transform: uppercase;
            }
            
            .alert-box.warning br {
                display: none;
            }
        </style>
        <link rel="stylesheet" as="style" onload="this.rel='stylesheet';this.onload=null;" href="/inc/sb-styles.css">
        <?php if ($isCityPage == true) { ?>
            [[citypage_css]]
        <?php 
        }
        ?>

        
	</head>

	<body>
		<div id="template-wrap"
			class="prose max-w-none md:prose-lg prose-h1:text-brand-dark prose-h2:font-semibold prose-ul:list-none prose-ul:pl-0 prose-li:pl-0">
        {{header}}
			<?php if ($thePage == "index") { ?>
        {{hero}}
			<?php
            }
            else
            {
            ?>
                <!---------------
                *** Page Wrap ***
                ---------------->
                <div id="pageWrap"
                    class="max-w-full border-t border-slate-200">
                    
                    <?php if (stristr($thePage,"gutter-installation"))
                    {
                    ?>
    <!-----------------
    *** Banner Form ***
    ------------------>
	<div class="not-prose relative mb-16">
		<div class="inset-0 mx-auto max-w-5xl md:absolute md:max-w-none md:px-0">
			<div
				class="absolute inset-0 from-white to-transparent to-60% md:bg-gradient-to-l"></div>
			<picture>
				<source
					media="(min-width:768px)"
					srcset="
						https://cdn.treehouseinternetgroup.com/cms_core/images/gs/gs-beauty-banner.jpg
					" />
				<img
					class="h-44 w-full object-cover md:h-[415px] md:object-left-top"
					src="https://cdn.treehouseinternetgroup.com/cms_core/images/gs/gs-beauty-banner-sm.jpg" />
			</picture>
		</div>
		<div class="mx-auto justify-end md:flex md:max-w-5xl md:px-5">
			<div
				id="form-wrap"
				class="relative shadow-xl md:max-w-lg md:translate-y-10">
				<div
					id="submit-loader"
					class="absolute inset-0 z-10 hidden items-center justify-center bg-slate-100 bg-opacity-90">
					<div class="relative h-16 w-16 rounded-full">
						<div
							class="absolute left-[16px] top-0 h-5 w-5 origin-[16px_32px] animate-[spin_1s_ease_infinite] rounded-full bg-brand-dark"></div>
						<div
							class="absolute left-[16px] top-0 h-5 w-5 origin-[16px_32px] animate-[spin_1s_ease_.1s_infinite] rounded-full bg-brand-dark opacity-80"></div>
						<div
							class="absolute left-[16px] top-0 h-5 w-5 origin-[16px_32px] animate-[spin_1s_ease_.2s_infinite] rounded-full bg-brand-dark opacity-60"></div>
					</div>
				</div>
				<div class="bg-brand-dark px-6 py-6 text-center text-white md:px-10">
					<p class="mb-2 text-2xl font-extrabold md:text-3xl">
						xxx off a complete Gutter Shutter System!*
					</p>
					<p class="text-lg font-thin md:text-2xl">
						Never Clean Your Gutters Again!
					</p>
				</div>
				<div class="bg-slate-100 px-6 py-8 md:px-10">
					<form id="contact_form" action="/free-estimate/confirmation.html" method="post" novalidate="true">
					    <input type="hidden" name="save" value="1">
						<div
							id="step-dot-container"
							class="mx-auto mb-6 flex w-fit items-center">
							<span class="step active"><small>1</small></span>
							<div class="w-16 border-y border-brand-dark opacity-40"></div>
							<span class="step"><small>2</small></span>
							<div class="w-16 border-y border-brand-dark opacity-40"></div>
							<span class="step"><small>3</small></span>
						</div>
						<!-- TAB 1 -->
						<div class="tab current grid-cols-6 gap-4 md:gap-6">
							<div class="col-span-3 flex flex-col">
								<label for="First_Name">First Name</label>
								<input
									type="text"
									id="First_Name"
									name="First_Name"
									placeholder=""
									maxlength="50"
									required="" />
							</div>
							<div class="col-span-3 flex flex-col">
								<label for="Last_Name">Last Name</label>
								<input
									type="text"
									id="Last_Name"
									name="Last_Name"
									placeholder=""
									maxlength="50"
									required="" />
							</div>
						</div>
						<!-- TAB 2 -->
						<div class="tab grid-cols-6 gap-4 md:gap-6">
							<div class="col-span-full flex flex-col">
								<label for="Street_Address">Street Address</label>
								<input
									id="Street_Address"
									name="Street"
									type="text"
									title="please enter a valid street address"
									required="" />
							</div>
							<div class="col-span-3 flex flex-col md:col-span-2">
								<label for="City">City</label>
								<input
									id="City"
									name="City"
									type="text"
									title="please enter a valid city"
									required="" />
							</div>
							<div class="col-span-3 flex flex-col md:col-span-2">
								<label for="State">State</label>
								<select
									name="State"
									id="State"
									required="required">
									<option value="">Select...</option>
									<option value="AL">Alabama</option>
									<option value="AK">Alaska</option>
									<option value="AZ">Arizona</option>
									<option value="AR">Arkansas</option>
									<option value="CA">California</option>
									<option value="CO">Colorado</option>
									<option value="CT">Connecticut</option>
									<option value="DE">Delaware</option>
									<option value="DC">District of Columbia</option>
									<option value="FL">Florida</option>
									<option value="GA">Georgia</option>
									<option value="HI">Hawaii</option>
									<option value="ID">Idaho</option>
									<option value="IL">Illinois</option>
									<option value="IN">Indiana</option>
									<option value="IA">Iowa</option>
									<option value="KS">Kansas</option>
									<option value="KY">Kentucky</option>
									<option value="LA">Louisiana</option>
									<option value="ME">Maine</option>
									<option value="MD">Maryland</option>
									<option value="MA">Massachusetts</option>
									<option value="MI">Michigan</option>
									<option value="MN">Minnesota</option>
									<option value="MS">Mississippi</option>
									<option value="MO">Missouri</option>
									<option value="MT">Montana</option>
									<option value="NE">Nebraska</option>
									<option value="NV">Nevada</option>
									<option value="NH">New Hampshire</option>
									<option value="NJ">New Jersey</option>
									<option value="NM">New Mexico</option>
									<option value="NY">New York</option>
									<option value="NC">North Carolina</option>
									<option value="ND">North Dakota</option>
									<option value="OH">Ohio</option>
									<option value="OK">Oklahoma</option>
									<option value="OR">Oregon</option>
									<option value="PA">Pennsylvania</option>
									<option value="RI">Rhode Island</option>
									<option value="SC">South Carolina</option>
									<option value="SD">South Dakota</option>
									<option value="TN">Tennessee</option>
									<option value="TX">Texas</option>
									<option value="UT">Utah</option>
									<option value="VT">Vermont</option>
									<option value="VA">Virginia</option>
									<option value="WA">Washington</option>
									<option value="WV">West Virginia</option>
									<option value="WI">Wisconsin</option>
									<option value="WY">Wyoming</option>
								</select>
							</div>
							<div class="col-span-3 flex flex-col md:col-span-2">
								<label for="Zip_Code">Zip Code</label>
								<input
									type="text"
									id="Zip"
									name="Zip_Code"
									maxlength="10"
									data-validate-zip=""
									required="" />
							</div>
							<div class="col-span-3 flex flex-col">
								<label for="Phone">Phone Number</label>
								<input
									type="text"
									id="Phone"
									name="Phone"
									data-validate-phone=""
									required="" />
							</div>
							<div class="col-span-full flex flex-col md:col-span-3">
								<label for="Email_Address">Email Address</label>
								<input
									id="Email_Address"
									name="Email_Address"
									type="email"
									title="please enter a valid email address"
									required="" />
							</div>
						</div>
						<!-- TAB 3 -->
						<div class="tab grid-cols-6 gap-4 md:gap-6">
							<div class="col-span-full flex flex-col">
								<label for="What_Prompted_Id">
									What prompted you to contact us?
								</label>
								<input
									type="hidden"
									id="lead_what_prompted_response"
									name="What_Prompted_Response"
									value="" />
								<select
									id="lead_what_prompted_id"
									name="What_Prompted_Id"
									required="">
									<option value="">Please select...</option>
									<option value="1">Referral</option>
									<option value="2">Previous Customer</option>
									<option value="3">Internet / Web Search</option>
									<option value="4">TV</option>
									<option value="5">Radio</option>
									<option value="6">Mail</option>
									<option value="7">Billboards</option>
									<option value="8">Other</option>
								</select>
							</div>
							<div class="col-span-full flex flex-col">
								<label for="Message">
									What type of service are you requesting?
								</label>
								<textarea
									id="Message"
									name="Message"
									rows="3"></textarea>
							</div>
						</div>
						<!-- NAV BUTTONS -->
						<div>
							<div
								id="btn-container"
								class="mx-auto mt-8 flex w-fit justify-between gap-4">
								<button
									type="button"
									id="prevBtn"
									class="rounded-full border-2 border-brand-dark px-6 py-1 text-base font-semibold text-brand-dark"
									onclick="nextPrev(-1)"
									style="display: none">
									Previous Step
								</button>
								<button
									class="rounded-full border-2 border-brand-dark bg-brand-dark px-6 py-1 text-base font-semibold text-white"
									type="button"
									id="nextBtn"
									onclick="nextPrev(1)">
									Next Step
								</button>
								<input
									class="rounded-full border-2 border-brand-dark bg-brand-dark px-6 py-1 text-base font-semibold text-white"
									type="submit"
									value="Send Request"
									style="display: none" />
							</div>
						</div>
					</form>
				</div>
			</div>
			<!-- /#form-wrap -->
			<style>
				#contact_form .tab {
					display: none;
				}
				#contact_form .tab.current {
					display: grid;
				}
				label.error {
					color: #f04124;
					font-weight: normal;
					font-size: 0.85rem;
					line-height: 1;
					padding-top: 0.35rem;
				}
				input.error,
				select.error,
				textarea.error {
					background-color: #fff5f6 !important;
					border: 1px solid red !important;
				}
			</style>
			<script
				type="text/javascript"
				src="https://cdn.treehouseinternetgroup.com/cms_core/assets/js/th_form_validator.js?v=1"></script>
			<script>
				const validator = new ThFormValidator("contact_form", {
					disableSubmit: true,
				});
			</script>
			<script>
				var currentTab = 0;
				const emailAddress = document.querySelector("#Email_Address");
				const phone = document.querySelector("#Phone");
				const zip = document.querySelector("#Zip");
				const btns = document.querySelector("#btn-container");
				const submit = document.querySelector("input[type='submit']");
				const prevBtn = document.querySelector("#prevBtn");
				const nextBtn = document.querySelector("#nextBtn");
				const form = document.querySelector("#contact_form");
				const tabs = document.querySelectorAll("#contact_form .tab");
				const steps = document.querySelectorAll("#contact_form .step");
				const whatPromptedSelect = document.getElementById(
					"lead_what_prompted_id"
				);
				const whatPromptedResponse = document.getElementById(
					"lead_what_prompted_response"
				);

				form.addEventListener("submit", function (e) {
					e.preventDefault();
					const errorFields = validator.validateAll();
					if (errorFields.length) {
						errorFields[0].focus();
						return;
					}
					document
						.querySelector('#contact_form [type="submit"]')
						.setAttribute("disabled", "disabled");
					document.querySelector("#submit-loader").classList.add("loading");
					this.submit();
				});

				whatPromptedSelect.addEventListener("change", (e) => {
					whatPromptedResponse.value = whatPromptedSelect.value;
				});

				function showTab(n) {
					document
						.querySelector("#contact_form .tab.current")
						.classList.remove("current");
					tabs[n].classList.add("current");
					document
						.querySelector("#contact_form .step.active")
						.classList.remove("active");
					steps[n].classList.add("active");
					steps[n].classList.remove("finish");

					if (n == 0) {
						prevBtn.style.display = "none";
						btns.classList.add("w-fit");
						btns.classList.remove("w-full");
					} else {
						prevBtn.style.display = "inline-block";
						btns.classList.add("w-full");
						btns.classList.remove("w-fit");
					}
					if (n == 1) {
						nextBtn.style.display = "inline-block";
					}
					if (n == 2) {
						nextBtn.style.display = "none";
						submit.style.display = "inline-block";
					} else {
						submit.style.display = "none";
					}

					let element = document.getElementById("contact_form");
					//let header = document.getElementById("header");
					//let headerOffset = header.offsetHeight;
					let paddingOffset = "30";
					let elementPosition = element.getBoundingClientRect().top;
					let offsetPosition =
						elementPosition + window.pageYOffset - paddingOffset;

					if (window.innerWidth < 768) {
						if (n >= 1) {
							window.scrollTo({
								top: offsetPosition,
								behavior: "smooth",
							});
						}
					}
				}

				function nextPrev(n) {
					if (n == 1 && validator) {
						const errorFields = validator.validateAll(tabs[currentTab]);
						if (errorFields.length) {
							errorFields[0].focus();
							return false;
						}
						steps[currentTab].classList.add("finish");
					}
					currentTab = currentTab + n;
					showTab(currentTab);
					return false;
				}
			</script>
		</div>
	</div>
                    <?php
                }
                else
                {
                ?>
    <?php 
    if ((strpos($thePage, "free-estimate") === false) && ($isCityPage == 0)) { ?>
    <!-----------------
        *** Silo Banner ***
        ------------------>
                    <div
        				id="siloBanner"
        				class="not-prose relative flex h-20 max-w-full items-center justify-center overflow-hidden bg-brand-dark md:h-40">
        				<img
        					class="absolute inset-0 h-full w-full object-cover opacity-30"
        					src="https://cdn.treehouseinternetgroup.com/cms_core/images/gs/gutter-shutter-default.jpg"
        					alt="Gutter Shutter no-clog gutter guards" />
        				<div class="absolute h-full w-full bg-brand-dark opacity-80"></div>
        				<div class="relative text-center">
        					<p class="z-10 text-2xl font-light text-white md:text-4xl">
        						<?php echo $cmsPageData['page.name']; ?>
        					</p>
        				</div>
        			</div>
    <?php 
    }
    ?>
                <?php 
                }
                ?>
                    
                    <?php if (stristr($thePage,"about-us")) { ?>
                        [[sidebar_nav_css]]
                        <div id="silo-sidebar">
                            <div id="sidebar-nav">[[single_silo_nav]]</div>
                        </div>
                    <?php } ?>
                    
                    <div id="contentWrap" class="mx-auto max-w-5xl px-5 py-10">
		                <div id="crumbs" class="not-prose mb-10">[[breadcrumbs]]</div>    
                
            <?php
            }
            ?>
            
			[[content]]
		        
		  <?php if ($thePage != "index") { ?>
		        </div><!-- End contentWarp -->
		        
		    </div><!-- End pageWrap -->
		  <?php
		  }
		  ?>
<!---------
  *** Map ***
  ---------->
        <?php if ((strpos($thePage, "free-estimate") === false) && ($isCityPage == 0) && (strpos($thePage, "service-area") === false) ) { ?>
			<div
				id="map"
				class="relative text-white">
				<div class="not-prose inset-0 h-72 md:absolute md:h-full z-0">
					[[service_area_google_map]]
				</div>
				<div class="relative mx-auto max-w-7xl z-10">
					<div
						class="w-full bg-brand-dark px-10 pb-16 pt-1 md:w-fit md:bg-opacity-90 md:shadow-xl">
						<h2 class="text-brand-bright">Our Service Area</h2>
						<div class="not-prose">
						[[city_scroll:50]]
						</div>
					</div>
				</div>
			</div>
		<?php
    	}
    	?>
    {{footer}}
		</div>
		<!-- end #template-wrap -->
		
		<script>
		// Sticky Header & Nav

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
    var content = document.getElementById("contentWrap");
    var sidebar = subnav.parentElement;
    if (window.innerWidth >= 1024 && content.offsetHeight > subnav.offsetHeight) {
        var banner = document.getElementById("siloBanner");
        contentMT = window.getComputedStyle(content).getPropertyValue("margin-top");
        contentMT = parseInt(contentMT.slice(0, -2));
        window.addEventListener("load", function () {
            subnav.style.width = sidebar.offsetWidth - 30 + "px";
        });
        window.addEventListener("resize", function () {
            subnav.style.width = sidebar.offsetWidth - 30 + "px";
        });
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
		<!-- Popup Modals -->
        <script src="https://cdn.treehouseinternetgroup.com/cms_core/assets/js/th_modals.js?v=1" type="text/javascript"></script>
        <script>
            const imagePopups = new ThModal({mode:'image', groupSelector: '[data-modal-gallery]', itemSelector: '[data-modal-image]'});
            const videoPopups = new ThModal({mode:'video', groupSelector: '[data-modal-videos]', itemSelector: '[data-modal-video]'});
        </script>
	</body>
</html>`

export const gsTemplateCSS = `
:root {
    --brand-color:0 149 218;
    --brand-color-dark:17 60 100;
    --brand-color-bright:0 192 243;
    --nav-brand-color:rgb(0 149 218);
    --nav-brand-color-dark:rgb(17 60 100);
}
/*** Widget Style ***/
.thm-title {
    font-size:1rem;
    margin-top:1rem;
    text-align:center;
}
/**** Horizontal Social Icons ****/
.social-share-inline ul {
    padding:0!important;
    margin:0;
    border:0;
    list-style:none;
    overflow:hidden;
}
.social-share-inline ul li {
    font-size:14px;
    font-family:trebuchet ms,
    lucida grande,
    lucida sans unicode,
    lucida sans,
    Tahoma,
    sans-serif;
    padding:6px;
    float:left;
}
.horizontal_social_share_icon_clipboard, .horizontal_social_share_icon_email, .horizontal_social_share_icon_facebook, .horizontal_social_share_icon_google, .horizontal_social_share_icon_linkedin, .horizontal_social_share_icon_pinterest, .horizontal_social_share_icon_twitter {
    background:#ededed!important;
    border-radius:50px;
    transition:background-color 1s;
}
.horizontal_social_share_icon_facebook:hover {
    background:#3b5998!important
}
.horizontal_social_share_icon_twitter:hover {
    background:#1da1f2!important
}
.horizontal_social_share_icon_google:hover {
    background:#db4437!important
}
.horizontal_social_share_icon_linkedin:hover {
    background:#0077b5!important
}
.horizontal_social_share_icon_pinterest:hover {
    background:#bd081c!important
}
.horizontal_social_share_icon_email:hover {
    background:#2ec0c8!important
}
.horizontal_social_share_icon_clipboard:hover {
    background:#ff5419!important
}`

export const gsInlineCSS = `
/* Fonts */
@import url("https://fonts.googleapis.com/css2?family=Catamaran:wght@200;
400;
600;
800&display=swap");
@media screen and (min-width:1024px){
    /* Make Header Sticky */
    .stuck #template-wrap {
        padding-top:125px;
    }
    .stuck #header {
        position:fixed;
        top:0;
        z-index:99999;
        width:100%;
        padding-bottom:2.5rem;
        animation:stickySlideDown .3s ease both;
    }
    .stuck #header:before {
        content:'';
        background:#fff;
        width:100vw;
        height:calc(100% - 2.5rem);
        top:0;
        z-index:-1;
        position:absolute;
        box-shadow:0 5px 10px rgba(0 0 0 / 10%);
    }
    @keyframes stickySlideDown {
        0% {
            transform:translateY(-100px);
        }
        100% {
            transform:translateY(0);
        }
    }
}
@media screen and (min-width:1280px){
    .stuck #header {
        left:calc((100vw - 80rem)/2);
    }
    .stuck #header::before {
        left:calc(-1*(100vw - 80rem)/2);
    }
}
/* ! tailwindcss v3.3.0 | MIT License | https://tailwindcss.com */
/*1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)*/
*,
::before,
::after {
    box-sizing:border-box;
    /* 1 */
    border-width:0;
    /* 2 */
    border-style:solid;
    /* 2 */
    border-color:#e5e7eb;
    /* 2 */
}
::before,
::after {
    --tw-content:'';
}
/*1. Use a consistent sensible line-height in all browsers.2. Prevent adjustments of font size after orientation changes in iOS.3. Use a more readable tab size.4. Use the user's configured \`sans\` font-family by default.5. Use the user's configured \`sans\` font-feature-settings by default.6. Use the user's configured \`sans\` font-variation-settings by default.*/
html {
    line-height:1.5;
    /* 1 */
    -webkit-text-size-adjust:100%;
    /* 2 */
    -moz-tab-size:4;
    /* 3 */
    -o-tab-size:4;
     tab-size:4;
    /* 3 */
    font-family:Catamaran, sans-serif;
    ;
    /* 4 */
    font-feature-settings:normal;
    /* 5 */
    font-variation-settings:normal;
    /* 6 */
}
/*1. Remove the margin in all browsers.2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.*/
body {
    margin:0;
    /* 1 */
    line-height:inherit;
    /* 2 */
}
/*1. Add the correct height in Firefox.2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)3. Ensure horizontal rules are visible by default.*/
hr {
    height:0;
    /* 1 */
    color:inherit;
    /* 2 */
    border-top-width:1px;
    /* 3 */
}
/*Add the correct text decoration in Chrome, Edge, and Safari.*/
abbr:where([title]) {
    -webkit-text-decoration:underline dotted;
    text-decoration:underline dotted;
}
/*Remove the default font size and weight for headings.*/
h1,
h2,
h3,
h4,
h5,
h6 {
    font-size:inherit;
    font-weight:inherit;
}
/*Reset links to optimize for opt-in styling instead of opt-out.*/
a {
    color:inherit;
    text-decoration:inherit;
}
/*Add the correct font weight in Edge and Safari.*/
b,
strong {
    font-weight:bolder;
}
/*1. Use the user's configured \`mono\` font family by default.2. Correct the odd \`em\` font sizing in all browsers.*/
code,
kbd,
samp,
pre {
    font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    /* 1 */
    font-size:1em;
    /* 2 */
}
/*Add the correct font size in all browsers.*/
small {
    font-size:80%;
}
/*Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.*/
sub,
sup {
    font-size:75%;
    line-height:0;
    position:relative;
    vertical-align:baseline;
}
sub {
    bottom:-0.25em;
}
sup {
    top:-0.5em;
}
/*1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)3. Remove gaps between table borders by default.*/
table {
    text-indent:0;
    /* 1 */
    border-color:inherit;
    /* 2 */
    border-collapse:collapse;
    /* 3 */
}
/*1. Change the font styles in all browsers.2. Remove the margin in Firefox and Safari.3. Remove default padding in all browsers.*/
button,
input,
optgroup,
select,
textarea {
    font-family:inherit;
    /* 1 */
    font-size:100%;
    /* 1 */
    font-weight:inherit;
    /* 1 */
    line-height:inherit;
    /* 1 */
    color:inherit;
    /* 1 */
    margin:0;
    /* 2 */
    padding:0;
    /* 3 */
}
/*Remove the inheritance of text transform in Edge and Firefox.*/
button,
select {
    text-transform:none;
}
/*1. Correct the inability to style clickable types in iOS and Safari.2. Remove default button styles.*/
button,
[type='button'],
[type='reset'],
[type='submit'] {
    -webkit-appearance:button;
    /* 1 */
    background-color:transparent;
    /* 2 */
    background-image:none;
    /* 2 */
}
/*Use the modern Firefox focus style for all focusable elements.*/
:-moz-focusring {
    outline:auto;
}
/*Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)*/
:-moz-ui-invalid {
    box-shadow:none;
}
/*Add the correct vertical alignment in Chrome and Firefox.*/
progress {
    vertical-align:baseline;
}
/*Correct the cursor style of increment and decrement buttons in Safari.*/
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
    height:auto;
}
/*1. Correct the odd appearance in Chrome and Safari.2. Correct the outline style in Safari.*/
[type='search'] {
    -webkit-appearance:textfield;
    /* 1 */
    outline-offset:-2px;
    /* 2 */
}
/*Remove the inner padding in Chrome and Safari on macOS.*/
::-webkit-search-decoration {
    -webkit-appearance:none;
}
/*1. Correct the inability to style clickable types in iOS and Safari.2. Change font properties to \`inherit\` in Safari.*/
::-webkit-file-upload-button {
    -webkit-appearance:button;
    /* 1 */
    font:inherit;
    /* 2 */
}
/*Add the correct display in Chrome and Safari.*/
summary {
    display:list-item;
}
/*Removes the default spacing and border for appropriate elements.*/
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
    margin:0;
}
fieldset {
    margin:0;
    padding:0;
}
legend {
    padding:0;
}
ol,
ul,
menu {
    list-style:none;
    margin:0;
    padding:0;
}
/*Prevent resizing textareas horizontally by default.*/
textarea {
    resize:vertical;
}
/*1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)2. Set the default placeholder color to the user's configured gray 400 color.*/
input::-moz-placeholder, textarea::-moz-placeholder {
    opacity:1;
    /* 1 */
    color:#9ca3af;
    /* 2 */
}
input::placeholder,
textarea::placeholder {
    opacity:1;
    /* 1 */
    color:#9ca3af;
    /* 2 */
}
/*Set the default cursor for buttons.*/
button,
[role="button"] {
    cursor:pointer;
}
/*Make sure disabled buttons don't get the pointer cursor.*/
:disabled {
    cursor:default;
}
/*1. Make replaced elements \`display:block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)2. Add \`vertical-align:middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210) This can trigger a poorly considered lint error in some tools but is included by design.*/
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
    display:block;
    /* 1 */
    vertical-align:middle;
    /* 2 */
}
/*Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)*/
img,
video {
    max-width:100%;
    height:auto;
}
/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
    display:none;
}
[type='text'],
[type='email'],
[type='url'],
[type='password'],
[type='number'],
[type='date'],
[type='datetime-local'],
[type='month'],
[type='search'],
[type='tel'],
[type='time'],
[type='week'],
[multiple],
textarea,
select{
    -webkit-appearance:none;
     -moz-appearance:none;
    appearance:none;
    background-color:#fff;
    border-color:#6b7280;
    border-width:1px;
    border-radius:0px;
    padding-top:0.5rem;
    padding-right:0.75rem;
    padding-bottom:0.5rem;
    padding-left:0.75rem;
    font-size:1rem;
    line-height:1.5rem;
    --tw-shadow:0 0 #0000;
}
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus{
    outline:2px solid transparent;
    outline-offset:2px;
    --tw-ring-inset:var(--tw-empty,
    /*!*/
     /*!*/
    );
    --tw-ring-offset-width:0px;
    --tw-ring-offset-color:#fff;
    --tw-ring-color:#2563eb;
    --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    border-color:#2563eb;
}
input::-moz-placeholder, textarea::-moz-placeholder{
    color:#6b7280;
    opacity:1;
}
input::placeholder,
textarea::placeholder{
    color:#6b7280;
    opacity:1;
}
::-webkit-datetime-edit-fields-wrapper{
    padding:0;
}
::-webkit-date-and-time-value{
    min-height:1.5em;
}
::-webkit-datetime-edit,
::-webkit-datetime-edit-year-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute-field,
::-webkit-datetime-edit-second-field,
::-webkit-datetime-edit-millisecond-field,
::-webkit-datetime-edit-meridiem-field{
    padding-top:0;
    padding-bottom:0;
}
select{
    background-image:url("data:image/svg+xml,
    %3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position:right 0.5rem center;
    background-repeat:no-repeat;
    background-size:1.5em 1.5em;
    padding-right:2.5rem;
    -webkit-print-color-adjust:exact;
    print-color-adjust:exact;
}
[multiple]{
    background-image:initial;
    background-position:initial;
    background-repeat:unset;
    background-size:initial;
    padding-right:0.75rem;
    -webkit-print-color-adjust:unset;
    print-color-adjust:unset;
}
[type='checkbox'],
[type='radio']{
    -webkit-appearance:none;
     -moz-appearance:none;
    appearance:none;
    padding:0;
    -webkit-print-color-adjust:exact;
    print-color-adjust:exact;
    display:inline-block;
    vertical-align:middle;
    background-origin:border-box;
    -webkit-user-select:none;
     -moz-user-select:none;
    user-select:none;
    flex-shrink:0;
    height:1rem;
    width:1rem;
    color:#2563eb;
    background-color:#fff;
    border-color:#6b7280;
    border-width:1px;
    --tw-shadow:0 0 #0000;
}
[type='checkbox']{
    border-radius:0px;
}
[type='radio']{
    border-radius:100%;
}
[type='checkbox']:focus,
[type='radio']:focus{
    outline:2px solid transparent;
    outline-offset:2px;
    --tw-ring-inset:var(--tw-empty,
    /*!*/
     /*!*/
    );
    --tw-ring-offset-width:2px;
    --tw-ring-offset-color:#fff;
    --tw-ring-color:#2563eb;
    --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
[type='checkbox']:checked,
[type='radio']:checked{
    border-color:transparent;
    background-color:currentColor;
    background-size:100% 100%;
    background-position:center;
    background-repeat:no-repeat;
}
[type='checkbox']:checked{
    background-image:url("data:image/svg+xml,
    %3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}
[type='radio']:checked{
    background-image:url("data:image/svg+xml,
    %3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}
[type='checkbox']:checked:hover,
[type='checkbox']:checked:focus,
[type='radio']:checked:hover,
[type='radio']:checked:focus{
    border-color:transparent;
    background-color:currentColor;
}
[type='checkbox']:indeterminate{
    background-image:url("data:image/svg+xml,
    %3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
    border-color:transparent;
    background-color:currentColor;
    background-size:100% 100%;
    background-position:center;
    background-repeat:no-repeat;
}
[type='checkbox']:indeterminate:hover,
[type='checkbox']:indeterminate:focus{
    border-color:transparent;
    background-color:currentColor;
}
[type='file']{
    background:unset;
    border-color:inherit;
    border-width:0;
    border-radius:0;
    padding:0;
    font-size:unset;
    line-height:inherit;
}
[type='file']:focus{
    outline:1px solid ButtonText;
    outline:1px auto -webkit-focus-ring-color;
}
.prose h1 + h2{
    margin-top:0px;
}
:where a{
    --tw-text-opacity:1;
    color:rgb(0 149 218 / var(--tw-text-opacity));
}
input[type="text"],
input[type="email"],
select,
textarea{
    margin-top:0.25rem;
    display:block;
    width:100%;
    border-radius:0.375rem;
    --tw-border-opacity:1;
    border-color:rgb(203 213 225 / var(--tw-border-opacity));
    font-size:1.125rem;
    line-height:1.75rem;
    font-weight:400;
    --tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
input[type="text"]:focus,
input[type="email"]:focus,
select:focus,
textarea:focus{
    --tw-border-opacity:1;
    border-color:rgb(165 180 252 / var(--tw-border-opacity));
    --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    --tw-ring-color:rgb(199 210 254 / var(--tw-ring-opacity));
    --tw-ring-opacity:0.5;
}
input[type="submit"]{
    cursor:pointer;
    transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration:150ms;
    transition-timing-function:cubic-bezier(0, 0, 0.2, 1);
}
input[type="submit"]:hover{
    --tw-scale-x:1.05;
    --tw-scale-y:1.05;
    transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
label{
    font-size:1rem;
    line-height:1.5rem;
    font-weight:600;
    --tw-text-opacity:1;
    color:rgb(100 116 139 / var(--tw-text-opacity));
}
*, ::before, ::after{
    --tw-border-spacing-x:0;
    --tw-border-spacing-y:0;
    --tw-translate-x:0;
    --tw-translate-y:0;
    --tw-rotate:0;
    --tw-skew-x:0;
    --tw-skew-y:0;
    --tw-scale-x:1;
    --tw-scale-y:1;
    --tw-pan-x:;
    --tw-pan-y:;
    --tw-pinch-zoom:;
    --tw-scroll-snap-strictness:proximity;
    --tw-ordinal:;
    --tw-slashed-zero:;
    --tw-numeric-figure:;
    --tw-numeric-spacing:;
    --tw-numeric-fraction:;
    --tw-ring-inset:;
    --tw-ring-offset-width:0px;
    --tw-ring-offset-color:#fff;
    --tw-ring-color:rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow:0 0 #0000;
    --tw-ring-shadow:0 0 #0000;
    --tw-shadow:0 0 #0000;
    --tw-shadow-colored:0 0 #0000;
    --tw-blur:;
    --tw-brightness:;
    --tw-contrast:;
    --tw-grayscale:;
    --tw-hue-rotate:;
    --tw-invert:;
    --tw-saturate:;
    --tw-sepia:;
    --tw-drop-shadow:;
    --tw-backdrop-blur:;
    --tw-backdrop-brightness:;
    --tw-backdrop-contrast:;
    --tw-backdrop-grayscale:;
    --tw-backdrop-hue-rotate:;
    --tw-backdrop-invert:;
    --tw-backdrop-opacity:;
    --tw-backdrop-saturate:;
    --tw-backdrop-sepia:;
}
::backdrop{
    --tw-border-spacing-x:0;
    --tw-border-spacing-y:0;
    --tw-translate-x:0;
    --tw-translate-y:0;
    --tw-rotate:0;
    --tw-skew-x:0;
    --tw-skew-y:0;
    --tw-scale-x:1;
    --tw-scale-y:1;
    --tw-pan-x:;
    --tw-pan-y:;
    --tw-pinch-zoom:;
    --tw-scroll-snap-strictness:proximity;
    --tw-ordinal:;
    --tw-slashed-zero:;
    --tw-numeric-figure:;
    --tw-numeric-spacing:;
    --tw-numeric-fraction:;
    --tw-ring-inset:;
    --tw-ring-offset-width:0px;
    --tw-ring-offset-color:#fff;
    --tw-ring-color:rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow:0 0 #0000;
    --tw-ring-shadow:0 0 #0000;
    --tw-shadow:0 0 #0000;
    --tw-shadow-colored:0 0 #0000;
    --tw-blur:;
    --tw-brightness:;
    --tw-contrast:;
    --tw-grayscale:;
    --tw-hue-rotate:;
    --tw-invert:;
    --tw-saturate:;
    --tw-sepia:;
    --tw-drop-shadow:;
    --tw-backdrop-blur:;
    --tw-backdrop-brightness:;
    --tw-backdrop-contrast:;
    --tw-backdrop-grayscale:;
    --tw-backdrop-hue-rotate:;
    --tw-backdrop-invert:;
    --tw-backdrop-opacity:;
    --tw-backdrop-saturate:;
    --tw-backdrop-sepia:;
}
.prose{
    color:var(--tw-prose-body);
    max-width:65ch;
}
.prose :where(p):not(:where([class~="not-prose"] *)){
    margin-top:1.25em;
    margin-bottom:1.25em;
}
.prose :where([class~="lead"]):not(:where([class~="not-prose"] *)){
    color:var(--tw-prose-lead);
    font-size:1.25em;
    line-height:1.6;
    margin-top:1.2em;
    margin-bottom:1.2em;
}
.prose :where(a):not(:where([class~="not-prose"] *)){
    color:#0095DA;
    text-decoration:none;
    font-weight:500;
}
.prose :where(a):not(:where([class~="not-prose"] *)):hover{
    color:#113C64;
    text-decoration:underline;
}
.prose :where(strong):not(:where([class~="not-prose"] *)){
    color:var(--tw-prose-bold);
    font-weight:600;
}
.prose :where(a strong):not(:where([class~="not-prose"] *)){
    color:inherit;
}
.prose :where(blockquote strong):not(:where([class~="not-prose"] *)){
    color:inherit;
}
.prose :where(thead th strong):not(:where([class~="not-prose"] *)){
    color:inherit;
}
.prose :where(ol):not(:where([class~="not-prose"] *)){
    list-style-type:decimal;
    margin-top:1.25em;
    margin-bottom:1.25em;
    padding-left:1.625em;
}
.prose :where(ol[type="A"]):not(:where([class~="not-prose"] *)){
    list-style-type:upper-alpha;
}
.prose :where(ol[type="a"]):not(:where([class~="not-prose"] *)){
    list-style-type:lower-alpha;
}
.prose :where(ol[type="A" s]):not(:where([class~="not-prose"] *)){
    list-style-type:upper-alpha;
}
.prose :where(ol[type="a" s]):not(:where([class~="not-prose"] *)){
    list-style-type:lower-alpha;
}
.prose :where(ol[type="I"]):not(:where([class~="not-prose"] *)){
    list-style-type:upper-roman;
}
.prose :where(ol[type="i"]):not(:where([class~="not-prose"] *)){
    list-style-type:lower-roman;
}
.prose :where(ol[type="I" s]):not(:where([class~="not-prose"] *)){
    list-style-type:upper-roman;
}
.prose :where(ol[type="i" s]):not(:where([class~="not-prose"] *)){
    list-style-type:lower-roman;
}
.prose :where(ol[type="1"]):not(:where([class~="not-prose"] *)){
    list-style-type:decimal;
}
.prose :where(ul):not(:where([class~="not-prose"] *)){
    list-style-type:disc;
    margin-top:1.25em;
    margin-bottom:1.25em;
    padding-left:1.625em;
}
.prose :where(ol > li):not(:where([class~="not-prose"] *))::marker{
    font-weight:400;
    color:var(--tw-prose-counters);
}
.prose :where(ul > li):not(:where([class~="not-prose"] *))::marker{
    color:var(--tw-prose-bullets);
}
.prose :where(hr):not(:where([class~="not-prose"] *)){
    border-color:var(--tw-prose-hr);
    border-top-width:1px;
    margin-top:3em;
    margin-bottom:3em;
}
.prose :where(blockquote):not(:where([class~="not-prose"] *)){
    font-weight:500;
    font-style:italic;
    color:var(--tw-prose-quotes);
    border-left-width:0.25rem;
    border-left-color:var(--tw-prose-quote-borders);
    quotes:"\\201C""\\201D""\\2018""\\2019";
    margin-top:1.6em;
    margin-bottom:1.6em;
    padding-left:1em;
}
.prose :where(blockquote p:first-of-type):not(:where([class~="not-prose"] *))::before{
    content:open-quote;
}
.prose :where(blockquote p:last-of-type):not(:where([class~="not-prose"] *))::after{
    content:close-quote;
}
.prose :where(h1):not(:where([class~="not-prose"] *)){
    color:var(--tw-prose-headings);
    font-weight:800;
    font-size:2.25em;
    margin-top:0;
    margin-bottom:0.8888889em;
    line-height:1.1111111;
}
.prose :where(h1 strong):not(:where([class~="not-prose"] *)){
    font-weight:900;
    color:inherit;
}
.prose :where(h2):not(:where([class~="not-prose"] *)){
    color:currentColor;
    font-weight:700;
    font-size:1.5em;
    margin-top:2em;
    margin-bottom:1em;
    line-height:1.3333333;
}
.prose :where(h2 strong):not(:where([class~="not-prose"] *)){
    font-weight:800;
    color:inherit;
}
.prose :where(h3):not(:where([class~="not-prose"] *)){
    color:var(--tw-prose-headings);
    font-weight:600;
    font-size:1.25em;
    margin-top:1.6em;
    margin-bottom:0.6em;
    line-height:1.6;
}
.prose :where(h3 strong):not(:where([class~="not-prose"] *)){
    font-weight:700;
    color:inherit;
}
.prose :where(h4):not(:where([class~="not-prose"] *)){
    color:var(--tw-prose-headings);
    font-weight:600;
    margin-top:1.5em;
    margin-bottom:0.5em;
    line-height:1.5;
}
.prose :where(h4 strong):not(:where([class~="not-prose"] *)){
    font-weight:700;
    color:inherit;
}
.prose :where(img):not(:where([class~="not-prose"] *)){
    margin-top:2em;
    margin-bottom:2em;
}
.prose :where(figure > *):not(:where([class~="not-prose"] *)){
    margin-top:0;
    margin-bottom:0;
}
.prose :where(figcaption):not(:where([class~="not-prose"] *)){
    color:var(--tw-prose-captions);
    font-size:0.875em;
    line-height:1.4285714;
    margin-top:0.8571429em;
}
.prose :where(code):not(:where([class~="not-prose"] *)){
    color:var(--tw-prose-code);
    font-weight:600;
    font-size:0.875em;
}
.prose :where(code):not(:where([class~="not-prose"] *))::before{
    content:"\`";
}
.prose :where(code):not(:where([class~="not-prose"] *))::after{
    content:"\`";
}
.prose :where(a code):not(:where([class~="not-prose"] *)){
    color:inherit;
}
.prose :where(h1 code):not(:where([class~="not-prose"] *)){
    color:inherit;
}
.prose :where(h2 code):not(:where([class~="not-prose"] *)){
    color:inherit;
    font-size:0.875em;
}
.prose :where(h3 code):not(:where([class~="not-prose"] *)){
    color:inherit;
    font-size:0.9em;
}
.prose :where(h4 code):not(:where([class~="not-prose"] *)){
    color:inherit;
}
.prose :where(blockquote code):not(:where([class~="not-prose"] *)){
    color:inherit;
}
.prose :where(thead th code):not(:where([class~="not-prose"] *)){
    color:inherit;
}
.prose :where(pre):not(:where([class~="not-prose"] *)){
    color:var(--tw-prose-pre-code);
    background-color:var(--tw-prose-pre-bg);
    overflow-x:auto;
    font-weight:400;
    font-size:0.875em;
    line-height:1.7142857;
    margin-top:1.7142857em;
    margin-bottom:1.7142857em;
    border-radius:0.375rem;
    padding-top:0.8571429em;
    padding-right:1.1428571em;
    padding-bottom:0.8571429em;
    padding-left:1.1428571em;
}
.prose :where(pre code):not(:where([class~="not-prose"] *)){
    background-color:transparent;
    border-width:0;
    border-radius:0;
    padding:0;
    font-weight:inherit;
    color:inherit;
    font-size:inherit;
    font-family:inherit;
    line-height:inherit;
}
.prose :where(pre code):not(:where([class~="not-prose"] *))::before{
    content:none;
}
.prose :where(pre code):not(:where([class~="not-prose"] *))::after{
    content:none;
}
.prose :where(table):not(:where([class~="not-prose"] *)){
    width:100%;
    table-layout:auto;
    text-align:left;
    margin-top:2em;
    margin-bottom:2em;
    font-size:0.875em;
    line-height:1.7142857;
}
.prose :where(thead):not(:where([class~="not-prose"] *)){
    border-bottom-width:1px;
    border-bottom-color:var(--tw-prose-th-borders);
}
.prose :where(thead th):not(:where([class~="not-prose"] *)){
    color:var(--tw-prose-headings);
    font-weight:600;
    vertical-align:bottom;
    padding-right:0.5714286em;
    padding-bottom:0.5714286em;
    padding-left:0.5714286em;
}
.prose :where(tbody tr):not(:where([class~="not-prose"] *)){
    border-bottom-width:1px;
    border-bottom-color:var(--tw-prose-td-borders);
}
.prose :where(tbody tr:last-child):not(:where([class~="not-prose"] *)){
    border-bottom-width:0;
}
.prose :where(tbody td):not(:where([class~="not-prose"] *)){
    vertical-align:baseline;
}
.prose :where(tfoot):not(:where([class~="not-prose"] *)){
    border-top-width:1px;
    border-top-color:var(--tw-prose-th-borders);
}
.prose :where(tfoot td):not(:where([class~="not-prose"] *)){
    vertical-align:top;
}
.prose{
    --tw-prose-body:#374151;
    --tw-prose-headings:#111827;
    --tw-prose-lead:#4b5563;
    --tw-prose-links:#111827;
    --tw-prose-bold:#111827;
    --tw-prose-counters:#6b7280;
    --tw-prose-bullets:#d1d5db;
    --tw-prose-hr:#e5e7eb;
    --tw-prose-quotes:#111827;
    --tw-prose-quote-borders:#e5e7eb;
    --tw-prose-captions:#6b7280;
    --tw-prose-code:#111827;
    --tw-prose-pre-code:#e5e7eb;
    --tw-prose-pre-bg:#1f2937;
    --tw-prose-th-borders:#d1d5db;
    --tw-prose-td-borders:#e5e7eb;
    --tw-prose-invert-body:#d1d5db;
    --tw-prose-invert-headings:#fff;
    --tw-prose-invert-lead:#9ca3af;
    --tw-prose-invert-links:#fff;
    --tw-prose-invert-bold:#fff;
    --tw-prose-invert-counters:#9ca3af;
    --tw-prose-invert-bullets:#4b5563;
    --tw-prose-invert-hr:#374151;
    --tw-prose-invert-quotes:#f3f4f6;
    --tw-prose-invert-quote-borders:#374151;
    --tw-prose-invert-captions:#9ca3af;
    --tw-prose-invert-code:#fff;
    --tw-prose-invert-pre-code:#d1d5db;
    --tw-prose-invert-pre-bg:rgb(0 0 0 / 50%);
    --tw-prose-invert-th-borders:#4b5563;
    --tw-prose-invert-td-borders:#374151;
    font-size:1rem;
    line-height:1.75;
}
.prose :where(video):not(:where([class~="not-prose"] *)){
    margin-top:2em;
    margin-bottom:2em;
}
.prose :where(figure):not(:where([class~="not-prose"] *)){
    margin-top:2em;
    margin-bottom:2em;
}
.prose :where(li):not(:where([class~="not-prose"] *)){
    margin-top:0.5em;
    margin-bottom:0.5em;
}
.prose :where(ol > li):not(:where([class~="not-prose"] *)){
    padding-left:0.375em;
}
.prose :where(ul > li):not(:where([class~="not-prose"] *)){
    padding-left:0.375em;
}
.prose :where(.prose > ul > li p):not(:where([class~="not-prose"] *)){
    margin-top:0.75em;
    margin-bottom:0.75em;
}
.prose :where(.prose > ul > li > *:first-child):not(:where([class~="not-prose"] *)){
    margin-top:1.25em;
}
.prose :where(.prose > ul > li > *:last-child):not(:where([class~="not-prose"] *)){
    margin-bottom:1.25em;
}
.prose :where(.prose > ol > li > *:first-child):not(:where([class~="not-prose"] *)){
    margin-top:1.25em;
}
.prose :where(.prose > ol > li > *:last-child):not(:where([class~="not-prose"] *)){
    margin-bottom:1.25em;
}
.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"] *)){
    margin-top:0.75em;
    margin-bottom:0.75em;
}
.prose :where(hr + *):not(:where([class~="not-prose"] *)){
    margin-top:0;
}
.prose :where(h2 + *):not(:where([class~="not-prose"] *)){
    margin-top:0;
}
.prose :where(h3 + *):not(:where([class~="not-prose"] *)){
    margin-top:0;
}
.prose :where(h4 + *):not(:where([class~="not-prose"] *)){
    margin-top:0;
}
.prose :where(thead th:first-child):not(:where([class~="not-prose"] *)){
    padding-left:0;
}
.prose :where(thead th:last-child):not(:where([class~="not-prose"] *)){
    padding-right:0;
}
.prose :where(tbody td, tfoot td):not(:where([class~="not-prose"] *)){
    padding-top:0.5714286em;
    padding-right:0.5714286em;
    padding-bottom:0.5714286em;
    padding-left:0.5714286em;
}
.prose :where(tbody td:first-child, tfoot td:first-child):not(:where([class~="not-prose"] *)){
    padding-left:0;
}
.prose :where(tbody td:last-child, tfoot td:last-child):not(:where([class~="not-prose"] *)){
    padding-right:0;
}
.prose :where(.prose > :first-child):not(:where([class~="not-prose"] *)){
    margin-top:0;
}
.prose :where(.prose > :last-child):not(:where([class~="not-prose"] *)){
    margin-bottom:0;
}
/* CTAs */
.btn,
.button{
    display:block;
    width:100%;
    max-width:24rem;
    cursor:pointer;
    white-space:nowrap;
    border-radius:0.75rem;
    padding-left:1.5rem;
    padding-right:1.5rem;
    padding-top:1rem;
    padding-bottom:1rem;
    text-align:center;
    font-size:1.25rem;
    line-height:1.75rem;
    text-decoration-line:none;
}
.btn:hover,
.button:hover{
    text-decoration-line:none;
}
@media (min-width:640px){
    .btn,
    .button{
        max-width:-moz-fit-content;
        max-width:fit-content;
    }
}
.btn--cta,
.button{
    margin-left:auto;
    margin-right:auto;
    display:block;
    border-width:4px;
    --tw-border-opacity:1;
    border-color:rgb(0 149 218 / var(--tw-border-opacity));
    --tw-bg-opacity:1;
    background-color:rgb(0 149 218 / var(--tw-bg-opacity));
    font-weight:600;
    --tw-text-opacity:1;
    color:rgb(255 255 255 / var(--tw-text-opacity));
    --tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration:150ms;
}
.btn--cta:hover,
.button:hover{
    background-color:transparent;
    --tw-text-opacity:1;
    color:rgb(0 149 218 / var(--tw-text-opacity));
}
/* Content components */
#bread_crumbs{
    display:flex;
    gap:0.25rem;
    font-size:0.875rem;
    line-height:1.25rem;
}
#bread_crumbs a{
    text-decoration-line:underline;
}
#bread_crumbs a:hover{
    --tw-text-opacity:1;
    color:rgb(0 149 218 / var(--tw-text-opacity));
}
ul.checklist,
ul.checks{
    margin-bottom:0px;
}
ul.checklist li,
ul.checks li{
    position:relative;
    margin-bottom:1.5rem;
    margin-left:2.5rem;
}
ul.checklist li::before,
ul.checks li::before{
    position:absolute;
    display:inline-flex;
    height:1.75rem;
    width:1.75rem;
    --tw-translate-x:-2.5rem;
    transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    justify-content:center;
    border-radius:9999px;
    --tw-bg-opacity:1;
    background-color:rgb(0 149 218 / var(--tw-bg-opacity));
    font-size:1.3rem;
    line-height:2rem;
    --tw-text-opacity:1;
    color:rgb(255 255 255 / var(--tw-text-opacity));
    --tw-content:'\\2713';
    content:var(--tw-content);
}
.breakout-right{
    margin-left:auto;
    margin-right:auto;
    margin-top:1.5rem;
    margin-bottom:1.5rem;
    height:-moz-fit-content;
    height:fit-content;
    max-width:24rem;
    border-width:1px;
    --tw-border-opacity:1;
    border-color:rgb(229 231 235 / var(--tw-border-opacity));
    --tw-bg-opacity:1;
    background-color:rgb(248 250 252 / var(--tw-bg-opacity));
    --tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
@media (min-width:768px){
    .breakout-right{
        float:right;
        margin-left:1.5rem;
        margin-right:0px;
        margin-top:0px;
    }
}
.breakout-left{
    margin-left:auto;
    margin-right:auto;
    margin-top:1.5rem;
    margin-bottom:1.5rem;
    height:-moz-fit-content;
    height:fit-content;
    max-width:24rem;
    border-width:1px;
    --tw-border-opacity:1;
    border-color:rgb(229 231 235 / var(--tw-border-opacity));
    --tw-bg-opacity:1;
    background-color:rgb(248 250 252 / var(--tw-bg-opacity));
    --tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
@media (min-width:768px){
    .breakout-left{
        float:left;
        margin-left:0px;
        margin-right:1.5rem;
        margin-top:0px;
    }
}
[class*="breakout"] img{
    margin-top:0px !important;
    margin-bottom:0px !important;
    max-height:24rem;
    width:100%;
    -o-object-fit:cover;
     object-fit:cover;
}
[class*="breakout"] p{
    margin-top:0px !important;
    margin-bottom:0px !important;
    padding:1rem;
    line-height:1.375;
}
.sectionHighlight{
    clear:both;
    margin-left:auto;
    margin-right:auto;
    margin-top:4rem;
    margin-bottom:4rem;
    overflow:auto;
    border-top-width:1px;
    border-bottom-width:1px;
    --tw-border-opacity:1;
    border-color:rgb(0 149 218 / var(--tw-border-opacity));
    --tw-bg-opacity:1;
    background-color:rgb(241 245 249 / var(--tw-bg-opacity));
    padding-left:1.25rem;
    padding-right:1.25rem;
    padding-bottom:2rem;
    padding-top:2rem;
    line-height:1.375;
    --tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
@media (min-width:1024px){
    .sectionHighlight{
        padding-left:2.5rem;
        padding-right:2.5rem;
    }
}
.sectionHighlight > h2{
    margin-top:0.5rem;
}
.related_pages_wrapper{
    clear:both;
    margin-left:auto;
    margin-right:auto;
    margin-top:2.5rem;
    margin-bottom:2.5rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    gap:1.5rem;
    border-width:1px;
    --tw-border-opacity:1;
    border-color:rgb(229 231 235 / var(--tw-border-opacity));
    --tw-bg-opacity:1;
    background-color:rgb(243 244 246 / var(--tw-bg-opacity));
    padding-left:2.5rem;
    padding-right:2.5rem;
    padding-top:2rem;
    padding-bottom:2rem;
}
@media (min-width:640px){
    .related_pages_wrapper{
        flex-direction:row;
    }
}
.related_pages_wrapper h4{
    margin-top:0.5rem;
    width:-moz-fit-content;
    width:fit-content;
    border-bottom-width:1px;
    --tw-border-opacity:1;
    border-color:rgb(17 60 100 / var(--tw-border-opacity));
    font-size:1.25rem;
    line-height:1.75rem;
    font-weight:700;
    --tw-text-opacity:1;
    color:rgb(17 60 100 / var(--tw-text-opacity));
}
@media (min-width:768px){
    .related_pages_wrapper h4{
        margin-bottom:0.5rem;
    }
}
.related_pages_wrapper .btn{
    margin:0px;
    white-space:nowrap;
}
/* Multi Step Form */
#step-dot-container .step{
    display:flex;
    height:1.75rem;
    width:1.75rem;
    align-items:center;
    justify-content:center;
    border-radius:9999px;
    border-width:2px;
    --tw-border-opacity:1;
    border-color:rgb(17 60 100 / var(--tw-border-opacity));
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255 / var(--tw-bg-opacity));
    font-size:1.5rem;
    line-height:2rem;
    font-weight:600;
    --tw-text-opacity:1;
    color:rgb(17 60 100 / var(--tw-text-opacity));
    opacity:0.4;
}
#step-dot-container .step.active,
#step-dot-container .step.finish,
#step-dot-container .step.finish + div{
    opacity:1;
}
#step-dot-container .step.finish{
    --tw-bg-opacity:1;
    background-color:rgb(17 60 100 / var(--tw-bg-opacity));
    --tw-text-opacity:1;
    color:rgb(255 255 255 / var(--tw-text-opacity));
}
#submit-loader.loading{
    display:flex;
}
/* Service Area */
#map h3{
    font-size:1.25rem;
    line-height:1.75rem;
    font-weight:600;
}
.city_scroll_list_content{
    margin-bottom:2rem;
    height:10rem;
    overflow:scroll;
    --tw-text-opacity:1;
    color:rgb(255 255 255 / var(--tw-text-opacity));
    mask-image:linear-gradient(to bottom,
    transparent,
    black 10%,
    black 80%,
    transparent);
    -webkit-mask-image:linear-gradient(to bottom,
    transparent,
    black 10%,
    black 80%,
    transparent);
}
@media (min-width:768px){
    .city_scroll_list_content{
        height:16rem;
        padding-bottom:2.5rem;
        padding-top:0.75rem;
    }
}
.city_scroll_list{
    margin-bottom:4rem;
    display:flex;
    flex-wrap:wrap;
    -moz-column-gap:1rem;
     column-gap:1rem;
    padding-right:0.5rem;
    padding-top:0.75rem;
}
@media (min-width:768px){
    .city_scroll_list{
        display:block;
    }
}
.city_scroll_list a{
    --tw-text-opacity:1;
    color:rgb(0 192 243 / var(--tw-text-opacity));
    text-decoration-line:underline;
}
.city_scroll_list_footer p.more-assets a{
    margin:0px;
    width:-moz-fit-content;
    width:fit-content;
    cursor:pointer;
    border-radius:9999px;
    border-width:2px;
    --tw-border-opacity:1;
    border-color:rgb(255 255 255 / var(--tw-border-opacity));
    padding-left:0.75rem;
    padding-right:0.75rem;
    padding-top:0.25rem;
    padding-bottom:0.25rem;
    font-size:1rem;
    line-height:1.5rem;
    --tw-text-opacity:1;
    color:rgb(255 255 255 / var(--tw-text-opacity));
    transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration:150ms;
}
.city_scroll_list_footer p.more-assets a:hover{
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255 / var(--tw-bg-opacity));
    --tw-text-opacity:1;
    color:rgb(17 60 100 / var(--tw-text-opacity));
    text-decoration-line:none;
}
/* Footer */
#footer-nav > ul{
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    gap:1rem;
}
@media (min-width:640px){
    #footer-nav > ul{
        flex-direction:row;
        gap:2.5rem;
    }
}
li.footer-link{
    margin-bottom:0.5rem;
    white-space:nowrap;
    font-size:1.125rem;
    line-height:1.75rem;
    font-weight:700;
    --tw-text-opacity:1;
    color:rgb(0 149 218 / var(--tw-text-opacity));
}
li.footer-link ul{
    margin-top:0.25rem;
}
li.footer-link ul > :not([hidden]) ~ :not([hidden]){
    --tw-space-y-reverse:0;
    margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom:calc(0.5rem * var(--tw-space-y-reverse));
}
li.footer-link ul{
    font-size:1rem;
    line-height:1.5rem;
    font-weight:400;
    line-height:1.375;
    --tw-text-opacity:1;
    color:rgb(209 213 219 / var(--tw-text-opacity));
}
.visible{
    visibility:visible;
}
.fixed{
    position:fixed;
}
.absolute{
    position:absolute;
}
.relative{
    position:relative;
}
.sticky{
    position:sticky;
}
.inset-0{
    inset:0px;
}
.inset-y-0{
    top:0px;
    bottom:0px;
}
.left-\\[12\\%\\]{
    left:12%;
}
.left-\\[16px\\]{
    left:16px;
}
.left-\\[17\\%\\]{
    left:17%;
}
.left-\\[33\\%\\]{
    left:33%;
}
.left-\\[46\\.5\\%\\]{
    left:46.5%;
}
.left-\\[78\\.5\\%\\]{
    left:78.5%;
}
.left-\\[79\\.5\\%\\]{
    left:79.5%;
}
.right-0{
    right:0px;
}
.top-0{
    top:0px;
}
.z-0{
    z-index:0;
}
.z-10{
    z-index:10;
}
.order-1{
    order:1;
}
.order-first{
    order:-9999;
}
.col-span-2{
    grid-column:span 2 / span 2;
}
.col-span-3{
    grid-column:span 3 / span 3;
}
.col-span-full{
    grid-column:1 / -1;
}
.row-start-1{
    grid-row-start:1;
}
.row-start-2{
    grid-row-start:2;
}
.clear-both{
    clear:both;
}
.\\!my-0{
    margin-top:0px !important;
    margin-bottom:0px !important;
}
.\\!my-6{
    margin-top:1.5rem !important;
    margin-bottom:1.5rem !important;
}
.mx-0{
    margin-left:0px;
    margin-right:0px;
}
.mx-4{
    margin-left:1rem;
    margin-right:1rem;
}
.mx-8{
    margin-left:2rem;
    margin-right:2rem;
}
.mx-auto{
    margin-left:auto;
    margin-right:auto;
}
.my-10{
    margin-top:2.5rem;
    margin-bottom:2.5rem;
}
.my-2{
    margin-top:0.5rem;
    margin-bottom:0.5rem;
}
.my-20{
    margin-top:5rem;
    margin-bottom:5rem;
}
.my-4{
    margin-top:1rem;
    margin-bottom:1rem;
}
.my-\\[2px\\]{
    margin-top:2px;
    margin-bottom:2px;
}
.\\!mb-0{
    margin-bottom:0px !important;
}
.mb-1{
    margin-bottom:0.25rem;
}
.mb-10{
    margin-bottom:2.5rem;
}
.mb-16{
    margin-bottom:4rem;
}
.mb-2{
    margin-bottom:0.5rem;
}
.mb-20{
    margin-bottom:5rem;
}
.mb-3{
    margin-bottom:0.75rem;
}
.mb-4{
    margin-bottom:1rem;
}
.mb-5{
    margin-bottom:1.25rem;
}
.mb-6{
    margin-bottom:1.5rem;
}
.mb-8{
    margin-bottom:2rem;
}
.mr-6{
    margin-right:1.5rem;
}
.mt-1{
    margin-top:0.25rem;
}
.mt-10{
    margin-top:2.5rem;
}
.mt-2{
    margin-top:0.5rem;
}
.mt-3{
    margin-top:0.75rem;
}
.mt-4{
    margin-top:1rem;
}
.mt-6{
    margin-top:1.5rem;
}
.mt-8{
    margin-top:2rem;
}
.mt-\\[-18\\%\\]{
    margin-top:-18%;
}
.mt-\\[-21\\%\\]{
    margin-top:-21%;
}
.mt-\\[-22\\.75\\%\\]{
    margin-top:-22.75%;
}
.mt-\\[-24\\%\\]{
    margin-top:-24%;
}
.mt-\\[-7\\%\\]{
    margin-top:-7%;
}
.mt-\\[-8\\%\\]{
    margin-top:-8%;
}
.block{
    display:block;
}
.inline-block{
    display:inline-block;
}
.flex{
    display:flex;
}
.grid{
    display:grid;
}
.list-item{
    display:list-item;
}
.hidden{
    display:none;
}
.h-1{
    height:0.25rem;
}
.h-16{
    height:4rem;
}
.h-20{
    height:5rem;
}
.h-4{
    height:1rem;
}
.h-40{
    height:10rem;
}
.h-44{
    height:11rem;
}
.h-5{
    height:1.25rem;
}
.h-64{
    height:16rem;
}
.h-72{
    height:18rem;
}
.h-80{
    height:20rem;
}
.h-\\[200px\\]{
    height:200px;
}
.h-fit{
    height:-moz-fit-content;
    height:fit-content;
}
.h-full{
    height:100%;
}
.h-screen{
    height:100vh;
}
.\\!w-1\\/2{
    width:50% !important;
}
.w-1{
    width:0.25rem;
}
.w-1\\/2{
    width:50%;
}
.w-11\\/12{
    width:91.666667%;
}
.w-12{
    width:3rem;
}
.w-16{
    width:4rem;
}
.w-24{
    width:6rem;
}
.w-4{
    width:1rem;
}
.w-5{
    width:1.25rem;
}
.w-7{
    width:1.75rem;
}
.w-auto{
    width:auto;
}
.w-fit{
    width:-moz-fit-content;
    width:fit-content;
}
.w-full{
    width:100%;
}
.w-screen{
    width:100vw;
}
.max-w-2xl{
    max-width:42rem;
}
.max-w-3xl{
    max-width:48rem;
}
.max-w-5xl{
    max-width:64rem;
}
.max-w-7xl{
    max-width:80rem;
}
.max-w-full{
    max-width:100%;
}
.max-w-lg{
    max-width:32rem;
}
.max-w-md{
    max-width:28rem;
}
.max-w-none{
    max-width:none;
}
.max-w-sm{
    max-width:24rem;
}
.max-w-xl{
    max-width:36rem;
}
.max-w-xs{
    max-width:20rem;
}
.flex-1{
    flex:1 1 0%;
}
.grow-0{
    flex-grow:0;
}
.basis-2\\/5{
    flex-basis:40%;
}
.basis-3\\/5{
    flex-basis:60%;
}
.origin-\\[16px_32px\\]{
    transform-origin:16px 32px;
}
.translate-y-28{
    --tw-translate-y:7rem;
    transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform{
    transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes spin{
    to{
        transform:rotate(360deg);
    }
}
.animate-\\[spin_1s_ease_\\.1s_infinite\\]{
    animation:spin 1s ease .1s infinite;
}
@keyframes spin{
    to{
        transform:rotate(360deg);
    }
}
.animate-\\[spin_1s_ease_\\.2s_infinite\\]{
    animation:spin 1s ease .2s infinite;
}
@keyframes spin{
    to{
        transform:rotate(360deg);
    }
}
.animate-\\[spin_1s_ease_infinite\\]{
    animation:spin 1s ease infinite;
}
@keyframes pulse{
    50%{
        opacity:.5;
    }
}
.animate-pulse{
    animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.cursor-pointer{
    cursor:pointer;
}
.grid-cols-2{
    grid-template-columns:repeat(2, minmax(0, 1fr));
}
.grid-cols-3{
    grid-template-columns:repeat(3, minmax(0, 1fr));
}
.grid-cols-6{
    grid-template-columns:repeat(6, minmax(0, 1fr));
}
.grid-cols-\\[auto\\2c 1fr\\]{
    grid-template-columns:auto 1fr;
}
.grid-cols-\\[auto\\2c auto\\]{
    grid-template-columns:auto auto;
}
.grid-rows-\\[auto\\2c auto\\]{
    grid-template-rows:auto auto;
}
.flex-col{
    flex-direction:column;
}
.flex-wrap{
    flex-wrap:wrap;
}
.items-center{
    align-items:center;
}
.justify-end{
    justify-content:flex-end;
}
.justify-center{
    justify-content:center;
}
.justify-between{
    justify-content:space-between;
}
.justify-evenly{
    justify-content:space-evenly;
}
.justify-stretch{
    justify-content:stretch;
}
.gap-1{
    gap:0.25rem;
}
.gap-10{
    gap:2.5rem;
}
.gap-12{
    gap:3rem;
}
.gap-2{
    gap:0.5rem;
}
.gap-3{
    gap:0.75rem;
}
.gap-4{
    gap:1rem;
}
.gap-5{
    gap:1.25rem;
}
.gap-6{
    gap:1.5rem;
}
.gap-8{
    gap:2rem;
}
.gap-x-10{
    -moz-column-gap:2.5rem;
     column-gap:2.5rem;
}
.gap-x-4{
    -moz-column-gap:1rem;
     column-gap:1rem;
}
.space-y-1 > :not([hidden]) ~ :not([hidden]){
    --tw-space-y-reverse:0;
    margin-top:calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom:calc(0.25rem * var(--tw-space-y-reverse));
}
.justify-self-end{
    justify-self:end;
}
.overflow-auto{
    overflow:auto;
}
.overflow-hidden{
    overflow:hidden;
}
.whitespace-nowrap{
    white-space:nowrap;
}
.\\!rounded-full{
    border-radius:9999px !important;
}
.rounded{
    border-radius:0.25rem;
}
.rounded-full{
    border-radius:9999px !important;
}
.rounded-lg{
    border-radius:0.5rem;
}
.rounded-md{
    border-radius:0.375rem;
}
.rounded-sm{
    border-radius:0.125rem;
}
.rounded-t-lg{
    border-top-left-radius:0.5rem;
    border-top-right-radius:0.5rem;
}
.rounded-t-xl{
    border-top-left-radius:0.75rem;
    border-top-right-radius:0.75rem;
}
.rounded-bl-sm{
    border-bottom-left-radius:0.125rem;
}
.rounded-br-sm{
    border-bottom-right-radius:0.125rem;
}
.border{
    border-width:1px;
}
.border-2{
    border-width:2px;
}
.border-4{
    border-width:4px;
}
.border-y{
    border-top-width:1px;
    border-bottom-width:1px;
}
.border-b{
    border-bottom-width:1px;
}
.border-b-4{
    border-bottom-width:4px;
}
.border-r{
    border-right-width:1px;
}
.border-t{
    border-top-width:1px;
}
.border-brand{
    --tw-border-opacity:1;
    border-color:rgb(0 149 218 / var(--tw-border-opacity));
}
.border-brand-dark{
    --tw-border-opacity:1;
    border-color:rgb(17 60 100 / var(--tw-border-opacity));
}
.border-current{
    border-color:currentColor;
}
.border-gray-200{
    --tw-border-opacity:1;
    border-color:rgb(229 231 235 / var(--tw-border-opacity));
}
.border-slate-200{
    --tw-border-opacity:1;
    border-color:rgb(226 232 240 / var(--tw-border-opacity));
}
.border-slate-300{
    --tw-border-opacity:1;
    border-color:rgb(203 213 225 / var(--tw-border-opacity));
}
.border-white{
    --tw-border-opacity:1;
    border-color:rgb(255 255 255 / var(--tw-border-opacity));
}
.bg-black{
    --tw-bg-opacity:1;
    background-color:rgb(0 0 0 / var(--tw-bg-opacity));
}
.bg-brand{
    --tw-bg-opacity:1;
    background-color:rgb(0 149 218 / var(--tw-bg-opacity));
}
.bg-brand-bright{
    --tw-bg-opacity:1;
    background-color:rgb(0 192 243 / var(--tw-bg-opacity));
}
.bg-brand-dark{
    --tw-bg-opacity:1;
    background-color:rgb(17 60 100 / var(--tw-bg-opacity));
}
.bg-gray-300{
    --tw-bg-opacity:1;
    background-color:rgb(209 213 219 / var(--tw-bg-opacity));
}
.bg-gray-800{
    --tw-bg-opacity:1;
    background-color:rgb(31 41 55 / var(--tw-bg-opacity));
}
.bg-slate-100{
    --tw-bg-opacity:1;
    background-color:rgb(241 245 249 / var(--tw-bg-opacity));
}
.bg-slate-900{
    --tw-bg-opacity:1;
    background-color:rgb(15 23 42 / var(--tw-bg-opacity));
}
.bg-white{
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255 / var(--tw-bg-opacity));
}
.bg-yellow-400{
    --tw-bg-opacity:1;
    background-color:rgb(250 204 21 / var(--tw-bg-opacity));
}
.bg-opacity-70{
    --tw-bg-opacity:0.7;
}
.bg-opacity-75{
    --tw-bg-opacity:0.75;
}
.bg-opacity-90{
    --tw-bg-opacity:0.9;
}
.bg-gradient-to-b{
    background-image:linear-gradient(to bottom, var(--tw-gradient-stops));
}
.bg-gradient-to-tl{
    background-image:linear-gradient(to top left, var(--tw-gradient-stops));
}
.from-brand{
    --tw-gradient-from:#0095DA var(--tw-gradient-from-position);
    --tw-gradient-from-position:;
    --tw-gradient-to:rgb(0 149 218 / 0)var(--tw-gradient-from-position);
    --tw-gradient-to-position:;
    --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-brand-dark{
    --tw-gradient-from:#113C64 var(--tw-gradient-from-position);
    --tw-gradient-from-position:;
    --tw-gradient-to:rgb(17 60 100 / 0)var(--tw-gradient-from-position);
    --tw-gradient-to-position:;
    --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-white{
    --tw-gradient-from:#fff var(--tw-gradient-from-position);
    --tw-gradient-from-position:;
    --tw-gradient-to:rgb(255 255 255 / 0)var(--tw-gradient-from-position);
    --tw-gradient-to-position:;
    --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);
}
.to-slate-800{
    --tw-gradient-to:#1e293b var(--tw-gradient-to-position);
    --tw-gradient-to-position:;
}
.to-transparent{
    --tw-gradient-to:transparent var(--tw-gradient-to-position);
    --tw-gradient-to-position:;
}
.to-30\\%{
    --tw-gradient-to-position:30%;
}
.to-60\\%{
    --tw-gradient-to-position:60%;
}
.object-cover{
    -o-object-fit:cover;
     object-fit:cover;
}
.object-center{
    -o-object-position:center;
     object-position:center;
}
.object-left{
    -o-object-position:left;
     object-position:left;
}
.p-0{
    padding:0px;
}
.p-10{
    padding:2.5rem;
}
.p-2{
    padding:0.5rem;
}
.p-3{
    padding:0.75rem;
}
.p-4{
    padding:1rem;
}
.p-5{
    padding:1.25rem;
}
.p-6{
    padding:1.5rem;
}
.p-8{
    padding:2rem;
}
.px-10{
    padding-left:2.5rem;
    padding-right:2.5rem;
}
.px-2{
    padding-left:0.5rem;
    padding-right:0.5rem;
}
.px-3{
    padding-left:0.75rem;
    padding-right:0.75rem;
}
.px-4{
    padding-left:1rem;
    padding-right:1rem;
}
.px-5{
    padding-left:1.25rem;
    padding-right:1.25rem;
}
.px-6{
    padding-left:1.5rem;
    padding-right:1.5rem;
}
.px-8{
    padding-left:2rem;
    padding-right:2rem;
}
.py-1{
    padding-top:0.25rem;
    padding-bottom:0.25rem;
}
.py-10{
    padding-top:2.5rem;
    padding-bottom:2.5rem;
}
.py-12{
    padding-top:3rem;
    padding-bottom:3rem;
}
.py-2{
    padding-top:0.5rem;
    padding-bottom:0.5rem;
}
.py-20{
    padding-top:5rem;
    padding-bottom:5rem;
}
.py-3{
    padding-top:0.75rem;
    padding-bottom:0.75rem;
}
.py-4{
    padding-top:1rem;
    padding-bottom:1rem;
}
.py-5{
    padding-top:1.25rem;
    padding-bottom:1.25rem;
}
.py-6{
    padding-top:1.5rem;
    padding-bottom:1.5rem;
}
.py-8{
    padding-top:2rem;
    padding-bottom:2rem;
}
.pb-10{
    padding-bottom:2.5rem;
}
.pb-16{
    padding-bottom:4rem;
}
.pb-2{
    padding-bottom:0.5rem;
}
.pl-8{
    padding-left:2rem;
}
.pr-4{
    padding-right:1rem;
}
.pt-1{
    padding-top:0.25rem;
}
.pt-2{
    padding-top:0.5rem;
}
.pt-20{
    padding-top:5rem;
}
.pt-6{
    padding-top:1.5rem;
}
.text-center{
    text-align:center;
}
.text-2xl{
    font-size:1.5rem;
    line-height:2rem;
}
.text-3xl{
    font-size:1.875rem;
    line-height:2.25rem;
}
.text-4xl{
    font-size:2.25rem;
    line-height:2.5rem;
}
.text-base{
    font-size:1rem;
    line-height:1.5rem;
}
.text-lg{
    font-size:1.125rem;
    line-height:1.75rem;
}
.text-sm{
    font-size:0.875rem;
    line-height:1.25rem;
}
.text-xl{
    font-size:1.25rem;
    line-height:1.75rem;
}
.text-xs{
    font-size:0.75rem;
    line-height:1rem;
}
.text-xs\\/none{
    font-size:0.75rem;
    line-height:1;
}
.font-bold{
    font-weight:700;
}
.font-extrabold{
    font-weight:800;
}
.font-light{
    font-weight:300;
}
.font-normal{
    font-weight:400;
}
.font-semibold{
    font-weight:600;
}
.font-thin{
    font-weight:100;
}
.uppercase{
    text-transform:uppercase;
}
.capitalize{
    text-transform:capitalize;
}
.italic{
    font-style:italic;
}
.leading-normal{
    line-height:1.5;
}
.leading-snug{
    line-height:1.375;
}
.leading-tight{
    line-height:1.25;
}
.text-black{
    --tw-text-opacity:1;
    color:rgb(0 0 0 / var(--tw-text-opacity));
}
.text-blue-100{
    --tw-text-opacity:1;
    color:rgb(219 234 254 / var(--tw-text-opacity));
}
.text-brand{
    --tw-text-opacity:1;
    color:rgb(0 149 218 / var(--tw-text-opacity));
}
.text-brand-bright{
    --tw-text-opacity:1;
    color:rgb(0 192 243 / var(--tw-text-opacity));
}
.text-brand-dark{
    --tw-text-opacity:1;
    color:rgb(17 60 100 / var(--tw-text-opacity));
}
.text-gray-300{
    --tw-text-opacity:1;
    color:rgb(209 213 219 / var(--tw-text-opacity));
}
.text-gray-400{
    --tw-text-opacity:1;
    color:rgb(156 163 175 / var(--tw-text-opacity));
}
.text-gray-500{
    --tw-text-opacity:1;
    color:rgb(107 114 128 / var(--tw-text-opacity));
}
.text-gray-600{
    --tw-text-opacity:1;
    color:rgb(75 85 99 / var(--tw-text-opacity));
}
.text-gray-800{
    --tw-text-opacity:1;
    color:rgb(31 41 55 / var(--tw-text-opacity));
}
.text-white{
    --tw-text-opacity:1;
    color:rgb(255 255 255 / var(--tw-text-opacity));
}
.opacity-0{
    opacity:0;
}
.opacity-10{
    opacity:0.1;
}
.opacity-30{
    opacity:0.3;
}
.opacity-40{
    opacity:0.4;
}
.opacity-50{
    opacity:0.5;
}
.opacity-60{
    opacity:0.6;
}
.opacity-80{
    opacity:0.8;
}
.opacity-90{
    opacity:0.9;
}
.mix-blend-darken{
    mix-blend-mode:darken;
}
.shadow-lg{
    --tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md{
    --tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl{
    --tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-slate-800{
    --tw-shadow-color:#1e293b;
    --tw-shadow:var(--tw-shadow-colored);
}
.outline{
    outline-style:solid;
}
.filter{
    filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition{
    transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration:150ms;
}
.transition-opacity{
    transition-property:opacity;
    transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration:150ms;
}
.transition-transform{
    transition-property:transform;
    transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration:150ms;
}
.duration-200{
    transition-duration:200ms;
}
.ease-out{
    transition-timing-function:cubic-bezier(0, 0, 0.2, 1);
}
.text-shadow{
    text-shadow:0 2px 4px var(--tw-shadow-color);
}
.scroll-mask {
    mask-image:linear-gradient(to bottom,
    transparent,
    black 10%,
    black 80%,
    transparent);
    -webkit-mask-image:linear-gradient(to bottom,
    transparent,
    black 10%,
    black 80%,
    transparent);
}
@media (min-width:768px){
    .md\\:prose-lg{
        font-size:1.125rem;
        line-height:1.7777778;
    }
    .md\\:prose-lg :where(p):not(:where([class~="not-prose"] *)){
        margin-top:1.3333333em;
        margin-bottom:1.3333333em;
    }
    .md\\:prose-lg :where([class~="lead"]):not(:where([class~="not-prose"] *)){
        font-size:1.2222222em;
        line-height:1.4545455;
        margin-top:1.0909091em;
        margin-bottom:1.0909091em;
    }
    .md\\:prose-lg :where(blockquote):not(:where([class~="not-prose"] *)){
        margin-top:1.6666667em;
        margin-bottom:1.6666667em;
        padding-left:1em;
    }
    .md\\:prose-lg :where(h1):not(:where([class~="not-prose"] *)){
        font-size:2.6666667em;
        margin-top:0;
        margin-bottom:0.8333333em;
        line-height:1;
    }
    .md\\:prose-lg :where(h2):not(:where([class~="not-prose"] *)){
        font-size:1.6666667em;
        margin-top:1.8666667em;
        margin-bottom:1.0666667em;
        line-height:1.3333333;
    }
    .md\\:prose-lg :where(h3):not(:where([class~="not-prose"] *)){
        font-size:1.3333333em;
        margin-top:1.6666667em;
        margin-bottom:0.6666667em;
        line-height:1.5;
    }
    .md\\:prose-lg :where(h4):not(:where([class~="not-prose"] *)){
        margin-top:1.7777778em;
        margin-bottom:0.4444444em;
        line-height:1.5555556;
    }
    .md\\:prose-lg :where(img):not(:where([class~="not-prose"] *)){
        margin-top:1.7777778em;
        margin-bottom:1.7777778em;
    }
    .md\\:prose-lg :where(video):not(:where([class~="not-prose"] *)){
        margin-top:1.7777778em;
        margin-bottom:1.7777778em;
    }
    .md\\:prose-lg :where(figure):not(:where([class~="not-prose"] *)){
        margin-top:1.7777778em;
        margin-bottom:1.7777778em;
    }
    .md\\:prose-lg :where(figure > *):not(:where([class~="not-prose"] *)){
        margin-top:0;
        margin-bottom:0;
    }
    .md\\:prose-lg :where(figcaption):not(:where([class~="not-prose"] *)){
        font-size:0.8888889em;
        line-height:1.5;
        margin-top:1em;
    }
    .md\\:prose-lg :where(code):not(:where([class~="not-prose"] *)){
        font-size:0.8888889em;
    }
    .md\\:prose-lg :where(h2 code):not(:where([class~="not-prose"] *)){
        font-size:0.8666667em;
    }
    .md\\:prose-lg :where(h3 code):not(:where([class~="not-prose"] *)){
        font-size:0.875em;
    }
    .md\\:prose-lg :where(pre):not(:where([class~="not-prose"] *)){
        font-size:0.8888889em;
        line-height:1.75;
        margin-top:2em;
        margin-bottom:2em;
        border-radius:0.375rem;
        padding-top:1em;
        padding-right:1.5em;
        padding-bottom:1em;
        padding-left:1.5em;
    }
    .md\\:prose-lg :where(ol):not(:where([class~="not-prose"] *)){
        margin-top:1.3333333em;
        margin-bottom:1.3333333em;
        padding-left:1.5555556em;
    }
    .md\\:prose-lg :where(ul):not(:where([class~="not-prose"] *)){
        margin-top:1.3333333em;
        margin-bottom:1.3333333em;
        padding-left:1.5555556em;
    }
    .md\\:prose-lg :where(li):not(:where([class~="not-prose"] *)){
        margin-top:0.6666667em;
        margin-bottom:0.6666667em;
    }
    .md\\:prose-lg :where(ol > li):not(:where([class~="not-prose"] *)){
        padding-left:0.4444444em;
    }
    .md\\:prose-lg :where(ul > li):not(:where([class~="not-prose"] *)){
        padding-left:0.4444444em;
    }
    .md\\:prose-lg :where(.md\\:prose-lg > ul > li p):not(:where([class~="not-prose"] *)){
        margin-top:0.8888889em;
        margin-bottom:0.8888889em;
    }
    .md\\:prose-lg :where(.md\\:prose-lg > ul > li > *:first-child):not(:where([class~="not-prose"] *)){
        margin-top:1.3333333em;
    }
    .md\\:prose-lg :where(.md\\:prose-lg > ul > li > *:last-child):not(:where([class~="not-prose"] *)){
        margin-bottom:1.3333333em;
    }
    .md\\:prose-lg :where(.md\\:prose-lg > ol > li > *:first-child):not(:where([class~="not-prose"] *)){
        margin-top:1.3333333em;
    }
    .md\\:prose-lg :where(.md\\:prose-lg > ol > li > *:last-child):not(:where([class~="not-prose"] *)){
        margin-bottom:1.3333333em;
    }
    .md\\:prose-lg :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"] *)){
        margin-top:0.8888889em;
        margin-bottom:0.8888889em;
    }
    .md\\:prose-lg :where(hr):not(:where([class~="not-prose"] *)){
        margin-top:3.1111111em;
        margin-bottom:3.1111111em;
    }
    .md\\:prose-lg :where(hr + *):not(:where([class~="not-prose"] *)){
        margin-top:0;
    }
    .md\\:prose-lg :where(h2 + *):not(:where([class~="not-prose"] *)){
        margin-top:0;
    }
    .md\\:prose-lg :where(h3 + *):not(:where([class~="not-prose"] *)){
        margin-top:0;
    }
    .md\\:prose-lg :where(h4 + *):not(:where([class~="not-prose"] *)){
        margin-top:0;
    }
    .md\\:prose-lg :where(table):not(:where([class~="not-prose"] *)){
        font-size:0.8888889em;
        line-height:1.5;
    }
    .md\\:prose-lg :where(thead th):not(:where([class~="not-prose"] *)){
        padding-right:0.75em;
        padding-bottom:0.75em;
        padding-left:0.75em;
    }
    .md\\:prose-lg :where(thead th:first-child):not(:where([class~="not-prose"] *)){
        padding-left:0;
    }
    .md\\:prose-lg :where(thead th:last-child):not(:where([class~="not-prose"] *)){
        padding-right:0;
    }
    .md\\:prose-lg :where(tbody td, tfoot td):not(:where([class~="not-prose"] *)){
        padding-top:0.75em;
        padding-right:0.75em;
        padding-bottom:0.75em;
        padding-left:0.75em;
    }
    .md\\:prose-lg :where(tbody td:first-child, tfoot td:first-child):not(:where([class~="not-prose"] *)){
        padding-left:0;
    }
    .md\\:prose-lg :where(tbody td:last-child, tfoot td:last-child):not(:where([class~="not-prose"] *)){
        padding-right:0;
    }
    .md\\:prose-lg :where(.md\\:prose-lg > :first-child):not(:where([class~="not-prose"] *)){
        margin-top:0;
    }
    .md\\:prose-lg :where(.md\\:prose-lg > :last-child):not(:where([class~="not-prose"] *)){
        margin-bottom:0;
    }
}
.hover\\:bg-brand-dark:hover{
    --tw-bg-opacity:1;
    background-color:rgb(17 60 100 / var(--tw-bg-opacity));
}
.hover\\:bg-white:hover{
    --tw-bg-opacity:1;
    background-color:rgb(255 255 255 / var(--tw-bg-opacity));
}
.hover\\:text-brand-dark:hover{
    --tw-text-opacity:1;
    color:rgb(17 60 100 / var(--tw-text-opacity));
}
.hover\\:text-white:hover{
    --tw-text-opacity:1;
    color:rgb(255 255 255 / var(--tw-text-opacity));
}
.hover\\:underline:hover{
    text-decoration-line:underline;
}
.hover\\:no-underline:hover{
    text-decoration-line:none;
}
.focus\\:border-indigo-300:focus{
    --tw-border-opacity:1;
    border-color:rgb(165 180 252 / var(--tw-border-opacity));
}
.focus\\:ring:focus{
    --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-indigo-200:focus{
    --tw-ring-opacity:1;
    --tw-ring-color:rgb(199 210 254 / var(--tw-ring-opacity));
}
.focus\\:ring-opacity-50:focus{
    --tw-ring-opacity:0.5;
}
.group:hover .group-hover\\:translate-y-9{
    --tw-translate-y:2.25rem;
    transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.group:hover .group-hover\\:opacity-100{
    opacity:1;
}
.group:hover .group-hover\\:opacity-20{
    opacity:0.2;
}
.prose-h1\\:mb-6 :is(:where(h1):not(:where([class~="not-prose"] *))){
    margin-bottom:1.5rem;
}
.prose-h1\\:text-brand-dark :is(:where(h1):not(:where([class~="not-prose"] *))){
    --tw-text-opacity:1;
    color:rgb(17 60 100 / var(--tw-text-opacity));
}
.prose-h2\\:font-semibold :is(:where(h2):not(:where([class~="not-prose"] *))){
    font-weight:600;
}
.prose-ul\\:list-none :is(:where(ul):not(:where([class~="not-prose"] *))){
    list-style-type:none;
}
.prose-ul\\:pl-0 :is(:where(ul):not(:where([class~="not-prose"] *))){
    padding-left:0px;
}
.prose-li\\:pl-0 :is(:where(li):not(:where([class~="not-prose"] *))){
    padding-left:0px;
}
@media (min-width:640px){
    .sm\\:col-span-2{
        grid-column:span 2 / span 2;
    }
    .sm\\:col-span-3{
        grid-column:span 3 / span 3;
    }
    .sm\\:grid{
        display:grid;
    }
    .sm\\:flex-row{
        flex-direction:row;
    }
    .sm\\:justify-end{
        justify-content:flex-end;
    }
    .sm\\:gap-12{
        gap:3rem;
    }
    .sm\\:object-center{
        -o-object-position:center;
         object-position:center;
    }
}
@media (min-width:768px){
    .md\\:absolute{
        position:absolute;
    }
    .md\\:order-1{
        order:1;
    }
    .md\\:col-span-2{
        grid-column:span 2 / span 2;
    }
    .md\\:col-span-3{
        grid-column:span 3 / span 3;
    }
    .md\\:col-start-2{
        grid-column-start:2;
    }
    .md\\:row-span-1{
        grid-row:span 1 / span 1;
    }
    .md\\:row-span-full{
        grid-row:1 / -1;
    }
    .md\\:float-left{
        float:left;
    }
    .md\\:mx-0{
        margin-left:0px;
        margin-right:0px;
    }
    .md\\:mx-8{
        margin-left:2rem;
        margin-right:2rem;
    }
    .md\\:mb-2{
        margin-bottom:0.5rem;
    }
    .md\\:mb-6{
        margin-bottom:1.5rem;
    }
    .md\\:mb-8{
        margin-bottom:2rem;
    }
    .md\\:mr-8{
        margin-right:2rem;
    }
    .md\\:block{
        display:block;
    }
    .md\\:flex{
        display:flex;
    }
    .md\\:grid{
        display:grid;
    }
    .md\\:hidden{
        display:none;
    }
    .md\\:h-24{
        height:6rem;
    }
    .md\\:h-40{
        height:10rem;
    }
    .md\\:h-\\[415px\\]{
        height:415px;
    }
    .md\\:h-full{
        height:100%;
    }
    .md\\:w-fit{
        width:-moz-fit-content;
        width:fit-content;
    }
    .md\\:max-w-5xl{
        max-width:64rem;
    }
    .md\\:max-w-lg{
        max-width:32rem;
    }
    .md\\:max-w-none{
        max-width:none;
    }
    .md\\:translate-y-10{
        --tw-translate-y:2.5rem;
        transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    .md\\:grid-cols-2{
        grid-template-columns:repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-\\[30\\%\\2c 1fr\\2c 1fr\\2c 1fr\\]{
        grid-template-columns:30% 1fr 1fr 1fr;
    }
    .md\\:grid-cols-\\[30\\%\\2c 1fr\\]{
        grid-template-columns:30% 1fr;
    }
    .md\\:flex-row{
        flex-direction:row;
    }
    .md\\:items-center{
        align-items:center;
    }
    .md\\:justify-between{
        justify-content:space-between;
    }
    .md\\:gap-12{
        gap:3rem;
    }
    .md\\:gap-6{
        gap:1.5rem;
    }
    .md\\:gap-y-5{
        row-gap:1.25rem;
    }
    .md\\:self-end{
        align-self:flex-end;
    }
    .md\\:justify-self-end{
        justify-self:end;
    }
    .md\\:rounded-b-xl{
        border-bottom-right-radius:0.75rem;
        border-bottom-left-radius:0.75rem;
    }
    .md\\:border-0{
        border-width:0px;
    }
    .md\\:bg-opacity-80{
        --tw-bg-opacity:0.8;
    }
    .md\\:bg-opacity-90{
        --tw-bg-opacity:0.9;
    }
    .md\\:bg-gradient-to-l{
        background-image:linear-gradient(to left, var(--tw-gradient-stops));
    }
    .md\\:bg-gradient-to-tl{
        background-image:linear-gradient(to top left, var(--tw-gradient-stops));
    }
    .md\\:object-left-top{
        -o-object-position:left top;
         object-position:left top;
    }
    .md\\:p-0{
        padding:0px;
    }
    .md\\:p-20{
        padding:5rem;
    }
    .md\\:p-8{
        padding:2rem;
    }
    .md\\:px-0{
        padding-left:0px;
        padding-right:0px;
    }
    .md\\:px-10{
        padding-left:2.5rem;
        padding-right:2.5rem;
    }
    .md\\:px-4{
        padding-left:1rem;
        padding-right:1rem;
    }
    .md\\:px-5{
        padding-left:1.25rem;
        padding-right:1.25rem;
    }
    .md\\:pb-4{
        padding-bottom:1rem;
    }
    .md\\:pt-8{
        padding-top:2rem;
    }
    .md\\:text-2xl{
        font-size:1.5rem;
        line-height:2rem;
    }
    .md\\:text-3xl{
        font-size:1.875rem;
        line-height:2.25rem;
    }
    .md\\:text-4xl{
        font-size:2.25rem;
        line-height:2.5rem;
    }
    .md\\:text-5xl{
        font-size:3rem;
        line-height:1;
    }
    .md\\:text-base{
        font-size:1rem;
        line-height:1.5rem;
    }
    .md\\:text-lg{
        font-size:1.125rem;
        line-height:1.75rem;
    }
    .md\\:text-xl{
        font-size:1.25rem;
        line-height:1.75rem;
    }
    .md\\:shadow-xl{
        --tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        --tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
        box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
}
@media (min-width:1024px){
    .lg\\:absolute{
        position:absolute;
    }
    .lg\\:order-1{
        order:1;
    }
    .lg\\:m-0{
        margin:0px;
    }
    .lg\\:mx-0{
        margin-left:0px;
        margin-right:0px;
    }
    .lg\\:mt-16{
        margin-top:4rem;
    }
    .lg\\:block{
        display:block;
    }
    .lg\\:flex{
        display:flex;
    }
    .lg\\:grid{
        display:grid;
    }
    .lg\\:h-64{
        height:16rem;
    }
    .lg\\:h-\\[750px\\]{
        height:750px;
    }
    .lg\\:h-full{
        height:100%;
    }
    .lg\\:w-fit{
        width:-moz-fit-content;
        width:fit-content;
    }
    .lg\\:max-w-7xl{
        max-width:80rem;
    }
    .lg\\:-translate-x-8{
        --tw-translate-x:-2rem;
        transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    .lg\\:grid-cols-2{
        grid-template-columns:repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3{
        grid-template-columns:repeat(3, minmax(0, 1fr));
    }
    .lg\\:overflow-scroll{
        overflow:scroll;
    }
    .lg\\:bg-opacity-90{
        --tw-bg-opacity:0.9;
    }
    .lg\\:py-20{
        padding-top:5rem;
        padding-bottom:5rem;
    }
    .lg\\:pb-10{
        padding-bottom:2.5rem;
    }
    .lg\\:pt-3{
        padding-top:0.75rem;
    }
    .lg\\:shadow-xl{
        --tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        --tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
        box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
}
`

export const gsIndexFile =`
<style>
#services {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: 100rem;
}
@media screen and (max-width: 827px) {
    #services {
        display: flex;
        flex-direction: column;
        align-items: center; 
    }
}
.owner img {
    margin-bottom:0px;
    margin-right:23%;
}
.owner-name {
    position:absolute;
    bottom:0;
    width:55px;
    line-height:1em;
    font-size:14px;
    font-weight:bold;
    text-shadow:0 0 5px #fff;
    z-index:1;
}
@media screen and (min-width 940px) and (max-width:1200px) {
    .owner img {
        max-width:255px;
        margin-bottom:0px;
    }
}
@media screen and (max-width:940px) {
    .owner img {
        display:none;
    }
}
    .service--item {
    max-width:560px;
    max-height: 315px;
}
.service--item p {
    padding: 0 2rem;   
}
#fake-poster.hidden-poster,
#fake-poster.hidden-poster::before {
    z-index: -1;
}
ul.icon-list li {
    padding-left: 5rem;
}
ul.icon-list li > div {
    transform: translateY(-50%);
    top: 50%;
}
.float-right {
    float: right;
}
.aspect-video {
    aspect-ratio: 16 / 9;
}

<!---------
  *** Credibility Badges ***
  ---------->

div#inline-affil-slider.row {
    display: flex; 
    flex-direction: row;
    justify-content: center; 
}
div.columns.widget-item{
    padding: 10px 40px;
}
div.widget-affil-img {
    max-width: 70%; 
}
@media (max-width: 1020px) {
div.widget-affil-img {
    max-width: 90%; 
}
div.columns.widget-item{
    padding: 20px;
}
}
@media (max-width: 470px) {
div.widget-affil-img {
    max-width: 100%; 
}
div.columns.widget-item{
    padding: 10px;
}
}

@media (max-width: 768px) {
        .video-responsive {
        overflow: hidden;
        padding-bottom: 56.25%;
        position: relative;
        height: 0;
    }
    .video-responsive iframe {
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }   
    .sm\:flex-col {
    flex-direction: column;   
}
}

div.hidden.md {
    margin-top: 7rem; 
}
.owner-name img {
    width: 800px;    
}
h1.tagline {
    text-align: center;
    font: normal normal bold 30px/50px sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-shadow: 0px 12px 36px #0000009F;
    text-transform: capitalize;
    opacity: 1;
    position: relative;
    padding: 20px 40px; 
    background-color: rgba(29, 60, 97, 0.8);
    opacity: 1; 

}

.mm-wrap {
    background: #fff;
}
.bg-white {
    background: none; 
}
span {
    font-family: sans-serif; 
    color: #1D3C61; 
}
sup {
    color: #1D3C61;
}
.btn.btn--cta.mt-2 {
    padding: 10px 30px;
    margin-top: 15px; 
}
a.btn {
    font-size: 17px; 
}
.bg-white p {
    color: #1D3C61;
    margin-bottom: 5px; 
}
p.font-semibold{
    font-weight: 800;
    color: #fff; 
}
.bg-white p.text-sm {
    color: #fff; 
}
.mm-wrap {
    background: #FFF;
    padding: 15px 20px 20px; 
}
.pt-2 {
    padding-top: 0; 
}
@media screen and (min-width: 1024px) {
    .bg-white h1 {
         padding: 30px 50px; 
    }
    .owner img {
        width: 1600px;
    }
}
div.block.w-full.bg-white {
    padding-bottom: 10px; 
    background: none; 
}
@media screen and (max-width: 1024px) {
    .bg-white {
        width: fit-content; 
    }
    #hero--text {
        display: flex; 
        justify-content: center; 
    }
}
@media screen and (min-width: 768px) {
    span.block {
        font-size:2rem;
        line-height:2.5rem;
    }  
    p.font-extrabold {
        font-size: 25px; 
    }
}
@media screen and (max-width:768px) {
    div.block.w-full.bg-white{
        display: flex; 
        flex-direction: column; 
}
    .bg-white h1 {
        padding: 25px; 
    }
}
@media screen and (max-width:641px) {
    .bg-white h1 {
        padding: 10px; 
        font-size: 30px; 
        background-color: rgba(29, 60, 97, 1);
    }
    .pt-6 {
    padding-top: 0;
    }
    .mx-auto {
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.5);
    }
    .bg-white {
        width: 100%; 
    }
} 
#inline-affil .slide-content {
    background: #fff!important;
    border: none!important;
    box-shadow: none!important;
    height: fit-content!important; 
}
#inline-affil .widget-arrow {
    background: none!important;
    }
    #inline-affil .widget-arrow:hover {
    background: rgba(0, 0, 0, .5)!important;
    cursor: pointer;
}
#inline-affil-header h3 {
        display: none!important; 
}
#inline-affil .widget-name {
    display: none!important; 
}
#inline-affil #inline-affil-header .more-url a{
    display: none!important; 
}
#inline-affil {
    padding: 0 1rem 1rem;
}
@media screen and (max-width: 640px) {
.inset-0 img {
    max-width: 48px;
}
}
</style>
<!--------------
  *** SERVICES ***
  --------------->
  <div
  id="services"
  class="not-prose mx-auto mb-20 grid max-w-lg gap-8 px-5 lg:max-w-7xl lg:grid-cols-2">
      <div
class="service--item group relative h-72 overflow-hidden bg-slate-900 text-center leading-tight">
<img
    class="service--image absolute inset-0 h-full w-full object-cover opacity-50 duration-200 ease-out group-hover:opacity-20"
    src="https://cdn.treehouseinternetgroup.com/cms_core/images/gs/gutter-guard.jpg" />
<div
    class="service--text translate-y-28 px-8 py-4 text-white transition-transform duration-200 ease-out group-hover:translate-y-9">
    <h3 class="text-2xl font-semibold shadow-slate-800 text-shadow">
        Gutter Shutter System
    </h3>
    <div class="mx-auto my-2 h-1 w-24 bg-brand-bright"></div>
    <p
        class="my-4 opacity-0 transition-opacity group-hover:opacity-100">
        The Gutter Shutter system will never clog or pull away from your home!
    </p>
    <a
        href="/the-gutter-shutter-system.html"
        class="rounded-full bg-brand-bright px-4 py-1 text-sm font-semibold text-brand-dark opacity-0 transition-opacity group-hover:opacity-100">
        Learn about the system
    </a>
</div>
</div>
  <div
      class="service--item group relative h-72 md:h-full overflow-hidden bg-slate-900 text-center leading-tight">
      <img
          class="service--image absolute inset-0 h-full w-full object-cover opacity-50 duration-200 ease-out group-hover:opacity-20"
          src="https://cdn.treehouseinternetgroup.com/cms_core/images/gs/srv-gutter-install.jpg" />
      <div
          class="service--text translate-y-28 md:pt-12 pt-0 pb-24 md:py-4 text-white transition-transform duration-200 ease-out group-hover:translate-y-9">
          <h3 class="text-2xl font-semibold shadow-slate-800 text-shadow">
              Gutter Installation
          </h3>
          <div class="mx-auto my-2 h-1 w-24 bg-brand-bright"></div>
          <p
              class="my-4 opacity-0 transition-opacity group-hover:opacity-100">
              Our high-performance gutter system will never flex, bend, or sag
              under the pressure.
          </p>
          <a
              href="/gutter-installation.html"
              class="rounded-full bg-brand-bright px-4 py-1 text-sm font-semibold text-brand-dark opacity-0 transition-opacity group-hover:opacity-100">
              Learn about installation
          </a>
      </div>
  </div>
<div class="service--item group relative h-72 overflow-hidden bg-slate-900 text-center leading-tight">
					<img class="service--image absolute inset-0 h-full w-full object-cover opacity-50 duration-200 ease-out group-hover:opacity-20" src="https://cdn.treehouseinternetgroup.com/cms_images/3517/cleaning_gutters1open_gutter_clogged_6.jpg">
					<div class="service--text translate-y-28 px-8 py-4 text-white transition-transform duration-200 ease-out group-hover:translate-y-9">
						<h3 class="text-2xl font-semibold shadow-slate-800 text-shadow">
							Gutter Cleaning &amp; Repair
						</h3>
						<div class="mx-auto my-2 h-1 w-24 bg-brand-bright"></div>
						<p class="my-4 opacity-0 transition-opacity group-hover:opacity-100">
							Prevent issues from clogged or damaged gutters with gutter cleaning and repair services.
						</p>
						<a href="/gutter-cleaning-repair.html" class="rounded-full bg-brand-bright px-4 py-1 text-sm font-semibold text-brand-dark opacity-0 transition-opacity group-hover:opacity-100">
							Learn about installation
						</a>
					</div>
</div>
</div>

			<!------------
  *** Text ***
------------->
			<div class="mx-auto my-20 max-w-5xl p-5">
				<h1>Gutter Installation Specialist Serving [major cities 1] &amp; Nearby
				</h1>
				<h2>No-clog seamless gutters, effective downspouts &amp; more</h2>
			<div class="p-4 float-right aspect-video video-responsive breakout right border bg" style="padding:0">
                <iframe
                  width="560"
                  height="315"
                 src="https://www.youtube.com/embed/tSLNbFyAwA4?si=S8RmgGWJZIHGvBRU"
                  srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/tSLNbFyAwA4?si=S8RmgGWJZIHGvBRU?autoplay=1><img src=https://cdn.treehouseinternetgroup.com/cms_images/3289/gs_video_thumbnail.png alt='Gutter Shutter vs Leading Competitor: Weight Test'><span>▶</span></a>"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  title="Gutter Shutter vs Leading Competitor: Weight Test"
                ></iframe>
                   <p style="font-size:15.5px; max-width:560px; background-color:#f9fafc;">This video from Gutter Shutter, LLC shows how much stronger the Gutter Shutter gutter systems are when compared to the competition. Video courtesy of Gutter Shutter, LLC's YouTube channel.</p> 
            </div>
				    <p>Your gutters are your first line of defense against costly water damage. Without effective gutters, most homeowners will face damage to their siding, foundation, and landscaping. If you have clogged, sagging, overflowing, or leaky gutters, [company] can help! We are your trusted gutter installation expert, offering stress-free gutter solutions and reliable <a href="/gutter-installation.html">gutter installation services</a>. <br /><strong>Our state-of-the-art gutter system can withstand any [state] storm, without clogging, sagging, leaking, or overflowing.</strong></p>
                        <p>Don't wait until you already have water damage to replace your gutters! Learn more about our highly effective gutter system or schedule your gutter estimate by contacting us today! We provide free gutter estimates throughout [state], including [major cities 1], [minor cities 2], and nearby.</p>
                        	<a class="btn btn--cta mx-auto block" href="/free-estimate.html" title="Get a free estimate">Get a Free Estimate</a>
			</div>
						<!-------------------
  *** Why Choose Us ***
  -------------------->
			<div
				class="grid max-w-full bg-gradient-to-b from-brand to-transparent to-30% lg:grid-cols-2">
				<div class="h-64 lg:h-[750px]">
					<picture>
						<source
							media="(min-width:1024px)"
							srcset="
								https://cdn.treehouseinternetgroup.com/cms_core/images/gs/why-choose-us-bk-800.jpg
							" />
						<img
							class="!my-0 h-full w-full object-cover"
							src="https://cdn.treehouseinternetgroup.com/cms_core/images/gs/why-choose-us-bk-sm.jpg"
							alt="Gutter Shutter Installation" />
					</picture>
				</div>
				<div class="flex flex-col">
					<div
						class="flex items-center bg-brand-dark px-8 py-6 lg:mt-16 lg:w-fit lg:-translate-x-8">
						<div class="mr-6 h-16 w-1 bg-brand-bright"></div>
						<h2 class="!my-0 text-white">
							Why [territory] Customers Choose Us
						</h2>
					</div>
					<ul class="!my-0 flex h-full flex-col justify-evenly">
						<li
							class="!my-0 mx-8 flex flex-1 items-center gap-4 border-b border-slate-200 p-0 text-xl font-semibold">
							<img
								class="w-12"
								src="https://cdn.treehouseinternetgroup.com/cms_core/images/gs/star.svg" width="48"/>
							<p>Lifetime No-Clog Warranty &mdash; Never Climb a Ladder to Clean Your Gutters Again!</p>
						</li>
						<li
							class="!my-0 mx-8 flex flex-1 items-center gap-4 border-b border-slate-200 p-0 text-xl font-semibold">
							<img
								class="w-12"
								src="https://cdn.treehouseinternetgroup.com/cms_core/images/gs/star.svg" />
							<p>Ultra-Durable Gutters Won't Sag, Clog, or Pull Away</p>
						</li>
						<li
							class="!my-0 mx-8 flex flex-1 items-center gap-4 border-b border-slate-200 p-0 text-xl font-semibold">
							<img
								class="w-12"
								src="https://cdn.treehouseinternetgroup.com/cms_core/images/gs/star.svg" />
							<p>All-In-One Seamless Gutter & Gutter Guard System</p>
						</li>

						<li
							class="!my-0 mx-8 flex flex-1 items-center gap-4 border-b border-slate-200 p-0 text-xl font-semibold">
							<img
								class="w-12"
								src="https://cdn.treehouseinternetgroup.com/cms_core/images/gs/star.svg" />
							<p>
								<a
									href="#"
									class="text-brand hover:text-brand-dark hover:underline">
									Free Estimates
								</a>
								 & Special Financing Options
							</p>
						</li>
					</ul>
				</div>
			</div>
			<!--------------------
  *** Before & After ***
  --------------------->
			<div
				id="photos"
				class="max-w-full bg-slate-100">
				<div class="mx-auto max-w-7xl px-5 py-20">
					<h2 class="text-center">Recent Projects</h2>
<p><img src="https://cdn.treehouseinternetgroup.com/img/module_icons/36_2.png" class="widget-module" data-id="313643" data-type="2" title="Before - After Widget"/></p>
				</div>
			</div>
<!--------------------
  *** REVIEWS ***
  ------------------->
			<div class="relative">
				<div
					class="not-prose absolute inset-0 h-full w-full bg-gradient-to-tl from-brand-dark to-slate-800">
					<img
						class="h-full w-full object-cover opacity-10"
						src="https://cdn.treehouseinternetgroup.com/cms_core/images/gs/rain-pattern.svg" />
				</div>
				<div
					class="mx-auto max-w-7xl grid-cols-2 grid-rows-[auto,auto] items-center gap-12 px-5 py-20 lg:grid">
					<div class="relative">
						<h2 class="text-brand-bright">Protect Your Home with the Strongest, Clog-Free, Sag-Free Gutters</h2>
						<div class="relative pl-8 text-white ">
							<div class="absolute inset-0 h-full w-1 bg-brand-bright"></div>
							<p>When you think about a rainy city, what comes to mind? Maybe Seattle? You might be surprised to learn that parts of [state] get almost as much rain as Seattle in an average year!</p>
                            <p>Gutter Shutter is the best choice for your rain gutter needs. It stands the test of time against inclement weather, ensuring your property is protected for a lifetime.</p>
							<ul class="not-prose icon-list">
                                <li class="relative mb-6">
                                    <div class="p-2 rounded-full bg-white w-16 h-16 absolute inset-0"><img src="https://cdn.treehouseinternetgroup.com/cms_images/2948/wcu-1.svg"></div>        
                                    <strong class="text-white">No Clogging</strong>
                                    <p>Fully enclosed seamless gutters and effective gutter guards prevent leaves, pine needles, and other debris from entering your gutters.</p>
                                </li>
                                <li class="relative mb-6">
                                    <div class="p-2 rounded-full bg-white w-16 h-16 absolute inset-0"><img src="https://cdn.treehouseinternetgroup.com/cms_images/2948/wcu-2.svg"></div> 
                                    <strong class="text-white">No Sagging or Pulling</strong>
                                    <p>Premium-grade, durable aluminum will never warp, sag, or pull away from your home under heavy loads.</p>
                                </li>
                                <li class="relative mb-6">
                                    <div class="p-2 rounded-full bg-white w-16 h-16 absolute inset-0"><img src="https://cdn.treehouseinternetgroup.com/cms_images/2948/wcu-3.svg"></div> 
                                    <strong class="text-white">No Water Damage</strong>
                                    <p>The Gutter Shutter system can handle up to 20% more water than traditional five-inch gutters. Larger gutters redirect water away from your home, protecting your siding, roof, and foundation from costly water damage.</p>
                                </li>
                                <li class="relative mb-6">
                                    <div class="p-2 rounded-full bg-white w-16 h-16 absolute inset-0"><img src="https://cdn.treehouseinternetgroup.com/cms_images/2948/wcu-4.svg"></div> 
                                    <strong class="text-white">No Cleaning</strong>
                                    <p>Our solution's clog-free design means you won't ever need to climb a ladder to clean your gutters!</p>
                                </li>
                            </ul>
						</div>
					</div>
					<div
						class="not-prose relative mx-auto py-10 flex w-full max-w-lg flex-col gap-6 justify-self-end lg:mx-0">
						<div
							class="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-xl">
							<div class="mb-3 flex justify-center gap-1">
								<img
									src="https://cdn.treehouseinternetgroup.com/cms_core/template/layout/site/star-new-full.svg" />
								<img
									src="https://cdn.treehouseinternetgroup.com/cms_core/template/layout/site/star-new-full.svg" />
								<img
									src="https://cdn.treehouseinternetgroup.com/cms_core/template/layout/site/star-new-full.svg" />
								<img
									src="https://cdn.treehouseinternetgroup.com/cms_core/template/layout/site/star-new-full.svg" />
								<img
									src="https://cdn.treehouseinternetgroup.com/cms_core/template/layout/site/star-new-full.svg" />
							</div>
							<p class="font-semibold italic leading-tight">
								We have gotten many compliments from our neighbors.
							</p>
							<p class="mt-2 text-sm">
								Homeowner from [city 1], [state]
							</p>
						</div>
						<div
							class="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-xl">
							<div class="mb-3 flex justify-center gap-1">
								<img
									src="https://cdn.treehouseinternetgroup.com/cms_core/template/layout/site/star-new-full.svg" />
								<img
									src="https://cdn.treehouseinternetgroup.com/cms_core/template/layout/site/star-new-full.svg" />
								<img
									src="https://cdn.treehouseinternetgroup.com/cms_core/template/layout/site/star-new-full.svg" />
								<img
									src="https://cdn.treehouseinternetgroup.com/cms_core/template/layout/site/star-new-full.svg" />
								<img
									src="https://cdn.treehouseinternetgroup.com/cms_core/template/layout/site/star-new-full.svg" />
							</div>
							<p class="font-semibold italic leading-tight">
								These guys at [company] were amazing!
								Terrific product knowledge!
							</p>
							<p class="mt-2 text-sm">
								Homeowner in [city 3], [state abbr]
							</p>
						</div>
						<div
							class="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-xl">
							<div class="mb-3 flex justify-center gap-1">
								<img
									src="https://cdn.treehouseinternetgroup.com/cms_core/template/layout/site/star-new-full.svg" width="48" />
								<img
									src="https://cdn.treehouseinternetgroup.com/cms_core/template/layout/site/star-new-full.svg" width="48"/>
								<img
									src="https://cdn.treehouseinternetgroup.com/cms_core/template/layout/site/star-new-full.svg" width="48"/>
								<img
									src="https://cdn.treehouseinternetgroup.com/cms_core/template/layout/site/star-new-full.svg" width="48"/>
								<img
									src="https://cdn.treehouseinternetgroup.com/cms_core/template/layout/site/star-new-full.svg" width="48" />
							</div>
							<p class="font-semibold italic leading-tight">
								They installed the gutters and thoroughly cleaned-up in under an
								hour. They did a great job.
							</p>
							<p class="mt-2 text-sm">Homeowner from [city 4], [state abbr]</p>
						</div>
					</div>
					<div
						class="not-prose relative col-span-2 row-start-2 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
						<a class="btn btn--cta mx-auto block" href="/free-estimate.html" title="Get a free estimate">Get a Free Estimate</a>
						<a class="btn btn--cta mx-auto block" href="/about-us/financing.html" title="Financing available">We Offer Easy Financing</a>
					</div>
				</div>
			</div>

<!---------------
  *** CTA BLOCK & VIDEO ***
  ---------------->
			<div class="relative bg-brand-dark">
				<div
					class="not-prose absolute inset-0 h-full w-full bg-slate-100">
					<img
						class="h-full w-full object-cover opacity-10"
						src="https://cdn.treehouseinternetgroup.com/cms_core/images/gs/gutter_shutter_on_red_barn.jpg" />
				</div>
				<div
					class="relative mx-auto max-w-7xl justify-between gap-12 text-brand-dark lg:flex">
					<div
						class="mx-auto max-w-3xl grow-0 basis-3/5 px-5 pb-10 pt-20 lg:py-20">
						<h2 class="text-brand-dark">
							Schedule a free gutter installation estimate today!
						</h2>
						<div class="relative pl-8">
							<div class="absolute inset-0 h-full w-1 bg-brand-dark"></div>
							<p>We offer the leading gutter solution in the industry. The Gutter Shutter system is durable, efficient, and outlasts all other gutter systems. Plus, our team ensures proper installation and a lifetime no-clog guarantee.
							</p>
							<p>Watch this video to learn what you can expect when you choose Gutter Shutter, then take the next step to protect your home by scheduling a free gutter installation estimate! We are proud to serve [state]
								homeowners in [major cities 2], [minor cities 1], and the surrounding areas.</p>
							<div
						class="not-prose relative mx-auto mb-10 max-w-2xl shadow-xl">
						<video
							poster="https://cdn.treehouseinternetgroup.com/cms_core/images/gs/gutter-shutter-video-poster.jpg"
							id="header-vid"
							preload
							muted
							playsinline
							controls>
							<source
								src="https://cdn.treehouseinternetgroup.com/cms_core/videos/gs/gutter_shutter_v3.mp4"
								type="video/mp4" />
						</video>
					</div>
						</div>
					</div>
					<div
						id="home--form"
						class="relative grow-0 basis-2/5 bg-brand p-10 text-gray-600 lg:py-20 flex items-center">
						<form class="mx-auto max-w-md" action="/free-estimate/confirmation.html" method="post" novalidate="true">
						    <input type="hidden" name="save" value="1">
							<div class="grid grid-cols-6 gap-6">
								<label for="First_Name" class="col-span-3 block">
									<span class="text-base font-semibold text-blue-100">
										First name
									</span>
									<input type="text" id="First_Name" name="First_Name" placeholder="" maxlength="50" required="">
								</label>
								<label for="Last_Name" class="col-span-3 block">
									<span class="text-base font-semibold text-blue-100">
										Last name
									</span>
									<input type="text" id="Last_Name" name="Last_Name" placeholder="" maxlength="50" required="" class="error" aria-describedby="error-for-Last_Name">
								</label>
								<label for="Street" class="col-span-full block">
									<span class="text-base font-semibold text-blue-100">
										Street address
									</span>
									<input id="Street_Address" name="Street" type="text" title="please enter a valid street address" required="" class="error" aria-describedby="error-for-Street_Address">
								</label>
								<label for="City" class="col-span-3 block sm:col-span-2">
									<span class="text-base font-semibold text-blue-100">
										City
									</span>
									<input id="City" name="City" type="text" title="please enter a valid city" required="">
								</label>
								<label for="State" class="col-span-3 block sm:col-span-2">
									<span class="text-base font-semibold text-blue-100">
										State
									</span>
									<select name="State" id="State" required="required">
									<option value="">Select...</option>
									<option value="AL">Alabama</option>
									<option value="AK">Alaska</option>
									<option value="AZ">Arizona</option>
									<option value="AR">Arkansas</option>
									<option value="CA">California</option>
									<option value="CO">Colorado</option>
									<option value="CT">Connecticut</option>
									<option value="DE">Delaware</option>
									<option value="DC">District of Columbia</option>
									<option value="FL">Florida</option>
									<option value="GA">Georgia</option>
									<option value="HI">Hawaii</option>
									<option value="ID">Idaho</option>
									<option value="IL">Illinois</option>
									<option value="IN">Indiana</option>
									<option value="IA">Iowa</option>
									<option value="KS">Kansas</option>
									<option value="KY">Kentucky</option>
									<option value="LA">Louisiana</option>
									<option value="ME">Maine</option>
									<option value="MD">Maryland</option>
									<option value="MA">Massachusetts</option>
									<option value="MI">Michigan</option>
									<option value="MN">Minnesota</option>
									<option value="MS">Mississippi</option>
									<option value="MO">Missouri</option>
									<option value="MT">Montana</option>
									<option value="NE">Nebraska</option>
									<option value="NV">Nevada</option>
									<option value="NH">New Hampshire</option>
									<option value="NJ">New Jersey</option>
									<option value="NM">New Mexico</option>
									<option value="NY">New York</option>
									<option value="NC">North Carolina</option>
									<option value="ND">North Dakota</option>
									<option value="OH">Ohio</option>
									<option value="OK">Oklahoma</option>
									<option value="OR">Oregon</option>
									<option value="PA">Pennsylvania</option>
									<option value="RI">Rhode Island</option>
									<option value="SC">South Carolina</option>
									<option value="SD">South Dakota</option>
									<option value="TN">Tennessee</option>
									<option value="TX">Texas</option>
									<option value="UT">Utah</option>
									<option value="VT">Vermont</option>
									<option value="VA">Virginia</option>
									<option value="WA">Washington</option>
									<option value="WV">West Virginia</option>
									<option value="WI">Wisconsin</option>
									<option value="WY">Wyoming</option>
								</select>
								</label>
								<label for="Zip_Code" class="col-span-3 block sm:col-span-2">
									<span class="text-base font-semibold text-blue-100">
										Zip Code
									</span>
									<input type="text" id="Zip" name="Zip_Code" maxlength="10" data-validate-zip="" required="">
								</label>
								<label for="Phone" class="col-span-3 block">
									<span class="text-base font-semibold text-blue-100">
										Phone
									</span>
									<input type="text" id="Phone" name="Phone" data-validate-phone="" required="">
								</label>
								<label for="Email_Address" class="col-span-full block sm:col-span-3">
									<span class="text-base font-semibold text-blue-100">
										Email address
									</span>
									<input id="Email_Address" name="Email_Address" type="email" title="please enter a valid email address" required="">
								</label>
								<label for="Message" class="col-span-full block">
									<span class="text-base font-semibold text-blue-100">
										What type of service are you requesting?
									</span>
									<textarea id="Message" name="Message" rows="3"></textarea>
								</label>
								<input
									type="submit"
									value="Send Request"
									class="col-span-full mt-1 block w-full cursor-pointer rounded-full border-slate-300 bg-brand-dark py-2 text-white shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
							</div>
						</form>
					</div>
				</div>
			</div>

<img src="https://cdn.treehouseinternetgroup.com/img/module_icons/62_2.png" class="widget-module" data-id="333375" data-type="2" title="Affiliations Widget"/>

<div><img src="https://cdn.treehouseinternetgroup.com/img/module_icons/75_1.png" class="widget-module" data-id="313644" data-type="1" title="City Page With Different Root"/></div>`

export const defaultHeader = `
      <!--------------
      **** HEADER ****
      --------------->
			<div
				id="header"
				class="not-prose relative mx-auto grid max-w-7xl grid-cols-[auto,1fr] grid-rows-[auto,auto] items-center md:gap-y-5 md:px-4">
				<div
					id="logo"
					class="p-3 md:row-span-full md:px-0">
					<a href="/">
						<img
							class="h-16 md:h-24 w-auto"
							src="https://cdn.treehouseinternetgroup.com/cms_images/3289/gs-triangle-logo-stacked.svg" width="250" />
					</a>
				</div>
				<div
					id="header--phone"
					class="col-span-full row-start-1 flex h-fit justify-center gap-8 bg-brand-dark px-6 py-3 text-white md:col-start-2 md:row-span-1 md:w-fit md:items-center md:justify-between md:justify-self-end md:rounded-b-xl">
					<p class="hidden md:block">Proudly serving [territory]</p>
					<p class="flex items-center gap-2 font-extrabold">
						<?php
						    $times = get_open_time();
                                if($times or isset($_GET['open'])) { ?>
                                    <span
							class="flex items-center rounded-lg bg-brand px-2 py-1 text-base uppercase">
							open
						</span>
                                <?php }
                            $iphone = strpos($_SERVER['HTTP_USER_AGENT'],"iPhone");
                            $android = strpos($_SERVER['HTTP_USER_AGENT'],"Android");
                            if($iphone || $android  == true) { ?>
						
						    <a href="tel:<?php echo $phonenumber; ?>" class="phone_link text-2xl">
    
                                <? } else { ?>
    
                                <a href="/free-estimate.html" class="phone_link text-2xl">
                            <?php } ?>
                            
                            [[phone]]
                            </a>
					</p>
				</div>
				<!-- SUPER NAV TOOL -->
                  [[top_nav]]
                <!-- END SUPER NAV TOOL -->
		    </div>`

export const defaultFooter = `
			<!------------
  *** Footer ***
  ------------->
			<div
				id="footer"
				class="not-prose max-w-full bg-gray-800 text-gray-300">
				<div
					class="mx-auto grid max-w-7xl justify-center gap-8 px-5 py-20 md:grid-cols-[30%,1fr]">
					<div class="text-center">
						<a
							href=""
							class="btn btn--cta mb-5 !rounded-full text-2xl">
							Get a Free Quote
						</a>
					
						<p class="mt-8 text-base">Or call us at:</p>
						<div class="mb-4 block text-3xl font-semibold text-brand-bright">
							[[phone]]
						</div>
						<p class="text-base">
							&copy; <?php echo(date('Y')); ?> [[display_addresses]]
						</p>
						<div class="mt-4">[[social_footer]]</div>
					</div>
					<div id="footer-nav">
					    [[footer_nav]]
					</div>
				</div>
			</div>`

export const staticHero = `
	<!--------------
  ***** HERO *****
  --------------->
			<div
				id="hero"
				class="not-prose relative mb-20 max-w-full md:p-20">
				<picture>
					<source
						media="(min-width:768px)"
						srcset="
							https://cdn.treehouseinternetgroup.com/cms_images/3289/gs-barn-hang-hires.jpg
						" />
					<img
						class="md:absolute inset-0 w-full h-[200px] md:h-full object-cover object-left sm:object-center"
						src="https://cdn.treehouseinternetgroup.com/cms_images/3289/gs-barn-hang-767.jpg" />
				</picture>
				<!--<img class="md:absolute inset-0 w-full h-[200px] md:h-full object-cover object-left sm:object-center"
        src="https://cdn.treehouseinternetgroup.com/cms_images/3289/Matt-W-Barn-Hang-New-Gtter-Shutter-photo-June-2022(1300).png" />-->
			
				<div
					class="relative mx-auto flex h-full max-w-5xl items-center justify-center sm:justify-end">
					<div
						id="hero--text"
						class="w-full pt-6 text-center text-white md:w-fit md:bg-opacity-80 md:pt-8">
					
						<div class="block w-full bg-white">
						    <h1>[[Main Message Text]]</h1>
						    	 <!--<img
							src="https://cdn.treehouseinternetgroup.com/cms_images/3289/spring_flowers_img.jpg"
						/>-->
		
						    		<p
							class="mx-4 block text-lg font-normal text-black md:mx-8 md:text-2xl">
							<span class="block text-3xl font-extrabold uppercase md:text-4xl">
								XXXXX off
							</span>
							a complete Gutter Shutter System!
							<sup><a href="/about-us/coupons.html">*</a></sup>
						</p>
							<p class="text-lg font-semibold text-black md:text-2xl">
								From [state]'s Most Trusted Gutter Company
							</p>
							<a class="btn btn--cta mt-3" href="/free-estimate.html" title="Get a free estimate">Get Your Free Estimate</a>
							</div>
					
					</div>
				</div>
			</div>
`