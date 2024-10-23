// pages/perguntas-frequentes.js

import Head from 'next/head';

export default function PerguntasFrequentes() {
  return (
    <div>
      <Head>
        <title>Perguntas Frequentes</title>
        <meta name="description" content="Perguntas frequentes sobre nossos serviços" />
  
      </Head>
      
      <div className="container mt-5">
        <h1 className="text-center mb-4">Perguntas Frequentes</h1>

        <div className="accordion" id="accordionExample">
          {/* First Question */}
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  O que é Lorem Ipsum?
                </button>
              </h2>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </div>
            </div>
          </div>

          {/* Second Question */}
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Onde posso encontrar?
                </button>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
                Existem muitas variações de passagens de Lorem Ipsum disponíveis, mas a maioria sofreu alterações de alguma forma.
              </div>
            </div>
          </div>

          {/* Third Question */}
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Por que usamos Lorem Ipsum?
                </button>
              </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">
                É um fato conhecido de todos que um leitor se distrairá com o conteúdo legível de uma página ao olhar para seu layout.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
          <p>Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>
          <p>Phasellus sed nisi ac augue lobortis euismod. Sed fringilla faucibus urna at dictum.</p>
          <p>Morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultricies mi vitae est.</p>
          <p>Ut suscipit egestas urna, nec eleifend metus ultricies et. Sed dapibus efficitur ligula in scelerisque.</p>
          <button className="btn btn-primary mt-3">Saiba mais</button>
        </div>
      </div>

    </div>
  );
}
