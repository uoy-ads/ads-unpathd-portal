<template>
  <footer class="bg-darkGray-40 xl:px-base absolute bottom-0 w-full h-8x text-mmd">
    <div class="max-w-screen-xl h-full mx-auto px-base flex items-center">
      <img :src="`${ assets }/TaNC-AHRC-logo.png`" alt="eu flag" class="hidden md:block" style="max-width:300px;">
      <div class="text-white md:pl-base">
        <p class="inline sm:block mb-xs">
          Unpath’d Waters is funded by the <b-link href="https://www.ukri.org/councils/ahrc/" target="_blank" class="underline">Arts and Humanities Research Council</b-link> under the <b-link href="https://www.nationalcollection.org.uk/" target="_blank" class="underline">Towards
a National Collection</b-link> programme.
        </p>
        <p class="inline sm:block mb-xs">
          The Unpath’d Waters portal reuses e-infrastructure constructed within the EU-funded ARIADNE
and <b-link href="https://ariadne-infrastructure.eu/" target="_blank" class="underline">ARIADNEplus</b-link> project.
        </p>

        <b-link
          href="mailto:help@archaeologydataservice.ac.uk"
          class="hover:underline"
        >
          <i class="fas fa-envelope mr-xs"></i> Contact
        </b-link>

        <span class="pl-xs pr-sm">|</span>

        <b-link
          to="/guide"
          class="hover:underline"
        >
          <i class="fas fa-info-circle text-md mr-xs"></i> Unpath'd Waters portal guide
        </b-link>
      </div>
      <div id="footer-teleport-target"></div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { $computed } from 'vue/macros';
import { generalModule } from "@/store/modules";
import BLink from '@/component/Base/Link.vue';

const assets: string = $computed(() => generalModule.getAssetsDir);
</script>
