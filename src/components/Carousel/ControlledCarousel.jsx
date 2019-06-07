import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './ControlledCarousel.css'


import _01_Pristine_audio_quality                   from '../../images/Media/1_Pristine_audio_quality.jpg';
import _02_Sonorización_Profesional                 from '../../images/Media/2_Sonorización_Profesional.jpg';
import _03_Live_Sound                               from '../../images/Media/3_Live_Sound.jpg';
import _04_Refuerzo_Sonoro                          from '../../images/Media/4_Refuerzo_Sonoro.jpg';
import _05_Dj_VDj                                   from '../../images/Media/5_Dj_VDj.jpg';
import _06_International_Djs                        from '../../images/Media/6_International_Djs.jpg';
import _07_Mezcla_y_grabación_en_vivo               from '../../images/Media/7_Mezcla_y_grabación_en_vivo.jpg';
import _08_PA_Speakers_rental                       from '../../images/Media/8PA_Speakers_rental.jpg';
import _09_Pool_parties                             from '../../images/Media/9_Pool_parties.jpg';
import _10_Fiestas_de_cumpleaños                    from '../../images/Media/10_Fiestas_de_cumpleaños.jpg';
import _11_Pool_party                               from '../../images/Media/11_Pool_party.jpg';
import _12_Sistema_lineal_compacto_array_450_W      from '../../images/Media/12_Sistema_lineal_compacto_array_450_W.jpg';
import _13_Wall_of_Sound                            from '../../images/Media/13_Wall_of_Sound.jpg';
import _14_Israeliens                               from '../../images/Media/14_Israeliens.jpg'

import _15_your_stage_partner                       from '../../images/Media/15_your_stage_partner.jpg'
import _16_dj_boda                                  from '../../images/Media/16_dj_boda.jpg'
import _17_selina                                   from '../../images/Media/17_selina.jpg'
import _18_urano_130                                from '../../images/Media/18_urano_130.jpg'
import _19_your_stage_partner                       from '../../images/Media/19_your_stage_partner.jpg'


const media = [
                _01_Pristine_audio_quality,
                _02_Sonorización_Profesional,
                _03_Live_Sound,
                _04_Refuerzo_Sonoro,
                _05_Dj_VDj,
                _06_International_Djs,
                _07_Mezcla_y_grabación_en_vivo,
                _08_PA_Speakers_rental,
                _09_Pool_parties,
                _10_Fiestas_de_cumpleaños,
                _11_Pool_party,
                _12_Sistema_lineal_compacto_array_450_W,
                _13_Wall_of_Sound,
                _14_Israeliens,
                _15_your_stage_partner,
                _16_dj_boda,
                _17_selina,
                _18_urano_130,         
                _19_your_stage_partner,      
              ]

class ControlledCarousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      slide:1
    };
  }

render() {
      return(
          <Carousel interval='1500' autoPlay='true'
                            infiniteLoop='false' dynamicHeight='true'
                            >

                            {media.map(i=>(
                                    <div className='carousel_height' key={i}>
                                        <img src={i}  />                          
                                    </div>
                            ))}                  
           </Carousel>
    )
  }
}

export default ControlledCarousel
/*
Attributes	Type	Default	Description
showArrows	boolean	true	show prev and next arrows
showStatus	boolean	true	show index of the current item. i.e: (1/8)
showIndicators	boolean	true	show little dots at the bottom with links for changing the item
showThumbs	boolean	true	show thumbnails of the images
thumbWidth	number	undefined	optionally specify pixel width (as an integer) of a thumbnail (including any padding) to avoid calculating values (helps with server-side renders or page cache issues)
infiniteLoop	boolean	false	infinite loop sliding
selectedItem	number	0	selects an item though props / defines the initial selected item
axis	string	horizontal	changes orientation - accepts horizontal and vertical
verticalSwipe	string	standard	changes vertical swipe scroll direction - accepts standard and natural
onChange	function	-	Fired when changing positions
onClickItem	function	-	Fired when an item is clicked
onClickThumb	function	-	Fired when a thumb it clicked
width	string	-	Allows to set a fixed width
useKeyboardArrows	boolean	false	Adds support to next and prev through keyboard arrows
autoPlay	boolean	false	Auto play
stopOnHover	boolean	true	Stop auto play while mouse is over the carousel
interval	number	3000	Interval of auto play
transitionTime	number	350	Duration of slide transitions (in miliseconds)
swipeScrollTolerance	number	5	Allows scroll when the swipe movement occurs in a different direction than the carousel axis and within the tolerance - Increase for loose - Decrease for strict
swipeable	boolean	true	Enables swiping gestures
dynamicHeight	boolean	false	Adjusts the carousel height if required. -- Do not work with vertical axis --
emulateTouch	boolean	false	Allows mouse to simulate swipe
statusFormatter	func	(current, total) => ${current} of ${total}	Allows custom formatting of the status indicator
centerMode	boolean	false	Enables centered view with partial prev/next slides. Only works with horizontal axis.
centerSlidePercentage	number	80	optionally specify percentage width (as an integer) of the slides in centerMode

*/