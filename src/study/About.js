import React from "react";
import CardProsps from "../AboutComp/CardProsps";
import img1 from "../access/a.png";
import img2 from "../access/cc.png";
import img3 from "../access/js.png";
import img4 from "../access/pp.png";

const About = () => {
  return (
    <div>
      <div>This is the About page</div>
      <CardProsps text="JaveScript" numb="11" img={img1} />
      <CardProsps text="Electron" numb="5" img={img2} />
      <CardProsps text="Dart" numb="9" img={img3} />
      <CardProsps text="tensorFlow" numb="7" img={img4} />
    </div> );
};
export default About;
