<template>
  <article class="py-3x px-base mx-auto max-w-screen-xl text-mmd" v-if="publisher">
    <div class="flex">
      <div :class="showMap ? 'w-2/3 pr-xl' : 'w-full'">

        <div class="xl:flex justify-between">
          <div class="max-w-2xl">
            <img :src="utils.validUrl(publisher.img) ? publisher.img : `${assets}/publishers/${utils.escHtml(publisher.img)}`" alt="logo" />
          </div>
          <a href="https://www.coretrustseal.org/" target="_blank" class="block mt-md xl:ml-md xl:mt-none" style="width:75px" v-if="ctsCertified">
            <img :src="`${assets}/CTS-logo.png`" alt="CoreTrustSeal Certified">
          </a>
        </div>

        <h1 class="text-2xl my-lg">
          {{ publisher.title }}
        </h1>

        <p class="whitespace-pre-line mb-lg max-w-6xl" v-html="utils.autolinkText(utils.escHtml(publisher.text))"></p>

        <p class="mb-sm">
          <b-link :href="utils.validUrl(publisher.url) ? publisher.url : '#'" target="_blank">
            <i class="fas fa-external-link-alt mr-sm"></i>
            {{ publisher.url }}
          </b-link>
        </p>

        <p>
          <b-link :to="utils.paramsToString('/search', { publisher: params.publisher })">
            <i class="fas fa-search mr-sm"></i>
            Show {{ result?.total?.value || 0 }} results in catalogue
          </b-link>
        </p>
      </div>

      <div class="w-1/3" v-if="showMap">
        <filter-mini-map
          title="Where"
          class="mb-lg"
        />
      </div>
    </div>

    <section class="block mt-xl">
      <result-info class="py-base pt-none" :hideFilters="true" />

      <div class="md:flex mt-sm items-center justify-between pt-none">
        <result-paginator />
        <result-sort-order class="mt-lg md:mt-none" />
      </div>

      <div class="mb-base mt-xl">
        <result-list />
      </div>

      <result-paginator class="pt-base" :scrollTop="true" />
    </section>
  </article>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { $computed, $ref } from 'vue/macros';
import { useRouter, useRoute, onBeforeRouteLeave } from 'vue-router';
import { generalModule, searchModule, resourceModule } from "@/store/modules";
import BLink from '@/component/Base/Link.vue';
import ResultList from '@/component/Result/List.vue';
import ResultInfo from '@/component/Result/Info.vue';
import ResultPaginator from '@/component/Result/Paginator.vue';
import ResultSortOrder from '@/component/Result/SortOrder.vue';
import FilterMiniMap from '@/component/Filter/MiniMap.vue';
import utils from '@/utils/utils';

const route = useRoute();
const router = useRouter();
const window = $computed(() => generalModule.getWindow);
const params = $computed(() => searchModule.getParams);
const result = $computed(() => searchModule.getResult);
const assets: string = $computed(() => generalModule.getAssetsDir);
const showMap: boolean = $computed(() => window.innerWidth > 1000);
const publishers = $computed(() => generalModule.getPublishers);
let publisher: any = $ref(null);

const ctsCertified: boolean = $computed(() => publisher ? resourceModule.getCtsCertified.includes(publisher.title) : false);

onMounted(() => {
  generalModule.callAfterLoadedServices(() => {
    const p = new URLSearchParams(location.search)
    publisher = generalModule.findPublisher(p.get('publisher') || '');

    if (!publisher) {
      router.replace('/404');
      return;
    }

    generalModule.setMeta({
      title: publisher.title,
      description: publisher.text,
    });

    searchModule.setSearch({ fromRoute: true });
  });
});

const unwatch = watch(route, () => {
  searchModule.setSearch({ fromRoute: true });
});

onBeforeRouteLeave(unwatch);
</script>
