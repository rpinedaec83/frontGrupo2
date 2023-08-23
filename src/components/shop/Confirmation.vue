<template>
  <div class="container-c py-12 px-12 shadow-xl mx-auto mt-12 lg:mt-0 lg:self-start">
    <div class="content-center w-full">
      <h2 class="text-[#5640FF] title text-left ">
        ¡Compra exitosa!
      </h2>
      <p class="paragraph my-3">
        La boleta o factura solicitada será enviada a tu correo en unos momentos.
      </p>
      <RouterLink to="/mis-cursos" class="bg-[#5640ff] rounded-xl text-white text-center next py-4 mt-6 block">
        Volver a mis cursos
      </RouterLink>
    </div>
  </div>
</template>
<script>

export default {

  data() {
    return {

    }
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.container-c {
  width: 100%;
  max-width: 433px;
  border-radius: 5px;
}

.title {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #222222;
}

.next {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  width: 100%;
  font-weight: bold;
}

.paragraph {
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  text-align: left;
}
</style>