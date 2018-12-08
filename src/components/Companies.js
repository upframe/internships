import React, { PureComponent } from 'react';

export default class Companies extends PureComponent {
  
  render() {
    return(
      <div className="container">
        <div className="application">
          <div className="title">
            <h1>Startups candidatam-se aqui <span role="img" aria-label="smilling face with heart eyes">😍</span></h1>
          </div>
          <div className="content">
            <p>Na Upframe somos frequentemente abordados por estudantes universitários com um problema em comum. Não encontram estágios à sua medida. Quem os quer estagiar são sempre os mesmos e não achamos isso justo. Queremos mais #fazedores a dinamizar as primeiras experiências de trabalho dos estudantes.</p>
            <p>Entretanto temos inúmeras startups que procuram alunos para incorporar nas suas equipas e não conseguem encontra-los simplesmente porque existe uma falta de comunicação. Não existe um sitio onde os alunos possam ir com confiança para decidir onde dar o seu próximo passo.</p>
            <p>Queremos resolver este problema facilitando o trabalho de qualquer empreendedor que queira ter uma equipa fantastica precisando só de se candidatar à nossa plataforma. Se estás interessado em receber alunos para estagiar na tua startup deixa-nos o teu contacto aqui para que possamos entrar em contacto contigo. Mais novidades estão a chegar...</p>
          </div>
          {/*<!-- Begin Mailchimp Signup Form -->*/}
          <div id="mc_embed_signup">
            <form action="https://upframe.us19.list-manage.com/subscribe/post?u=bb91a1bf156e7f95e1f691e1b&amp;id=4833336477" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <input type="text" placeholder="Company name" name="CNAME" className="required" id="mce-CNAME"></input>
                  </div>
                  <div className="mc-field-group">
                    <input type="email" placeholder="Company email" name="EMAIL" className="required email" id="mce-EMAIL"></input>
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                    <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                  </div> {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
                  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                    <input type="text" name="b_bb91a1bf156e7f95e1f691e1b_4833336477" tabIndex="-1"></input>
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