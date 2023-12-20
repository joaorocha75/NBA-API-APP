<template>
    <div>
        <br>
        <br>
        <h1>Latest News</h1>
        <div v-if="news.length > 0">
            <div class="news-list">
                <div class="news-item" v-for="item in news" :key="item.id">
                    <div class="news-item-content">
                        <hr>
                        <h3>{{ item.title }}</h3>
                        <a :href="item.url" target="_blank">{{ item.url }}</a>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <p>No news available.</p>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useNewsStore } from '@/stores/news';

export default {
    name: 'NewsComponent',
    setup() {
        const newsStore = useNewsStore();
        const news = ref([]);

        const fetchNews = async () => {
            await newsStore.fetchNews();
            news.value = newsStore.news;
        };

        const fetchNewsByTeam = async (teamName) => {
            await newsStore.fetchNewsByTeam(teamName);
            news.value = newsStore.news;
        };

        onMounted(() => {
            fetchNews();
        });

        return {
            news,
            fetchNews,
            fetchNewsByTeam,
        };
    },
};
</script>

<style scoped>
/* Your component styles go here */
</style>
