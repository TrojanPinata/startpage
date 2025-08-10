<script lang="ts">
	import '../app.css';
</script>

<div>
   <section class="font-space h-screen flex flex-col bg-neutral-900">
      <div class="h-16 flex-shrink-0"></div>
      <div class="flex-1 flex items-center justify-center px-16">
         <div class="w-full h-full">
            <img src="./assets/focus1.jpg" alt="flower focus" class="w-full h-full max-h-[75vh] object-cover rounded-3xl shadow-lg hidden xl:block" />
         </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 sm:h-56 qhd:h-64 max-h-[64vh] flex items-center justify-between px-16 text-neutral-100 bg-transparent rounded-b-3xl">
		   <div class="sm:text-2xl lg:text-3xl fhd:text-4xl qhd:text-5xl sm:pl-8 fhd:pl-32 qhd:pl-48 sm:pb-0 qhd:pb-12 sm:pt-6 qhd:pt-0 hidden xl:block">
            i have serious brain damage
         </div>
		   <div class="flex fhd:text-md qhd:text-2xl sm:pr-8 fhd:pr-48 sm:pt-8 qhd:pt-0 sm:pb-0 qhd:pb-10 sm:gap-16 qhd:gap-24">
            <ul class="flex flex-col text-center sm:gap-0 fhd:gap-1 qhd:gap-3">
               <a href="https://mail.google.com" class="hover:underline">gmail</a>
               <a href="https://ticktick.com" class="hover:underline">ticktick</a>
               <a href="https://anilist.co" class="hover:underline">anilist</a>
               <a href="https://www.youtube.com" class="hover:underline">youtube</a>
            </ul>
            <ul class="flex flex-col text-center sm:gap-0 fhd:gap-1 qhd:gap-3">
               <a href="https://github.com" class="hover:underline">github</a>
               <a href="https://www.printables.com" class="hover:underline">printables</a>
               <a href="https://pcpartpicker.com" class="hover:underline">pcpartpicker</a>
               <a href="https://yoku.bi/Section1/Part1/Lesson0.html" class="hover:underline">yokubi</a>
            </ul>
            <ul class="flex flex-col text-center sm:gap-0 fhd:gap-1 qhd:gap-3">
               <a href="https://192.168.1.189:8006" class="hover:underline">proxmox</a>
               <a href="https://192.168.1.218" class="hover:underline">truenas</a>
               <a href="https://192.168.1.222:9443" class="hover:underline">portainer</a>
               <a href="https://brianchill.us/" class="hover:underline">brianchill.us</a>
            </ul>
            <ul class="flex flex-col text-center sm:gap-0 fhd:gap-1 qhd:gap-3">
               <a href="https://www.ebay.com" class="hover:underline">ebay</a>
               <a href="https://www.amazon.com" class="hover:underline">amazon</a>
               <a href="https://www.adafruit.com" class="hover:underline">adafruit</a>
               <a href="https://www.digikey.com" class="hover:underline">digikey</a>
            </ul>
            <ul class="flex flex-col text-center sm:gap-0 fhd:gap-1 qhd:gap-3">
               <a href="https://jcw87.github.io/c2-sans-fight" class="hover:underline">sans</a>
               <a href="https://primatestore.com" class="hover:underline">primate store</a>
               <a href="https://splendid.land" class="hover:underline">splendid.land</a>
               <a href="https://insect.christmas" class="hover:underline">insect.christmas</a>
            </ul>
		   </div>
	   </div>
   </section>
</div>

<style lang="postcss">  
   @import "tailwindcss"; 

   @theme {  
      --font-space: "Space Grotesk Light";  
      --breakpoint-sm: 640px;
      --breakpoint-md: 1024px;
      --breakpoint-lg: 1280px;
      --breakpoint-fhd: 1800px;
      --breakpoint-qhd: 2400px;
   }

   :global(html) { 
      background-color: theme(--color-neutral-900); 
   }
</style>