import React, { useEffect } from "react";
import "../../Styles/Servic.css";
import Contact from "../../components/Home/Contact";
import { useLocation } from "react-router-dom";

const Servic = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="servic">
      <div className="container">
        <div className="servic__box">
          <h2>Diam hac nulla vulputate vivamus</h2>
          <div className="servic__box__child">
            <div className="servic__box__child1">
              <img src="" alt="" />
            </div>
            <div className="servic__box__child2">
              <h3>
                Sagittis, a diam semper quis turpis elit amet. Placerat
                elementum est adipiscing posuere. Justo commodo elementum morbi
                nam neque. Nunc, nunc enim, viverra mattis ut. Habitant volutpat
                erat ut ultrices. Amet tortor, quis consectetur cursus nulla
                etiam vel. Scelerisque massa pellentesque at sed egestas
                dignissim integer condimentum amet.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dictum ipsum eu massa nullam. Sed commodo elementum mauris non
                mauris sem duis. Odio dictum viverra purus volutpat. Quis in
                quisque semper volutpat tellus vulputate egestas magna
                dignissim. Quis netus dui nec, ante diam sit etiam duis
                lobortis. Orci tincidunt vulputate scelerisque eu id. Quisque
                quam id sagittis integer vel tortor. Ut in neque, condimentum
                lectus non nec. Sed ultrices velit, dolor nunc gravida donec
                facilisi dolor. 
              </p>
              <p>Fames morbi adipiscing sem cursus arcu, maecenas
                vitae tristique lectus. Neque gravida magna turpis eget ac
                bibendum amet convallis dignissim. Neque, faucibus diam accumsan
                nisl. In lectus libero lacinia ut sapien sed. Sagittis amet at
                euismod nibh iaculis in. Platea amet lacus, fermentum pulvinar
                cras tortor sit</p>
              <p>Est pretium rhoncus sed non congue consequat
                scelerisque. Senectus nulla aenean et, turpis scelerisque.
                Feugiat dolor nec etiam sagittis vitae. Ac sem ut turpis massa,
                sed. A, sollicitudin bibendum purus laoreet dignissim aliquam
                dictumst. Integer imperdiet consectetur felis orci. Sit tellus
                diam pulvinar nam tortor. Feugiat blandit et ultricies mauris
                cras id. Tortor orci, vitae semper pulvinar turpis quam at. Diam
                ac sit ut feugiat morbi amet. Nam diam id ultrices nisi. Fusce
                arcu feugiat faucibus felis iaculis quam pellentesque tristique
                quam. Ac quam in adipiscing proin velit phasellus fringilla.
                Nunc, ac gravida sed massa posuere sed urna.</p>
              <p>Amet nec feugiat
                aenean auctor. Enim lectus aliquet malesuada dapibus blandit
                quis scelerisque vitae ullamcorper. Elit ipsum etiam non
                pulvinar tempus, leo sit sed ac. Urna dui ultricies diam urna
                eget hendrerit. Amet tristique ut diam congue pretium. Accumsan
                sed nisl, integer nulla. Libero tristique urna at gravida
                convallis mauris et curabitur tempus. Venenatis turpis bibendum
                lectus tellus tempor, molestie. Vulputate fermentum pharetra
                erat netus mattis nisl, faucibus. A, sapien mollis egestas id
                enim. Morbi tincidunt sem elementum ac condimentum elit tortor,
                consectetur orci</p>
            </div>
          </div>
        </div>
      </div>
      <Contact/>
    </div>
  );
};

export default Servic;
