import React from 'react';
import gradient from '@images/axe-music-introduction-gradient.png';
import AxeMusicHeader from '../components/AxeMusicHeader';

const AxeMusicIntroduction = () => {
  return (
    <div className="mx-auto container pt-5">
      <AxeMusicHeader fullContent={true} />
      <h1 className="uppercase text-5xl font-bebas my-5 py-5 text-tirques">
        Eu turpis egestas pretium aenean pharetra magna
        <br />
        ac. Odio ut enim blandit volutpat maecenas.
      </h1>
      <div className="flex">
        <div className="flex-1">
          <p className="font-arial leading-tight mb-5">
            Quam quisque id diam vel quam elementum. Ante in nibh mauris cursus
            mattis molestie a iaculis. Egestas egestas fringilla phasellus
            faucibus scelerisque eleifend.
          </p>
          <p className="font-arial leading-tight mb-5">
            Ut enim blandit volutpat maecenas volutpat blandit aliquam. Sit amet
            mauris commodo quis imperdiet massa tincidunt nunc pulvinar.
          </p>
          <p className="font-arial leading-tight mb-5">
            Feugiat sed lectus vestibulum mattis ullamcorper velit. Pellentesque
            elit eget gravida cum sociis natoque. Cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque mauris. Aliquam eleifend mi in
            nulla posuere. Leo urna molestie at elementum. Augue mauris augue
            neque gravida in fermentum. Eget est lorem ipsum dolor. Id venenatis
            a condimentum vitae sapien pellentesque habitant morbi.
          </p>
          <p className="font-arial leading-tight mb-5">
            Sagittis vitae et leo duis. Aliquam faucibus purus in massa. Quam
            elementum pulvinar etiam non. Luctus accumsan tortor posuere ac ut
            consequat semper viverra nam.
          </p>
          <p className="font-arial leading-tight mb-5">
            Scelerisque eu ultrices vitae auctor eu. Purus faucibus ornare
            suspendisse sed nisi lacus sed viverra. Amet dictum sit amet justo
            donec. Auctor elit sed vulputate mi sit amet mauris. Id porta nibh
            venenatis cras sed felis eget. Tempus quam pellentesque nec nam
            aliquam sem.
          </p>
          <p className="font-arial leading-tight mb-5">
            At risus viverra adipiscing at in. In nulla posuere sollicitudin
            aliquam ultrices sagittis orci a scelerisque. Egestas diam in arcu
            cursus euismod quis viverra nibh.
          </p>
        </div>
        <div className="flex-1 pl-5">
          <div className="relative">
            <div style={{ height: '350px' }} className="bg-grey-darker" />
            <div
              className="absolute"
              style={{ top: '6rem', right: '-6rem', zIndex: '-1' }}>
              <img src={gradient} alt="Axe Music Introduction Gradiend" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxeMusicIntroduction;
