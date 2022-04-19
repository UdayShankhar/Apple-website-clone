import React from 'react'
import './Apple.css';
// import logo from './images/logo.jpg';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AppleIcon from '@mui/icons-material/Apple';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Apple() {
    return (
        <div className='Apple'>

            <nav className='navigation'>
                <a href='https://www.apple.com/in/' alt='' target="_blank" className='apple-logo'><AppleIcon /></a>
                <a href='https://www.apple.com/in/store' target="_blank" className='head'>Shop</a>
                <a href='https://www.apple.com/in/mac/' target="_blank" className='head'>Mac</a>
                <a href='https://www.apple.com/in/ipad/' target="_blank" className='head'>iPad</a>
                <a href='https://www.apple.com/in/iphone/' target="_blank" className='head'>iPhone</a>
                <a href='https://www.apple.com/in/watch/' target="_blank" className='head'>Watch</a>
                <a href='https://www.apple.com/in/airpods/' target="_blank" className='head'>AirPods</a>
                <a href='https://www.apple.com/in/tv-home/' target="_blank" className='head'>TV & Home</a>
                <a href='https://www.apple.com/in/ipod-touch/' target="_blank" className='head'>iPod touch</a>
                <a href='https://www.apple.com/in/airtag/' target="_blank" className='head'>AirTag</a>
                <a href='https://www.apple.com/in/shop/accessories/all' target="_blank" className='head'>Accessories</a>
                <h5 className='search-logo'><SearchIcon /></h5>
                <h5 className='search-logo'><LocalMallIcon /></h5>
            </nav>

            <div>
                <div className='apple-iphone1'>
                    <img src="https://m-cdn.phonearena.com/images/article/138911-wide-two_1200/Green-iPhone-13-and-iPhone-13-Pro-Max-deals.jpg" alt='' className='applephone1'></img>
                </div>
                <div className='phone2'>
                    <div className='description'>
                        <p>The new</p>
                        <h1>iPhone SE</h1>
                        <h4>Love the power.Love the Speed</h4>
                        <a className='link1' href='https://www.apple.com/in/iphone-se/' target="_blank">Learn More<span><ChevronRightIcon /></span></a>
                        <a className='link1' href='https://www.apple.com/in/shop/buy-iphone/iphone-se' target="_blank">Buy Now<span><ChevronRightIcon /></span></a>
                    </div>
                    <img src='https://static2.srcdn.com/wordpress/wp-content/uploads/2022/01/iPhone-SE.jpg' alt='' className='iphone-se'></img>
                </div>

                <div className='ipad'>
                    <div className='ipad-description'>
                        <h1>iPad<span className='air'>air</span></h1>
                        <h2>Light.Bright.Full of Might.</h2>
                        <a className='link1' href='https://www.apple.com/in/ipad-air/' target="_blank">Learn More<span><ChevronRightIcon /></span></a>
                        <a className='link1' href='https://www.apple.com/in/shop/buy-ipad/ipad-air' target="_blank">Buy Now<span><ChevronRightIcon /></span></a>
                    </div>
                    <img src='https://cdn.mos.cms.futurecdn.net/3eEMU52qeP4utPEnSs2QcN-1200-80.jpg' alt='' className='iphone-se'></img>
                </div>

                <div>
                    {/* <div className='boxes'>
<div className='box'>
<div className='iMac-description'>
        <h2>iMac</h2>
    <h4 className='hello'>Say hello to the new iMac</h4>
         <a className='link1' href='https://www.apple.com/in/imac-24/' target="_blank">Learn More<span><ChevronRightIcon /></span></a>
     <a className='link1' href='https://www.apple.com/in/shop/buy-mac/imac' target="_blank">Buy Now<span><ChevronRightIcon /></span></a>
       </div>
     <img src='https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled7164.png' alt='' className='iMac' ></img>
</div>
<div className='box'>
<div className='iMac-description'>
                        <h2>Mac Studio</h2>
                        <h4>Empower Station</h4>
                        
                            <a className='link1' href='https://www.apple.com/in/mac-studio/' target="_blank">Learn More<span><ChevronRightIcon /></span></a>
                            <a className='link1' href='https://www.apple.com/in/shop/buy-mac/mac-studio' target="_blank">Buy Now<span><ChevronRightIcon /></span></a>
                        </div>
                        <img src='https://images.macrumors.com/t/YyfAhgw7csOedK364rfA4mGJ6o4=/800x0/smart/article-new/2022/03/mac-studio-front.jpg?lossy' alt='' className='mac-studio'></img>
</div>


</div> */}
                    <div className='iWatch'>
                        {/* <div> */}
                        <img src='https://i.ytimg.com/vi/zQ92xdCyl98/maxresdefault.jpg' alt='' className='iWatch-img'></img>
                        {/* </div> */}
                    </div>
                    <div className='airmax-headphones'>
                        <div className='airmax-description'>
                        <h1>AirPods Max</h1>
                            <h5 className='d'>Designed for an exceptional fit.</h5>
                        <div className='airm'>
                                <a href='https://www.apple.com/in/airpods-max/' className='l1' target="_blank">Learn More<span><ChevronRightIcon /></span></a>
                                <a href='https://www.apple.com/in/shop/buy-airpods/airpods-max/silver?fnode=5bff15156ca8942a2f61f78e30ba12ad061cf6fd85f0b9066cff2a992264dce541d13638bf9bbba40a016fe1b9bb07ba4e732fb31ef5121303e45669f321bd764da9dc20443ea48e7b8c5afed4277fbe159a9ba59d0600156eb304814e2c7915' className='l1' target="_blank">Buy Now<span><ChevronRightIcon /></span></a>
                        </div>
                        </div>
                        <img src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2020/12/AirPods-Max-black.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" alt="" className='airmax'></img>
                    </div>
                    <footer className='footer'>
                    <div className='foote'>
                       <div className='shop-and-learn'>
                           <h5 className='sal'>Shop and Learn</h5>
                            <a href='https://www.apple.com/in/store' target="_blank" className='sl'>Shop</a>
                            <a href='https://www.apple.com/in/mac/' target="_blank" className='mac'>Mac</a>
                            <a href='https://www.apple.com/in/ipad/' target="_blank" className='mac'>iPad</a>
                            <a href='https://www.apple.com/in/iphone/' target="_blank" className='mac'>iPhone</a>
                            <a href='https://www.apple.com/in/watch/' target="_blank" className='mac'>Watch</a>
                            <a href='https://www.apple.com/in/airpods/' target="_blank" className='mac'>AirPods</a>
                            <a href='https://www.apple.com/in/tv-home/' target="_blank" className='mac'>TV & Home</a>
                            <a href='https://www.apple.com/in/ipod-touch/' target="_blank" className='mac'>iPod touch</a>
                            <a href='https://www.apple.com/in/airtag/' target="_blank" className='mac'>AirTag</a>
                            <a href='https://www.apple.com/in/shop/accessories/all' target="_blank" className='mac'>Accessories</a>
                       </div>

                       <div className='services'>
                            <h5 className='service'>Services</h5>
                            <a href='https://www.apple.com/in/apple-music/' target="_blank" className='music'>Apple Music</a>
                            <a href='https://www.apple.com/in/apple-tv-plus/' target="_blank" className='music'>Apple TV+</a>
                            <a href='https://www.apple.com/in/apple-arcade/' target="_blank" className='music'>Apple Arcade</a>
                            <a href='https://www.apple.com/in/icloud/' target="_blank" className='music'>iCloud</a>
                            <a href='https://www.apple.com/in/apple-one/' target="_blank" className='music'>Apple One</a>
                            <a href='https://www.apple.com/in/apple-books/' target="_blank" className='music'>Apple Books</a>
                            <a href='https://www.apple.com/in/apple-podcasts/' target="_blank" className='music'>Apple Podcasts</a>
                            <a href='https://www.apple.com/in/app-store/' target="_blank" className='music'>Apple Store</a>
                       </div>

                       <div className='appstore'>
                           <h5 className='appstor'>App Store</h5>
                            <a href='https://www.apple.com/in/shop/ways-to-buy' target="_blank" className='app-s'>Ways to buy</a>
                            <a href='https://www.apple.com/in/shop/trade-in' target="_blank" className='app-s'>Apple Trade In</a>
                            <a href='https://www.apple.com/in/recycling/' target="_blank" className='app-s'>Recycling Programme</a>
                            <a href='https://www.apple.com/in/shop/goto/order/list' target="_blank" className='app-s'>Order Status</a>
                            <a href='https://www.apple.com/in/shop/help' target="_blank" className='app-s'>Shopping Help</a>
                       </div>

                       <div className='three-rows'>
                           <h5 className='for-business'>For business</h5>
                            <a href='https://www.apple.com/in/business/' target="_blank" className='app-s'>Apple and Business</a>
                           <h5 className='for-education'>For Education</h5>
                            <a href='https://www.apple.com/in/education/' target="_blank" className='app-s'>Apple and Education</a>
                            <a href='https://www.apple.com/in/education/k12/how-to-buy/' target="_blank" className='app-s'>Shop for Education</a>
                            <a href='https://www.apple.com/in/shop/education-pricing' target="_blank" className='app-s'>Shop for University</a>
                           <h5 className='for-healthcare'>For Healthcare</h5>
                            <a href='https://www.apple.com/in/healthcare/' target="_blank" className='app-s'>Apple in Healthcare</a>
                            <a href='https://www.apple.com/in/healthcare/apple-watch/' target="_blank" className='app-s'>Health on Apple Watch</a>
                       </div>

                       <div className='final'>
                           <h5 className='apple-values'>Apple Values</h5>
                            <a href='https://www.apple.com/in/accessibility/' target="_blank" className='app-s'>Accessibility</a>
                            <a href='https://www.apple.com/in/environment/' target="_blank" className='app-s'>Environment</a>
                            <a href='https://www.apple.com/in/privacy/' target="_blank" className='app-s'>Privacy</a>
                            <a href='https://www.apple.com/in/supplier-responsibility/' target="_blank" className='app-s'>Supplier Responsibility</a>
                           <h5 className='about-apple'>About Apple</h5>
                            <a href='https://www.apple.com/in/newsroom/' target="_blank" className='app-s'>Newsroom</a>
                            <a href='https://www.apple.com/in/leadership/' target="_blank" className='app-s'>Apple LeaderShip</a>
                            <a href='https://www.apple.com/careers/in/' target="_blank" className='app-s'>Career Oppurtunities</a>
                            <a href='https://investor.apple.com/' target="_blank" className='app-s'>Investors</a>
                            <a href='https://www.apple.com/compliance/' target="_blank" className='app-s'>Ethics & Compliance</a>
                            <a href='https://www.apple.com/in/apple-events/' target="_blank" className='app-s'>Events</a>
                            <a href='https://www.apple.com/in/contact/' target="_blank" className='app-s'>Contact Apple</a>
                       </div>
                        </div>
                        
                        <div className='last-lines'>
                            <h6 className='copyrights'>Copyrights © Created by Uday Shankhar--All rights reserved.</h6>
                            <h6 className='location'>India</h6>
                        </div>
                    </footer>
                </div>

            </div>
        </div>
    )
}

export default Apple


//https://i.ytimg.com/vi/zQ92xdCyl98/maxresdefault.jpg