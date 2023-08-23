<template>
  <header>
    <div>
      <Navbar :color="'bg-secondary'" class="hidden md:flex" />
    </div>
  </header>
  <main class="w-full py-[50px] px-[20px] lg:px-[80px]">
    <h1 class="text-center mb-[30px] font-bold text-xl">Términos y Condiciones - Página de Cursos</h1>
    <p class="mb-[30px]">Bienvenido(a) a nuestra plataforma de cursos en línea. Antes de utilizar nuestros servicios, te pedimos que leas detenidamente los siguientes Términos y Condiciones. Al acceder y utilizar nuestra página de cursos, aceptas cumplir con estos términos. Si no estás de acuerdo con alguno de ellos, te recomendamos que no utilices nuestros servicios.</p>
    
    <h2 class="mb-[10px] font-bold">1. Aceptación de los términos</h2>
    <p class="mb-[30px]">Al acceder y utilizar nuestra página de cursos, aceptas cumplir con estos Términos y Condiciones y todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, te pedimos que no utilices nuestros servicios.</p>

    <h2 class="mb-[10px] font-bold">2. Descripción de los servicios</h2>
    <p class="mb-[30px]">Nuestra página de cursos en línea ofrece una plataforma para acceder a contenido educativo y cursos en diferentes áreas temáticas. La disponibilidad de los cursos está sujeta a cambios sin previo aviso y no garantizamos la continuidad de ningún curso específico.</p>

    <h2 class="mb-[10px] font-bold">3. Registro y cuenta de usuario</h2>
    <p class="mb-[30px]">Para acceder a nuestros cursos, es posible que debas crear una cuenta de usuario. Al registrarte, garantizas que la información proporcionada es precisa, completa y actualizada. Eres responsable de mantener la confidencialidad de tu información de inicio de sesión y de todas las actividades que ocurran bajo tu cuenta.</p>

    <h2 class="mb-[10px] font-bold">4. Propiedad intelectual</h2>
    <p class="mb-[30px]">El contenido de nuestros cursos, incluyendo pero no limitado a textos, videos, imágenes y materiales de enseñanza, están protegidos por derechos de autor y otras leyes de propiedad intelectual. No se te otorga ningún derecho de propiedad sobre el contenido al acceder a nuestros cursos, y no puedes copiar, modificar, distribuir, vender o utilizarlo de ninguna manera sin nuestro consentimiento previo por escrito.</p>

    <h2 class="mb-[10px] font-bold">5. Uso aceptable</h2>
    <p class="mb-[10px]">Al utilizar nuestros servicios, te comprometes a no realizar ninguna de las siguientes acciones:</p>
    <ul class="mb-[30px]">
        <li>- Publicar, compartir o transmitir cualquier contenido que sea ilegal, difamatorio, obsceno, fraudulento, violento, ofensivo o que viole los derechos de terceros.</li>
        <li>- Utilizar nuestros servicios para enviar spam, correos no deseados o cualquier otra forma de comunicación no solicitada.</li>
        <li>- Interferir o dañar nuestra plataforma, servidores o redes asociadas.</li>
        <li>- Acceder a cuentas de otros usuarios sin autorización.</li>
        <li>- Utilizar nuestros servicios de manera que viole cualquier ley o regulación aplicable.</li>
    </ul>

    <h2 class="mb-[10px] font-bold">6. Pagos y reembolsos</h2>
    <p class="mb-[30px]">Algunos cursos pueden tener un costo asociado. Los precios y métodos de pago estarán claramente indicados en nuestra página. No ofrecemos reembolsos, a menos que se indique lo contrario en circunstancias excepcionales y a nuestra discreción.</p>

    <h2 class="mb-[10px] font-bold">7. Limitación de responsabilidad</h2>
    <p class="mb-[30px]">Nuestra página de cursos se proporciona "tal cual", sin garantías de ningún tipo. No nos hacemos responsables de cualquier daño directo, indirecto, incidental, especial o consecuente que pueda surgir del uso de nuestros servicios.</p>

    <h2 class="mb-[10px] font-bold">8. Modificaciones a los Términos y Condiciones</h2>
    <p class="mb-[30px]">Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Te recomendamos revisar periódicamente esta sección para estar al tanto de las actualizaciones. El uso continuado de nuestros servicios después de cualquier modificación constituirá tu aceptación de los nuevos términos.</p>

    <p>Estos son los Términos y Condiciones que rigen el uso de nuestra página de cursos en línea. Si tienes alguna pregunta o inquietud, no dudes en contactarnos. ¡Te deseamos una excelente experiencia de aprendizaje en nuestra plataforma!</p>
  </main>
</template>

<script>
import Navbar from '@/components/general/Navbar.vue';

export default {
  components: {
    Navbar,
  }
}
</script>
