import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./style.css";


// Cited React Carousel: https://www.npmjs.com/package/react-responsive-carousel and https://codesandbox.io/s/lp602ljjj7
// npm install react-responsive-carousel
// This Carousel Compoment is used on the About.js page (the cover page)

export default () => (
    <Carousel autoPlay showArrows={true} dynamicHeight={true} infiniteLoop={true} showThumbs={false} className="carousel bg-info">
        <div>
            {/* <img src="https://www.schoology.com/sites/default/files/schoology-learning-management-system.png" alt="pic" /> */}
            <img src="https://d1axatwj9ytuu1.cloudfront.net/content/uploads/2019/05/28094102/OnlineEducator2.jpg" alt="Guy-in-class" className="carousel-image" />
            <div className="carousel-image-one"></div>
            <h1 className="legend bg-info"> "Thank you Knowlege-ABLE. You gave me the resources to become confident in class." -Jake</h1>
        </div>
        <div>
            <img src="https://www.pandatree.com/blog/wp-content/uploads/2017/01/iStock-486541648-3-700x467.jpg" alt="young-girl-raising-her-hand" className="carousel-image" />
            <p className="legend bg-info">"With Knowledge-ABLE, I was finally able to find a learning program for my daughter that gives her the focus and attention she deserves.
             <br />My daughter is now proud to raise her hand in class instead of hiding" -Pam </p>
        </div>
        <div>
            <img src="https://www.get.com/media/uploads/continuin-education-2873502107.jpg" alt="grandma-graduation" className="carousel-image" />
            <p className="legend bg-info"> "My grandma struggled with dyslexia her whole life. Thanks to you Knowledge-ABLE, she was able to find the right resources to help her go back to college and graduate!" -Sarah</p>
        </div>

        <div>
            <img src="https://www.kut.org/sites/kut/files/201505/learningInfinity-2.jpg" alt="two-young-girls-in-class" className="carousel-image" />
            <p className="legend bg-info">"Knowledge-ABLE has changed my daughters lives forever. Due to their leaning disability they hated school and didn't want to learn. Now they both love school and want to learn" -Jennifer</p>
        </div>
        <div>
            <img src="https://static1.squarespace.com/static/5b3508d4f407b41e31432fa3/t/5b7eff84352f533673ecb40e/1535049610717/AnchorPhoto.png?format=1500w" alt="father-and-son" className="carousel-image" />
            <p className="legend bg-info">"Me and my son were both struggling with dyslexia and had problems learning math. Thanks to the resources I found on Knowlege-ABLE, we are no longer struggeling" -Joe</p>
        </div>
        <div>
            <img src="https://gsg-61ea.kxcdn.com/media/contents/iStock-181861702Mediumedit.jpg" alt="young-boy-with-tutor" className="carousel-image" />
            <p className="legend bg-info">"Discovering my son's learning disabilities at an early age and finding him a great tutor has been an amazing experience. <br /> Thank you Knowlege-ABLE for making this possible." -Heather</p>
        </div>
        <div>
            <img src="http://www.peelschools.org/adulteducation/PublishingImages/shutterstock_88288024.jpg" alt="lady-in-class" className="carousel-image" />
            <p className="legend bg-info">"I love the skill games Knowledge-ABLE suggests. I play them everyday and my math skills are improving" -Kayla</p>
        </div>
        <div>
            <img src="https://wisebread-killeracesmedia.netdna-ssl.com/files/fruganomics/imagecache/605x340/blog-images/students-512822-small.jpg" alt="teenagers-at-school" className="carousel-image" />
            <p className="legend bg-info">"Thank you Knowledge-ABLE. You helped my son and his friends obtain better reading skills. They are so much happier now." -Jasmin</p>
        </div>


    </ Carousel>
);
















