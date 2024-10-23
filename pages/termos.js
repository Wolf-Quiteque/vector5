// pages/termos-e-condicoes.js

import Head from 'next/head';

export default function TermosECondicoes() {
  return (
    <div>
      <Head>
        <title>Termos e Condições</title>
        <meta name="description" content="Termos e condições de uso do nosso serviço" />
    
      </Head>
      
      <div className="container mt-5">
        <h1 className="text-center mb-4">Termos e Condições</h1>

        <div className="mb-4">
          <h2>1. Introdução</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet, purus eu ultricies faucibus, est arcu tempus urna, vel congue elit ligula sit amet magna. Integer efficitur turpis et orci euismod, ac lacinia sapien ornare.
          </p>
        </div>

        <div className="mb-4">
          <h2>2. Aceitação dos Termos</h2>
          <p>
            Nulla facilisi. Quisque et lectus a lectus malesuada fringilla. Nam eget metus tincidunt, auctor massa ac, lobortis urna. Integer pharetra nunc id risus scelerisque, eget laoreet magna eleifend.
          </p>
        </div>

        <div className="mb-4">
          <h2>3. Uso do Serviço</h2>
          <p>
            Donec id diam vel risus condimentum eleifend. Sed gravida, felis et vulputate consequat, ligula mauris volutpat nulla, et gravida elit orci eget nulla. Mauris egestas mi a nisl tristique, nec varius tortor suscipit.
          </p>
          <ul>
            <li>Proin sit amet mi eu dui gravida cursus.</li>
            <li>Fusce bibendum tortor at lectus convallis pretium.</li>
            <li>Aenean tincidunt libero nec ipsum dignissim, a scelerisque nisl aliquet.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h2>4. Restrições de Uso</h2>
          <p>
            Sed et purus in justo posuere fermentum at euismod felis. Nulla facilisi. Curabitur sed convallis lacus. Suspendisse bibendum lorem at metus lobortis, ut hendrerit libero dictum. Aenean vestibulum dui et massa commodo, in dapibus risus ullamcorper.
          </p>
        </div>

        <div className="mb-4">
          <h2>5. Modificações nos Termos</h2>
          <p>
            Vestibulum euismod, felis vel facilisis tempor, eros libero laoreet quam, id posuere lectus dui non erat. In ut urna eget ligula suscipit bibendum et a libero. Integer non urna in metus tempus malesuada non nec metus.
          </p>
        </div>

        <div className="mt-5">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut feugiat nisi, vitae vestibulum metus. Fusce non suscipit odio. Sed nec leo at magna tincidunt dignissim ut nec est.</p>
          <p>Maecenas auctor metus non diam varius, ac aliquet elit feugiat. Donec fermentum magna et sollicitudin blandit. Integer auctor velit quis ipsum consequat, eget fringilla felis interdum.</p>
          <p>Aenean congue, arcu non luctus vestibulum, odio elit cursus orci, sit amet condimentum nisi leo et lacus.</p>
          <button className="btn btn-primary mt-3">Entendi os Termos</button>
        </div>
      </div>

  </div>
  );
}
