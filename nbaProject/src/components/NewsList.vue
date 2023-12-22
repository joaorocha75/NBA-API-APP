<template>
    <div>
        <div v-for="team in teams" :key="team.id" class="team-card">
            <img :src="team.logo" alt="Team Logo" class="team-logo" />
            <p class="team-name">{{ team.name }}</p>
        </div>
        
        <h1>Latest News</h1>
        <div v-if="news.length > 0">
            <div class="news-list">
                <div class="news-item" v-for="item in news" :key="item.id">
                    <!-- Card Structure -->
                    <div class="news-card">
                        <div class="news-item-content">
                            <h3>{{ item.title }}</h3>
                            <p>Source: {{ displaySource(item.source) }}</p>
                            <a :href="item.url" target="_blank">Read More</a>
                        </div>
                    </div>
                    <!-- End Card Structure -->
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
import { useTeamsStore } from '@/stores/teams';

export default {
    name: 'NewsComponent',
    setup() {
        const newsStore = useNewsStore();
        const teamsStore = useTeamsStore();
        const news = ref([]);

        const fetchNews = async () => {
            await newsStore.fetchNews();
            news.value = newsStore.news;
        };

        const displaySource = (source) => {
            const sourceMappings = {
                'nba': 'NBA',
                'nba_canada': 'NBA Canada',
                'espn': 'ESPN',
                'bleacher_report': 'Bleacher Report',
                'yahoo': 'Yahoo',
                'slam': 'SLAM',
            };

            return sourceMappings[source] || source;
        };

        onMounted(() => {
            fetchNews();
        });

        return {
            news,
            fetchNews,
            displaySource,
            teams: teamsStore.teams,
        };
    },
};
</script>

<style scoped>
.news-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.news-item {
    width: 100%;
    max-width: 400px;
}

.news-item-content {
    padding: 16px;
}


h1 {
    margin-top: 10vh;
}

h3 {
    font-weight: 700;
}

.news-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.team-card {
    padding: 16px;
    margin: 16px;
    text-align: center;
    border-radius: 8px;
    display: inline-block;
}

.team-logo {
    max-width: 100px;
    max-height: 100px;
}

.team-name {
    margin-top: 8px;
    font-weight: bold;
}
</style>
