import React, { PureComponent } from 'react';

export default class Subscribe extends PureComponent {

  render() {
    return(
      <div className="container">
        <div className="application">
          <div className="title">
            <h1>Oportunidades do caralh* <span role="img" aria-label="high-five">🙌</span></h1>
          </div>
          <div className="content">
            <p>Na Upframe somos frequentemente abordados por startups de pequena e média dimensão à procura de estudantes que os possam ajudar. Por outro lado é normal encontrar pessoal como tu à procura de experiência real e que se pretende atirar para um ambiente mais inovador e empreendedor por saber que em vários aspetos a universidade ficou presa no século 19 e que o canudo por si só já não é tudo. Mereces melhor.</p>
            <p>Queremos ajudar-te a dar o próximo passo e elevar a tua carreira a um novo nível. Por nos encontrarmos entre o meio universitário e o meio empreendedor, assim como dentro e fora de Portugal, sentimos que estamos bem posicionados para te ajudar a encontrar oportunidades europa fora. Por isso mesmo estamos a trabalhar num projeto piloto com o objetivo de te ligar às startups mais inovadoras em Portugal e na Europa.</p>
            <p>Numa fase inicial vamos trabalhar com startups para te apresentar oportunidades a part-time ou de verão nas áreas da tecnologia, business, marketing e design digital.</p>
          </div>
          {/*<!-- Begin Mailchimp Signup Form -->*/}
          <div id="mc_embed_signup">
            <form action="https://upframe.us19.list-manage.com/subscribe/post?u=bb91a1bf156e7f95e1f691e1b&amp;id=da9e5c5243" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
                <div className="mc-field-group">
                  <input type="text" placeholder="Nome" name="NAME" className="required" id="mce-NAME"></input>
                </div>
                <div className="mc-field-group">
                  <input type="email" placeholder="Endereço de email" name="EMAIL" className="required email" id="mce-EMAIL"></input>
                </div>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                  <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                </div>    {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
                <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                  <input type="text" name="b_bb91a1bf156e7f95e1f691e1b_da9e5c5243" tabIndex="-1"></input>
                  </div>
                <div className="clear">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"></input>
                </div>
              </div>
            </form>
          </div>

          {/*<!--End mc_embed_signup-->*/}
        </div>
      </div>
    );
  }
}