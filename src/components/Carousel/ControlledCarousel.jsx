import React from 'react'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";

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
                _13_Wall_of_Sound 
              ]

class ControlledCarousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
      carousel:null
    };
  }
    
  componentDidMount(leftIcon,rightIcon,onSelect){
    typeof window !== 'undefined'?
      this.setState({carousel: <div className="container-fluid" style={{width:'100%'}}>
                                <Col span={12} style={{ paddingTop: "20px"  }}>
                                      <RBCarousel animation={true} autoplay={this.state.autoplay} 
                                      slideshowSpeed={3000} leftIcon={leftIcon} 
                                      rightIcon={rightIcon} onSelect={onSelect}
                                      ref={r => (this.slider = r)} version={4}>
                                              {media.map(i=>(
                                                  <div style={{ height: 400 }}>
                                                      <img style={{ width: "100%", height: "100%" }} src={i} />
                                                      {/*<div className="carousel-caption">{i.substring(4,i.length).replace(/_/g, " ")}</div>*/}
                                                  </div>
                                                ))
                                      }             
                                  </RBCarousel>
                              </Col>
                          </div>
                      })
                      :null
  }

  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
    rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
    this.setState({ leftIcon, rightIcon });
  };

  render() {
    const { carousel } =  this.state
    return(carousel)
  }
}

/**
 *  Boostrap Component
 */
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);
const Button = props => {
  const { style, bsStyle, onClick } = props;
  const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
  return (
    <button style={style} className={className} onClick={onClick}>
      {props.children}
    </button>
  );
};
export default ControlledCarousel