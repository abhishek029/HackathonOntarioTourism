export default{
    template:`
    
    <!-- Promo section -->
    <section id="PromoComponent">
        <section id="video">
            <video class="small-12"controls>
                <source src="video/promo.mp4">
            </video>
        </section>
    
        <section id="welcome" class="row">
            <h2 class="columns otherDest small-offset-3 small-6 text-center">Welcome to Ontario</h2>
            <div class="row" id="welcomeText">
                <p class="columns small-8 small-offset-2 text-center">Experience Ontario from its scenic country vineyards in Niagara and Ottawa’s vibrant events to expansive wilderness in Algonquin Provincial Park. Ontario is a place of diverse experiences and welcomes EVERYONE to explore it all.</p>
            </div>
        </section>

        <section id="mainImage" class="row">
            <div class="large-7 columns">
                <img src="images/main.png" alt="mainimage">
            </div>

            <div class="large-5 columns">
                <h3>Featured Destination</h3>
                <h4>Toronto, ON</h4>
                <p>Come to Toronto to enjoy the various events, visit famous landmarks and come to attractions such as the CN Tower, Toronto Zoo, Royal Ontario Museum, Ripleys Aquarium, and many more.</p> 

                <p>Come and see what Toronto has to offer you!</p>
            </div>
            
        </section>
    
        <section id="otherDest" class="row" >
            
            <div class="row">
                <h2 class="columns otherDest small-offset-4 small-4 text-center">Other Destinations</h2>
            </div>
            
            <div class="large-4 small-6 columns"><img src="images/img1.png" alt="featuredDest"></div>
            <div class="large-4 small-6 columns"><img src="images/img2.png" alt="featuredDest"></div>
            <div class="large-4 small-6 columns"><img src="images/img3.png" alt="featuredDest"></div>
            <div class="large-4 small-6 columns"><img src="images/img4.png" alt="featuredDest"></div>
            <div class="large-4 small-6 columns"><img src="images/img5.png" alt="featuredDest"></div>
            <div class="large-4 small-6 columns"><img src="images/img6.png" alt="featuredDest"></div>
        
        </section>
    </section>
    `,
}