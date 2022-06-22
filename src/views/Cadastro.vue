<template>
  <div style="background-color: #d6f0ff">
    <section class="h-100 gradient-form">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black shadowboxiv">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <div class="text-center">
                      <img
                        src="https://images.sympla.com.br/5e4bd4ce772f7.png"
                        style="width: 185px"
                        alt="logo"
                      />
                      <h4 class="mt-1 mb-5 pb-1">Cadastro</h4>
                    </div>

                    <form>
                      <h6>Apelido</h6>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example11"
                          class="form-control"
                          placeholder="Ex. Léo Pompeu"
                        />
                      </div>

                      <h6>Email</h6>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          class="form-control"
                          placeholder="Ex. exemplo@exemplo.com"
                        />
                      </div>

                      <h6>Senha</h6>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example11"
                          class="form-control"
                          placeholder="*******"
                        />
                      </div>

                      <div class="text-center pt-1 mb-5 pb-1">
                        <button
                          class="
                            btn btn-primary btn-block
                            fa-lg
                            gradient-custom-2
                            mb-3
                            shadowiv
                            shadowboxiv
                          "
                          type="button"
                        >
                          Cadastrar
                        </button>
                      </div>

                      <div
                        class="
                          d-flex
                          align-items-center
                          justify-content-center
                          pb-4
                        "
                      >
                        <p class="mb-0 me-2">Consultor já cadastrado?</p>
                        <router-link to="/">
                          <button type="button" class="btn btn-outline-danger">
                            Logar!
                          </button>
                        </router-link>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="col-lg-6 d-flex align-items-center gradient-custom-2"
                >
                  <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 class="mb-4 shadowiv">
                      Fazer a diferença na vida das pessoas
                    </h4>
                    <p class="small mb-0 shadowiv">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "Cadastro",
  components: {
    Footer,
  },
};
</script>