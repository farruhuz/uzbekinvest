import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const NewCard = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <div className="cards">
      <div className="container">
        <div className="card">
        <img className="card__img" src="" alt="" />
        <div className="card__info">
          <h2>
            Enim, quis cras condimentum fermentum consectetur arcu aliquet.{" "}
          </h2>
          <h4>
            Enim, quis cras condimentum fermentum consectetur arcu aliquet.
            Consequat risus aenean euismod facilisis integer arcu molestie. Eget
            semper ullamcorper dolor aliquam quis lectus quis. Massa sed ipsum
            non sollicitudin pulvinar dictum morbi at nec.
          </h4>
          <p>Nullam congue quis et a pulvinar ac. Faucibus arcu velit a, enim
            tellus non odio fermentum. Et, consequat euismod gravida est ac,
            vitae volutpat, sem in. A lorem non a, velit dapibus tempor. Rhoncus
            vel aliquam nec, fermentum, eu viverra. Id elit non, nunc volutpat
            mauris tristique nunc pulvinar purus. Fringilla lorem consequat
            egestas sit scelerisque. Nisl non eu duis tellus malesuada suscipit
            sed eu eget. Facilisis bibendum aliquet nullam ipsum sociis enim mi
            quis in.              
          </p>
          <p>Curabitur convallis nullam etiam urna interdum dignissim
            turpis. Auctor ac lacus, proin elit, vitae potenti. Lacus neque
            lacus velit dapibus sed lobortis laoreet dignissim. Eu pellentesque
            varius iaculis curabitur condimentum sed nec sagittis platea. In
            turpis posuere diam eget facilisis malesuada quam adipiscing lacus.
            Ultrices facilisis fermentum at morbi praesent. Commodo scelerisque
            et egestas orci, fusce volutpat morbi arcu turpis. Nunc nunc
            faucibus sagittis sapien mattis leo</p>
          <p>Nisl, urna libero mattis
            pharetra, at consequat est. Mi duis velit vehicula arcu nibh
            tincidunt nunc eleifend. Lectus eu, at ut nunc semper felis
            dignissim quisque. Et lacinia sem et adipiscing vestibulum sed.
            Semper amet, magna ut ligula sed. Vitae aliquam nunc aliquam viverra
            semper facilisi. Tortor nulla commodo magnis aliquet scelerisque
            nunc. Nunc, purus eleifend arcu non viverra sit mauris adipiscing
            sollicitudin. Lacus nisl sed venenatis lorem adipiscing commodo
            iaculis nunc elit. Vestibulum habitasse aliquet semper felis ipsum
            tempor in et, sed. Tortor ullamcorper vel mattis consectetur augue
            eu. Lacus, arcu, cursus venenatis diam. Porta magna nunc sit nibh.</p>
          <p> Auctor diam adipiscing felis enim, vitae nunc etiam platea. Tellus
            odio in metus nunc. Non diam aliquet fringilla mauris dui montes,
            diam accumsan. Pretium sed orci enim, consequat. Felis tellus vitae
            enim urna sed gravida. Dolor mattis nec ullamcorper felis. Lacus,
            leo morbi leo mi non sapien, laoreet tempor sit. Elit nunc diam nisl
            pellentesque mollis vestibulum rhoncus. Dui magnis ornare adipiscing
            porttitor venenatis. Ac sit cum sagittis aliquet orci, aliquam nulla
            id et. Leo id nulla sagittis, ac adipiscing. Iaculis amet, commodo
            facilisis augue enim, neque vestibulum erat.</p>
          <p>Mauris, quisque non
            vitae, cursus. Vitae placerat at dui blandit eget aliquam enim
            sollicitudin ultrices. Diam neque volutpat quam nullam imperdiet
            odio nec parturient. Duis aliquet sem tortor proin integer
            sollicitudin egestas egestas in. Urna praesent vel faucibus
            ultrices.</p>
          <p>Congue sed eget sociis elementum. Tortor adipiscing sapien
            venenatis, nam rhoncus, euismod. Faucibus enim hac tincidunt lorem
            eget. Nunc, nam natoque hac viverra tincidunt nulla pellentesque
            nulla. Eget mauris accumsan vitae mauris. Ut phasellus duis integer
            risus, eu. Turpis sagittis sed augue cras orci eu. Duis integer nibh
            nunc porta amet vestibulum. Consectetur ligula nunc cursus sed.
            Euismod lorem tincidunt quis vitae vulputate. Dis erat dignissim in
            egestas lacinia feugiat quam. Condimentum consectetur ut amet
            potenti ac id augue aliquet. Dui, molestie amet praesent platea nec
            ultrices mollis tincidunt varius. Egestas sed libero eget arcu arcu
            fusce amet faucibus augue.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NewCard