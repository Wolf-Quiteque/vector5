import React from 'react';

const HomeScreen = () => {

  return (
    <main className="main">
    <section className="section-box">
      <div className="banner-hero banner-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="box-swiper">
                <div className="swiper-container swiper-group-1">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="banner-big banner-big-2 bg-15" style={{backgroundImage: 'url(./images/bg-slide.png)'}}><span className="saleoff">-25%</span><span className="font-sm text-uppercase label-green">Lançamento</span>
                        <h2 className="mt-10 color-white">Kit de Suspensão Completo</h2>
                        <h1 className="color-white lh-65">Para Veículos SUV</h1>
                        <div className="row">
                          <div className="col-lg-5 col-md-7 col-sm-12">
                            <ul className="list-disc">
                              <li className="font-sm color-white">Amortecedores de Alta Performance</li>
                              <li className="font-sm color-white">Durabilidade Extrema</li>
                              <li className="font-sm color-white">Sistema de Assistência Avançada</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-30"><a className="btn btn-brand-2 btn-gray-1000" href="shop-grid.html">Comprar agora</a><a className="btn btn-link btn-link-white" href="shop-grid.html">Saiba mais</a></div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="banner-big banner-big-2 bg-15" style={{backgroundImage: 'url(./images/bg-slide-2.png)'}}><span className="saleoff">-25%</span><span className="font-sm text-uppercase label-green">Melhor Oferta</span>
                        <h2 className="mt-10 color-white">Motor Turbo</h2>
                        <h1 className="color-white lh-65">Modelo XZT 2022</h1>
                        <div className="row">
                          <div className="col-lg-5 col-md-7 col-sm-12">
                            <ul className="list-disc">
                              <li className="font-sm color-white">Potência de 250 CV</li>
                              <li className="font-sm color-white">Consumo Otimizado de Combustível</li>
                              <li className="font-sm color-white">Tecnologia Turbo Avançada</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-30"><a className="btn btn-brand-2 btn-gray-1000" href="shop-grid.html">Comprar agora</a><a className="btn btn-link btn-link-white" href="shop-grid.html">Saiba mais</a></div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="banner-big banner-big-2 bg-15" style={{backgroundImage: "url(./images/bg-slide-3.png)"}}><span className="saleoff">-25%</span><span className="font-sm text-uppercase label-green">Lançamento</span>
                        <h2 className="mt-10 color-white">Pneus de Alta Performance</h2>
                        <h1 className="color-white lh-65">Tendência Agora</h1>
                        <div className="row">
                          <div className="col-lg-5 col-md-7 col-sm-12">
                            <ul className="list-disc">
                              <li className="font-sm color-white">Frete Grátis</li>
                              <li className="font-sm color-white">Suporte de 24 Meses</li>
                              <li className="font-sm color-white">Sistema de Assistência Avançada</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-30"><a className="btn btn-brand-2 btn-gray-1000" href="shop-grid.html">Comprar agora</a><a className="btn btn-link btn-link-white" href="shop-grid.html">Saiba mais</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination swiper-pagination-1"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="banner-small banner-laptop bg-16 text-center"><span className="color-brand-3 font-md">Novidades</span>
                    <h4 className="mb-10 color-gray-1000">Coleção de Volantes</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="banner-small banner-player bg-17">
                    <h6 className="mb-10 color-gray-1000">Sistema de Som para Carros</h6>
                    <p className="color-brand-1 font-sm">Edição Especial<br/> Alta Definição</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="banner-small banner-apple bg-2 text-center">
                    <h4 className="mb-0 color-gray-1000">Promoção de Freios</h4><span className="color-brand-3 font-md">Peças quentes, últimas tendências</span>
                    <div className="mt-0"><a className="btn btn-link-orange" href="shop-grid.html">Comprar Agora</a></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="banner-small banner-samsung bg-4"><span className="color-brand-3 font-md">Novidades</span>
                    <h4 className="mb-10 color-gray-1000">Faróis de LED 2022<span className="color-brand-3 font-md">Oferta Especial</span></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
   
  </main>
  );
};

export default HomeScreen;